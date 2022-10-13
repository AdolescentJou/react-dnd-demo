import Box from './box';

export default function DragSquare({ dragCardList, dropCardList, updateDragAndDrop }: any) {
  return (
    <div className='card_drag_group'>
      {dragCardList.map((each: any, index: any) => (
        <Box
          index={index}
          {...each}
          key={'drag_card' + index}
          dropCardList={dropCardList}
          updateDragAndDrop={updateDragAndDrop}
        />
      ))}
    </div>
  );
}
