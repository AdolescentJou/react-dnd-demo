import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragPreviewImg from './dragPreviewImg';
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
          <h2>拖拽图片预览</h2>
          <DragPreviewImg />
        </div>
      </DndProvider>
    );
  }
}

export default DragPreview;
