import { useEffect, useState } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

const cardList = [
  {
    id: 1,
    text: 'js',
  },
  {
    id: 2,
    text: 'csss',
  },
  {
    id: 3,
    text: 'html',
  },
];

const Drag = () => {
  const [selectList, setSelectList] = useState([-1]);
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'DragDropBox',
    collect: (monitor) => {
      const isDragging = monitor.isDragging();
      return {
        isDragging,
      };
    },
  });

  const updateList = (id: any) => {
    let newSelectList = [];
    if (selectList.includes(id)) {
      newSelectList = selectList.filter((item) => item !== id);
    } else {
      newSelectList = [...selectList, id];
    }
    setSelectList(newSelectList);
  };

  return (
    <div className='card_drag_box'>
      <div
        className='card_drag_list'
        ref={preview}
        style={{
          opacity: isDragging ? 0.2 : 1,
        }}
      >
        {cardList.map((each) => (
          <div
            className='card_drag'
            ref={drag}
            style={{
              opacity: isDragging ? 0.2 : 1,
            }}
            key={each.id}
          >
            {each.text}
            <input type='checkbox' onChange={() => updateList(each.id)} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Drag;
