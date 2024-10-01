"use client";
// import React, { useState } from 'react';
// import {
//     ReactFlow,
//     useNodesState,
//     useEdgesState,
//     addEdge,
//     MiniMap,
//     Controls,
//     Background,
//     BackgroundVariant
// } from '@xyflow/react';
// import '@xyflow/react/dist/style.css';

// import CustomNode from './CustomNode';

// // 使用之前的初始数据
// const initialNodes = [
//     {
//         id: '1',
//         type: 'customNode',
//         data: {
//             label: 'Landing page',
//             items: [
//                 "Dashboard of management Webapp",
//                 "Camera views of each online Camera",
//                 "Profile page",
//                 "Add/Del device"
//             ]
//         },
//         position: { x: 100, y: 50 },
//     },
//     // {
//     //     id: '2',
//     //     type: 'customNode',
//     //     data: {
//     //         label: 'Settings page',
//     //         items: [
//     //             "User settings",
//     //             "System settings",
//     //             "Notifications"
//     //         ]
//     //     },
//     //     position: { x: 350, y: 200 },
//     // },
//     // {
//     //     id: '3',
//     //     type: 'customNode',
//     //     data: {
//     //         label: 'Reports page',
//     //         items: [
//     //             "Generate report",
//     //             "View history",
//     //             "Export data"
//     //         ]
//     //     },
//     //     position: { x: 350, y: 400 },
//     // },
//     // {
//     //     id: '4',
//     //     type: 'customNode',
//     //     data: {
//     //         label: 'Analytics page',
//     //         items: [
//     //             "Real-time analysis",
//     //             "Data visualization"
//     //         ]
//     //     },
//     //     position: { x: 600, y: 300 },
//     // },
//     // {
//     //     id: '5',
//     //     type: 'customNode',
//     //     data: {
//     //         label: 'Help page',
//     //         items: [
//     //             "FAQ",
//     //             "Contact support",
//     //             "User guides"
//     //         ]
//     //     },
//     //     position: { x: 100, y: 400 },
//     // },
// ];

// const initialEdges = [
//     { id: 'e1-2', source: '1', target: '2' },
//     { id: 'e1-3', source: '1', target: '3' },
//     { id: 'e2-4', source: '2', target: '4' },
//     { id: 'e3-5', source: '3', target: '5' },
// ];

// const nodeTypes = { customNode: CustomNode };

// export default () => {
//   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

//   // 更新节点数据的回调
//   const updateNodeData = (id: string, newData: any) => {
//     setNodes((nds) =>
//       nds.map((node) => node.id !== id ? node : {
//         ...node,
//         data: { ...node.data, ...newData }
//     }));
//   };

//   return (
//     <div style={{ height: '100vh', width: '100%' }}>
//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         nodeTypes={{
//           customNode: (props) => (
//             <CustomNode {...props} updateNodeData={updateNodeData} />
//           ),
//         }}
//         fitView
//         fitViewOptions={{ padding: 0.2 }}
//         nodesConnectable={false}
//         // nodesDraggable={false}
//         panOnDrag={true} // 启用平移功能来查看整个图
//         zoomOnScroll={true} // 启用缩放功能
//         zoomOnPinch={true} // 启用缩放功能
//         zoomOnDoubleClick={true} // 启用双击缩放
//       >
//         {/* <MiniMap />
//         <Controls /> */}
//         <Background color="black" variant={BackgroundVariant.Dots} size={0.6}/>
//       </ReactFlow>
//     </div>
//   );
// }

const position = { x: 0, y: 0 };
const edgeType = 'smoothstep';

export const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'input' },
    position,
  },
  {
    id: '2',
    data: { label: 'node 2' },
    position,
  },
  {
    id: '2a',
    data: { label: 'node 2a' },
    position,
  },
  {
    id: '2b',
    data: { label: 'node 2b' },
    position,
  },
  {
    id: '2c',
    data: { label: 'node 2c' },
    position,
  },
  {
    id: '2d',
    data: { label: 'node 2d' },
    position,
  },
  {
    id: '3',
    data: { label: 'node 3' },
    position,
  },
  {
    id: '4',
    data: { label: 'node 4' },
    position,
  },
  {
    id: '5',
    data: { label: 'node 5' },
    position,
  },
  {
    id: '6',
    type: 'output',
    data: { label: 'output' },
    position,
  },
  { id: '7', type: 'output', data: { label: 'output' }, position },
];

export const initialEdges = [
  { id: 'e12', source: '1', target: '2', type: edgeType, animated: true },
  { id: 'e13', source: '1', target: '3', type: edgeType, animated: true },
  { id: 'e22a', source: '2', target: '2a', type: edgeType, animated: true },
  { id: 'e22b', source: '2', target: '2b', type: edgeType, animated: true },
  { id: 'e22c', source: '2', target: '2c', type: edgeType, animated: true },
  { id: 'e2c2d', source: '2c', target: '2d', type: edgeType, animated: true },
  { id: 'e45', source: '4', target: '5', type: edgeType, animated: true },
  { id: 'e56', source: '5', target: '6', type: edgeType, animated: true },
  { id: 'e57', source: '5', target: '7', type: edgeType, animated: true },
];


import React, { useCallback } from 'react';
import {
  ReactFlow,
  addEdge,
  ConnectionLineType,
  Panel,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import dagre from 'dagre';


import '@xyflow/react/dist/style.css';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 36;

const getLayoutedElements = (nodes, edges, direction = 'TB') => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const newNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    const newNode = {
      ...node,
      targetPosition: isHorizontal ? 'left' : 'top',
      sourcePosition: isHorizontal ? 'right' : 'bottom',
      // We are shifting the dagre node position (anchor=center center) to the top left
      // so it matches the React Flow node anchor point (top left).
      position: {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };

    return newNode;
  });

  return { nodes: newNodes, edges };
};

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges,
);

const LayoutFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          { ...params, type: ConnectionLineType.SmoothStep, animated: true },
          eds,
        ),
      ),
    [],
  );
  const onLayout = useCallback(
    (direction) => {
      const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(nodes, edges, direction);

      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);
    },
    [nodes, edges],
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      connectionLineType={ConnectionLineType.SmoothStep}
      fitView
      colorMode='dark'
    >
      <Panel position="top-right">
        <button onClick={() => onLayout('TB')}>vertical layout</button>
        <button onClick={() => onLayout('LR')}>horizontal layout</button>
      </Panel>
    </ReactFlow>
  );
};

export default LayoutFlow;
