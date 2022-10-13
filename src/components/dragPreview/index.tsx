import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragPreviewImg from './dragPreviewImg';
import DragPreviewDom from './dragPreviewDom';
import Drop from './drop';
import './index.scss';

class DragPreview extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <div className='drag-preview'>
          <h2>拖拽预览</h2>
          <Drop />
          <div className='drag-group'>
            <DragPreviewImg />
            <DragPreviewDom />
          </div>
        </div>
      </DndProvider>
    );
  }
}

export default DragPreview;
