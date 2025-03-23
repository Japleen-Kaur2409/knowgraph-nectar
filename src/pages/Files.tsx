
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, FileUp, Headphones, Youtube, ChevronDown, Calendar, Download, Trash2, Search, Filter } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Sample data for previous files
const sampleFiles = [
  {
    id: 1,
    name: "Machine Learning Fundamentals",
    type: "pdf",
    created: "2023-09-15T14:30:00",
    size: "2.4 MB",
    concepts: ["Algorithms", "Neural Networks", "Data Processing"]
  },
  {
    id: 2,
    name: "Physics Lecture Notes",
    type: "text",
    created: "2023-09-10T09:15:00",
    size: "128 KB",
    concepts: ["Quantum Mechanics", "Relativity", "Wave Theory"]
  },
  {
    id: 3,
    name: "History of Ancient Civilizations",
    type: "pdf",
    created: "2023-09-05T11:45:00",
    size: "5.7 MB",
    concepts: ["Mesopotamia", "Egypt", "Greece", "Rome"]
  },
  {
    id: 4,
    name: "Introduction to Psychology",
    type: "youtube",
    created: "2023-08-28T16:20:00",
    size: "42 MB",
    concepts: ["Cognition", "Behavior", "Development"]
  },
  {
    id: 5,
    name: "Biology Podcast",
    type: "audio",
    created: "2023-08-20T10:00:00",
    size: "18.2 MB",
    concepts: ["Cellular Biology", "Genetics", "Evolution"]
  },
  {
    id: 6,
    name: "Computer Science 101",
    type: "pdf",
    created: "2023-08-15T13:10:00",
    size: "3.8 MB",
    concepts: ["Algorithms", "Data Structures", "Programming"]
  },
  {
    id: 7,
    name: "Literary Analysis Essay",
    type: "text",
    created: "2023-08-10T15:30:00",
    size: "76 KB",
    concepts: ["Themes", "Character Development", "Symbolism"]
  }
];

const Files = () => {
  const [files, setFiles] = useState(sampleFiles);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string | null>(null);
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };
  
  // Get icon based on file type
  const getFileTypeIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileUp className="h-5 w-5 text-red-500" />;
      case 'text':
        return <FileText className="h-5 w-5 text-netblue-500" />;
      case 'audio':
        return <Headphones className="h-5 w-5 text-purple-500" />;
      case 'youtube':
        return <Youtube className="h-5 w-5 text-red-600" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };
  
  // Sort files by date
  const sortFiles = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    
    const sortedFiles = [...files].sort((a, b) => {
      const dateA = new Date(a.created).getTime();
      const dateB = new Date(b.created).getTime();
      return newOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
    
    setFiles(sortedFiles);
  };
  
  // Filter files based on search query and type filter
  const filteredFiles = files.filter(file => {
    const matchesSearch = file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         file.concepts.some(concept => concept.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFilter = filterType ? file.type === filterType : true;
    
    return matchesSearch && matchesFilter;
  });
  
  // Handle file deletion
  const handleDelete = (id: number) => {
    setFiles(files.filter(file => file.id !== id));
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="py-12 bg-gradient-to-r from-netblue-50 to-netblue-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Files</h1>
              <p className="text-gray-600">
                Access and manage your previously processed files and their knowledge graphs.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Search and Filter */}
              <div className="mb-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="relative flex-grow">
                  <input
                    type="text"
                    placeholder="Search files or concepts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:ring-netblue-500 focus:border-netblue-500"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                
                <div className="flex space-x-4">
                  <div className="relative">
                    <select
                      value={filterType || ''}
                      onChange={(e) => setFilterType(e.target.value || null)}
                      className="appearance-none pl-10 pr-8 py-2 border border-gray-200 rounded-md focus:ring-netblue-500 focus:border-netblue-500 bg-white"
                    >
                      <option value="">All Types</option>
                      <option value="pdf">PDF</option>
                      <option value="text">Text</option>
                      <option value="audio">Audio</option>
                      <option value="youtube">YouTube</option>
                    </select>
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                  
                  <button
                    onClick={sortFiles}
                    className="flex items-center px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-1">Date</span>
                    {sortOrder === 'desc' ? '↓' : '↑'}
                  </button>
                </div>
              </div>
              
              {/* File List */}
              {filteredFiles.length > 0 ? (
                <div className="space-y-4">
                  {filteredFiles.map(file => (
                    <div 
                      key={file.id}
                      className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-gray-50 rounded-md">
                            {getFileTypeIcon(file.type)}
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">{file.name}</h3>
                            <div className="flex items-center mt-1 text-sm text-gray-500 space-x-4">
                              <span>{formatDate(file.created)}</span>
                              <span>{file.size}</span>
                              <span className="capitalize">{file.type}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Link
                            to={`/files/${file.id}`}
                            className="p-2 text-netblue-600 hover:bg-netblue-50 rounded-md transition-colors"
                          >
                            View
                          </Link>
                          <button
                            className="p-2 text-gray-600 hover:bg-gray-50 rounded-md transition-colors"
                          >
                            <Download className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(file.id)}
                            className="p-2 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-md transition-colors"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="mt-3 flex flex-wrap gap-2">
                        {file.concepts.map((concept, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-netblue-100 text-netblue-800"
                          >
                            {concept}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No files found</h3>
                  <p className="text-gray-500 mb-6">
                    {searchQuery || filterType 
                      ? "Try adjusting your search or filters"
                      : "Upload your first file to get started"}
                  </p>
                  {!searchQuery && !filterType && (
                    <Link
                      to="/"
                      className="inline-flex items-center px-4 py-2 bg-netblue-600 text-white rounded-md hover:bg-netblue-700 transition-colors"
                    >
                      Upload File
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Files;
