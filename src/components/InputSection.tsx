
import { useState } from 'react';
import { FileUp, FileText, Headphones, Youtube, Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface InputSectionProps {
  onProcessContent: (type: string, content: any) => void;
}

const InputSection: React.FC<InputSectionProps> = ({ onProcessContent }) => {
  const [activeTab, setActiveTab] = useState('pdf');
  const [isLoading, setIsLoading] = useState(false);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfName, setPdfName] = useState('');
  const [textContent, setTextContent] = useState('');
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [audioName, setAudioName] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  // Handle PDF upload
  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === 'application/pdf') {
        setPdfFile(file);
        setPdfName(file.name);
      } else {
        toast.error('Please upload a valid PDF file');
      }
    }
  };

  // Handle Audio upload
  const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.includes('audio')) {
        setAudioFile(file);
        setAudioName(file.name);
      } else {
        toast.error('Please upload a valid audio file');
      }
    }
  };

  // Handle drag events
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent, type: 'pdf' | 'audio') => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      
      if (type === 'pdf' && file.type === 'application/pdf') {
        setPdfFile(file);
        setPdfName(file.name);
      } else if (type === 'audio' && file.type.includes('audio')) {
        setAudioFile(file);
        setAudioName(file.name);
      } else {
        toast.error(`Please upload a valid ${type.toUpperCase()} file`);
      }
    }
  };

  // Clear selected file
  const clearFile = (type: 'pdf' | 'audio') => {
    if (type === 'pdf') {
      setPdfFile(null);
      setPdfName('');
    } else {
      setAudioFile(null);
      setAudioName('');
    }
  };

  // Submit handler
  const handleSubmit = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      switch (activeTab) {
        case 'pdf':
          if (pdfFile) {
            onProcessContent('pdf', pdfFile);
          } else {
            toast.error('Please upload a PDF file');
          }
          break;
        case 'text':
          if (textContent.trim()) {
            onProcessContent('text', textContent);
          } else {
            toast.error('Please enter some text');
          }
          break;
        case 'audio':
          if (audioFile) {
            onProcessContent('audio', audioFile);
          } else if (youtubeUrl.trim()) {
            onProcessContent('youtube', youtubeUrl);
          } else {
            toast.error('Please upload an audio file or enter a YouTube URL');
          }
          break;
      }
      
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-3xl mx-auto glass-card rounded-xl p-6 transition-all duration-300 animate-fade-in">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">
        Input your content
      </h2>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="pdf" className="data-[state=active]:bg-netblue-50 data-[state=active]:text-netblue-600">
            <FileUp className="h-4 w-4 mr-2" />
            PDF
          </TabsTrigger>
          <TabsTrigger value="text" className="data-[state=active]:bg-netblue-50 data-[state=active]:text-netblue-600">
            <FileText className="h-4 w-4 mr-2" />
            Text
          </TabsTrigger>
          <TabsTrigger value="audio" className="data-[state=active]:bg-netblue-50 data-[state=active]:text-netblue-600">
            <Headphones className="h-4 w-4 mr-2" />
            Audio
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="pdf" className="mt-2 animate-slide-up">
          <div 
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
              isDragging ? 'border-netblue-500 bg-netblue-50' : 'border-gray-200 hover:border-netblue-300'
            } ${pdfFile ? 'bg-netblue-50/50' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, 'pdf')}
          >
            {!pdfFile ? (
              <div className="space-y-4">
                <Upload className="h-10 w-10 mx-auto text-gray-400" />
                <div>
                  <p className="text-sm text-gray-600">
                    Drag and drop your PDF file here, or
                  </p>
                  <label className="mt-2 inline-block">
                    <span className="rounded-md px-3 py-1.5 bg-netblue-500 text-white text-sm font-medium cursor-pointer hover:bg-netblue-600 transition-colors">
                      Browse files
                    </span>
                    <Input 
                      type="file" 
                      className="hidden" 
                      accept=".pdf"
                      onChange={handlePdfChange}
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500">
                  Supports PDFs up to 20MB
                </p>
              </div>
            ) : (
              <div className="flex items-center justify-between p-3 rounded-md bg-white">
                <div className="flex items-center">
                  <FileUp className="h-8 w-8 text-netblue-500 mr-3" />
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-900 truncate max-w-[200px]">
                      {pdfName}
                    </p>
                    <p className="text-xs text-gray-500">
                      PDF file
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => clearFile('pdf')}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="text" className="mt-2 animate-slide-up">
          <div className="space-y-4">
            <Textarea
              placeholder="Enter your text here..."
              value={textContent}
              onChange={(e) => setTextContent(e.target.value)}
              className="min-h-[200px] resize-none focus:ring-netblue-500 p-4"
            />
            <p className="text-xs text-gray-500 text-right">
              {textContent.length} characters
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="audio" className="mt-2 animate-slide-up">
          <div className="space-y-6">
            <div 
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
                isDragging ? 'border-netblue-500 bg-netblue-50' : 'border-gray-200 hover:border-netblue-300'
              } ${audioFile ? 'bg-netblue-50/50' : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, 'audio')}
            >
              {!audioFile ? (
                <div className="space-y-4">
                  <Headphones className="h-10 w-10 mx-auto text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">
                      Drag and drop your audio file here, or
                    </p>
                    <label className="mt-2 inline-block">
                      <span className="rounded-md px-3 py-1.5 bg-netblue-500 text-white text-sm font-medium cursor-pointer hover:bg-netblue-600 transition-colors">
                        Browse files
                      </span>
                      <Input 
                        type="file" 
                        className="hidden" 
                        accept="audio/*"
                        onChange={handleAudioChange}
                      />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">
                    Supports MP3, WAV, M4A up to 50MB
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-between p-3 rounded-md bg-white">
                  <div className="flex items-center">
                    <Headphones className="h-8 w-8 text-netblue-500 mr-3" />
                    <div className="text-left">
                      <p className="text-sm font-medium text-gray-900 truncate max-w-[200px]">
                        {audioName}
                      </p>
                      <p className="text-xs text-gray-500">
                        Audio file
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => clearFile('audio')}
                    className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
              )}
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 flex items-center">
                <Youtube className="h-4 w-4 mr-1.5 text-red-600" />
                YouTube URL
              </label>
              <Input
                type="url"
                placeholder="https://www.youtube.com/watch?v=..."
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
                className="focus:ring-netblue-500"
              />
              <p className="text-xs text-gray-500">
                Enter a YouTube URL to extract audio content
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-8 flex justify-center">
        <Button 
          onClick={handleSubmit}
          disabled={isLoading}
          className="px-6 py-2.5 bg-netblue-600 hover:bg-netblue-700 text-white rounded-md transition-colors"
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            'Generate Knowledge Graph'
          )}
        </Button>
      </div>
    </div>
  );
};

export default InputSection;
