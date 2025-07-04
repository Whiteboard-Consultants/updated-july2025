import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff, Phone, ArrowRight, CheckCircle } from 'lucide-react';

const StudentRegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    interestedCourses: [],
    agreeToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCourseSelection = (course: string) => {
    setFormData(prev => ({
      ...prev,
      interestedCourses: prev.interestedCourses.includes(course)
        ? prev.interestedCourses.filter(c => c !== course)
        : [...prev.interestedCourses, course]
    }));
  };

  const courses = [
    "TOEFL Preparation",
    "IELTS Preparation", 
    "GMAT Preparation",
    "GRE Preparation",
    "Public Speaking",
    "Spoken English",
    "Employability Skills"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Registration Form */}
            <div className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <img
                  src="/Version 4 Rectangle white.webp"
                  alt="Whiteboard Consultant Logo"
                  className="mx-auto h-12 w-auto mb-4"
                />
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Create Student Account
                </h2>
                <p className="text-gray-600">
                  Join our learning community and start your journey
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="First name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Create password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="block w-full pl-3 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Confirm password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Interested Courses (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {courses.map((course) => (
                      <label key={course} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.interestedCourses.includes(course)}
                          onChange={() => handleCourseSelection(course)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">{course}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    required
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-700">
                    I agree to the{' '}
                    <Link to="/terms" className="text-blue-600 hover:text-blue-500">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-blue-600 hover:text-blue-500">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group font-semibold"
                >
                  Create Account
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <Link
                      to="/student-login"
                      className="text-blue-600 hover:text-blue-500 font-medium"
                    >
                      Sign in here
                    </Link>
                  </p>
                </div>
              </form>
            </div>

            {/* Right Side - Benefits */}
            <div className="bg-blue-600 p-8 lg:p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">
                Join Our Learning Community
              </h3>
              <p className="text-blue-100 mb-8 text-lg">
                Get access to expert-led courses and achieve your academic and professional goals.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-200 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Expert Instructors</h4>
                    <p className="text-blue-100 text-sm">Learn from certified professionals with years of experience</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-200 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Flexible Learning</h4>
                    <p className="text-blue-100 text-sm">Study at your own pace with 24/7 access to course materials</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-200 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Proven Results</h4>
                    <p className="text-blue-100 text-sm">Join thousands of successful students who achieved their goals</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-200 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Comprehensive Support</h4>
                    <p className="text-blue-100 text-sm">Get help when you need it with our dedicated support team</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-700 rounded-lg">
                <h5 className="font-semibold mb-2">Questions?</h5>
                <p className="text-blue-100 text-sm">
                  Contact us at{' '}
                  <a href="mailto:info@whiteboardconsultant.com" className="text-white underline">
                    info@whiteboardconsultant.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentRegisterPage;