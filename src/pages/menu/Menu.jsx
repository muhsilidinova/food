import React from "react"
import { useDispatch } from "react-redux"
import foto from '../../assets/list3.jpg'
import foto1 from '../../assets/starter/Blueberry.png'
import foto2 from '../../assets/main/line1.png'
import { pro } from './data'  // Import from the new file

export default function Menu() { 
    const dispatch = useDispatch()
    return (
        <div className="w-full m-auto">
            <div style={{ backgroundImage: `url(${foto})` }} className='bg-no-repeat bg-cover h-[700px]'>
            </div> 
            <div className='text-center'>
                <h1 className='text-[60px] font-bold'>Starters</h1>
                <p>This is a section of your menu. Give your section a brief description</p>
                <img src={foto1} className='w-[300px] ml-[1100px] mt-[-110px]'/>
                </div> 
                <div className='mt-[200px]'>
                <img src={foto2} className='w-[500px] ml-[800px]'/>  
                </div>             
                <h1 className="text-[80px] text-white ml-[200px] absolute mt-[140px] font-bold" style={{ fontFamily: "Rufina, serif" }}>View Our <br/>New Menu</h1>
                <p className="text-white ml-[200px] absolute mt-[380px] text-[20px]">The freshest ingredients for you every day</p>
                
                {pro.map((item) => (
                    <div key={item.id} className="relative p-4 rounded-lg cursor-pointer">
                        <img src={item.img} alt={item.title} className="w-[500px] rounded-lg ml-[90px] mt-10" />
                        <h3 className="">{item.title}</h3>
                        <h1 className="">{item.name}</h1>
                        <div className="flex justify-end text-2xl">
                            <h1 className="font-bold hover:text-[#9ca887]">{item.price}</h1>
                        </div>
                    </div>
                ))}
        </div>
    )
}
