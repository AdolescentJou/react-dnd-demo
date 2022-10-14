import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragPreviewDom from './Drag';
import './index.scss';

class MultiDrag extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <div className='multi-drag-container'>
          <h2>批量拖拽</h2>
          <DragPreviewDom />
        </div>
      </DndProvider>
    );
  }
}

export default MultiDrag;
