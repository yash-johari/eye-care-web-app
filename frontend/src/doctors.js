import axios from "axios";
const cors = require('cors');
app.use(cors());

export const fetchDoctors = async () => {
    try {
      const response = await axios.get('https://eyecareapp-backend.onrender.com//doctors');
      return response.data;
    } catch (error) {
      console.error("Error fetching doctors data: ", error);
      throw error;
    }
  };
