import { useDrop } from 'react-dnd';

export default function Drop() {
  const [{ isOver }, drop] = useDrop({
    accept: 'DragDropBox',
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    drop(item: any, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset() as {
        x: number;
        y: number;
      };

      let left = Math.round(item.left + delta.x);
      let top = Math.round(item.top + delta.y);
      return { left, top };
    },
  });

  return (
    <div
      className='card_drop'
      ref={drop}
      style={{ backgroundColor: isOver ? 'rgba(7,193,96,0.3)' : 'transparent' }}
    ></div>
  );
}
