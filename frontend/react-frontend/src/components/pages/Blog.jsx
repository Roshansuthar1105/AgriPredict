import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Maximizing Crop Yield with Proper Soil Management",
      excerpt: "Learn how to improve your soil quality to increase crop productivity and sustainability.",
      date: "April 15, 2025",
      author: "Dr. Rajesh Kumar",
      category: "Soil Management",
      image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 2,
      title: "Climate-Adaptive Farming Techniques for 2025",
      excerpt: "Discover innovative methods to adapt your farming practices to changing climate conditions.",
      date: "April 10, 2025",
      author: "Priya Sharma",
      category: "Climate Change",
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      title: "Organic Pest Control: Protecting Your Crops Naturally",
      excerpt: "Effective strategies to manage pests without relying on harmful chemical pesticides.",
      date: "April 5, 2025",
      author: "Amit Patel",
      category: "Organic Farming",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 4,
      title: "Water Conservation Techniques for Sustainable Agriculture",
      excerpt: "Practical methods to reduce water usage while maintaining optimal crop growth.",
      date: "March 28, 2025",
      author: "Dr. Sunita Reddy",
      category: "Water Management",
      image: "https://images.unsplash.com/photo-1589928558003-9d3a9dcde173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 5,
      title: "The Future of Farming: AI and Machine Learning in Agriculture",
      excerpt: "How artificial intelligence is revolutionizing farming practices and increasing efficiency.",
      date: "March 20, 2025",
      author: "Vikram Singh",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4 font-serif">AgriPredict Blog</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest farming techniques, research, and agricultural insights.
        </p>
      </div>
      
      {/* Featured Post */}
      <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-12 grid grid-cols-1 md:grid-cols-2">
        <div className="md:order-2">
          <img 
            src={blogPosts[0].image} 
            alt={blogPosts[0].title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <span className="text-sm text-green-600 font-medium mb-2">{blogPosts[0].category}</span>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{blogPosts[0].title}</h2>
          <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold mr-3">
              {blogPosts[0].author.split(' ').map(name => name[0]).join('')}
            </div>
            <div>
              <p className="text-gray-800 font-medium">{blogPosts[0].author}</p>
              <p className="text-gray-500 text-sm">{blogPosts[0].date}</p>
            </div>
          </div>
          <a 
            href={`/blog/${blogPosts[0].id}`} 
            className="inline-flex items-center text-green-600 font-medium hover:text-green-800"
          >
            Read Full Article
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Recent Posts Grid */}
      <h2 className="text-2xl font-bold text-green-800 mb-6">Recent Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(1).map(post => (
          <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="p-6">
              <span className="text-xs text-green-600 font-medium">{post.category}</span>
              <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-3">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold text-xs mr-2">
                    {post.author.split(' ').map(name => name[0]).join('')}
                  </div>
                  <span className="text-gray-700 text-sm">{post.author}</span>
                </div>
                <span className="text-gray-500 text-sm">{post.date}</span>
              </div>
              <a 
                href={`/blog/${post.id}`} 
                className="inline-flex items-center text-green-600 mt-4 hover:text-green-800 text-sm font-medium"
              >
                Read More
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

export default Blog;
