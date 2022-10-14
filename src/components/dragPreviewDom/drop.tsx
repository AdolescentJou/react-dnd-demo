import { useDrop } from 'react-dnd';

export default function Drop() {
  const [{ isOver }, drop] = useDrop({
    accept: 'DragDropBox',
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      className='card_drop'
      ref={drop}
      style={{ backgroundColor: isOver ? 'rgba(7,193,96,0.3)' : 'transparent' }}
    ></div>
  );
}
