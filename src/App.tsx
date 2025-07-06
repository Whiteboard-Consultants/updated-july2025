import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import StudyAbroadPage from './pages/StudyAbroadPage';
import TestPrepPage from './pages/TestPrepPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import StudentLoginPage from './pages/StudentLoginPage';
import StudentRegisterPage from './pages/StudentRegisterPage';
import UOWIndiaPage from './pages/UOWIndiaPage';
import CollegeAdmissionsPage from './pages/CollegeAdmissionsPage';
import LMSDashboard from './pages/LMSDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            {/* LMS Routes - No Header/Footer */}
            <Route 
              path="/lms/*" 
              element={
                <ProtectedRoute>
                  <Routes>
                    <Route path="dashboard" element={<LMSDashboard />} />
                    <Route path="courses" element={<LMSDashboard />} />
                    <Route path="calendar" element={<LMSDashboard />} />
                    <Route path="messages" element={<LMSDashboard />} />
                    <Route path="users" element={<LMSDashboard />} />
                    <Route path="analytics" element={<LMSDashboard />} />
                    <Route path="settings" element={<LMSDashboard />} />
                    <Route path="students" element={<LMSDashboard />} />
                    <Route path="assignments" element={<LMSDashboard />} />
                    <Route path="grades" element={<LMSDashboard />} />
                    <Route path="progress" element={<LMSDashboard />} />
                    <Route path="certificates" element={<LMSDashboard />} />
                  </Routes>
                </ProtectedRoute>
              } 
            />
            
            {/* Public Routes - With Header/Footer */}
            <Route path="/*" element={
              <>
                <Header />
                <main>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/study-abroad" element={<StudyAbroadPage />} />
                    <Route path="/uow-india-gift-city" element={<UOWIndiaPage />} />
                    <Route path="/college-admissions" element={<CollegeAdmissionsPage />} />
                    <Route path="/test-prep" element={<TestPrepPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/student-login" element={<StudentLoginPage />} />
                    <Route path="/student-register" element={<StudentRegisterPage />} />
                  </Routes>
                </main>
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;