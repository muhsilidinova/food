import React from 'react'
import foto from '../../assets/contact/table.png'
import foto1 from '../../assets/contact/Orange.png'
import foto2 from '../../assets/contact/tree.png'

function Contact() {
  return (
    <div className='w-[1400px] m-auto p-10 bg-[#FFFFFF] text-black'>
      <div className='ml-[20px] font-serif'>
        <h1 className='text-[60px] font-bold'>Get in Touch</h1>
        <p>The freshest ingredients for you every day</p>
         </div>
        <div className='ml-[800px] mt-[50px] font-serif'>
          <h1 className='text-[20px]'>Open Time</h1>
          <h1 className='ml-[250px] mt-[-25px] text-[15px]'>Sunday - Friday</h1>
        </div>
        <div className='text-[15px] ml-[800px] mt-[25px] font-serif'>
          <h1 className=''>Brunch <br/>11:00–12:00</h1>
          <h1 className='ml-[150px] mt-[-45px] '>Lunch <br/>13:00–17:00</h1>
          <h1 className='ml-[280px] mt-[-45px]'>Dinner <br/>18:00–20:00</h1>
        </div> 
    <div className='w-[1400px] mt-[300px] relative text-black'>
      <img src={foto1} className='w-[300px] absolute ml-[350px] z-0 mt-[-80px]'/>
      <img src={foto} className='w-[450px] relative z-10'/>
    </div>
    <div className='pb-[10px] font-serif'>
      <h1 className='text-[23px] ml-[850px] mt-[-120px]'>We can be contacted via</h1>
      <a href="https://foodrink.netlify.app/" className='ml-[850px] text-[23px] cursor-pointer'>email <span className='text-[#a8b701]'>info@foodzero.com</span></a>
      <h1 className='ml-[850px] text-[23px]'>or telephone on <span className='text-[#a8b701]'>+86 852 346 000</span></h1>
    </div>
    <div className='font-serif'>
      <h1 className='mt-[360px] text-[25px]'>We are located in 1959 Sepulveda Blvd. Culver <br/>City, CA, 90230</h1>
      <img src={foto2} className='w-[450px] ml-[750px] mt-[-300px]'/>
      <a href="https://www.google.com/maps/@42.8507136,74.5472,12z?entry=ttu&g_ep=EgoyMDI1MDQwMS4wIKXMDSoASAFQAw%3D%3D"><button className="text-[18px] border border-black px-6 py-2 relative bottom-[220px] rounded-lg hover:bg-[#394e01] hover:text-white transition duration-300 cursor-pointer">View in Maps</button></a>
    </div>
    </div>
  )
}

export default Contact
