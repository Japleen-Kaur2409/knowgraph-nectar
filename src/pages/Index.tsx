import { useState } from 'react';
import KnowledgeGraphWrapper from "@/components/KnowledgeGraphWrapper";
import InputSection from "@/components/InputSection";
import EducationalQuotes from "@/components/EducationalQuotes";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-white to-blue-50 pt-16 pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-netblue-600 to-netblue-800 bg-clip-text text-transparent">
                Transform Your Learning with Knowledge Graphs
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Upload your notes and documents to visualize connections and enhance understanding.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg" className="bg-netblue-600 hover:bg-netblue-700">
                  Get Started
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
              <InputSection />
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Interactive Knowledge Graph</h2>
                <p className="text-gray-600 mb-6">
                  Hover over concepts to see connections and sources. Click nodes to explore relationships.
                </p>
                <KnowledgeGraphWrapper />
              </div>
            </div>
          </div>
        </section>

        <EducationalQuotes />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
