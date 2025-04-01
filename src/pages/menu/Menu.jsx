import React from "react";
import { useDispatch } from "react-redux";
import foto from '../../assets/list3.jpg';
import { pro } from './data';  // Import from the new file

export default function Menu() { 
    const dispatch = useDispatch();
    return (
        <div className="w-full m-auto">
            <div style={{ backgroundImage: `url(${foto})` }} className='bg-no-repeat bg-cover h-[700px]'>
                <h1 className="text-[80px] text-white ml-[200px] absolute mt-[140px] font-bold" style={{ fontFamily: "Rufina, serif" }}>View Our <br/>New Menu</h1>
                <p className="text-white ml-[200px] absolute mt-[380px] text-[20px]">The freshest ingredients for you every day</p>
                {pro.map((item) => (
                    <div key={item.id} className="relative w-[320px] p-4 rounded-lg cursor-pointer">
                        <img src={item.img} alt={item.title} className="w-[320px] h-[200px] rounded-lg" />
                        <h3 className="">{item.title}</h3>
                        <h1 className="">{item.name}</h1>
                        <div className="flex justify-end text-2xl mt-2">
                            <h1 className="font-bold hover:text-[#9ca887]">{item.price}</h1>
                        </div>
                    </div>
                ))}
            </div> 
        </div>
    );
}
