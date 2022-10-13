import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragSquare from './dragSquare';
import DropSquare from './dropSquare';
import './index.scss';

const CARD_INIT_ARR = [
  {
    id: 1,
    text: '000',
  },
  {
    id: 2,
    text: '111',
  },
  {
    id: 3,
    text: '222',
  },
  {
    id: 4,
    text: '333',
  },
  {
    id: 5,
    text: '444',
  },
];

const INIT_DROP = {
  innerDrag: null,
} as any;

const INIT_DROP_LIST = new Array(5).fill(0).map((_item, index) => {
  return { ...INIT_DROP, id: index + 1 };
});

class CardSort extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      dragCardList: CARD_INIT_ARR,
      dropCardList: INIT_DROP_LIST,
    };
    this.updateDragAndDrop = this.updateDragAndDrop.bind(this);
  }

  updateDragAndDrop(dragId: any, dropId?: any) {
    let { dragCardList, dropCardList } = this.state;
    let moveDragItem: any = null;
    if (!dropId) {
      if (dragCardList.length === 5) return;

      [moveDragItem, dropCardList] = this.removeDropItemById(dragId, dropCardList);

      dragCardList.push(moveDragItem);
      dragCardList = dragCardList.sort((pre: any, next: any) => pre.id - next.id);
    } else {
      let beginDragId = -1;
      [moveDragItem, dragCardList] = this.removeDragItemById(dragId, dragCardList);

      if (!moveDragItem) {
        [moveDragItem, dropCardList, beginDragId] = this.removeDropItemById(dragId, dropCardList);
      }

      dropCardList = dropCardList.map((item: { id: any; innerDrag: any }, _index: any, arr: any) => {
        if (item.id === dropId) {
          if (item.innerDrag) {
            arr[beginDragId].innerDrag = item.innerDrag;
          }
          item.innerDrag = moveDragItem;
        }
        return item;
      });
    }
    this.setState({ dragCardList, dropCardList });
  }

  removeDropItemById(itemId: any, dropCardList: any) {
    let moveDragItem: any = null;
    let dropId = -1;
    let newDropCardList = dropCardList.map((item: { id: any; innerDrag: any }, index: number) => {
      if (item.innerDrag && item.innerDrag.id === itemId) {
        moveDragItem = item.innerDrag;
        dropId = index;
        item.innerDrag = null;
      }
      return item;
    });
    return [moveDragItem, newDropCardList, dropId];
  }

  removeDragItemById(itemId: any, dragCardList: any) {
    let moveDragItem: any = null;
    dragCardList = dragCardList.filter((item: any) => {
      if (item.id === itemId) {
        moveDragItem = item;
        return false;
      }
      return true;
    });
    return [moveDragItem, dragCardList];
  }

  render() {
    const { dragCardList, dropCardList } = this.state;
    return (
      <DndProvider backend={HTML5Backend}>
        <div className='scard-container'>
          <h2>拖拽卡片排序</h2>
          <DropSquare dropCardList={dropCardList} updateDragAndDrop={this.updateDragAndDrop} />
          <DragSquare dragCardList={dragCardList} updateDragAndDrop={this.updateDragAndDrop} />
        </div>
      </DndProvider>
    );
  }
}

export default CardSort;
