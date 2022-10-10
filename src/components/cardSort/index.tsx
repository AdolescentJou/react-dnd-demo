import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Card from './card';
import './index.scss';

const CARD_INIT_ARR = [
  {
    id:0,
    text: '000',
  },
  {
    id:1,
    text: '111',
  },
  {
    id:2,
    text: '222',
  },
  {
    id:3,
    text: '333',
  },
  {
    id:4,
    text: '444',
  },
];

class CardSort extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      cardList: [],
    };
    this.changePosition = this.changePosition.bind(this);
  }

  componentDidMount() {
    this.setState({ cardList: CARD_INIT_ARR });
  }

  changePosition(dragIndex: string | number, hoverIndex: string | number) {
    let data = this.state.cardList.slice();
    let temp = data[dragIndex];
    // 交换位置
    data[dragIndex] = data[hoverIndex];
    data[hoverIndex] = temp;
    this.setState({ cardList: data });
  }

  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <div className='card-container'>
          <h2>卡片排序</h2>
          <div className='card_drag_group'>
            {this.state.cardList.map((each: any, index: any) => (
              <Card changePosition={this.changePosition} index={index} {...each} key={'drag_card' + index} />
            ))}
          </div>
        </div>
      </DndProvider>
    );
  }
}

export default CardSort;
