import axios from "axios";

const BASE_URL = "http://localhost:5001/api/google";

// Fetch a new dummy Google lead
export const fetchGoogleLead = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/fetch`);
    return res.data;
  } catch (err) {
    console.error("Error fetching Google lead:", err);
  }
};
