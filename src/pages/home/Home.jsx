import React from "react"
import foto from '../../assets/food.png'
import foto2 from '../../assets/goroh.png'
import foto3 from '../../assets/scrool.png'
import foto4 from '../../assets/kasha.png'
import foto5 from '../../assets/kamen.png'
import foto6 from '../../assets/list.png'
import foto7 from '../../assets/image1.png'
import foto8 from '../../assets/image2.png'
import foto9 from '../../assets/image3.png'
import foto10 from '../../assets/image4.png'

function Home() {
  return (
    <div className="w-[1300px] m-auto p-10 bg-[#233000] text-white">
      <div className="flex items-center justify-between">
        <div className="space-y-6 w-[500px]">
          <h1 className="text-[66px] font-semibold leading-tight" style={{ fontFamily: "Rufina, serif" }}>Healthy Eating <br/> is an important <br /> part of lifestyle</h1>
          <p className="text-lg opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Neque congue arcu.</p>
          <div className="w-[50px]">
            <img src={foto3} className="w-[30px]" />
          </div>
        </div>
        <div className="relative flex items-center ml-[-100px]">
          <img src={foto} className="w-[500px] transition-transform hover:scale-105"/>
          <img src={foto2} className="w-[700px] absolute ml-[-120px] mt-[400px] hover:opacity-100 z-10"/>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 mt-[100px]">
        <div className=" p-8 rounded-2xl flex flex-col items-center text-center transition-transform hover:scale-105">
          <img src={foto4} className="w-[500px]" />
          <h2 className="text-[42px] font-semibold mt-6 ml-[-180px]" style={{ fontFamily: "Rufina, serif" }}><span className="ml-[-60px]">Start to plan</span> <br/>your diet today</h2>
          <p className="mt-[5px] ml-[-120px]">Lorem ipsum dolor sit amet, consecteturadipiscing  <br/><span className="ml-[-181px]">elit. Neque congue arcu.</span></p>
        </div>
        <div className="flex-col items-center text-center transition-transform hover:scale-105 mt-[100px] ml-[160px]">
           <p className="text-[18px] mt-3 ml-[-70px]">Lorem ipsum dolor sit amet, consectetur <br/><span className="ml-[-47px]">adipiscingelit. Neque congue arcu.</span></p>
          <img src={foto5} className="w-[330px] mt-10"/> 
        </div>
      </div>
    <div className="bg-[#f6eeee] mt-[100px] rounded-2xl text-black">
      <div className="pt-[100px]">
        <h1 className="font-semibold text-[67px] pl-26" style={{ fontFamily: "Rufina, serif" }}>Our Menu</h1>
        <p className="text-[14px] text-[#4D4D4D] pl-26">This is a section of your menu. Give your section <br /> a brief description</p>
   </div>        
        <div>
        <img src={foto6} className="w-[500px] ml-[720px] mt-[-240px]" />          
        </div>
        <div>
          <img src={foto7} className="w-[500px]" />
        </div>

      </div> 
    </div>
  )
}

export default Home
