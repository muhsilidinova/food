import React from 'react'
import foto1 from '../../assets/main/price2.png'
import foto2 from '../../assets/main/stake.png'
import foto3 from '../../assets/starter/Blueberry.png'

function Main() {
  return (
     <div className='w-[1400px] m-auto p-10 bg-[#FFFFFF] text-black'>
       <div className='text-center'>
           <h1 className='text-[60px] font-semibold ' style={{ fontFamily: "Rufina, serif" }}>Mains</h1>
           <p className='text-[#4D4D4D]'>This is a section of your menu. Give your section a brief description</p>
            <img src={foto3} className='w-[290px] ml-[960px] mt-[-155px]'/>
           </div>
          <div className='mt-[20px]'>
             <img src={foto1} className='w-[380px] ml-[100px]'/>
             <img src={foto2} className='w-[470px] ml-[670px] mt-[-560px]'/>
           </div>
       </div>
  )
}

export default Main
