import React from 'react'
import { ItemTypes } from './constant'
import { useDrag } from 'react-dnd'
function knight() {
  const [{isDragging},drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  return (
    <div
    ref={drag}
    style={{
      opacity: isDragging ? 0.5 : 1,
      fontSize: 50,
      fontWeight: 'bold',
      cursor: 'move',
    }}
  >
    ♘
  </div>    
  )
}

export default knight
