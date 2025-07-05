import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Globe, Award, Users, BookOpen, Calendar, MapPin, Phone, Mail, Target, TrendingUp, Plane, GraduationCap, FileText, CreditCard } from 'lucide-react';

const StudyAbroadPage = () => {
  const steps = [
    {
      step: "01",
      title: "Choose Your Destination",
      description: "Select the country and university that aligns with your academic goals and career aspirations.",
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      details: [
        "Research top universities worldwide",
        "Compare education systems and costs",
        "Consider climate and cultural factors",
        "Evaluate post-graduation opportunities"
      ]
    },
    {
      step: "02", 
      title: "Select Your Course",
      description: "Find the perfect program that matches your interests, career goals, and academic background.",
      icon: <BookOpen className="h-8 w-8 text-green-600" />,
      details: [
        "Explore various fields of study",
        "Check course curriculum and duration",
        "Verify accreditation and rankings",
        "Consider specialization options"
      ]
    },
    {
      step: "03",
      title: "Prepare for Tests",
      description: "Take standardized tests like IELTS, TOEFL, GRE, GMAT, or SAT based on your chosen destination.",
      icon: <Award className="h-8 w-8 text-orange-600" />,
      details: [
        "Identify required standardized tests",
        "Enroll in preparation courses",
        "Practice with mock tests",
        "Achieve target scores"
      ]
    },
    {
      step: "04",
      title: "Apply to Universities",
      description: "Submit compelling applications with all required documents to your shortlisted universities.",
      icon: <FileText className="h-8 w-8 text-purple-600" />,
      details: [
        "Complete application forms",
        "Write statement of purpose",
        "Gather recommendation letters",
        "Submit academic transcripts"
      ]
    },
    {
      step: "05",
      title: "Secure Funding",
      description: "Explore scholarships, education loans, and financial aid options to fund your education.",
      icon: <CreditCard className="h-8 w-8 text-red-600" />,
      details: [
        "Research scholarship opportunities",
        "Apply for education loans",
        "Calculate total expenses",
        "Plan financial resources"
      ]
    },
    {
      step: "06",
      title: "Apply for Visa",
      description: "Complete visa application process and prepare for your journey to study abroad.",
      icon: <Plane className="h-8 w-8 text-indigo-600" />,
      details: [
        "Gather visa documentation",
        "Schedule visa interview",
        "Prepare for departure",
        "Arrange accommodation"
      ]
    }
  ];

  const destinations = [
    {
      country: "United States",
      universities: "4,000+",
      programs: "Engineering, Business, Medicine, Computer Science",
      avgCost: "$30,000 - $70,000/year",
      image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg",
      highlights: ["World's top universities", "Research opportunities", "Diverse culture", "Post-study work options"]
    },
    {
      country: "Canada",
      universities: "200+",
      programs: "Technology, Healthcare, Business, Natural Sciences",
      avgCost: "$20,000 - $40,000/year",
      image: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg",
      highlights: ["High quality education", "Affordable tuition", "Immigration pathways", "Safe environment"]
    },
    {
      country: "United Kingdom",
      universities: "150+",
      programs: "Law, Medicine, Engineering, Liberal Arts",
      avgCost: "$25,000 - $50,000/year",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      highlights: ["Historic universities", "Shorter degree duration", "Cultural heritage", "Global recognition"]
    },
    {
      country: "Australia",
      universities: "40+",
      programs: "Mining, Agriculture, Tourism, Marine Science",
      avgCost: "$25,000 - $45,000/year",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
      highlights: ["High living standards", "Work while studying", "Beautiful landscapes", "Multicultural society"]
    },
    {
      country: "Germany",
      universities: "400+",
      programs: "Engineering, Automotive, Technology, Research",
      avgCost: "$500 - $3,000/year",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      highlights: ["Low tuition fees", "Strong economy", "Innovation hub", "Central European location"]
    },
    {
      country: "Ireland",
      universities: "35+",
      programs: "Technology, Pharmaceuticals, Finance, Agriculture",
      avgCost: "$12,000 - $25,000/year",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      highlights: ["English-speaking country", "EU membership benefits", "Tech industry hub", "Friendly culture"]
    },
    {
      country: "Dubai, UAE",
      universities: "50+",
      programs: "Business, Finance, Hospitality, Engineering",
      avgCost: "$15,000 - $35,000/year",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      highlights: ["Tax-free income", "Global business hub", "Multicultural environment", "Strategic location"]
    },
    {
      country: "New Zealand",
      universities: "8+",
      programs: "Agriculture, Environmental Science, Adventure Tourism",
      avgCost: "$22,000 - $35,000/year",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      highlights: ["Stunning natural beauty", "Quality education", "Safe country", "Adventure opportunities"]
    }
  ];

  const services = [
    {
      title: "University Selection",
      description: "Expert guidance in choosing the right university and program based on your profile and goals.",
      features: [
        "Personalized university recommendations",
        "Course and program analysis",
        "Ranking and accreditation verification",
        "Career prospects evaluation"
      ]
    },
    {
      title: "Application Assistance",
      description: "Complete support throughout the application process to maximize your chances of admission.",
      features: [
        "Application form completion",
        "Statement of Purpose writing",
        "Letter of recommendation guidance",
        "Document preparation and review"
      ]
    },
    {
      title: "Test Preparation",
      description: "Comprehensive preparation for IELTS, TOEFL, GRE, GMAT, SAT and other standardized tests.",
      features: [
        "Expert-led coaching sessions",
        "Practice tests and mock exams",
        "Personalized study plans",
        "Score improvement strategies"
      ]
    },
    {
      title: "Visa Guidance",
      description: "Step-by-step assistance with visa application process and interview preparation.",
      features: [
        "Visa documentation support",
        "Interview preparation",
        "Application tracking",
        "Pre-departure guidance"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      university: "University of Toronto, Canada",
      program: "Master's in Computer Science",
      content: "Whiteboard Consultants made my dream of studying in Canada a reality. Their guidance throughout the entire process was exceptional.",
      rating: 5
    },
    {
      name: "Aditya Chamaria",
      university: "University of Glasglow, UK",
      program: "MSc Data Science",
      content: "With my CGPA of 7.8, Whiteboard Consultants not only helped in getting my offer letter, they also helped me with my TOEFL test preparation to visa guidance, they supported me at every step. I couldn't have achieved this without their expertise.",
      rating: 5
    },
    {
      name: "Arijit Deb",
      university: "National College of Ireland",
      program: "Masters in Cloud Computing Aspirant",
      content: "The TOEFL preparation and application guidance were outstanding. I received my offer letter withing a week of my application. I couldn't have achieved my goals without their support.",
      rating: 5
    }
  ];

  const benefits = [
    "Expert counselors with international education experience",
    "Personalized guidance based on your academic profile",
    "Comprehensive test preparation programs",
    "University application and admission support",
    "Visa guidance and documentation assistance",
    "Scholarship and financial aid counseling",
    "Pre-departure orientation and support",
    "Post-arrival assistance and guidance"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Your Gateway to 
                <span className="text-blue-600"> Global Education</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your future with world-class education abroad. Get expert guidance from Whiteboard Consultants for university selection, applications, test preparation, and visa assistance.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200">
                  Download Guide
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                alt="Students studying abroad and international education"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Steps to Study Abroad */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              6 Steps to Study Abroad
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our proven roadmap to make your study abroad dreams a reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold text-lg">{step.step}</span>
                  </div>
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Study Destinations
            </h2>
            <p className="text-xl text-gray-600">
              Explore top countries for international education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={destination.image}
                  alt={`Study in ${destination.country}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{destination.country}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Universities:</span>
                      <span className="font-semibold text-sm">{destination.universities}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 text-sm">Average Cost:</span>
                      <span className="font-semibold text-sm">{destination.avgCost}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{destination.programs}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {destination.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-700">
                          <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center block text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Study Abroad Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for every step of your study abroad journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
                With years of experience in international education consulting, we provide personalized guidance to help you achieve your study abroad goals.
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
                alt="Study abroad counseling and guidance"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from students who achieved their study abroad dreams
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
                  <p className="text-sm text-gray-500">{testimonial.program}</p>
                  <p className="text-sm text-blue-600">{testimonial.university}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">31+</div>
              <div className="text-blue-200">Countries</div>
              <div className="text-blue-100 text-sm">Global Reach</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">850+</div>
              <div className="text-blue-200">Partner Universities</div>
              <div className="text-blue-100 text-sm">Top Ranked Worldwide</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1500+</div>
              <div className="text-blue-200">Students Placed</div>
              <div className="text-blue-100 text-sm">Dreams Realized</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Success Rate</div>
              <div className="text-blue-100 text-sm">Visa Approvals</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Start Your Study Abroad Journey?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get expert guidance for studying abroad. Our experienced counselors are here to help you every step of the way.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span>+91 85830 35656</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span>success@whiteboardconsultant.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <span>Serving students across India</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-flex items-center group font-semibold text-lg"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <p className="text-gray-600 mt-4">
                Free consultation • Expert guidance • Personalized roadmap
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyAbroadPage;