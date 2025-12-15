import React, { useEffect, useState } from "react";
import { getLeads, addLead } from "../api/leadApi";
import { fetchMetaLead } from "../api/metaApi";
import { fetchGoogleLead } from "../api/googleApi";
import LeadTable from "../components/LeadTable";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiTarget,
  FiBriefcase,
  FiUsers
} from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";

const Leads = ({ onLeadsUpdate }) => {
  const [leads, setLeads] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "Website",
    campaign: "",
    service: ""
  });
  const leadsPerPage = 5;

  const fetchAllLeads = async () => {
    const data = await getLeads();
    setLeads(data);
    onLeadsUpdate && onLeadsUpdate();
  };

  useEffect(() => {
    fetchAllLeads();
  }, []);

  const resetForm = () =>
    setFormData({
      name: "",
      email: "",
      phone: "",
      source: "Website",
      campaign: "",
      service: ""
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addLead(formData);
    toast.success(`🎉 New Website lead added: ${formData.name}`);
    resetForm();
    setCurrentPage(1);
    fetchAllLeads();
  };

  const handleGenerateMetaLead = async () => {
    await fetchMetaLead();
    toast.success("📣 New Meta Lead generated!");
    setCurrentPage(1);
    fetchAllLeads();
  };

  const handleGenerateGoogleLead = async () => {
    await fetchGoogleLead();
    toast.success(" New Google Lead generated!");
    setCurrentPage(1);
    fetchAllLeads();
  };

  
  const indexOfLastLead = currentPage * leadsPerPage;
  const indexOfFirstLead = indexOfLastLead - leadsPerPage;
  const currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead);
  const totalPages = Math.ceil(leads.length / leadsPerPage);

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen space-y-6">
      <Toaster position="top-right" reverseOrder={false} />

 
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-600 flex items-center gap-2 animate-fade-in">
          <FiUsers className="text-4xl text-purple-500" /> Leads Management
        </h1>
        <p className="text-gray-500 text-base sm:text-lg mt-1 sm:mt-0">
          Capture and manage leads from Website, Meta & Google Ads
        </p>
      </div>


      <div className="bg-gradient-to-r from-indigo-50 via-white to-purple-50 rounded-3xl shadow-2xl p-6 sm:p-8 border-l-8 border-indigo-500">
        <h2 className="text-xl sm:text-2xl font-bold mb-5 text-indigo-600 flex items-center gap-2">
           <FiUsers /> Add Website Lead
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {[
            { icon: <FiUser />, placeholder: "Full Name", key: "name", required: true },
            { icon: <FiMail />, placeholder: "Email Address", key: "email", required: true },
            { icon: <FiPhone />, placeholder: "Phone Number", key: "phone", required: true },
            { icon: <FiTarget />, placeholder: "Campaign Name", key: "campaign" },
            { icon: <FiBriefcase />, placeholder: "Service Interested", key: "service" }
          ].map((field, i) => (
            <div key={i} className="relative">
              <span className="absolute left-3 top-3 text-gray-400">{field.icon}</span>
              <input
                required={field.required}
                placeholder={field.placeholder}
                value={formData[field.key]}
                onChange={(e) =>
                  setFormData({ ...formData, [field.key]: e.target.value })
                }
                className="w-full pl-12 p-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-500 transition transform hover:scale-[1.01]"
              />
            </div>
          ))}

          <button
            type="submit"
            className="md:col-span-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-3 rounded-2xl font-bold hover:scale-[1.05] transition-all shadow-lg"
          >
            Save Website Lead
          </button>
        </form>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleGenerateMetaLead}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-2xl font-bold hover:scale-[1.05] transition shadow-xl"
        >
          <FiUsers /> Generate Meta Lead
        </button>
        <button
          onClick={handleGenerateGoogleLead}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-3 rounded-2xl font-bold hover:scale-[1.05] transition shadow-xl"
        >
          <FiUsers /> Generate Google Lead
        </button>
      </div>


      <div className="bg-white rounded-3xl shadow-2xl p-5 sm:p-6 border-l-8 border-indigo-500">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-indigo-600 flex items-center gap-2">
          📋 All Leads
        </h2>

        <LeadTable leads={currentLeads} />

       
        <div className="flex justify-between items-center mt-5">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => p - 1)}
            className={`px-4 py-2 rounded-xl font-semibold ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-indigo-500 text-white hover:bg-indigo-600"
            }`}
          >
            Previous
          </button>

          <span className="text-sm text-gray-600">
            Page {totalPages === 0 ? 0 : currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage(p => p + 1)}
            className={`px-4 py-2 rounded-xl font-semibold ${
              currentPage === totalPages || totalPages === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-indigo-500 text-white hover:bg-indigo-600"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leads;
