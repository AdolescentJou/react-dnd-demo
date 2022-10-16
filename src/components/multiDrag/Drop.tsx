import { useCallback } from 'react';
import { useDrop } from 'react-dnd';
export default function DropSquare({ dropCardList, updateDragAndDrop }: any) {
  const [{ canDrop }, drop] = useDrop({
    accept: 'DragDropBox',

    canDrop: (_item, monitor) => {
      return true;
    },
    collect: (monitor) => ({
      canDrop: !!monitor.canDrop(),
    }),
  });


  return (
    <div className='card_drop_group' ref={drop}>
    </div>
  );
}
