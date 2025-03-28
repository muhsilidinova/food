import React from 'react'
import surot1 from '../../assets/menu/Image (7).png'
import surot2 from '../../assets/menu/Blueberry.png'
import surot3 from '../../assets/menu/Image (8).png'
import surot4 from '../../assets/menu/Price.png'
import surot5 from '../../assets/menu/Price (1).png'
import surot6 from '../../assets/menu/Image (9).png'
import surot7 from '../../assets/menu/Avocado.png'
import surot8 from '../../assets/menu/Image (10).png'
import surot9 from '../../assets/menu/Price (2).png'

function Menu() {

  return (
    <div className=' m-auto max-w-[1500px] h-[4100px]'>
      <img src={surot1} className='w-[1300px] ml-[100px]' />
      <h1 className=' text-[80px] relative bottom-[500px] text-[#FFFFFF] ml-[250px]' style={{ fontFamily: "Rufina, serif" }}>View Our <br /> New Menu</h1>
      <p className='relative bottom-[500px] text-[#FFFFFF] ml-[260px]'>The freshest ingredients for you every day</p>
      {/* 2 блок */}
      <div className='mt-[400px] bg-[#FFFFFF] m-auto max-w-[1500px]'>
        <h1 className='text-[60px] relative bottom-[600px] ml-[650px]'style={{ fontFamily: "Rufina, serif" }}>Starters</h1>
        <p className='text-[#4D4D4D] relative bottom-[600px] ml-[510px]'>This is a section of your menu. Give your section a brief description</p>
        <img src={surot2} className='relative bottom-[780px] ml-[1020px] w-[330px]' />
         <img src={surot3} className='w-[580px] relative bottom-[800px] ml-[150px]' />
         <img src={surot4} className='relative bottom-[1500px] ml-[800px] w-[500px]' />
      </div>
      {/* 3 blok */}
      <div className=' mt-[-600px] bg-[#FFFFFF] m-auto max-w-[1500px]'>
       <h1 className='text-[70px] relative bottom-[750px] ml-[680px]'style={{ fontFamily: "Rufina, serif" }}>Mains</h1>
       <p className='relative bottom-[750px] ml-[540px]'>This is a section of your menu. Give your section a brief description</p>
       <img src={surot5} className='w-[500px] relative bottom-[680px] ml-[150px]' />
       <img src={surot6} className='w-[580px] relative bottom-[1410px] ml-[820px]' />
      </div>
      {/* 4 block */}
      <div className='mt-[-600px] bg-[#FFFFFF] m-auto max-w-[1500px]'>
      <img src={surot7} className='w-[300px] ml-[600px] relative bottom-[600px]'/>
      <h1 className='text-[70px] relative bottom-[860px] ml-[460px]' style={{ fontFamily: "Rufina, serif" }}>Pastries & Drinks</h1>
      <p className='text-[#4D4D4D] relative bottom-[850px] ml-[500px]'>This is a section of your menu. Give your section a brief description</p>
        <img src={surot8} className='ml-[120px] relative bottom-[700px] w-[600px]'/>
        <img src={surot9} className='relative bottom-[1450px] ml-[850px] w-[550px]'/>
     
     </div>
    </div>
  )
}

export default Menu
