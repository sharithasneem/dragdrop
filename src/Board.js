import React from 'react';
import Knight from './Knight';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BoardSquare from './boardSquare';
import Square from './Square';


function renderSquare(i, knightPosition) {
  const x = i % 8
  const y = Math.floor(i / 8)
  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  )
}

function renderPiece(x, y, [knightX, knightY]) {
  if (x === knightX && y === knightY) {
    return <Knight />
  }
}

function Board({knightPosition}) 
{
  const squares=[]
  for (let i=0; i<64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }
  return <DndProvider backend={HTML5Backend}>
    <div
      style={{
        width: '100vh',
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '280px',
        marginRight: '260px',
        marginTop:'50px',
        marginBottom: '50px',
        border: '1.2px solid',

        
      }}
    >
      {squares}
    </div>
    </DndProvider>
  
}

export default Board
