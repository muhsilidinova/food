import React from 'react'
import foto from '../../assets/food.png'
import foto2 from '../../assets/goroh.png'
import foto3 from '../../assets/scrool.png'
import foto4 from '../../assets/kasha.png'
import foto5 from '../../assets/kamen.png'

export default function HomeTwo() {
  return (
    <div className='bg-[#233000] pb-20'>
            <div className="flex text-white w-[1300px] m-auto items-center justify-between pt-10">
              <div className="space-y-6 w-[500px] ">
                <h1 className="text-[70px] font-semibold leading-tight" style={{ fontFamily: "Rufina, serif" }}>Healthy Eating <br/> is an important <br /> part of lifestyle</h1>
                <p className="text-lg opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Neque congue arcu.</p>
                <div className="w-[50px]"> 
                  <img src={foto3} className="w-[30px]" />
                </div>
              </div>
              <div className="relative flex items-center ml-[-100px]">
                <img src={foto} className="w-[600px] rounded-xl"/>
                <img src={foto2} className="w-[700px] absolute ml-[-150px] mt-[400px] z-10"/>
              </div>
            </div>
       {/* block 2 */}
       <div className="flex flex-col items-center w-full mt-[150px] text-white relative">
      <div className="flex w-[1300px] flex-wrap gap-10 justify-center">
        <div className="p-8 rounded-2xl flex flex-col items-center text-center w-[600px] absolute left-[70px]">
          <img src={foto4} className="w-[550px] rounded-xl" />
          <h2 className="text-[50px] font-semibold ml-[-250px]"style={{ fontFamily: "Rufina, serif" }}>Start to plan <br/><span className='ml-14'>your diet today</span> </h2>
          <p className="text-[18px] mt-4 ml-[-190px]"> Lorem ipsum dolor sit amet, consectetur <br/><span className='mr-10'>adipiscing elit. Neque congue arcu.</span> </p>
        </div>
        <div className="flex flex-col items-center text-center w-[600px] mt-[50px] ml-[900px]">
          <p className="text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu.</p>
          <img src={foto5} className="w-[380px] mt-5 rounded-xl"/>
        </div>
      </div>
    </div>
    </div>
  )
}
