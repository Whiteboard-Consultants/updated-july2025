import React from 'react';
import { Award, Users, Target, TrendingUp, BookOpen, Clock } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: "31+", label: "Countries", icon: <Target className="h-6 w-6" />, description: "Global Reach Across Continents" },
    { number: "850+", label: "Partner Universities", icon: <Clock className="h-6 w-6" />, description: "Top Ranked Universities World-wide" },
    { number: "1500+", label: "Students Impacted", icon: <Users className="h-6 w-6" />, description: "Dreams Turned Into Reality" },
    { number: "98%", label: "Test Prep Success Ratio", icon: <Award className="h-6 w-6" />, description: "Exceptional Results Guaranteed" }
  ];

  const values = [
    {
      title: "Collaboration",
      description: "We believe the best solutions emerge when diverse perspectives come together in structured, facilitated environments."
    },
    {
      title: "Innovation",
      description: "We foster creative thinking and breakthrough solutions through proven methodologies and fresh approaches."
    },
    {
      title: "Results",
      description: "Every engagement is designed to deliver measurable outcomes that drive real business value and sustainable growth."
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in facilitation, consulting, and client service to ensure exceptional experiences."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Whiteboard Consultant
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are strategic facilitators, business consultants, and collaborative problem-solvers dedicated to transforming organizations through innovative methodologies and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with the vision of unlocking organizational potential through collaborative methodologies, Whiteboard Consultant has grown from a single facilitator's passion into a comprehensive consulting practice serving organizations worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our approach combines traditional strategic consulting with innovative facilitation techniques, creating environments where teams can think creatively, solve complex problems, and align around shared objectives.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                What started as whiteboard sessions in conference rooms has evolved into a sophisticated practice that helps organizations navigate change, drive innovation, and achieve sustainable growth.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg"
                alt="Professional business consultant leading strategic planning session"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-blue-200 mb-2">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 font-medium mb-1">{stat.label}</div>
                <div className="text-blue-200 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To Provide affordable & meaningful consultation services that can help Individuals & Corporates achieve the best in their journey in life.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To build a better society by ensuring that Individuals and Corporates are better placed, skill-ready and excel in their profession.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <img
                src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg"
                alt="Senior Business Consultant"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sarah Mitchell</h3>
              <p className="text-blue-600 mb-3">Senior Business Consultant</p>
              <p className="text-gray-600">15+ years in strategic planning and organizational development</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <img
                src="https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg"
                alt="Lead Facilitator"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">David Chen</h3>
              <p className="text-blue-600 mb-3">Lead Facilitator</p>
              <p className="text-gray-600">Expert in team dynamics and collaborative problem-solving</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <img
                src="https://images.pexels.com/photos/3777936/pexels-photo-3777936.jpeg"
                alt="Innovation Specialist"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Maria Rodriguez</h3>
              <p className="text-blue-600 mb-3">Innovation Specialist</p>
              <p className="text-gray-600">Specializes in design thinking and creative methodologies</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;