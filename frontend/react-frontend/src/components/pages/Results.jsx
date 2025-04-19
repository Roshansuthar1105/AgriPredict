import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Results = () => {
  const location = useLocation();
  const { prediction } = location.state || {};
  
  // If no prediction data is available, show a message
  if (!prediction) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">No Prediction Data</h1>
        <p className="text-lg mb-8">Please complete the prediction form to see results.</p>
        <Link 
          to="/predict" 
          className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition duration-300"
        >
          Go to Prediction Form
        </Link>
      </div>
    );
  }
  
  const { crop, details } = prediction;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 p-6 bg-white rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold text-green-800 font-serif">
          <span className="text-green-600">🌿</span> Recommended Crop: 
          <span className="text-green-700 ml-2">{crop}</span> 
        </h1>
        <Link 
          to="/predict" 
          className="mt-4 md:mt-0 inline-flex items-center text-green-600 hover:text-green-800"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Try Another Prediction
        </Link>
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Growing Info */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
            <span className="mr-2">🌱</span> Growing Information
          </h2>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-green-600 font-medium min-w-32">Best Grown In:</span>
              <span className="text-gray-700">{details.best_grown_in}</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-medium min-w-32">Growing Time:</span>
              <span className="text-gray-700">{details.growing_time}</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-medium min-w-32">Best Season:</span>
              <span className="text-gray-700">{details.best_season}</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-medium min-w-32">Ideal Temperature:</span>
              <span className="text-gray-700">{details.ideal_temperature}</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-medium min-w-32">Soil Type:</span>
              <span className="text-gray-700">{details.soil_type}</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-medium min-w-32">Expected Yield:</span>
              <span className="text-gray-700">{details.expected_yield}</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-medium min-w-32">Market Price:</span>
              <span className="text-gray-700">{details.market_price}</span>
            </li>
          </ul>
        </div>
        
        {/* Right Column - Growing Steps */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
            <span className="mr-2">📝</span> Growing Steps
          </h2>
          
          <ol className="space-y-2 list-decimal list-inside text-gray-700">
            {details.steps && details.steps.map((step, index) => (
              <li key={index} className="pl-2">{step}</li>
            ))}
          </ol>
          
          <h3 className="text-lg font-semibold text-green-800 mt-6 mb-3 flex items-center">
            <span className="mr-2">⚠️</span> Common Problems & Solutions
          </h3>
          
          <ul className="space-y-2 text-gray-700">
            {details.problems_and_solutions && Object.entries(details.problems_and_solutions).map(([problem, solution], index) => (
              <li key={index} className="mb-2">
                <span className="font-medium text-amber-700">{problem}:</span> {solution}
              </li>
            ))}
          </ul>
          
          <h3 className="text-lg font-semibold text-green-800 mt-6 mb-3 flex items-center">
            <span className="mr-2">🛠️</span> Tools Needed
          </h3>
          
          <div className="flex flex-wrap gap-2">
            {details.tools_needed && details.tools_needed.map((tool, index) => (
              <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
