import { CSSProperties, FC, useRef, useState } from 'react';
import { useDrag, DragPreviewImage } from 'react-dnd';
import yanlingji from '../../assets/yanlingji.png';

const DragPreviewImg = () => {
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'DragDropBox',
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <>
      <DragPreviewImage connect={preview} src={yanlingji} />
      <div
        className='card_drag'
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        drag item prview Img
      </div>
    </>
  );
};
export default DragPreviewImg;
