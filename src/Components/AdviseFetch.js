import React, { useState } from 'react'

const AdviseFetch = () => {

    const [advise,setAdvise] = useState('')
    const [count,setCount] = useState(0)

    async function getadvise(){
        let res = await fetch('https://api.adviceslip.com/advice') 
        let data = await res.json()
        setAdvise(data.slip.advice)
        setCount(count+1)
    }
  return (
    <div>
        <h4>Please click the button to get Advise</h4>
        <p>{advise}</p>
        <button onClick={getadvise}>Get Advise</button>
        <p >Count : {count}</p>
    </div>
)
}

export default AdviseFetch