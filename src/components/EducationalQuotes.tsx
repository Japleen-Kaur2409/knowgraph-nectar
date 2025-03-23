
import { useState, useEffect } from 'react';

interface EducationalQuotesProps {
  isVisible: boolean;
}

const quotes = [
  {
    text: "Knowledge graphs allow us to visualize connections we might otherwise miss.",
    author: "Marvin Minsky"
  },
  {
    text: "The brain thinks in maps, not in isolated facts.",
    author: "Tony Buzan"
  },
  {
    text: "The greatest value of a picture is when it forces us to notice what we never expected to see.",
    author: "John Tukey"
  },
  {
    text: "Sometimes, the best way to understand complex data is to see it.",
    author: "Edward Tufte"
  },
  {
    text: "The mind is not a vessel to be filled, but a fire to be kindled.",
    author: "Plutarch"
  },
  {
    text: "Information visualization helps transform data into knowledge.",
    author: "Ben Shneiderman"
  },
  {
    text: "Knowledge has to be improved, challenged, and increased constantly, or it vanishes.",
    author: "Peter Drucker"
  },
  {
    text: "The more elaborate our means of communication, the less we communicate.",
    author: "Joseph Priestley"
  },
  {
    text: "Visual thinking is the foundation of all higher cognitive activity.",
    author: "Rudolf Arnheim"
  },
  {
    text: "Knowledge networks reveal connections that linear learning often obscures.",
    author: "Richard Saul Wurman"
  }
];

const EducationalQuotes: React.FC<EducationalQuotesProps> = ({ isVisible }) => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');

  useEffect(() => {
    if (!isVisible) return;

    const intervalId = setInterval(() => {
      setFadeState('out');
      
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setCurrentQuote(quotes[randomIndex]);
        setFadeState('in');
      }, 500);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/50 backdrop-blur-md z-50">
      <div className="w-full max-w-xl px-6 py-4">
        <div className={`transition-opacity duration-500 ${
          fadeState === 'in' ? 'opacity-100' : 'opacity-0'
        }`}>
          <blockquote className="text-center">
            <p className="text-xl md:text-2xl font-medium text-gray-800 mb-4">
              "{currentQuote.text}"
            </p>
            <footer className="text-sm md:text-base text-gray-600">
              — {currentQuote.author}
            </footer>
          </blockquote>
        </div>
        
        <div className="mt-10 flex justify-center items-center">
          <div className="relative">
            <div className="h-2 w-2 rounded-full bg-netblue-600 animate-pulse absolute -left-10"></div>
            <div className="h-2 w-2 rounded-full bg-netblue-600 animate-pulse absolute -left-5"></div>
            <div className="h-2 w-2 rounded-full bg-netblue-600 animate-pulse"></div>
            <div className="h-2 w-2 rounded-full bg-netblue-600 animate-pulse absolute left-5"></div>
            <div className="h-2 w-2 rounded-full bg-netblue-600 animate-pulse absolute left-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalQuotes;
