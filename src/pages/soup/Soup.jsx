import React from 'react'
import foto1 from '../../assets/soup/Avocado.png'
import foto2 from '../../assets/soup/tea.png'
import foto3 from '../../assets/soup/price3.png'

function Soup() {
  return (
    <div className='w-[1400px] m-auto p-10 bg-[#FFFFFF] text-black'>
     <div className='text-center'>
      <img src={foto1} className='w-[200px] ml-[580px]'/>
      <h1 className='text-[60px] font-semibold mt-[-170px]' style={{ fontFamily: "Rufina, serif" }}>Pastries & Drinks</h1>
      <p className='text-[#4D4D4D] text-[14px] font-semibold'>This is a section of your menu. Give your section a brief description</p>
      <div className='w-[490px] mt-[100px]'>
        <img src={foto2} className='ml-[100px]'/>
        <img src={foto3} className='ml-[700px] mt-[-610px]'/>
      </div>
     </div>
    </div>
  )
}

export default Soup
