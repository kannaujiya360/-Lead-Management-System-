import axios from "axios";

const BASE_URL = "http://localhost:5001/api/meta";

// Fetch a new dummy Meta lead
export const fetchMetaLead = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/fetch`);
    return res.data;
  } catch (err) {
    console.error("Error fetching Meta lead:", err);
  }
};
