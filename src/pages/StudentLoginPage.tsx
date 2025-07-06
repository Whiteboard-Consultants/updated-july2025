import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Lock, Eye, EyeOff, BookOpen, ArrowRight, AlertCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const StudentLoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(formData.email, formData.password);
      if (success) {
        navigate('/lms/dashboard');
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const demoAccounts = [
    {
      role: 'Admin',
      email: 'admin@whiteboardconsultant.com',
      password: 'demo123',
      description: 'Full system access, user management, analytics'
    },
    {
      role: 'Instructor',
      email: 'instructor@whiteboardconsultant.com',
      password: 'demo123',
      description: 'Course management, student tracking, grading'
    },
    {
      role: 'Student',
      email: 'student@whiteboardconsultant.com',
      password: 'demo123',
      description: 'Course access, progress tracking, assignments'
    }
  ];

  const modules = [
    "TOEFL Preparation",
    "IELTS Preparation", 
    "GMAT Preparation",
    "GRE Preparation",
    "Public Speaking",
    "Spoken English",
    "Employability Skills"
  ];

  const fillDemoCredentials = (email: string, password: string) => {
    setFormData(prev => ({
      ...prev,
      email,
      password
    }));
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="flex min-h-screen">
        {/* Left Side - Login Form */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <img
                src="/Whitedge App Logo.png"
                alt="Whitedge App Logo"
                className="mx-auto h-20 w-auto mb-6"
              />
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Student Portal Login
              </h2>
              <p className="text-gray-600">
                Access your courses and track your progress
              </p>
            </div>

            {/* Demo Accounts */}
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Demo Accounts</h3>
              <div className="space-y-2">
                {demoAccounts.map((account, index) => (
                  <button
                    key={index}
                    onClick={() => fillDemoCredentials(account.email, account.password)}
                    className="w-full text-left p-2 rounded border border-gray-200 hover:bg-blue-50 transition-colors duration-200"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm text-gray-900">{account.role}</span>
                      <span className="text-xs text-blue-600">Click to fill</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{account.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
                <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                <span className="text-red-700 text-sm">{error}</span>
              </div>
            )}

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
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
                      placeholder="Enter your password"
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
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Signing In...' : 'Sign In to LMS'}
                {!isLoading && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />}
              </button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <Link
                    to="/student-register"
                    className="text-blue-600 hover:text-blue-500 font-medium"
                  >
                    Register here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side - Course Modules */}
        <div className="hidden lg:flex flex-1 bg-blue-600 items-center justify-center p-12">
          <div className="max-w-md text-white">
            <h3 className="text-3xl font-bold mb-6">
              Access Your Learning Modules
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Once logged in, you'll have access to all your enrolled courses and can track your progress.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold mb-4">Available Modules:</h4>
              {modules.map((module, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-blue-200" />
                  <span className="text-blue-100">{module}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-700 rounded-lg">
              <h5 className="font-semibold mb-2">Need Help?</h5>
              <p className="text-blue-100 text-sm">
                Contact our support team at{' '}
                <a href="mailto:support@whiteboardconsultant.com" className="text-white underline">
                  support@whiteboardconsultant.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLoginPage;