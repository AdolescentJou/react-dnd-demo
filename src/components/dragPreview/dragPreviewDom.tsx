import { CSSProperties, FC, useRef, useState } from 'react';
import { useDrag } from 'react-dnd';

function throttle(fn: any, delay: number) {
  let previous = 0;
  return function (this: void, ...args: any): any {
    let that = this;
    let now: number = new Date().getTime();
    if (now - previous > delay) {
      fn.apply(that, args);
      previous = now;
    }
  };
}

const DragPreviewDom = () => {
  const [offsetBunce, setOffsetBunce] = useState({ top: 0, left: 0 });
  const [{ isDragging }, drag] = useDrag({
    type: 'DragDropBox',
    collect: (monitor) => {
      const isDragging = monitor.isDragging();
      if (isDragging) {
        const offset = monitor.getDifferenceFromInitialOffset() || {
          y: 0,
          x: 0,
        };
        throttle(() => {
          setOffsetBunce((offsetBunce) => {
            return {
              top: offsetBunce.top + offset.y,
              left: offsetBunce.top + offset.x,
            };
          });
        },0);
      }

      return {
        isDragging,
      };
    },
  });

  console.log(offsetBunce);
  

  return (
    <div className='card_drag_box'>
      <div
        className='card_drag'
        ref={drag}
        style={{
          opacity: isDragging ? 0 : 1,
          position: 'relative',
          top: offsetBunce.top + 'px',
          left: offsetBunce.left + 'px',
          // backgroundColor: isDragging ? 'black' : 'transparent',
        }}
      >
        {isDragging ? 'drag item prview Dom' : '111'}
      </div>

      <div
        className='card_drag'
        style={{
          opacity: 0.5,
          position: 'absolute',
          top: 0,
          left: 0,
          display: isDragging ? 'block' : 'none',
        }}
      >
        drag item prview Dom
      </div>
    </div>
  );
};
export default DragPreviewDom;
