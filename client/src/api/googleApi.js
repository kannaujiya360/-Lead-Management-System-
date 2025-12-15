import axios from "axios";

<<<<<<< HEAD
const BASE_URL = import.meta.env.VITE_BASE_URL;
=======
const BASE_URL = "https://lead-management-system-gya5.onrender.com";
>>>>>>> 0f2eb9a7752a19fb1446fe1867e5c8e291222e9c

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
