import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Classification from './Classification';
import './index.scss';
import { WORD_TYPE } from './type';
import Word from './word';

const WORDS = [
  {
    text: 'interesting',
    type: WORD_TYPE.adj,
  },
  {
    text: 'interest',
    type: WORD_TYPE.verb,
  },
  {
    text: 'forget',
    type: WORD_TYPE.adj,
  },
  {
    text: 'interested',
    type: WORD_TYPE.adj,
  },
];

const Classifications = [
  {
    title: '形容词',
    type: WORD_TYPE.adj,
  },
  {
    title: '动词',
    type: WORD_TYPE.verb,
  },
];

class WordClassification extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <div className='word-container'>
          <h2>任意拖拽</h2>
          <div className='word_drop_group'>
            {Classifications.map((each, index) => (
              <Classification {...each} key={'classification' + index} />
            ))}
          </div>

          <div className='word_drag_group'>
            {WORDS.map((each, index) => {
              let newEach = { ...each, id: 'drag' + index };
              return <Word {...newEach} key={'word' + index} />;
            })}
          </div>
        </div>
      </DndProvider>
    );
  }
}

export default WordClassification;
