import React from 'react';

const TestTailwind = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-500 mb-4">Testing Tailwind CSS</h1>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-red-500 p-4 text-white rounded-lg shadow-lg">Red Box</div>
        <div className="bg-green-500 p-4 text-white rounded-lg shadow-lg">Green Box</div>
        <div className="bg-blue-500 p-4 text-white rounded-lg shadow-lg">Blue Box</div>
      </div>
      
      <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        Tailwind Button
      </button>
      
      <div className="mt-6 p-4 border border-gray-200 rounded-lg">
        <p className="text-gray-700">This is a paragraph with <span className="font-bold text-green-600">styled text</span> using Tailwind CSS.</p>
      </div>
    </div>
  );
};

export default TestTailwind;
