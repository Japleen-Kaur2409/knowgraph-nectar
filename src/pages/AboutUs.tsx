
import { Github, Linkedin, Mail, ExternalLink, BookOpen, Users, LineChart, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-r from-netblue-50 to-netblue-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About NoteNet</h1>
              <p className="text-xl text-gray-600">
                We're a team of University of Toronto students on a mission to transform how people learn and understand complex information.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                <div className="md:w-1/3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-netblue-200 rounded-lg transform rotate-3"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                      alt="NoteNet team working together" 
                      className="relative rounded-lg shadow-md w-full object-cover"
                      style={{ height: '300px' }}
                    />
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      NoteNet was born at a University of Toronto hackathon in 2022, where our team of three students came together with a shared vision: to make learning more accessible and intuitive through visualization.
                    </p>
                    <p>
                      As students ourselves, we experienced firsthand the challenge of connecting concepts across different subjects and sources. We realized that traditional linear note-taking wasn't capturing the interconnected nature of knowledge.
                    </p>
                    <p>
                      What started as a hackathon project has evolved into a powerful tool that helps students, self-learners, and professionals transform complex information into intuitive knowledge graphs that enhance understanding and retention.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Mission & Values</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-card">
                  <div className="w-12 h-12 bg-netblue-100 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-netblue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To democratize education by helping people visualize complex information in a way that enhances understanding, regardless of learning style or background.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-card">
                  <div className="w-12 h-12 bg-netblue-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-netblue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Accessibility</h3>
                  <p className="text-gray-600">
                    We're committed to making quality education accessible to everyone, including those who may not have access to traditional educational resources.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-card">
                  <div className="w-12 h-12 bg-netblue-100 rounded-lg flex items-center justify-center mb-4">
                    <LineChart className="h-6 w-6 text-netblue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    We continuously refine our algorithms and user experience based on the latest research in education, cognitive science, and machine learning.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-card">
                  <div className="w-12 h-12 bg-netblue-100 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-netblue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">User-Centered</h3>
                  <p className="text-gray-600">
                    Everything we build is designed with our users in mind, focusing on creating tools that genuinely help people learn more effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Impact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Impact</h2>
              
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <p className="text-4xl font-bold text-netblue-600">10,000+</p>
                    <p className="text-gray-600 mt-2">Active Users</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-netblue-600">85%</p>
                    <p className="text-gray-600 mt-2">Report Improved Understanding</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-netblue-600">50+</p>
                    <p className="text-gray-600 mt-2">Academic Institutions</p>
                  </div>
                </div>
                
                <div className="mt-10 space-y-4 text-gray-600">
                  <p>
                    Our user studies conducted during the University of Toronto hackathon showed that students who used knowledge graphs to study complex subjects improved their comprehension by an average of 42% compared to traditional note-taking methods.
                  </p>
                  <p>
                    We're particularly proud of our work with accessibility-focused organizations, where NoteNet has helped learners with different learning styles visualize information in ways that make sense to them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-netblue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us on Our Mission</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Whether you're a student looking to enhance your learning, an educator seeking new tools, or simply passionate about making knowledge accessible to all, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:contact@notenet.io"
                className="px-6 py-3 bg-white text-netblue-700 rounded-md shadow-lg hover:bg-netblue-50 transition-colors inline-flex items-center justify-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                Contact Us
              </a>
              <a 
                href="https://github.com/notenet"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-netblue-700 text-white rounded-md shadow-lg hover:bg-netblue-800 transition-colors inline-flex items-center justify-center"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
