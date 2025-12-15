import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Fetch a new dummy Google lead
export const fetchGoogleLead = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/google/fetch`);
    return res.data;
  } catch (err) {
    console.error("Error fetching Google lead:", err);
    return null;
  }
};
