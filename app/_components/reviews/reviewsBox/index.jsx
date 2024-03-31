import React from 'react'

const ReviewBox
 = ({props}) => {
  return (
    <div>
      <div className="border border-black w-[25rem] p-4 btn-shadow h-[13rem] rounded-[20px]">
       
        <h4 className="text-black font-bold px-5">{props.head}</h4>
        <p className="text-black py-3 text-[.8rem] px-5">
          {props.para}
        </p>
      </div>
    </div>
  )
}

export default ReviewBox
