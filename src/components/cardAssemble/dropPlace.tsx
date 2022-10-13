import { useDrop } from 'react-dnd';
import DragCard from './dragCard';

export default function DropPlace({ innerDrag, updateCardList, index, id, updateDragAndDrop }: any) {
  const [{ isOver }, drop] = useDrop({
    accept: 'DragDropBox',
    drop: (item: any, monitor) => {
      const dragIndex = item.id;
      const dropIndex = id;
      updateDragAndDrop(dragIndex, dropIndex);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div className='card_drop' ref={drop} style={{ backgroundColor: isOver ? 'rgba(7,193,96,0.3)' : 'transparent' }}>
      {innerDrag && <DragCard {...innerDrag} isHovering={isOver} updateDragAndDrop={updateDragAndDrop} />}
    </div>
  );
}
