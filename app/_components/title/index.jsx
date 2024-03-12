import React from 'react'
import TitleBtn from './titlebtn'

function Title({btnList}) {
  return (
    <div className='gap-[15px] w-full p-3 rounded-[20px] flex flex-col justify-evenly my-[50px] bg-white h-fit'>
    {btnList.map((btnData)=>{
      return <TitleBtn btnData={btnData} />
    })}
    </div>
  )
}

export default Title
