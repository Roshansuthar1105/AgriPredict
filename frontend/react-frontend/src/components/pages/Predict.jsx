import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Predict = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nitrogen: 50,
    phosphorus: 50,
    potassium: 50,
    temperature: 25,
    humidity: 50,
    ph: 6.5,
    rainfall: 100,
    water_level: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Call the API endpoint
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      
      // Navigate to results page with the prediction data
      navigate('/results', { state: { prediction: data } });
    } catch (error) {
      console.error('Error during prediction:', error);
      alert('There was an error making the prediction. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-green-600 text-white p-6">
          <h1 className="text-3xl font-bold">Crop Prediction</h1>
          <p className="mt-2">Enter your soil and climate parameters to get crop recommendations</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Soil Parameters Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-green-800 mb-4">
                <span className="mr-2">🧪</span> Soil Parameters
              </h2>
              
              <div className="space-y-2">
                <label htmlFor="nitrogen" className="block text-gray-700 font-medium">
                  Nitrogen (mg/kg)
                </label>
                <input
                  type="range"
                  id="nitrogen"
                  name="nitrogen"
                  min="0"
                  max="140"
                  value={formData.nitrogen}
                  onChange={handleChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0</span>
                  <span>70</span>
                  <span>140</span>
                </div>
                <input
                  type="number"
                  name="nitrogen"
                  value={formData.nitrogen}
                  onChange={handleChange}
                  min="0"
                  max="140"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phosphorus" className="block text-gray-700 font-medium">
                  Phosphorus (mg/kg)
                </label>
                <input
                  type="range"
                  id="phosphorus"
                  name="phosphorus"
                  min="5"
                  max="145"
                  value={formData.phosphorus}
                  onChange={handleChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>5</span>
                  <span>75</span>
                  <span>145</span>
                </div>
                <input
                  type="number"
                  name="phosphorus"
                  value={formData.phosphorus}
                  onChange={handleChange}
                  min="5"
                  max="145"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="potassium" className="block text-gray-700 font-medium">
                  Potassium (mg/kg)
                </label>
                <input
                  type="range"
                  id="potassium"
                  name="potassium"
                  min="5"
                  max="205"
                  value={formData.potassium}
                  onChange={handleChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>5</span>
                  <span>100</span>
                  <span>205</span>
                </div>
                <input
                  type="number"
                  name="potassium"
                  value={formData.potassium}
                  onChange={handleChange}
                  min="5"
                  max="205"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="ph" className="block text-gray-700 font-medium">
                  pH Value
                </label>
                <input
                  type="range"
                  id="ph"
                  name="ph"
                  min="0"
                  max="14"
                  step="0.1"
                  value={formData.ph}
                  onChange={handleChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0</span>
                  <span>7</span>
                  <span>14</span>
                </div>
                <input
                  type="number"
                  name="ph"
                  value={formData.ph}
                  onChange={handleChange}
                  min="0"
                  max="14"
                  step="0.1"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
            
            {/* Climate Parameters Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-green-800 mb-4">
                <span className="mr-2">🌦️</span> Climate Parameters
              </h2>
              
              <div className="space-y-2">
                <label htmlFor="temperature" className="block text-gray-700 font-medium">
                  Temperature (°C)
                </label>
                <input
                  type="range"
                  id="temperature"
                  name="temperature"
                  min="0"
                  max="50"
                  value={formData.temperature}
                  onChange={handleChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0°C</span>
                  <span>25°C</span>
                  <span>50°C</span>
                </div>
                <input
                  type="number"
                  name="temperature"
                  value={formData.temperature}
                  onChange={handleChange}
                  min="0"
                  max="50"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="humidity" className="block text-gray-700 font-medium">
                  Humidity (%)
                </label>
                <input
                  type="range"
                  id="humidity"
                  name="humidity"
                  min="0"
                  max="100"
                  value={formData.humidity}
                  onChange={handleChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
                <input
                  type="number"
                  name="humidity"
                  value={formData.humidity}
                  onChange={handleChange}
                  min="0"
                  max="100"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="rainfall" className="block text-gray-700 font-medium">
                  Rainfall (mm)
                </label>
                <input
                  type="range"
                  id="rainfall"
                  name="rainfall"
                  min="0"
                  max="300"
                  value={formData.rainfall}
                  onChange={handleChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>0mm</span>
                  <span>150mm</span>
                  <span>300mm</span>
                </div>
                <input
                  type="number"
                  name="rainfall"
                  value={formData.rainfall}
                  onChange={handleChange}
                  min="0"
                  max="300"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="water_level" className="block text-gray-700 font-medium">
                  Water Level
                </label>
                <select
                  id="water_level"
                  name="water_level"
                  value={formData.water_level}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                >
                  <option value="0">Low</option>
                  <option value="1">Medium</option>
                  <option value="2">High</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
            >
              Get Crop Recommendation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Predict;
