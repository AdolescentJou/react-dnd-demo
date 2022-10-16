import { relative } from 'path';
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
    text: 'css',
  },
  {
    id: 3,
    text: 'html',
  },
];

const itemHeight = 48;

const Drag = () => {
  let [selectList, setSelectList] = useState(cardList) as [any[], any];
  let [isDragBegin, setisDragBegin] = useState(false);
  const [{ isDragging }, drag] = useDrag({
    type: 'DragDropBox',
    item: () => {
      setisDragBegin(() => true);
      return {};
    },
    end: () => {
      if (isDragBegin) {
        setisDragBegin(() => false);
      }
    },
    collect: (monitor) => {
      const isDragging = monitor.isDragging();
      return {
        isDragging,
      };
    },
  });

  const updateList = (each: any) => {
    let newSelectList: any[] = [];
    newSelectList = selectList.map((item) => {
      if (item.id === each.id) {
        if (selectList.filter((item) => item.id === each.id && item.selected).length > 0) {
          item.selected = false;
        } else {
          item.selected = true;
        }
      }
      return item;
    });
    setSelectList(newSelectList);
  };

  const isSelectItem = (id: any) => {
    return selectList
      .filter((item) => item.selected)
      .map((item) => item.id)
      .includes(id);
  };

  return (
    <div className='card_drag_box'>
      <div className='card_drag_list' style={{ opacity: isDragBegin && !isDragging ? 0 : 1 }}>
        {cardList.map((each) => (
          <div className='card_drag' key={each.id}>
            {each.text}
            <input type='checkbox' checked={isSelectItem(each.id)} onChange={() => updateList(each)} />
          </div>
        ))}
      </div>
      <div className='card_drag_preview' ref={drag}>
        <div className='card_drag_preview_inner'>
          {selectList.map((each) => (
            <div
              className='card_drag'
              style={{
                opacity: !each.selected ? 0 : isDragging ? 0.2 : 1,
                position: 'absolute',
                top: `${(itemHeight + 12) * (each.id - 1)}px`,
              }}
              key={each.id}
            >
              {each.text}
              <input type='checkbox' checked={isSelectItem(each.id)} onChange={() => updateList(each)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Drag;
