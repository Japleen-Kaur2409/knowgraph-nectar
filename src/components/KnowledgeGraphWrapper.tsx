
import { Suspense, lazy } from 'react';
import { Card, CardContent } from './ui/card';

// Lazy-load the EnhancedKnowledgeGraph to avoid loading the heavy library unless needed
const EnhancedKnowledgeGraph = lazy(() => import('./EnhancedKnowledgeGraph'));

const KnowledgeGraphWrapper = () => {
  return (
    <Card className="w-full shadow-md">
      <CardContent className="p-0 overflow-hidden">
        <Suspense fallback={<div className="p-8 text-center">Loading knowledge graph...</div>}>
          <EnhancedKnowledgeGraph />
        </Suspense>
      </CardContent>
    </Card>
  );
};

export default KnowledgeGraphWrapper;
