import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
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
      </div>
    </Router>
  );
}

export default App;