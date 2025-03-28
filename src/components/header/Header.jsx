import React from 'react'
import surot1 from '../../assets/logoo.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-[#233000]'>
      <div className='flex  p-4 justify-between items-center max-w-[1400px] m-auto' style={{ fontFamily: 'Rufina, serif' }}>
        <Link to='/'>
        <img src={surot1} className='w-[150px] ml-[25px]' />
      </Link>
        <nav className='flex space-x-10 cursor-pointer'>
          <Link to='/' className='text-white hover:text-[#9CAA00]'>HOME</Link>
          <Link to='menuPage' className='text-white hover:text-[#9CAA00]'>MENU</Link>
          <Link to='blogPage' className='text-[#9CAA00] font-semibold hover:text-[#FFFFFF]'>BLOGS</Link>
          <Link to='aboutPage' className='text-white hover:text-[#9CAA00]'>ABOUT</Link>
          <Link to='portfolioPage' className='text-white hover:text-[#9CAA00]'>PORTFOLIO</Link>
          <Link to='contactPage' className='text-white hover:text-[#9CAA00]'>CONTACT</Link>
          <Link to='reservationPage'><button className='text-white rounded-md hover:bg-[#7b8d00] transition-all border py-2 px-3 mt-[-10px] cursor-pointer'>Reservations</button></Link>
        </nav>
      </div>
    </div>
  )
}
