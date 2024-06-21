import React, { useState } from 'react'

const Cart = () => {
    const [count,setCount] = useState(0)
  return (
    <>
    <div>Number of cart count : {count}</div>
    <button onClick={()=> setCount(count+1)}>Add Count</button>
    </>
   
  )
}

export default Cart