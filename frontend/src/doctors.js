import axios from "axios";

export const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:5000/doctors');
      return response.data;
    } catch (error) {
      console.error("Error fetching doctors data: ", error);
      throw error;
    }
  };
