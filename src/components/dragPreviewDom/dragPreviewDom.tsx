import { useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

const DragPreviewDom = () => {
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'DragDropBox',
    collect: (monitor) => {
      const isDragging = monitor.isDragging();
      return {
        isDragging,
      };
    },
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true }); // 隐藏拖拽dom
  }, []);

  return (
    <div className='card_drag_box'>
      <div
        className='card_drag'
        ref={drag}
        style={{
          opacity: isDragging ? 0 : 1,
          height: isDragging ? 0 : '',
          position: 'relative',
        }}
      >
        拖拽Dom预览
      </div>
    </div>
  );
};
export default DragPreviewDom;
