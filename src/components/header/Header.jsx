import React from 'react'
import surot1 from '../../assets/logoo.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-4 bg-[#233000] max-w-[1300px] m-auto'  style={{ fontFamily: 'Rufina, serif' }}>
        <Link to='/'>
           <img src={surot1} className='w-[150px]' />
       </Link>
      <nav className='flex space-x-10'>
        <Link to='/' className='text-white hover:text-[#9CAA00] cursor-pointer'>HOME</Link> 
        <Link to='menuPage' className='text-white hover:text-[#9CAA00] cursor-pointer'>MENU</Link>
        <Link to='blogPage' className='text-[#9CAA00] font-semibold hover:text-[#FFFFFF] cursor-pointer'>BLOGS</Link>
        <Link to='aboutPage' className='text-white hover:text-[#9CAA00] cursor-pointer'>ABOUT</Link>
        <Link to='contactPage' className='text-white hover:text-[#9CAA00] cursor-pointer'>CONTACT</Link>
        <Link to='reservationPage'><button className='text-white rounded-md hover:bg-[#7b8d00] transition-all border py-2 px-3 mt-[-10px] cursor-pointer'>Reservations</button></Link>
      </nav>
    </div>
  )
}
