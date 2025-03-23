
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileUp, FileText, Headphones, Brain } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InputSection from '@/components/InputSection';
import KnowledgeGraph from '@/components/KnowledgeGraph';
import Testimonials from '@/components/Testimonials';

const Index = () => {
  const [contentProcessed, setContentProcessed] = useState(false);
  const [contentType, setContentType] = useState<string>('');
  const [content, setContent] = useState<any>(null);

  const handleProcessContent = (type: string, data: any) => {
    setContentType(type);
    setContent(data);
    setContentProcessed(true);
    
    // Scroll to the knowledge graph
    setTimeout(() => {
      const graphSection = document.getElementById('knowledge-graph');
      if (graphSection) {
        graphSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="relative">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-netblue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-netblue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-netblue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight relative z-10">
                  Transform Information into <span className="bg-clip-text text-transparent bg-gradient-to-r from-netblue-600 to-netblue-800">Visual Knowledge</span>
                </h1>
              </div>
              
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                NoteNet converts your PDFs, text, and audio into interactive knowledge graphs, 
                helping you understand complex concepts with clarity and insight.
              </p>
              
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link 
                  to="#upload-section" 
                  className="px-6 py-3 bg-netblue-600 text-white rounded-md shadow-md hover:bg-netblue-700 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Started
                </Link>
                <Link 
                  to="/about" 
                  className="px-6 py-3 bg-white text-netblue-600 border border-netblue-200 rounded-md shadow-sm hover:bg-netblue-50 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                NoteNet transforms your content into visual knowledge networks, making complex information easier to understand and remember.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover-card">
                <div className="w-12 h-12 bg-netblue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileUp className="h-6 w-6 text-netblue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Content</h3>
                <p className="text-gray-600">
                  Upload PDFs, enter text, or provide audio/video files. NoteNet processes various content formats seamlessly.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover-card">
                <div className="w-12 h-12 bg-netblue-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-netblue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Analysis</h3>
                <p className="text-gray-600">
                  Our AI engine analyzes your content, identifying key concepts, relationships, and patterns.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover-card">
                <div className="w-12 h-12 bg-netblue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-netblue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="currentColor"/>
                    <path d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z" fill="currentColor"/>
                    <path d="M14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19Z" fill="currentColor"/>
                    <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="currentColor"/>
                    <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="currentColor"/>
                    <path d="M5.5 5.5L10.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M18.5 5.5L13.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M13.5 13.5L18.5 18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M10.5 13.5L5.5 18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Visual Graph</h3>
                <p className="text-gray-600">
                  Explore an interactive knowledge graph that visualizes connections and helps you gain deeper understanding.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Upload Section */}
        <section id="upload-section" className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Create Your Knowledge Graph</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Upload a file, enter text, or provide audio to generate your personalized knowledge graph.
              </p>
            </div>
            
            <InputSection onProcessContent={handleProcessContent} />
          </div>
        </section>
        
        {/* Knowledge Graph Section */}
        {contentProcessed && (
          <section id="knowledge-graph" className="py-16 bg-gray-50">
            <KnowledgeGraph contentType={contentType} content={content} />
          </section>
        )}
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* Target Audience Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Benefits from NoteNet</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're committed to making knowledge accessible for everyone, regardless of learning style or background.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover-card">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Students</h3>
                <p className="text-gray-600 mb-4">
                  From high school to university, students use NoteNet to visualize complex subject matter, organize their notes, and prepare for exams more effectively.
                </p>
                <p className="text-sm text-gray-500">
                  "Research shows that visual learning can improve understanding by up to 400%."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover-card">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Self-Learners</h3>
                <p className="text-gray-600 mb-4">
                  For those who can't access traditional education, NoteNet provides tools to comprehend complex materials and learn at their own pace.
                </p>
                <p className="text-sm text-gray-500">
                  "Visual knowledge mapping makes self-directed learning more accessible and effective."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover-card">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessibility Focused</h3>
                <p className="text-gray-600 mb-4">
                  Designed with accessibility in mind, NoteNet helps individuals with different learning styles and needs to process information visually.
                </p>
                <p className="text-sm text-gray-500">
                  "Knowledge graphs can be particularly helpful for visual learners and those with certain learning disabilities."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-netblue-600 to-netblue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Learning?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-netblue-50">
              Join thousands of students and professionals who use NoteNet to visualize knowledge and gain deeper understanding.
            </p>
            <button 
              onClick={() => {
                document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-white text-netblue-700 rounded-md shadow-lg hover:bg-netblue-50 transition-colors"
            >
              Try NoteNet Now
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
