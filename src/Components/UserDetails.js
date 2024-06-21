import React, { useCallback, useState } from 'react'

const UserDetails = () => {
    const [name,setName] = useState(' ')
  return (
    <>
    <div>UserDetails</div>
    <form>
        <label>User Name : </label>
        <input type='text' id='data' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}></input>
        <h2>{name}</h2>
    </form>
    </>
  )
}

export default UserDetails