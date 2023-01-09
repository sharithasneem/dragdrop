import React from 'react'
function square({col,children}) { 
    const fill = col ? 'black' : 'white'
    const stroke =col? 'white' : 'black'
    
  return (
    <div style={{
      background:fill,
      color: stroke,
      height:'100%',
      
      }}>
      {children}
    </div>
  )
}

export default square
