import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, BookOpen, Award, Users, Calendar, MapPin, Phone, Mail, Target, TrendingUp } from 'lucide-react';

const CollegeAdmissionsPage = () => {
  const services = [
    {
      title: "College Selection Guidance",
      description: "Expert advice on choosing the right college based on your academic profile, career goals, and preferences.",
      features: [
        "Personalized college recommendations",
        "Course and program analysis",
        "Campus culture assessment",
        "Career prospects evaluation",
        "Location and lifestyle factors"
      ]
    },
    {
      title: "Application Assistance",
      description: "Complete support throughout the application process to maximize your chances of admission.",
      features: [
        "Application form completion",
        "Document preparation and review",
        "Statement of Purpose writing",
        "Letter of recommendation guidance",
        "Portfolio development support"
      ]
    },
    {
      title: "Entrance Exam Preparation",
      description: "Comprehensive preparation for various entrance exams required for college admissions.",
      features: [
        "JEE Main & Advanced preparation",
        "NEET exam coaching",
        "CLAT preparation",
        "State-level entrance exams",
        "Mock tests and practice sessions"
      ]
    },
    {
      title: "Scholarship & Financial Aid",
      description: "Guidance on securing scholarships and financial assistance for your education.",
      features: [
        "Scholarship identification",
        "Application assistance",
        "Financial aid counseling",
        "Education loan guidance",
        "Merit-based funding options"
      ]
    }
  ];

  const colleges = [
    {
      name: "University of Wollongong",
      location: "GIFT City, Gujarat",
      programs: ["Gratuate Certificate", "Masters in Finance (Fintech)", "Masters in Computing(Data Analytics)"],
      specialties: "Fintech, Data Analytics",
      image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg"
    },
    {
      name: "EIILM University",
      location: "Kolkata, West Bengal",
      programs: ["BBA", "MBA"],
      specialties: "Business, Management",
      image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg"
    },
    {
      name: "Brainware University",
      location: "Kolkata, West Bengal", 
      programs: ["B.Tech", "M.Tech"],
      specialties: "Engineering, Technology, Computer Science",
      image: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg"
    },
    {
      name: "IISM, Mumbai",
      location: "Mumbai, Maharashtra",
      programs: ["BSM", "MSM", "BSS", "MSS"],
      specialties: "Sports Management, Sports Science",
      image: "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg"
    }
  ];

  const admissionProcess = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Discuss your academic background, career goals, and preferences with our expert counselors."
    },
    {
      step: "02",
      title: "College Research",
      description: "Comprehensive research and shortlisting of colleges that match your profile and aspirations."
    },
    {
      step: "03",
      title: "Application Preparation",
      description: "Complete assistance with application forms, documents, and supporting materials."
    },
    {
      step: "04",
      title: "Entrance Exam Prep",
      description: "Targeted preparation for required entrance exams with mock tests and practice sessions."
    },
    {
      step: "05",
      title: "Application Submission",
      description: "Timely submission of applications with proper documentation and follow-up."
    },
    {
      step: "06",
      title: "Admission Support",
      description: "Guidance through the admission process, interviews, and final enrollment procedures."
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      college: "EIILM University - B.Tech CSE",
      content: "The guidance I received was exceptional. They helped me choose the perfect college and program for my career goals.",
      rating: 5
    },
    {
      name: "Priya Das",
      college: "Techno India University - MBA",
      content: "From application to admission, the support was comprehensive. I couldn't have done it without their expertise.",
      rating: 5
    },
    {
      name: "Arjun Ghosh",
      college: "Sister Nivedita University - B.Tech",
      content: "The entrance exam preparation was outstanding. I scored well and got into my dream college with their help.",
      rating: 5
    }
  ];

  const benefits = [
    "Expert guidance from experienced counselors",
    "Personalized college selection based on your profile",
    "Complete application assistance and support",
    "Entrance exam preparation and coaching",
    "Scholarship and financial aid guidance",
    "Interview preparation and mock sessions",
    "Post-admission support and guidance",
    "Strong network with top colleges and universities"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Domestic College Admissions - 
                <span className="text-blue-600"> Your Gateway to Success</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Expert guidance for college admissions in India. From college selection to application submission, we provide comprehensive support to help you secure admission to top colleges and universities.
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
                src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg"
                alt="College students and campus life"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Admission Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for every step of your college admission journey
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

      {/* Partner Colleges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partner Colleges & Universities
            </h2>
            <p className="text-xl text-gray-600">
              We have strong partnerships with leading educational institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {colleges.map((college, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={college.image}
                  alt={college.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{college.name}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{college.location}</span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Programs Offered:</h4>
                    <div className="flex flex-wrap gap-1">
                      {college.programs.slice(0, 3).map((program, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {program}
                        </span>
                      ))}
                      {college.programs.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          +{college.programs.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{college.specialties}</p>
                  
                  <Link
                    to="/contact"
                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-center block"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Admission Process
            </h2>
            <p className="text-xl text-gray-600">
              A structured approach to secure your college admission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {admissionProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
                Why Choose Our Admission Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our experienced counselors provide personalized guidance to help you navigate the complex college admission process and secure your place in top institutions.
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
                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg"
                alt="College admission counseling and guidance"
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
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from students who achieved their college admission goals
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
                  <p className="text-sm text-gray-500">{testimonial.college}</p>
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
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Successful Admissions</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Partner Colleges</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-200">Years Experience</div>
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
                Ready to Start Your College Journey?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get expert guidance for your college admissions. Our counselors are here to help you every step of the way.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span>+91 85830 35656</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span>admissions@whiteboardconsultant.com</span>
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
                Free consultation • Expert guidance • Guaranteed support
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegeAdmissionsPage;