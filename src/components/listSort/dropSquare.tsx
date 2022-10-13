import { useCallback } from 'react';
import { useDrop } from 'react-dnd';
import Card from './card';
import ItemTypes from './type';
import update from 'immutability-helper';
export default function DropSquare({ dropCardList, updateDragAndDrop }: any) {
  const [{ canDrop }, drop] = useDrop({
    accept: ItemTypes.Card,

    canDrop: (_item, monitor) => {
      return true;
    },
    collect: (monitor) => ({
      canDrop: !!monitor.canDrop(),
    }),
  });

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      console.log('dragIndex',dragIndex,'hoverIndex',hoverIndex);
      
      /**
       * 1、如果此时拖拽的组件是 Box 组件，则 dragIndex 为 undefined，则此时修改，则此时修改 cardList 中的占位元素的位置即可
       * 2、如果此时拖拽的组件是 Card 组件，则 dragIndex 不为 undefined，此时替换 dragIndex 和 hoverIndex 位置的元素即可
       */
      if (dragIndex === undefined) {
        const lessIndex = dropCardList.findIndex((item: any) => item.id === -1);
        updateDragAndDrop(
          update(dropCardList, {
            $splice: [
              [lessIndex, 1],
              [hoverIndex, 0, { bg: 'aqua', category: '放这里', id: -1 }],
            ],
          }),
        );
      } else {
        const dragCard = dropCardList[dragIndex];
        updateDragAndDrop(
          update(dropCardList, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          }),
        );
      }
      // eslint-disable-next-line
    },
    [dropCardList, updateDragAndDrop],
  );

  return (
    <div className='card_drop_group' ref={drop}>
      {dropCardList.length > 0 &&
        dropCardList.map((each: any, index: number) => (
          <Card
            key={'drop_place' + index}
            {...each}
            index={index}
            dropCardList={dropCardList}
            updateDragAndDrop={updateDragAndDrop}
            moveCard={moveCard}
          />
        ))}
    </div>
  );
}
