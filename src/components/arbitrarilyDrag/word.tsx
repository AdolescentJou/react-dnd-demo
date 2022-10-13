import { CSSProperties, FC, useRef, useState } from 'react';
import { useDrag } from 'react-dnd';

const Word: FC = ({ type, text, id, ...props }: any) => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [{ isDragging }, drag]: any = useDrag(() => ({
    type,
    item: { id, type },
    end(item, monitor) {
      let top = 0,
        left = 0;
      if (monitor.didDrop()) {
        const dropRes = monitor.getDropResult() as any; //获取拖拽对象所处容器的数据
        if (dropRes) {
          top = dropRes.top;
          left = dropRes.left;
        }
        setOffsetX((offsetX) => offsetX + left);
        setOffsetY((offsetY) => offsetY + top);
      } else {
        setOffsetX(0);
        setOffsetY(0);
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      className='word_drag'
      id={id}
      ref={drag}
      style={{
        opacity: isDragging ? 0 : 1,
        top: `${offsetY}px`,
        left: `${offsetX}px`,
      }}
    >
      {text}
    </div>
  );
};
export default Word;
