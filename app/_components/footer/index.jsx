import React from 'react'

const Footer = () => {
  return (
    <div className='p-5'>
    <div className='bg-black p-5 flex justify-between w-[60rem] rounded-[15px] h-[6rem] mx-auto  '>

<div className='flex'>
<img className='w-[2rem] h-[2rem]' src="https://rishi.qviq.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo2.35230afc.png&w=3840&q=75" alt="" />

<div><h1>Designed with Qviq ❤️</h1>
<p>
Sign Up for free to create your profile</p></div>

</div>

<button className='border border-white rounded-full btn-shadow-white hover:shadow-none w-[6rem]'>sign up</button>
    </div>
    </div>
  )
}

export default Footer