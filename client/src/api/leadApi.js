import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;


export const getLeads = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/leads`);
    return res.data;
  } catch (err) {
    console.error("Error fetching leads:", err);
    return [];
  }
};


export const addLead = async (lead) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/leads`, lead);
    return res.data;
  } catch (err) {
    console.error("Error adding lead:", err);
    return null;
  }
};
