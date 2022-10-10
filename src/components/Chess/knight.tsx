import type { CSSProperties, FC } from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './type';

const Knight: FC = () => {
  const [{ isDragging }, drag]: any = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <span
      ref={drag}
      style={{
        opacity: isDragging ? 0 : 1,
        zIndex:5,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'unset', // chrome浏览器会带上父级元素的背景色
      }}
    >
      ♘
    </span>
  );
};
export default Knight;
