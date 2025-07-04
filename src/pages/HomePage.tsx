import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Lightbulb, TrendingUp, CheckCircle, Star } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Study Abroad Guidance",
      description: "Expert counseling for international education opportunities, university selection, and application processes."
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: "Test Preparation",
      description: "Comprehensive IELTS, TOEFL, GRE, GMAT, and SAT preparation with proven strategies for success."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-orange-600" />,
      title: "Career Counseling",
      description: "Personalized career guidance to help you choose the right academic path and professional direction."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
      title: "Admission Support",
      description: "Complete assistance with university applications, visa processes, and scholarship opportunities."
    }
  ];

  const benefits = [
    "Expert guidance from certified education consultants",
    "Personalized study abroad planning and support",
    "Comprehensive test preparation programs",
    "University selection and application assistance",
    "Visa guidance and documentation support",
    "Scholarship and financial aid counseling"
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      position: "MS Student, University of Toronto",
      content: "Whiteboard Consultants helped me secure admission to my dream university in Canada. Their TOEFL preparation was exceptional!",
      rating: 5
    },
    {
      name: "Arijit Deb",
      position: "Masters in Cloud Computing Aspirant, National College of Ireland",
      content: "The TOEFL preparation and application guidance were outstanding. I received my offer letter withing a week of my application. I couldn't have achieved my goals without their support.",
      rating: 5
    },
    {
      name: "Shivam Bhomia",
      position: "Undergraduate, EIILM, Kolkata",
      content: "From program selection to admission processing, they guided me through every step. Highly recommended for domestic college admissions!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Best Education Consultant in Kolkata for Study Abroad & Test Prep -  
                <span className="text-blue-600"> Whiteboard Consultants</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Top Education Consultant in Kolkata for Study Abroad, TOEFL/IELTS Test Prep & College Admissions. Get expert guidance for overseas education, competitive exam
                training, and career success.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200 text-center"
                >
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                alt="Students studying abroad and test preparation"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Career and Education Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategic career planning to training, we provide the expertise and tools your career needs to thrive in today's competitive landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Whiteboard Consultants?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our proven methodologies and personalized approach deliver exceptional results that transform your educational journey and career prospects.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
                alt="Education consulting and student guidance"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Discover how we've helped students achieve their study abroad dreams
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Study Abroad Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our education consulting and test preparation services can help you achieve your academic goals and unlock your potential for international education.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center group font-semibold"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;