import axios from "axios";

<<<<<<< HEAD
const BASE_URL = import.meta.env.VITE_BASE_URL;
=======
const BASE_URL = "https://lead-management-system-gya5.onrender.com";
>>>>>>> 0f2eb9a7752a19fb1446fe1867e5c8e291222e9c

// Get all leads
export const getLeads = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/leads`);
    return res.data;
  } catch (err) {
    console.error("Error fetching leads:", err);
    return [];
  }
};

// Add new lead
export const addLead = async (lead) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/leads`, lead);
    return res.data;
  } catch (err) {
    console.error("Error adding lead:", err);
    return null;
  }
};
