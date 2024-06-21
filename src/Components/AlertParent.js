import React from 'react'

export const AlertParent = (props) => {
    let {message} = props
  return (
    <div>
        AlertParent
        <button onClick={message}>Click Me</button>
        
    </div>
  )
}
