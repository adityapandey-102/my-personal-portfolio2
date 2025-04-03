"use client"
import React, { useState } from 'react'

function Popup({data,hidden,button_refference}) {
    const [isOpenPopup,setPopup]=useState()

  return (
    <>
      <button onClick={()=>{
        setPopup(!isOpenPopup);
      }} className={`bg-[#D2F220] hover:bg-black hover:text-white w-[300px] border-2 border-solid border-black text-center rounded-2xl py-5 mx-10 flex items-center justify-center text-3xl font-medium text-[#040478] ${hidden?"hidden":""}`}
      ref={hidden?button_refference:null}
      >Open Popup</button>
    {isOpenPopup && <><div onClick={()=>{
        setPopup(!isOpenPopup);
      }} className='h-[100vh] w-[100vh] overlay2 relative z-20 flex items-center justify-center'>
        <div className='text-4xl bg-black opacity-45 --w-[500px] h-[400px] rounded-md flex items-center justify-center px-8'>
          Click anywhere to close the popup.

        </div>
    </div></>}
    </>
  )
}

export default Popup