import React, { useState } from 'react';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('guides');
  
  const resources = {
    guides: [
      {
        title: "Beginner's Guide to Soil Testing",
        description: "Learn how to test your soil's composition at home with simple tools.",
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        link: "#"
      },
      {
        title: "Understanding NPK Values",
        description: "A comprehensive guide to nitrogen, phosphorus, and potassium in soil.",
        image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        link: "#"
      },
      {
        title: "Seasonal Planting Calendar",
        description: "Month-by-month guide for planting different crops in various regions.",
        image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        link: "#"
      },
      {
        title: "Water Conservation Techniques",
        description: "Effective methods to reduce water usage while maintaining crop health.",
        image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        link: "#"
      }
    ],
    tools: [
      {
        title: "Soil pH Meter",
        description: "Digital tool for accurate soil pH measurement.",
        image: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        link: "#"
      },
      {
        title: "NPK Test Kit",
        description: "Complete kit for testing nitrogen, phosphorus, and potassium levels.",
        image: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        link: "#"
      },
      {
        title: "Weather Station",
        description: "Monitor local climate conditions for optimal farming decisions.",
        image: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        link: "#"
      }
    ],
    videos: [
      {
        title: "Soil Preparation Techniques",
        description: "Expert demonstration of proper soil preparation for various crops.",
        image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        link: "#"
      },
      {
        title: "Organic Pest Control",
        description: "Natural methods to control pests without harmful chemicals.",
        image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        link: "#"
      }
    ],
    research: [
      {
        title: "Climate Change Impact on Agriculture",
        description: "Research paper on adapting farming practices to climate change.",
        image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        link: "#"
      },
      {
        title: "Soil Health and Crop Yield Correlation",
        description: "Study on the relationship between soil nutrients and crop productivity.",
        image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        link: "#"
      },
      {
        title: "Water Conservation in Agriculture",
        description: "Research on efficient irrigation techniques for sustainable farming.",
        image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        link: "#"
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4 font-serif">Farming Resources</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our collection of guides, tools, videos, and research papers to enhance your farming knowledge and practices.
        </p>
      </div>
      
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8 overflow-x-auto pb-2">
        <button 
          className={`px-5 py-2 rounded-full font-medium transition-colors ${activeTab === 'guides' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          onClick={() => setActiveTab('guides')}
        >
          Guides & Tutorials
        </button>
        <button 
          className={`px-5 py-2 rounded-full font-medium transition-colors ${activeTab === 'tools' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          onClick={() => setActiveTab('tools')}
        >
          Recommended Tools
        </button>
        <button 
          className={`px-5 py-2 rounded-full font-medium transition-colors ${activeTab === 'videos' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          onClick={() => setActiveTab('videos')}
        >
          Video Resources
        </button>
        <button 
          className={`px-5 py-2 rounded-full font-medium transition-colors ${activeTab === 'research' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          onClick={() => setActiveTab('research')}
        >
          Research Papers
        </button>
      </div>
      
      {/* Resource Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources[activeTab].map((resource, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src={resource.image} 
                alt={resource.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <a 
                href={resource.link} 
                className="inline-flex items-center text-green-600 hover:text-green-800"
              >
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
