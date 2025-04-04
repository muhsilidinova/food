import React from 'react'
import { useState, useEffect } from "react"
import foto2 from '../../assets/healthy3.jpg'
import foto4 from '../../assets/restaurant.png'
import foto5 from '../../assets/vilka.png'
import foto6 from '../../assets/bakal.png'
import foto7 from '../../assets/tarelka.png'

export default function HomeTwo() {
   const [rotation, setRotation] = useState(0)
    useEffect(() => {
       const interval = setInterval(() => {
         setRotation((prev) => prev - 5) // Вращение против часовой стрелки
       }, 100)
       return () => clearInterval(interval)
     }, [])
  return (
        <div >
            <div className="flex text-black w-[1300px] m-auto overflow-x-hidden items-center justify-between pt-10 font-serif">
              <div className="space-y-1 flex">
                <div>
             <h1 className="text-[70px] mt-14">Healthy Eating <br/>is an important <br />part of lifestyle</h1>
                <p>Proper nutrition plays a key role in a healthy life</p>               
                 </div>
                <div className="h-screen "> 
                <img src={foto2} className="w-[540px] mt-[40px] ml-[290px]" style={{transform: `rotate(${rotation}deg)`,transition: "transform 6.0s linear",}}/>
                </div>
              </div>
            </div>
       {/* block 2 */}
       <div className="flex flex-col md:flex-row m-auto w-[1300px] relative ">
        <img src={foto4} className='w-[650px] relative'/>
        <div className="bg-[#233000] w-[700px] relative text-white justify-center md:p-16 space-y-6 mt-[60px]">
            <div>
                <h2 className="text-2xl font-bold flex"><img src={foto5} className="mr-2 w-[30px]"/>Кухня</h2>
                <p className="mt-2 text-lg">Изысканное и неповторимый вкус блюд паназиатской кухни от наших шеф-поваров из Восточной Азии.</p>
            </div>
            <div>
                <h2 className="text-2xl font-bold flex"><img src={foto6} className="mr-2 w-[30px]"/>Мероприятия</h2>
                <p className="mt-2 text-lg">Проведение встреч или мероприятий в ресторане оставит ваших гостей довольными с прекрасным панорамным видом.</p>
            </div>
            <div>
                <h2 className="text-2xl font-bold flex"><img src={foto7} className="mr-2 w-[30px]"/>Бронирование</h2>
                <p className="mt-2 text-lg pb-[40px]">Мы готовы помочь с выбором всего необходимого для мероприятия или встречи с шикарным видом.</p>
            </div>
        </div>
    </div>
       {/* <div className="flex flex-col items-center w-full text-black relative font-serif mt-[-500px]">
      <div className="flex w-[1300px] flex-wrap gap-10 justify-center">
        <div className="p-8 rounded-2xl flex flex-col items-center text-center absolute left-[-20px]">
          <img src={foto4} className="w-[800px]" />
        </div>
        <div className="flex flex-col items-center text-center w-[990px] ml-[600px] pb-[500px] bg-blue-700 mt-[130px]">
          <img src={foto5} className="w-[60px] ml-[-200px] mt-[]"/>
          <h1>kitchen</h1>
          <p>The exquisite and unique taste of pan-Asian cuisine from our chefs from East Asia. They will give you a chance to plunge into another world of taste and pleasant feeling.</p>
        </div>
        <div>
          <img src={foto6} />
          <h1></h1>
          <p></p>
        </div>
      </div>
    </div> */}
    </div>
  )
}
