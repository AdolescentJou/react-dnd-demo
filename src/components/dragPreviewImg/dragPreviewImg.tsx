import { CSSProperties, FC, useRef, useState } from 'react';
import { useDrag, DragPreviewImage } from 'react-dnd';
import apple from '../../assets/apple.png';

const DragPreviewImg = () => {
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'DragDropBox',
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <>
      <DragPreviewImage connect={preview} src={apple} />
      <div
        className='card_drag'
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        drag item prview an apple
      </div>
    </>
  );
};
export default DragPreviewImg;
