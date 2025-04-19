/**
 * API service for communicating with the Flask backend
 */

// Base URL for API calls
const API_BASE_URL = '/api';

/**
 * Send a prediction request to the backend
 * @param {Object} formData - The form data containing soil and climate parameters
 * @returns {Promise} - Promise that resolves to the prediction result
 */
export const getPrediction = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error making prediction:', error);
    throw error;
  }
};

/**
 * Get all crop data from the backend
 * @returns {Promise} - Promise that resolves to the crop data
 */
export const getCrops = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/crops`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching crops:', error);
    throw error;
  }
};

/**
 * Utility function for any future GET requests
 * @param {string} endpoint - API endpoint to call
 * @returns {Promise} - Promise that resolves to the response data
 */
export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error);
    throw error;
  }
};

export default {
  getPrediction,
  getCrops,
  fetchData
};
