import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Globe, Award, Users, BookOpen, Calendar, MapPin, Phone, Mail } from 'lucide-react';

const UOWIndiaPage = () => {
  const programs = [
    {
      title: "Graduate Certificate in Computing",
      duration: "6 months",
      intake: "March, July, November",
      fees: "$9,300 AUD (2025)",
      description: "Gain specialised knowledge in computing with a focus on system analysis and project management. This short course option is designed for those who are inspired to enter the booming industry of computing technology."
    },
    {
      title: "Master of Computing (Data Analytics)",
      duration: "18 months", 
      intake: "March, July, November",
      fees: "$27,900 AUD",
      description: "Bridge computing and data analytics expertise, catering to diverse graduates, while mastering the technical and ethical dimensions of this booming field. Develop a broad knowledge and the skills to get ahead of the next generation of computing professionals."
    },
    {
      title: "Graduate Certificate in Financial Technology",
      duration: "6 months",
      intake: "July, November", 
      fees: "$9,300 AUD",
      description: "Gain a strong understanding of how technology is being applied to a range of domains such as banking and insurance. This short course option focuses on cutting-edge developments within this advancing industry."
    },
    {
      title: "Master of Financial Technology (FinTech) Extension",
      duration: "24 months",
      intake: "March, July, November",
      fees: "$27,900 AUD",
      description: "Offering an in-depth and comprehensive exploration of FinTech, including courses in web development, system analysis, and project management. Providing a unique opportunity for students to gain industry experience through a professional workplace internship."
    },
    {
      title: "Master of Financial Technology (FinTech)",
      duration: "18 months",
      intake: "March, July, November",
      fees: "$37,200 AUD",
      description: "Develop a comprehensive understanding of the financial technology industry and its impact on the global economy. Explore the intersection of finance and technology, and equip yourself with the expertise in this rapidly growing field."
    }
  ];

  const benefits = [
    "Australian degree with global recognition",
    "State-of-the-art campus in GIFT City",
    "Industry-aligned curriculum",
    "Experienced faculty from Australia and India",
    "Strong industry partnerships",
    "Pathway to Australian campuses",
    "Excellent placement opportunities",
    "Research and innovation focus"
  ];

  const admissionSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Meet with our counselors to discuss your academic goals and program options."
    },
    {
      step: "02", 
      title: "Application Preparation",
      description: "Complete application forms and gather required documents with our guidance."
    },
    {
      step: "03",
      title: "Document Submission",
      description: "Submit your application along with academic transcripts and supporting documents."
    },
    {
      step: "04",
      title: "Interview Process",
      description: "Participate in the admission interview and assessment process."
    },
    {
      step: "05",
      title: "Offer & Enrollment",
      description: "Receive your offer letter and complete the enrollment process."
    }
  ];

  const testimonials = [
    {
      name: "Arjun Patel",
      program: "Graduate Certificate in Financial Technology",
      content: "The UOW experience has been incredible. The faculty is world-class and the campus facilities are outstanding.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      program: "Master of Computing (Data Analytics)",
      content: "Getting an Australian degree in India has opened up amazing career opportunities for me globally.",
      rating: 5
    },
    {
      name: "Rohit Kumar",
      program: "Master of Financial Technology Extension",
      content: "The industry connections and practical learning approach at UOW have been game-changing for my career.",
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                University of Wollongong - 
                <span className="text-blue-600"> East India Partner</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience world-class Australian education right here in India. UOW's GIFT City campus offers internationally recognized degrees with the same quality and standards as the main Australian campus.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center group"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg"
                alt="University of Wollongong campus and students"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* University Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About University of Wollongong
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The University of Wollongong (UOW) is bigger than just Wollongong—it is a globally recognized university ranked in the QS Top 1% worldwide (QS rank #162) with world-class education campuses in Australia, Malaysia, Hong Kong, Dubai, and its newest state-of-the-art campus in India’s GIFT City.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Recognition</h3>
              <p className="text-gray-600">Top 1% globally ranked university with Australian accreditation</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Education</h3>
              <p className="text-gray-600">Same curriculum and standards as Australian campus</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Faculty</h3>
              <p className="text-gray-600">Experienced professors from Australia and India</p>
            </div>
            <div className="text-center">
              <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Modern Campus</h3>
              <p className="text-gray-600">State-of-the-art facilities in GIFT City, Gujarat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Programs
            </h2>
            <p className="text-xl text-gray-600">
              Choose from a range of graduate and postgraduate programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <Calendar className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-gray-700">Duration</span>
                    </div>
                    <p className="text-gray-900">{program.duration}</p>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <Calendar className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm font-medium text-gray-700">Intake</span>
                    </div>
                    <p className="text-gray-900">{program.intake}</p>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{program.fees}</span>
                    <Link
                      to="/contact"
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose UOW India?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience the best of Australian education without leaving India. Our GIFT City campus offers world-class facilities and internationally recognized degrees.
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
                alt="UOW campus facilities and student life"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Admission Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to secure your place at UOW India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {admissionSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
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
              Hear from our students about their UOW experience
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your UOW Journey? Consult Whiteboard Consultants, UOW, East India Partners
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get personalized guidance for your UOW India application. Our expert counselors are here to help you every step of the way.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-200 mr-3" />
                  <span>+91 85830 35656</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-200 mr-3" />
                  <span>success@whiteboardconsultant.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-200 mr-3" />
                  <span>'My Cube', 6th Floor, Park Plaza, 71 Park Street, Kolkata, India</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 inline-flex items-center group font-semibold text-lg"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <p className="text-blue-100 mt-4">
                Free consultation • Expert guidance • Fast processing
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UOWIndiaPage;