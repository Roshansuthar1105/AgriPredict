import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center font-serif">About AgriPredict</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            AgriPredict aims to revolutionize farming practices by leveraging artificial intelligence 
            to provide data-driven crop recommendations. We believe that by combining traditional 
            agricultural knowledge with modern technology, we can help farmers increase yields, 
            reduce resource wastage, and adapt to changing climate conditions.
          </p>
          
          <h2 className="text-2xl font-semibold text-green-700 mb-4">The Problem We're Solving</h2>
          <p className="text-gray-700 mb-6">
            Indian agriculture faces critical challenges:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>70% of farmers rely on traditional knowledge for crop selection</li>
            <li>Climate change causing unpredictable yields</li>
            <li>Soil degradation due to improper crop rotation</li>
            <li>Limited access to agricultural expertise in rural areas</li>
          </ul>
          <p className="text-gray-700 mb-6">
            AgriPredict solves these problems using machine learning to recommend crops with the highest 
            yield probability based on soil composition, climate conditions, and other environmental factors.
          </p>
          
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Technology</h2>
          <p className="text-gray-700 mb-6">
            Our recommendation system is powered by a sophisticated machine learning model trained on 
            thousands of agricultural data points. The model analyzes:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>Soil composition (N, P, K values, pH)</li>
            <li>Climate conditions (temperature, humidity, rainfall)</li>
            <li>Water availability</li>
            <li>Historical crop performance</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-green-700 mb-4">The Team</h2>
          <p className="text-gray-700 mb-6">
            AgriPredict was founded by a team of agricultural scientists, data engineers, and 
            software developers passionate about sustainable farming. Our diverse expertise allows 
            us to approach agricultural challenges from multiple perspectives, resulting in a 
            holistic solution that addresses real-world farming needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
