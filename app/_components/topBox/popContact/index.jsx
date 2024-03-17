import React, { useEffect } from 'react'

const PopContact = ({setIsPop}) => {
const closePopContact = ()=>{
  setIsPop(false)
}



  return (
    <div className='flex flex-col gap-7 justify-end items-end p-8 scroll-0 backdrop-blur-[20px] fixed z-30 top-0 left-0 w-[100vw] h-[100vh]'>
      <button className='bg-white border btn-shadow border-black text-black rounded-full px-6 p-3'> Exchange Contact</button>
      <button className='bg-white border btn-shadow border-black text-black rounded-full px-6 p-3'> Contact Details</button>
      <button className='bg-white border btn-shadow border-black text-black rounded-full px-6 p-3'>Save Contact</button>
      <button className='bg-white border btn-shadow border-black text-black rounded-full px-6 p-3'>Share</button>
      <button className=' border border-white text-white rounded-full px-6 p-3' onClick={closePopContact}>X</button>
    </div>
  )
}

export default PopContact