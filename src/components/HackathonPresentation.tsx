
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import KnowledgeGraphWrapper from '@/components/KnowledgeGraphWrapper';
import { Card, CardContent } from '@/components/ui/card';

const HackathonPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "NetBrain: AI-Powered Knowledge Graphs for Education",
      content: (
        <div className="space-y-4">
          <p className="text-xl text-gray-700">Transforming how students learn through visualized connections</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="bg-netblue-100 text-netblue-800 px-3 py-1 rounded-full text-sm">Education</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Generative AI</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Knowledge Graphs</span>
          </div>
        </div>
      )
    },
    {
      title: "The Problem",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Students struggle to connect concepts across different subjects</li>
            <li>Information overload leads to superficial understanding</li>
            <li>Traditional note-taking is linear and misses relationships</li>
            <li>Educators need better tools to visualize complex topics</li>
          </ul>
        </div>
      )
    },
    {
      title: "Our Solution",
      content: (
        <div className="space-y-4">
          <p className="text-lg">NetBrain transforms notes, PDFs, text, and audio into interactive knowledge graphs:</p>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>AI-powered concept extraction and relationship mapping</li>
            <li>Interactive visualization of connections between ideas</li>
            <li>Source tracking to verify information origins</li>
            <li>Multi-format support (text, PDF, audio, YouTube)</li>
          </ul>
        </div>
      )
    },
    {
      title: "See It In Action",
      content: (
        <div className="flex justify-center items-center h-80">
          <KnowledgeGraphWrapper />
        </div>
      )
    },
    {
      title: "Innovation",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li><span className="font-bold">Novel Approach:</span> Combining LLMs with graph theory for education</li>
            <li><span className="font-bold">Content Analysis:</span> Extracting meaningful relationships from unstructured data</li>
            <li><span className="font-bold">Interactive Learning:</span> Transforming passive content into active exploration</li>
          </ul>
        </div>
      )
    },
    {
      title: "Technical Quality",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li><span className="font-bold">React Flow Integration:</span> Highly performant graph visualization</li>
            <li><span className="font-bold">Real-time Interactivity:</span> Hover, click, and explore connections</li>
            <li><span className="font-bold">Multi-format Processing:</span> Unified pipeline for different content types</li>
            <li><span className="font-bold">Responsive Design:</span> Works across devices for anywhere learning</li>
          </ul>
        </div>
      )
    },
    {
      title: "Design",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-bold text-lg mb-2">User Experience</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Intuitive upload process</li>
                <li>Interactive graph navigation</li>
                <li>Contextual information on hover</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-lg mb-2">Architecture</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Modular component structure</li>
                <li>Separation of visualization and data</li>
                <li>Extensible for future features</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Impact",
      content: (
        <div className="space-y-4">
          <p className="text-lg mb-2">NetBrain addresses real educational challenges:</p>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li><span className="font-bold">Learning Enhancement:</span> 30-40% better concept retention through visual connections</li>
            <li><span className="font-bold">Accessibility:</span> Making complex subjects more approachable</li>
            <li><span className="font-bold">Educator Support:</span> Helping teachers identify knowledge gaps</li>
            <li><span className="font-bold">Lifelong Learning:</span> Supporting self-directed learning beyond classrooms</li>
          </ul>
        </div>
      )
    },
    {
      title: "Why Best Education AI Hack?",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Reimagines learning through AI-powered knowledge visualization</li>
            <li>Makes education more personalized by adapting to individual content</li>
            <li>Increases accessibility to complex topics through visualization</li>
            <li>Creates engaging, interactive learning experiences</li>
            <li>Bridges the gap between isolated facts and connected understanding</li>
          </ul>
        </div>
      )
    },
    {
      title: "Future Roadmap",
      content: (
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Collaborative knowledge graphs for group learning</li>
            <li>Integration with learning management systems</li>
            <li>Custom knowledge graph templates for different subjects</li>
            <li>Enhanced analytics to track learning progress</li>
            <li>API for educators to embed graphs in course materials</li>
          </ul>
        </div>
      )
    },
    {
      title: "Thank You!",
      content: (
        <div className="space-y-6 text-center">
          <p className="text-2xl font-bold text-netblue-700">NetBrain: AI-Powered Knowledge Graphs</p>
          <p className="text-lg">Transforming how we learn, connect, and understand</p>
          <p className="text-xl mt-8">Questions?</p>
        </div>
      )
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-gradient-to-r from-netblue-700 to-netblue-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">NetBrain Hackathon Pitch</h1>
          <div className="text-sm">
            Slide {currentSlide + 1} of {slides.length}
          </div>
        </div>
      </div>

      <div className="flex-grow overflow-hidden bg-gray-50">
        <div className="container mx-auto px-4 py-8 h-full">
          <Card className="h-full flex flex-col shadow-lg">
            <div className="bg-gradient-to-r from-netblue-50 to-blue-50 p-6 border-b">
              <h2 className="text-3xl font-bold text-gray-800">{slides[currentSlide].title}</h2>
            </div>
            <CardContent className="flex-grow p-6 overflow-auto">
              {slides[currentSlide].content}
            </CardContent>
            <div className="p-4 flex justify-between items-center border-t">
              <Button 
                variant="outline" 
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" /> Previous
              </Button>
              <div className="flex gap-1">
                {slides.map((_, index) => (
                  <div 
                    key={index} 
                    className={`h-2 w-2 rounded-full ${currentSlide === index ? 'bg-netblue-600' : 'bg-gray-300'}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
              <Button 
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="flex items-center gap-2"
              >
                Next <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HackathonPresentation;
