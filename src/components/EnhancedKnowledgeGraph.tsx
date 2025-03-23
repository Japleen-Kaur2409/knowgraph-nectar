
import { useState, useCallback, useMemo } from 'react';
import ReactFlow, {
  Controls,
  Background,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  NodeMouseHandler,
  NodeProps,
  NodeChange,
  EdgeChange,
} from 'reactflow';
import 'reactflow/dist/style.css';

interface GraphNode {
  id: string;
  label: string;
  source?: string;
  description?: string;
}

interface GraphConnection {
  source: string;
  target: string;
  label?: string;
}

interface KnowledgeGraphProps {
  nodes?: GraphNode[];
  connections?: GraphConnection[];
}

// Custom node component with hover functionality
const ConceptNode = ({ data }: NodeProps) => {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-gray-200 hover:border-netblue-500 transition-colors">
      <div className="font-bold">{data.label}</div>
      {data.description && (
        <div className="mt-2 text-xs text-gray-500">{data.description}</div>
      )}
      {data.source && (
        <div className="mt-2 text-xs text-gray-400">Source: {data.source}</div>
      )}
    </div>
  );
};

const nodeTypes = {
  concept: ConceptNode,
};

const defaultNodes: GraphNode[] = [
  { id: '1', label: 'Main Topic', description: 'Central concept of the knowledge graph' },
  { id: '2', label: 'Related Concept 1', source: 'Source A', description: 'First related concept' },
  { id: '3', label: 'Related Concept 2', source: 'Source B', description: 'Second related concept' },
  { id: '4', label: 'Related Concept 3', source: 'Source C', description: 'Third related concept' },
  { id: '5', label: 'Sub-concept 1', source: 'Source A', description: 'A subconcept of Related Concept 1' },
];

const defaultConnections: GraphConnection[] = [
  { source: '1', target: '2', label: 'connects to' },
  { source: '1', target: '3', label: 'relates to' },
  { source: '1', target: '4', label: 'influences' },
  { source: '2', target: '5', label: 'contains' },
];

const EnhancedKnowledgeGraph = ({ nodes = defaultNodes, connections = defaultConnections }: KnowledgeGraphProps) => {
  // Transform the input data to ReactFlow format
  const initialNodes: Node[] = useMemo(() => 
    nodes.map((node, index) => ({
      id: node.id,
      type: 'concept',
      data: { ...node },
      position: { 
        x: index === 0 ? 250 : 100 + Math.random() * 300, 
        y: index === 0 ? 150 : 100 + Math.random() * 300 
      },
    })), 
    [nodes]
  );

  const initialEdges: Edge[] = useMemo(() => 
    connections.map((connection, index) => ({
      id: `e${index}`,
      source: connection.source,
      target: connection.target,
      label: connection.label,
      animated: false,
      style: { stroke: '#888' },
    })),
    [connections]
  );

  const [reactFlowNodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [reactFlowEdges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [highlightedEdges, setHighlightedEdges] = useState<string[]>([]);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onNodeMouseEnter: NodeMouseHandler = useCallback((_, node) => {
    // Find all edges connected to this node
    const connectedEdgeIds = reactFlowEdges
      .filter(edge => edge.source === node.id || edge.target === node.id)
      .map(edge => edge.id);
    
    setHighlightedEdges(connectedEdgeIds);
    
    // Highlight the connected edges
    setEdges(edges => 
      edges.map(edge => ({
        ...edge,
        animated: connectedEdgeIds.includes(edge.id),
        style: {
          ...edge.style,
          stroke: connectedEdgeIds.includes(edge.id) ? '#3B82F6' : '#888',
          strokeWidth: connectedEdgeIds.includes(edge.id) ? 2 : 1,
        },
      }))
    );
  }, [reactFlowEdges, setEdges]);

  const onNodeMouseLeave: NodeMouseHandler = useCallback(() => {
    // Reset all edges
    setHighlightedEdges([]);
    setEdges(edges => 
      edges.map(edge => ({
        ...edge,
        animated: false,
        style: {
          ...edge.style,
          stroke: '#888',
          strokeWidth: 1,
        },
      }))
    );
  }, [setEdges]);

  return (
    <div className="w-full h-[500px] border border-gray-200 rounded-lg">
      <ReactFlow
        nodes={reactFlowNodes}
        edges={reactFlowEdges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeMouseEnter={onNodeMouseEnter}
        onNodeMouseLeave={onNodeMouseLeave}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap 
          nodeStrokeColor={(n) => {
            if (n.type === 'concept') return '#3B82F6';
            return '#000';
          }}
          nodeColor={(n) => {
            if (n.type === 'concept') return '#EFF6FF';
            return '#fff';
          }}
        />
      </ReactFlow>
    </div>
  );
};

export default EnhancedKnowledgeGraph;
