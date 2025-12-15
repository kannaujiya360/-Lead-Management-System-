import axios from "axios";

const BASE_URL = "https://lead-management-system-gya5.onrender.com";

// Fetch a new dummy Meta lead
export const fetchMetaLead = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/fetch`);
    return res.data;
  } catch (err) {
    console.error("Error fetching Meta lead:", err);
  }
};
