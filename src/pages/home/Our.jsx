import React from 'react'
import foto6 from '../../assets/list.png'
import foto7 from '../../assets/image1.png'
import foto8 from '../../assets/image2.png'
import foto9 from '../../assets/image3.png'
import foto10 from '../../assets/image4.png'
export default function Our() {
  return (
    <div className='bg-[#FFFFFF] pt-[20px]'>
          <div className=" w-[1400px] m-auto text-black">
            <div className="pt-[100px]">
              <h1 className="font-semibold text-[67px] pl-26" style={{ fontFamily: "Rufina, serif" }}>Our Menu</h1>
              <p className="text-[14px] text-[#4D4D4D] pl-26">This is a section of your menu. Give your section <br /> a brief description</p>
         </div>        
              <div>
              <img src={foto6} className="w-[350px] ml-[990px] mt-[-250px]" />          
              </div>
              <div className="w-[470px] mt-[-100px] ml-[100px]">
                <img src={foto7}/>
                <img src={foto8} className="ml-[700px] mt-[-195px]"/>
              </div>
              <div className="w-[470px] ml-[100px] mt-[80px] pb-18">
                <img src={foto9}/>
                <img src={foto10} className="ml-[700px] mt-[-145px]"/>
              </div>
            </div>
    </div>
  )
}
