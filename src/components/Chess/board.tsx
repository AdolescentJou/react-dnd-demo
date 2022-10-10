import React from 'react';
import Knight from './knight';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BoardSquare from './boardSquare';

function renderSquare(i: any, knightPosition: any, moveKnight: any) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <BoardSquare x={x} y={y} knightPosition={knightPosition} moveKnight={moveKnight}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  );
}

function renderPiece(x: any, y: any, knightPosition = []) {
  const [knightX, knightY] = knightPosition;
  if (x === knightX && y === knightY) {
    return <Knight />;
  }
}

export default function Board({ knightPosition, moveKnight }: any) {
  const squares = [];

  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition, moveKnight));
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        key={knightPosition.toString()} // chrome浏览器第一次拖拽后失效
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {squares}
      </div>
    </DndProvider>
  );
}
