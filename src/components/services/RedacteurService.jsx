import axios from "axios";

const API_URL = 'http://localhost:3001/api/redacteurs';

export const getRedacteur = async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des redacteurs !', error);
      throw error;
    }
  };