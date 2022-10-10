import { CSSProperties, FC, useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const Card = ({ text, id, index, changePosition }: any) => {
  const ref = useRef(null);
  const [hoverId, setHoverId] = useState(id);
  // 因为没有定义收集函数，所以返回值数组第一项不要
  const [, drop] = useDrop({
    accept: 'DragDropBox',
    hover: (item: any, monitor) => {
      if (!ref.current) return;
      let dragIndex = item.index;
      let hoverIndex = index;
      console.log('dragIndex', dragIndex, 'hoverIndex', hoverIndex);

      if (dragIndex === hoverIndex) return; // 如果回到自己的坑，那就什么都不做
      changePosition(dragIndex, hoverIndex); // 调用传入的方法完成交换
      setHoverId(() => item.index);
      item.index = hoverIndex; // 将当前当前移动到Box的index赋值给当前拖动的box，不然会出现两个盒子疯狂抖动！
    },
    drop: (item, monitor) => {},
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'DragDropBox',
    item: { id, index },
    end: () => {},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(), // css样式需要
    }),
  });

  return (
    <div
      className='card_drag'
      ref={drag(drop(ref)) as any}
      style={{
        opacity: isDragging && id === hoverId ? 0.3 : 1,
      }}
    >
      {text}
    </div>
  );
};
export default Card;
