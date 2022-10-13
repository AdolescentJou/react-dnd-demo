import DragCard from './dragCard';

export default function DragSquare({ dragCardList, updateDragAndDrop }: any) {
  return (
    <div className='card_drag_group'>
      {dragCardList.map((each: any, index: any) => (
        <DragCard index={index} {...each} key={'drag_card' + index} updateDragAndDrop={updateDragAndDrop}/>
      ))}
    </div>
  );
}
