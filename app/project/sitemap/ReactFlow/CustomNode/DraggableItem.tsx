import React, { forwardRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemType = 'ITEM';

const DraggableItem = forwardRef(({ item, index, moveItem, nodeId, setItems, updateNodeData }, ref) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index, nodeId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemType,
    hover(draggedItem) {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  // 阻止事件冒泡，防止和 React Flow 的拖拽冲突
  const handleDragStart = (e) => {
    console.log('23234234234')
    e.stopPropagation();  // 阻止事件冒泡到 React Flow 画布
  };

  return (
    <li
      ref={(node) => drag(drop(node))}  // 确保 drag 和 drop 正确应用
      onDragStart={handleDragStart}     // 使用 onDragStart 来阻止事件冒泡
      className={`flex justify-between items-center border p-2 mb-1 bg-gray-100 ${isDragging ? 'opacity-50' : ''}`}
    >
      <span>{item}</span>
      <div className="flex">
        <button
          onClick={() => {
            const newValue = prompt('Edit item', item);
            if (newValue) {
              setItems((prev) => {
                const updatedItems = [...prev];
                updatedItems[index] = newValue;
                updateNodeData(nodeId, { items: updatedItems });
                return updatedItems;
              });
            }
          }}
          className="text-xs p-1 bg-yellow-300 rounded mr-1"
        >
          Edit
        </button>
        <button
          onClick={() => {
            setItems((prev) => {
              const updatedItems = prev.filter((_, i) => i !== index);
              updateNodeData(nodeId, { items: updatedItems });
              return updatedItems;
            });
          }}
          className="text-xs p-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </li>
  );
});

export default DraggableItem;
