import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import LMSLayout from '../components/LMSLayout';
import { 
  BookOpen, 
  Users, 
  Award, 
  TrendingUp, 
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Play,
  FileText,
  MessageSquare,
  BarChart3
} from 'lucide-react';

const LMSDashboard = () => {
  const { user } = useAuth();

  const getWelcomeMessage = () => {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
    return `${greeting}, ${user?.name}!`;
  };

  const renderAdminDashboard = () => (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">1,247</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <BookOpen className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Courses</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Award className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Certificates Issued</p>
              <p className="text-2xl font-bold text-gray-900">892</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Revenue</p>
              <p className="text-2xl font-bold text-gray-900">₹12.4L</p>
            </div>
          </div>
        </div>
      </div>

      {/* Users Management Section */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">User Management</h3>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Active</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="h-10 w-10 rounded-full" src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg" alt="" />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Sarah Mitchell</div>
                        <div className="text-sm text-gray-500">sarah@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Admin</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 hours ago</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="h-10 w-10 rounded-full" src="https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg" alt="" />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">David Chen</div>
                        <div className="text-sm text-gray-500">david@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">Instructor</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 day ago</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="h-10 w-10 rounded-full" src="https://images.pexels.com/photos/3777936/pexels-photo-3777936.jpeg" alt="" />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Priya Sharma</div>
                        <div className="text-sm text-gray-500">priya@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Student</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30 minutes ago</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-green-100 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 font-medium">New student enrolled in TOEFL Preparation</p>
                  <p className="text-xs text-gray-500 mt-1">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-100 rounded-full">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 font-medium">Assignment submitted for IELTS Course</p>
                  <p className="text-xs text-gray-500 mt-1">15 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-orange-100 rounded-full">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 font-medium">Course completion rate below 80%</p>
                  <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <button className="p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <p className="text-sm font-medium text-gray-900">Add User</p>
              </button>
              <button className="p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center">
                <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <p className="text-sm font-medium text-gray-900">Create Course</p>
              </button>
              <button className="p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center">
                <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <p className="text-sm font-medium text-gray-900">View Reports</p>
              </button>
              <button className="p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center">
                <MessageSquare className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                <p className="text-sm font-medium text-gray-900">Send Message</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderInstructorDashboard = () => (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">My Students</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <BookOpen className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">My Courses</p>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <FileText className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending Reviews</p>
              <p className="text-2xl font-bold text-gray-900">23</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg. Rating</p>
              <p className="text-2xl font-bold text-gray-900">4.8</p>
            </div>
          </div>
        </div>
      </div>

      {/* My Students Section */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">My Students</h3>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Activity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="h-10 w-10 rounded-full" src="https://images.pexels.com/photos/3777936/pexels-photo-3777936.jpeg" alt="" />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Priya Sharma</div>
                        <div className="text-sm text-gray-500">priya@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">TOEFL Preparation</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <span className="text-sm text-gray-900">75%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 hours ago</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">A</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="h-10 w-10 rounded-full" src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg" alt="" />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Rahul Kumar</div>
                        <div className="text-sm text-gray-500">rahul@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">IELTS Preparation</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                      <span className="text-sm text-gray-900">90%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 day ago</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">A+</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="h-10 w-10 rounded-full" src="https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg" alt="" />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">Arjun Patel</div>
                        <div className="text-sm text-gray-500">arjun@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Public Speaking</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-3">
                        <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <span className="text-sm text-gray-900">45%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3 hours ago</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">B</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* My Courses & Upcoming Classes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">My Courses</h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between p-6 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900 text-lg">TOEFL Preparation</h4>
                  <p className="text-sm text-gray-500 mt-1">45 students enrolled</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Active</span>
              </div>
              <div className="flex items-center justify-between p-6 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900 text-lg">IELTS Preparation</h4>
                  <p className="text-sm text-gray-500 mt-1">38 students enrolled</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Active</span>
              </div>
              <div className="flex items-center justify-between p-6 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900 text-lg">Public Speaking</h4>
                  <p className="text-sm text-gray-500 mt-1">22 students enrolled</p>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">Draft</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Upcoming Classes</h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">TOEFL Speaking Practice</p>
                  <p className="text-xs text-gray-500 mt-1">Today, 2:00 PM - 3:30 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">IELTS Writing Workshop</p>
                  <p className="text-xs text-gray-500 mt-1">Tomorrow, 10:00 AM - 11:30 AM</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Calendar className="h-6 w-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Public Speaking Session</p>
                  <p className="text-xs text-gray-500 mt-1">Friday, 4:00 PM - 5:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStudentDashboard = () => (
    <div className="space-y-8">
      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Enrolled Courses</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">1</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Study Hours</p>
              <p className="text-2xl font-bold text-gray-900">47</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Certificates</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
            </div>
          </div>
        </div>
      </div>

      {/* My Progress Section */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">My Progress</h3>
        </div>
        <div className="p-6">
          <div className="space-y-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-medium text-gray-900 text-lg">TOEFL Preparation</h4>
                  <p className="text-sm text-gray-500 mt-1">Instructor: David Chen</p>
                </div>
                <span className="text-lg font-semibold text-blue-600">75% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div className="bg-blue-600 h-3 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Lessons completed:</span> 12 of 16
                </div>
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  <Play className="h-4 w-4 mr-2" />
                  Continue Lesson 13
                </button>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-medium text-gray-900 text-lg">Public Speaking Mastery</h4>
                  <p className="text-sm text-gray-500 mt-1">Instructor: Sarah Mitchell</p>
                </div>
                <span className="text-lg font-semibold text-green-600">45% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div className="bg-green-600 h-3 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Lessons completed:</span> 5 of 11
                </div>
                <button className="flex items-center text-green-600 hover:text-green-700 font-medium">
                  <Play className="h-4 w-4 mr-2" />
                  Continue Lesson 6
                </button>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-medium text-gray-900 text-lg">Spoken English Excellence</h4>
                  <p className="text-sm text-gray-500 mt-1">Instructor: Maria Rodriguez</p>
                </div>
                <span className="text-lg font-semibold text-green-600">100% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div className="bg-green-600 h-3 rounded-full" style={{ width: '100%' }}></div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Course completed!</span> Certificate earned
                </div>
                <button className="flex items-center text-purple-600 hover:text-purple-700 font-medium">
                  <Award className="h-4 w-4 mr-2" />
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Courses & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Continue Learning</h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-gray-900 text-lg">TOEFL Preparation</h4>
                  <span className="text-sm text-blue-600 font-medium">75% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  <Play className="h-5 w-5 mr-2" />
                  Continue Lesson 13: Reading Comprehension
                </button>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium text-gray-900 text-lg">Public Speaking</h4>
                  <span className="text-sm text-green-600 font-medium">45% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <button className="flex items-center text-green-600 hover:text-green-700 font-medium">
                  <Play className="h-5 w-5 mr-2" />
                  Continue Lesson 6: Body Language
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Upcoming Deadlines</h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-red-100 rounded-lg">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">TOEFL Practice Test</p>
                  <p className="text-xs text-gray-500 mt-1">Due in 2 days - Complete reading and listening sections</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <FileText className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Speaking Assignment</p>
                  <p className="text-xs text-gray-500 mt-1">Due in 5 days - Record 3-minute presentation</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Live Session</p>
                  <p className="text-xs text-gray-500 mt-1">Tomorrow, 3:00 PM - TOEFL Speaking Practice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDashboardContent = () => {
    switch (user?.role) {
      case 'admin':
        return renderAdminDashboard();
      case 'instructor':
        return renderInstructorDashboard();
      case 'student':
        return renderStudentDashboard();
      default:
        return <div>Loading...</div>;
    }
  };

  return (
    <LMSLayout>
      <div className="space-y-6">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">{getWelcomeMessage()}</h1>
          <p className="text-blue-100">
            {user?.role === 'admin' && "Manage your learning platform and monitor overall performance."}
            {user?.role === 'instructor' && "Track your students' progress and manage your courses."}
            {user?.role === 'student' && "Continue your learning journey and achieve your goals."}
          </p>
        </div>

        {/* Dashboard Content */}
        {renderDashboardContent()}
      </div>
    </LMSLayout>
  );
};

export default LMSDashboard;