import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragPreviewDom from './dragPreviewDom';
import { CustomDragLayer } from './customDragerLayer';
import './index.scss';

class DragPreview extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <div className='drag-preview-dom'>
          <h2>拖拽Dom预览</h2>
          <DragPreviewDom />
          <CustomDragLayer />
        </div>
      </DndProvider>
    );
  }
}

export default DragPreview;
