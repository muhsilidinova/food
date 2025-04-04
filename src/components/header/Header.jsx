// import React from 'react'
// import surot1 from '../../assets/logoo.png'
// import { Link } from 'react-router-dom'

// export default function Header() {
//   return (
//     <div className='bg-[#233000]'>
//       <div className='flex  p-4 justify-between items-center max-w-[1400px] m-auto' style={{ fontFamily: 'Rufina, serif' }}>
//         <Link to='/'>
//         <img src={surot1} className='w-[150px] ml-[25px]' />
//       </Link>
//         <nav className='flex space-x-10 cursor-pointer'>
//           <Link to='/' className='text-white hover:text-[#9CAA00]'>HOME</Link>
//           <Link to='menuPage' className='text-white hover:text-[#9CAA00]'>MENU</Link>
//           <Link to='blogPage' className='text-[#9CAA00] font-semibold hover:text-[#FFFFFF]'>BLOGS</Link>
//           <Link to='aboutPage' className='text-white hover:text-[#9CAA00]'>ABOUT</Link>
//           <Link to='feedbackPage' className='text-white hover:text-[#9CAA00]'>FEEDBACK</Link>
//           <Link to='reservationPage'><button className='text-white rounded-md hover:bg-[#7b8d00] transition-all border py-2 px-3 mt-[-10px] cursor-pointer'>Reservations</button></Link>
//         </nav>
//       </div>
//     </div>
//   )
// }








import React from 'react'
import surot1 from '../../assets/fooddrinks.png'
import { Link } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci"

export default function Header() {
  return (
    <div className='bg-[#FFFFFF] font-serif'>
      <div className='flex p-4 justify-between items-center max-w-[1400px] m-auto'>
        <Link to='/'>
        <img src={surot1} className='w-[200px] ml-[40px] bg-emerald-700 ' />
      </Link>
        <nav className='flex space-x-10 cursor-pointer'>
          <Link to='/' className='text-black hover:text-[#9CAA00]'>HOME</Link>
          <Link to='menuPage' className='text-[#9CAA00] font-semibold hover:text-black'>MENU</Link>
          <Link to='aboutPage' className='text-black hover:text-[#9CAA00]'>ABOUT</Link>
          <Link to='commentformPage' className='text-black hover:text-[#9CAA00]'>COMMENTFORM</Link>
          <Link to='cartPage'>
          <div className='relative'>
            <CiShoppingCart className='text-[28px] '/>
             <div className='absolute top-[-4px] right-[-5px] w-[16px] h-[16px] bg-red-500 text-black rounded-[6px] text-xs flex justify-center items-center'></div>
            </div>
            </Link>
          <Link to='reservationPage'><button className='text-black rounded-md hover:bg-[#7b8d00] transition-all border py-2 px-3 mt-[-10px] cursor-pointer'>Reservations</button></Link>
          <Link to='/signinPage'>
            <button className='text-white rounded-md hover:bg-[#7b8d00] transition-all border py-2 px-3 mt-[-10px] cursor-pointer'>Sign In</button>
          </Link>
        </nav>
      </div>
    </div>
  )
}