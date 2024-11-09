import axios from 'axios';

const API_URL = 'http://localhost:5000/api/people'; // Backend URL

// Add token to headers for authenticated requests
const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
};

export const getPeopleData = async () => {
  try {
    const response = await axios.get(API_URL, config);
    return response.data;
  } catch (error) {
    console.error('Error fetching people data:', error);
    throw error;
  }
};

export const updatePeopleData = async (data) => {
  try {
    const response = await axios.post(API_URL, data, config);
    return response.data;
  } catch (error) {
    console.error('Error updating people data:', error);
    throw error;
  }
};
