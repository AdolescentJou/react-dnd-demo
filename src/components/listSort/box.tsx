import React from 'react';
import { DragSourceMonitor, useDrag } from 'react-dnd';
import ItemType from './type';

let id = 1;

const Box = ({ bg, text, dropCardList, updateDragAndDrop }: any) => {
  const style: React.CSSProperties = {
    background: bg,
  };

  const box = {
    bg,
    text,
  };

  const [{ isDragging }, drag] = useDrag({
    type: ItemType.Card,
    item() {
      //在拖动操作开始时触发
      const useless = dropCardList.find((item: any) => item.id === -1);
      // 拖拽开始时，向 cardList 数据源中插入一个占位的元素，如果占位元素已经存在，不再重复插入
      if (!useless) {
        updateDragAndDrop([{ bg: 'aqua', text: '放这里', id: -1 }, ...dropCardList]);
      }

      return box;
    },
    end(_: unknown, monitor: DragSourceMonitor) {
      const uselessIndex = dropCardList.findIndex((item: any) => item.id === -1);

      /**
       * 拖拽结束时，判断是否将拖拽元素放入了目标接收组件中
       *  1、如果是，则使用真正传入的 box 元素代替占位元素
       *  2、如果否，则将占位元素删除
       */

      if (monitor.didDrop()) {
        dropCardList.splice(uselessIndex, 1, { ...monitor.getItem(), id: id++ });
      } else {
        dropCardList.splice(uselessIndex, 1);
      }
      // 更新 cardList 数据源
      updateDragAndDrop(dropCardList);
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div ref={drag} style={style} className={'card_drag'}>
      {text}
    </div>
  );
};

export default Box;
