import React from 'react'
import square from './Square';
import { ItemTypes } from './constant';
import { useDrag } from 'react-dnd';
function boardSquare({ x, y, children }) {
  const black = (x + y) % 2 === 1
  return <square black={black}>{children}</square>

}

export default boardSquare
