import axios from 'axios';

const API_URL = 'http://localhost:3001/api/eleves';

export const getEleves = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la récupération des élèves !', error);
    throw error;
  }
};
