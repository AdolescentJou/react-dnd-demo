import React from 'react';
import Square from './square';
import { ItemTypes } from './type';
import { useDrop } from 'react-dnd';
import { canMoveKnight } from './utils';

function Overlay({ color }: any) {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }}
    />
  );
}

function BoardSquare({ x, y, knightPosition, children, moveKnight }: any) {
  const black = (x + y) % 2 === 1;
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      drop: (item, monitor) => {
        moveKnight(x, y);
      },
      canDrop: () => canMoveKnight(x, y, knightPosition),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [x, y],
  );

  return (
    <div
      ref={drop}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Square black={black}>{children}</Square>
      {isOver && !canDrop && <Overlay color='red' />}
      {!isOver && canDrop && <Overlay color='yellow' />}
      {isOver && canDrop && <Overlay color='green' />}
    </div>
  );
}

export default BoardSquare;
