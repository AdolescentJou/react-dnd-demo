export function canMoveKnight(toX: number, toY: number, knightPosition: [number, number]): boolean {
  const [x, y] = knightPosition;
  
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) || (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}
