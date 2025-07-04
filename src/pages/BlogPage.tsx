import React from 'react';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Strategic Facilitation in Remote Work Environments",
      excerpt: "Explore how digital transformation is reshaping the way we conduct strategic planning sessions and collaborative workshops in distributed teams.",
      author: "Sarah Mitchell",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "Strategy",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      featured: true
    },
    {
      id: 2,
      title: "Building High-Performance Teams Through Collaborative Problem Solving",
      excerpt: "Discover proven methodologies for fostering collaboration and driving innovation within your organization through structured problem-solving approaches.",
      author: "David Chen",
      date: "2025-01-12",
      readTime: "6 min read",
      category: "Team Building",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
    },
    {
      id: 3,
      title: "Design Thinking: A Catalyst for Business Innovation",
      excerpt: "Learn how design thinking principles can transform your organization's approach to innovation and customer-centric solution development.",
      author: "Maria Rodriguez",
      date: "2025-01-10",
      readTime: "7 min read",
      category: "Innovation",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
    },
    {
      id: 4,
      title: "Leading Organizational Change: Lessons from Successful Transformations",
      excerpt: "Insights from real-world transformation projects and the key factors that determine success in organizational change initiatives.",
      author: "Sarah Mitchell",
      date: "2025-01-08",
      readTime: "10 min read",
      category: "Change Management",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
    },
    {
      id: 5,
      title: "Effective Workshop Design: From Planning to Execution",
      excerpt: "A comprehensive guide to designing and facilitating workshops that deliver measurable outcomes and engage participants effectively.",
      author: "David Chen",
      date: "2025-01-05",
      readTime: "9 min read",
      category: "Facilitation",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
    },
    {
      id: 6,
      title: "The Psychology of Decision Making in Business Settings",
      excerpt: "Understanding cognitive biases and group dynamics that influence business decisions and how to leverage them for better outcomes.",
      author: "Maria Rodriguez",
      date: "2025-01-03",
      readTime: "5 min read",
      category: "Psychology",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    }
  ];

  const categories = [
    "All Posts",
    "Strategy",
    "Team Building", 
    "Innovation",
    "Change Management",
    "Facilitation",
    "Psychology"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All Posts");

  const filteredPosts = selectedCategory === "All Posts" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Insights & Expertise
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead with the latest strategies, methodologies, and insights in business facilitation, strategic planning, and organizational development.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block w-fit">
                    Featured Article
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-blue-200 mb-6 space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center group w-fit font-semibold">
                    Read Full Article
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
                <div className="h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Tag className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-blue-600 text-sm font-medium">{post.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center group">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter and receive the latest articles, strategies, and industry insights directly in your inbox.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;