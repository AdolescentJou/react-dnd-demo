import DropPlace from './dropPlace';
export default function DropSquare({ dropCardList, updateDragAndDrop }: any) {

  return (
    <div className='card_drop_group'>
      {dropCardList.map((each: any, index: number) => (
        <DropPlace key={'drop_place' + index} {...each} index={index} updateDragAndDrop={updateDragAndDrop}/>
      ))}
    </div>
  );
}
