import axios from "axios";

const BASE_URL = "http://localhost:5001/api/leads";

// Get all leads
export const getLeads = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (err) {
    console.error("Error fetching leads:", err);
    return [];
  }
};

// Add new lead
export const addLead = async (lead) => {
  try {
    const res = await axios.post(BASE_URL, lead);
    return res.data;
  } catch (err) {
    console.error("Error adding lead:", err);
  }
};
