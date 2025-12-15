import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;


export const fetchMetaLead = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/api/meta/fetch`);
    return res.data;
  } catch (err) {
    console.error("Error fetching Meta lead:", err);
    return null;
  }
};
