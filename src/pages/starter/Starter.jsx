import React from 'react'
import foto1 from '../../assets/starter/Blueberry.png'
import foto2 from '../../assets/starter/tomatoes.png'

function Starter() {
  return (
    <div className='w-[1400px] m-auto p-10 bg-[#FFFFFF] text-black'>
        <div className='text-center'>
        <h1 className='text-[60px] font-semibold' style={{ fontFamily: "Rufina, serif" }}>Starters</h1>
        <p className='text-[#4D4D4D] '>This is a section of your menu. Give your section a brief description</p>
          <img src={foto1} className='w-[290px] ml-[990px] mt-[-147px]'/>
        </div>
        <div className='mt-[20px]'>
          <img src={foto2} className='w-[490px] ml-[70px]'/>
        </div>
    </div>
  )
}

export default Starter
