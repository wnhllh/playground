import React, { useState, useCallback } from 'react';
import DraggableItem from './DraggableItem';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const CustomNode = ({ data, id, updateNodeData }) => {
  const [items, setItems] = useState(data.items);

  const moveItem = useCallback((fromIndex, toIndex) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(fromIndex, 1);
    updatedItems.splice(toIndex, 0, movedItem);
    setItems(updatedItems);
    updateNodeData(id, { items: updatedItems });
  }, [items, setItems, updateNodeData, id]);

  const addItem = () => {
    const newItem = prompt('Enter new item');
    if (newItem) {
      const updatedItems = [...items, newItem];
      setItems(updatedItems);
      updateNodeData(id, { items: updatedItems });
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-3 border rounded bg-white shadow-lg">
        <h4 className="font-bold mb-2">{data.label}</h4>
        <ul>
          {items.map((item, index) => (
            <DraggableItem
              key={index}
              item={item}
              index={index}
              moveItem={moveItem}
              nodeId={id}
              setItems={setItems}
              updateNodeData={updateNodeData}
            />
          ))}
        </ul>
        <button onClick={addItem} className="text-xs p-1 bg-blue-500 text-white rounded">Add Item</button>
      </div>
    </DndProvider>
  );
};

export default CustomNode;
