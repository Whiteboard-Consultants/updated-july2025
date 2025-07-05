import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Play, Users, Clock, Award, Star, CheckCircle, ArrowRight, Globe, MessageCircle, Briefcase } from 'lucide-react';

const TestPrepPage = () => {
  const [activeTab, setActiveTab] = useState('courses');

  const courses = [
    {
      id: 1,
      title: "TOEFL Preparation Course",
      description: "Comprehensive TOEFL preparation covering all four sections: Reading, Listening, Speaking, and Writing with practice tests.",
      duration: "8 weeks",
      lessons: 32,
      students: 1250,
      rating: 4.9,
      price: "₹11950 (1-to-1)",
      level: "All Levels",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      topics: ["Reading comprehension", "Listening skills", "Speaking practice", "Writing techniques", "Practice tests"]
    },
    {
      id: 2,
      title: "IELTS Preparation Course",
      description: "Complete IELTS preparation for Academic and General Training modules with expert guidance and mock tests.",
      duration: "8 weeks",
      lessons: 30,
      students: 1450,
      rating: 4.8,
      price: "₹10950 (1-to-1)",
      level: "All Levels",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
      topics: ["Academic writing", "Speaking fluency", "Listening comprehension", "Reading strategies", "Band score improvement"]
    },
    {
      id: 3,
      title: "GMAT Preparation Course",
      description: "Intensive GMAT preparation focusing on Quantitative, Verbal, Analytical Writing, and Integrated Reasoning sections.",
      duration: "10 weeks",
      lessons: 40,
      students: 890,
      rating: 4.9,
      price: "₹29950",
      level: "Intermediate",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
      topics: ["Quantitative reasoning", "Verbal reasoning", "Analytical writing", "Data sufficiency", "Critical reasoning"]
    },
    {
      id: 4,
      title: "GRE Preparation Course",
      description: "Comprehensive GRE preparation covering Verbal Reasoning, Quantitative Reasoning, and Analytical Writing sections.",
      duration: "10 weeks",
      lessons: 38,
      students: 1100,
      rating: 4.8,
      price: "₹29950",
      level: "Intermediate",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      topics: ["Verbal reasoning", "Quantitative reasoning", "Analytical writing", "Vocabulary building", "Test strategies"]
    },
    {
      id: 5,
      title: "Public Speaking Mastery",
      description: "Build confidence and master the art of public speaking with practical exercises and professional techniques.",
      duration: "6 weeks",
      lessons: 24,
      students: 750,
      rating: 4.7,
      price: "₹12000",
      level: "Beginner",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      topics: ["Confidence building", "Speech structure", "Body language", "Audience engagement", "Presentation skills"]
    },
    {
      id: 6,
      title: "Spoken English Excellence",
      description: "Improve your spoken English fluency, pronunciation, and communication skills for professional and personal success.",
      duration: "8 weeks",
      lessons: 32,
      students: 1650,
      rating: 4.8,
      price: "₹2599",
      level: "Beginner",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      topics: ["Pronunciation improvement", "Grammar in conversation", "Vocabulary expansion", "Fluency development", "Accent training"]
    },
    {
      id: 7,
      title: "Employability Skills Development",
      description: "Essential skills for career success including interview preparation, resume writing, and professional communication.",
      duration: "6 weeks",
      lessons: 24,
      students: 980,
      rating: 4.9,
      price: "₹499",
      level: "Per Module",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      topics: ["Resume writing", "Interview skills", "Professional communication", "Networking", "Career planning"]
    }
  ];

  const certifications = [
    {
      title: "TOEFL/IELTS Certified Trainer",
      description: "Comprehensive certification for teaching TOEFL and IELTS preparation courses with advanced methodologies.",
      duration: "12 weeks",
      requirements: "Complete both TOEFL and IELTS courses + teaching practicum",
      badge: "Professional Certification",
      price: "$899"
    },
    {
      title: "Public Speaking Coach Certificate",
      description: "Specialized certification in coaching public speaking and presentation skills for professionals.",
      duration: "8 weeks",
      requirements: "Complete public speaking course + coaching portfolio",
      badge: "Specialist Certification",
      price: "$599"
    },
    {
      title: "Career Development Specialist",
      description: "Comprehensive program combining employability skills training with career counseling expertise.",
      duration: "10 weeks",
      requirements: "Complete employability track + career counseling assessment",
      badge: "Professional Certificate",
      price: "$699"
    }
  ];

  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Expert-Led Courses",
      description: "Learn from certified instructors with years of test preparation and training experience."
    },
    {
      icon: <Play className="h-8 w-8 text-green-600" />,
      title: "Interactive Learning",
      description: "Engaging video content, practice tests, and real-time feedback for optimal learning."
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Student Community",
      description: "Connect with fellow learners and get peer support in our exclusive student community."
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Certification & Results",
      description: "Achieve your target scores with our proven methodologies and get recognized certificates."
    }
  ];

  const moduleCategories = [
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: "Test Preparation",
      description: "TOEFL, IELTS, GMAT, GRE preparation courses",
      courses: ["TOEFL Preparation", "IELTS Preparation", "GMAT Preparation", "GRE Preparation"]
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-green-600" />,
      title: "Communication Skills",
      description: "Public speaking and spoken English courses",
      courses: ["Public Speaking Mastery", "Spoken English Excellence"]
    },
    {
      icon: <Briefcase className="h-6 w-6 text-orange-600" />,
      title: "Career Development",
      description: "Professional skills and employability training",
      courses: ["Employability Skills Development"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Master Test Preparation & Professional Skills
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Advance your career with our comprehensive Learning Management System featuring expert-led courses in TOEFL, IELTS, GMAT, GRE preparation, public speaking, and employability skills.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => setActiveTab('courses')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Browse Courses
                </button>
                <Link
                  to="/student-login"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 text-center"
                >
                  Student Login
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                alt="Online learning and test preparation"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Module Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Course Categories
            </h2>
            <p className="text-xl text-gray-600">
              Specialized modules designed for your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {moduleCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">{category.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.courses.map((course, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Learning Platform?
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive learning experience designed for test preparation success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveTab('courses')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                activeTab === 'courses'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-50'
              }`}
            >
              All Courses
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                activeTab === 'certifications'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-50'
              }`}
            >
              Certifications
            </button>
          </div>
        </div>
      </section>

      {/* Courses Tab */}
      {activeTab === 'courses' && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional Development Courses
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive courses designed by certified experts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                        course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        course.level === 'All Levels' ? 'bg-blue-100 text-blue-800' :
                        course.level === 'Per Module' ? 'bg-purple-100 text-purple-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {course.level}
                      </span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.topics.slice(0, 3).map((topic, index) => (
                        <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">
                          {topic}
                        </span>
                      ))}
                      {course.topics.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                          +{course.topics.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {course.lessons} lessons
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {course.students} students
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">{course.price}</span>
                      <Link
                        to="/student-login"
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center group"
                      >
                        Enroll Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Certifications Tab */}
      {activeTab === 'certifications' && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Professional Certifications
              </h2>
              <p className="text-xl text-gray-600">
                Advance your career with recognized professional credentials
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <Award className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {cert.badge}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{cert.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-center">{cert.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-gray-600">Duration: {cert.duration}</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                      <span className="text-gray-600">{cert.requirements}</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-4">{cert.price}</div>
                    <Link
                      to="/student-login"
                      className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 block text-center"
                    >
                      Start Certification
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Student Login CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Already a Student?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Access your courses, track your progress, and continue your learning journey through our student portal.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/student-login"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center justify-center group font-semibold"
            >
              Login to LMS Portal
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              to="/student-register"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 font-semibold"
            >
              Register for Courses
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Achieve Your Goals?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of students who have achieved their target scores and advanced their careers through our comprehensive test preparation and skill development programs.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center group font-semibold"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TestPrepPage;