
import { useEffect, useState } from 'react';
import EducationalQuotes from './EducationalQuotes';

interface KnowledgeGraphProps {
  contentType: string;
  content: any;
}

const KnowledgeGraph: React.FC<KnowledgeGraphProps> = ({ contentType, content }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + Math.random() * 10;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 500);

    const timeout = setTimeout(() => {
      clearInterval(timer);
      setIsLoading(false);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  const renderGraph = () => {
    return (
      <div className="w-full h-[500px] bg-white rounded-xl p-6 shadow-lg border border-gray-100 animate-fade-in">
        <div className="w-full h-full relative">
          {/* This is a placeholder for the actual graph visualization */}
          <div className="absolute inset-0 bg-gradient-radial from-netblue-50 to-white rounded-lg overflow-hidden">
            {/* Main node */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-netblue-500 rounded-full flex items-center justify-center text-white font-medium shadow-lg node-pulse">
              <span className="text-sm">Main Topic</span>
            </div>
            
            {/* Surrounding nodes */}
            <div className="absolute top-[30%] left-[35%] w-16 h-16 bg-netblue-400 rounded-full flex items-center justify-center text-white shadow-md node-pulse" style={{ animationDelay: '0.5s' }}>
              <span className="text-xs">Concept 1</span>
            </div>
            
            <div className="absolute top-[60%] left-[30%] w-14 h-14 bg-netblue-300 rounded-full flex items-center justify-center text-white shadow-md node-pulse" style={{ animationDelay: '1s' }}>
              <span className="text-xs">Concept 2</span>
            </div>
            
            <div className="absolute top-[45%] left-[70%] w-12 h-12 bg-netblue-400 rounded-full flex items-center justify-center text-white shadow-md node-pulse" style={{ animationDelay: '1.5s' }}>
              <span className="text-xs">Concept 3</span>
            </div>
            
            <div className="absolute top-[20%] left-[60%] w-10 h-10 bg-netblue-300 rounded-full flex items-center justify-center text-white shadow-md node-pulse" style={{ animationDelay: '2s' }}>
              <span className="text-[10px]">Sub 1</span>
            </div>
            
            <div className="absolute top-[70%] left-[65%] w-10 h-10 bg-netblue-300 rounded-full flex items-center justify-center text-white shadow-md node-pulse" style={{ animationDelay: '2.5s' }}>
              <span className="text-[10px]">Sub 2</span>
            </div>
            
            {/* Connection lines - these would be SVG paths in a real implementation */}
            <svg className="absolute inset-0 w-full h-full">
              <line x1="50%" y1="50%" x2="35%" y2="30%" stroke="rgba(93, 135, 227, 0.5)" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="30%" y2="60%" stroke="rgba(93, 135, 227, 0.5)" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="70%" y2="45%" stroke="rgba(93, 135, 227, 0.5)" strokeWidth="2" />
              <line x1="35%" y1="30%" x2="60%" y2="20%" stroke="rgba(93, 135, 227, 0.3)" strokeWidth="1.5" />
              <line x1="70%" y1="45%" x2="65%" y2="70%" stroke="rgba(93, 135, 227, 0.3)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  };

  const renderDetails = () => {
    return (
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover-card">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Main Concepts</h3>
          <ul className="space-y-2">
            <li className="text-sm text-gray-600 flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-netblue-500 mt-1.5 mr-2"></span>
              <span>Concept 1 - Primary framework for understanding</span>
            </li>
            <li className="text-sm text-gray-600 flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-netblue-500 mt-1.5 mr-2"></span>
              <span>Concept 2 - Underlying principles and mechanisms</span>
            </li>
            <li className="text-sm text-gray-600 flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-netblue-500 mt-1.5 mr-2"></span>
              <span>Concept 3 - Applications and implications</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover-card">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Connections</h3>
          <ul className="space-y-2">
            <li className="text-sm text-gray-600 flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-netblue-400 mt-1.5 mr-2"></span>
              <span>Main Topic → Concept 1: Foundation relationship</span>
            </li>
            <li className="text-sm text-gray-600 flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-netblue-400 mt-1.5 mr-2"></span>
              <span>Concept 1 → Sub 1: Hierarchical dependency</span>
            </li>
            <li className="text-sm text-gray-600 flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-netblue-400 mt-1.5 mr-2"></span>
              <span>Concept 3 → Sub 2: Contextual relationship</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover-card">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Insights</h3>
          <ul className="space-y-2">
            <li className="text-sm text-gray-600 flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-netblue-300 mt-1.5 mr-2"></span>
              <span>Pattern 1: Recurring theme throughout content</span>
            </li>
            <li className="text-sm text-gray-600 flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-netblue-300 mt-1.5 mr-2"></span>
              <span>Pattern 2: Unusual connection between concepts</span>
            </li>
            <li className="text-sm text-gray-600 flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-netblue-300 mt-1.5 mr-2"></span>
              <span>Pattern 3: Emerging insight from relationships</span>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 sm:px-6">
      <EducationalQuotes isVisible={isLoading} />
      
      {isLoading ? (
        <div className="flex flex-col items-center justify-center p-10">
          <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium text-gray-700">Generating Knowledge Graph</h3>
                <span className="text-xs font-medium text-netblue-600">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-netblue-600 h-2.5 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="mt-3 text-xs text-gray-500">
                {progress < 30 && "Analyzing content..."}
                {progress >= 30 && progress < 60 && "Identifying key concepts..."}
                {progress >= 60 && progress < 90 && "Building relationships..."}
                {progress >= 90 && "Finalizing knowledge graph..."}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Knowledge Graph</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {contentType === 'pdf' && "Visualizing key concepts and relationships from your PDF."}
              {contentType === 'text' && "Visualizing key concepts and relationships from your text."}
              {contentType === 'audio' && "Visualizing key concepts and relationships from your audio."}
              {contentType === 'youtube' && "Visualizing key concepts and relationships from your YouTube video."}
            </p>
          </div>
          
          {renderGraph()}
          {renderDetails()}
          
          <div className="flex justify-center space-x-4 mt-8">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
              Download Graph
            </button>
            <button className="px-4 py-2 bg-netblue-600 rounded-md text-white hover:bg-netblue-700 transition-colors">
              Save to Files
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KnowledgeGraph;
