import React, { useState } from 'react'
import './qrcode.css'


const Qrcode = () => {

  const [img , setImg] = useState(" ")
  const [loading,setLoading] = useState(false)
  const [qrdata,setQrdata] = useState(" ")
  const [size,setSize] = useState()
  async function generate(){
    try{
      const url =`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(qrdata)}`
      setImg(url)
    }catch(err){
      console.log(err); 
    }finally{
      setLoading(false)
    }
  }

  function download(){
    fetch(img)
    .then((response) => response.blob())
    .then((blob)=> {
      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob);
      link.download = "qrcode.png"
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((err) =>{
      console.log(err);
    })
  }

  return (
    <div className='app-container'>
      <h1>QR code Generate</h1>
      {loading && <p>please wait...</p> }
        {img && <img src={img} className='img'/>}
        <div>
            <label htmlFor='dataInput' className='input-label'>
            Data for Qr code : 
            </label>
            <input type='text' placeholder='Enter data for qr code ' id='dataInput' name='qr' value={qrdata} onChange={(e)=>setQrdata(e.target.value)}/>
            <label htmlFor='sizeInput' className='input-label'>
            image size (eg: 150)
            </label>
            <input type='text' placeholder='Enter img size  ' id='dataInput ' onChange={(e)=>setSize(e.target.value)}/>
            <button className='gen-btn' onClick={generate} disabled={loading}>Generate qr code</button>
            <button className='down-btn' onClick={download}>Download qr code</button>
        </div>
    </div>
  )
}

export default Qrcode