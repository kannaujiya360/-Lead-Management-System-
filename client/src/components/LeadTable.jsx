import React from "react";

const LeadTable = ({ leads }) => {
  return (
    <div className="bg-white shadow rounded-lg">

      
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Phone</th>
              <th className="p-3 border">Source</th>
              <th className="p-3 border">Campaign</th>
              <th className="p-3 border">Service</th>
              <th className="p-3 border">Created</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr
                key={lead._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-3">{lead.name}</td>
                <td className="p-3">{lead.email}</td>
                <td className="p-3">{lead.phone}</td>
                <td className="p-3">{lead.source}</td>
                <td className="p-3">{lead.campaign || "-"}</td>
                <td className="p-3">{lead.service || "-"}</td>
                <td className="p-3">
                  {new Date(lead.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    
      <div className="md:hidden space-y-4 p-4">
        {leads.map((lead) => (
          <div
            key={lead._id}
            className="border rounded-lg p-4 shadow-sm bg-gray-50"
          >
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold text-lg">{lead.name}</h3>
              <span className="text-xs text-gray-500">
                {new Date(lead.createdAt).toLocaleDateString()}
              </span>
            </div>

            <div className="text-sm space-y-1">
              <p><span className="font-medium">Email:</span> {lead.email}</p>
              <p><span className="font-medium">Phone:</span> {lead.phone}</p>
              <p><span className="font-medium">Source:</span> {lead.source}</p>
              <p><span className="font-medium">Campaign:</span> {lead.campaign || "-"}</p>
              <p><span className="font-medium">Service:</span> {lead.service || "-"}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default LeadTable;
