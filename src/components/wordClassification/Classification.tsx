import React from 'react';
import { useDrop } from 'react-dnd';

function Classification({ type, title }: any) {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: type,
      drop(_item: any, monitor: any) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(delta.x);
        const top = Math.round(delta.y);
        return { top, left };
      },
      canDrop: (_item, monitor) => {
        const item = monitor.getItem() as any;
        return item.type === type;
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [],
  );

  return (
    <div className='word_drop_container'>
      <div className='word_drop_text'>{title}</div>
      <div
        className='word_drop'
        ref={drop}
        style={{ backgroundColor: canDrop ? 'rgba(7,193,96,0.3)' : 'transparent' }}
      ></div>
    </div>
  );
}

export default Classification;
