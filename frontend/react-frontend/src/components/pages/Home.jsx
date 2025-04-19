import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center min-h-[80vh] bg-gradient-to-br from-green-50 to-green-100 px-6 py-16">
        <div className="flex-1 md:pr-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6 font-serif">
            Smart Crop Recommendation System
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Get personalized crop suggestions based on your soil conditions and climate factors
          </p>
          <Link 
            to="/predict" 
            className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-300 transform hover:-translate-y-1"
          >
            Try Predictor Now
          </Link>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <img 
            src="/images/farmer.jpg" 
            alt="Happy farmer" 
            className="rounded-lg shadow-xl max-w-full h-auto"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
            }}
          />
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12 font-serif">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4 text-green-600">🧪</div>
              <h3 className="text-xl font-semibold mb-3 text-green-800">Input Soil Parameters</h3>
              <p className="text-gray-700">
                Enter your soil's nitrogen, phosphorus, potassium levels and other environmental factors.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4 text-green-600">🔍</div>
              <h3 className="text-xl font-semibold mb-3 text-green-800">AI Analysis</h3>
              <p className="text-gray-700">
                Our machine learning model analyzes your inputs against thousands of data points.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4 text-green-600">🌾</div>
              <h3 className="text-xl font-semibold mb-3 text-green-800">Get Recommendations</h3>
              <p className="text-gray-700">
                Receive personalized crop suggestions with detailed growing instructions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-green-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12 font-serif">
            Featured Crops
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Rice', 'Wheat', 'Maize', 'Cotton', 'Sugarcane', 'Apple'].map((crop, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1">
                <div className="h-32 bg-green-200 flex items-center justify-center">
                  <span className="text-4xl">{crop === 'Rice' ? '🌾' : crop === 'Wheat' ? '🌿' : crop === 'Maize' ? '🌽' : crop === 'Cotton' ? '💮' : crop === 'Sugarcane' ? '🎋' : '🍎'}</span>
                </div>
                <div className="p-3 text-center font-medium text-green-800">
                  {crop}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
