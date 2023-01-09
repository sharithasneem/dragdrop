import React from 'react'
import Knight from './Knight'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Square from './Square'

function renderSquare(i, [knightX, knightY]) {
  const x = i % 8
  const y = Math.floor(i / 8)
  const isKnightHere = x === knightX && y === knightY
  const black = (x + y) % 2 === 1
  const piece = isKnightHere ? <Knight /> : null

  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <Square col={black}>{piece}</Square>
    </div>
  )
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
