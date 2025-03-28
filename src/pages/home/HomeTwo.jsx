import React from 'react'
import foto from '../../assets/food.png'
import foto2 from '../../assets/goroh.png'
import foto3 from '../../assets/scrool.png'
import foto4 from '../../assets/kasha.png'
import foto5 from '../../assets/kamen.png'
export default function HomeTwo() {
  return (
    <div className='bg-[#233000] pb-20'>
            <div className="flex text-white w-[1300px] m-auto items-center justify-between">
              <div className="space-y-6 w-[500px]">
                <h1 className="text-[70px] font-semibold leading-tight" style={{ fontFamily: "Rufina, serif" }}>Healthy Eating <br/> is an important <br /> part of lifestyle</h1>
                <p className="text-lg opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Neque congue arcu.</p>
                <div className="w-[50px]"> 
                  <img src={foto3} className="w-[30px]" />
                </div>
              </div>
              <div className="relative flex items-center ml-[-100px]">
                <img src={foto} className="w-[600px] rounded"/>
                <img src={foto2} className="w-[700px] absolute ml-[-150px] mt-[400px] z-10"/>
              </div>
            </div>
       {/* block 2 */}
            <div className="flex m-auto w-[1300px] flex-wrap gap-10 mt-[150px] ">
              <div className="p-8 rounded-2xl flex items-center text-center w-[600px]">
                <img src={foto4} className="w-[550px] rounded"/>
                <h2 className="text-[45px] font-semibold" style={{ fontFamily: "Rufina, serif" }}><span className="ml-[-50px]"> Start to plan</span><br/>your diet today</h2>
                <p className="">Lorem ipsum dolor sit amet, consecteturadipiscing  <br/><span className="ml-[-185px]">elit. Neque congue arcu.</span></p>                    
              </div>
              <div className="flex items-center text-center mt-[100px] w-[600px]">
                 <p className="text-[18px] mt-3 mr-20">Lorem ipsum dolor sit amet, consectetur <br/><span className="ml-[-47px]">adipiscingelit. Neque congue arcu.</span></p>
                <img src={foto5} className="w-[380px] mt-10 rounded"/> 
              </div>
            </div>
    </div>
  )
}
