import React from 'react'
import surot1 from '../../assets/logoo.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="bg-[#233000] text-white  py-12 mt-[100px]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-wrap justify-between gap-8 pb-12 ml-[50px]">
          <div className="w-full sm:w-1/4 ">
            <img src={surot1} alt="Logo" className="w-[150px] mb-4" />
            <p className="text-sm">Delicious food delivered right to your door. Taste the best flavors with us!</p>
          </div>
          <div className="w-full sm:w-1/4">
            <h3 className="font-semibold text-lg mb-4">Contacts</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#9CAA00]">+1+86 852 346 000</a></li>
              <li><a href="#" className="hover:text-[#9CAA00]">info@foodzero.com</a></li>
              <li><a href="#" className="hover:text-[#9CAA00]">1959 Sepulveda Blvd.</a></li>
              <li><a href="#" className="hover:text-[#9CAA00]">Culver City, CA, 90230</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4">
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <ul className="space-y-2">
            <Link to='contactPage' className='text-white hover:text-[#9CAA00]'>Contact</Link>
              <li><a href="#" className="hover:text-[#9CAA00]">Instagram</a></li>
              <li><a href="#" className="hover:text-[#9CAA00]">Twitter</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4">
            <h3 className="font-semibold text-lg mb-4">Never Miss a Recipe</h3>
            <input type="email" placeholder="Email Address" className="w-full p-2 border rounded-[5px] mb-4"/>
            <button className="w-full bg-[#9CAA00] text-white py-2 rounded-md hover:bg-[#7f9000] cursor-pointer">Subscribe</button>
          </div>
        </div>
        <div className="border-t border-[#9CAA00] pt-4 text-center text-sm">
          <p>© 2020 Zero Inc. All rights Reserved</p>
        </div>
      </div>
    </div>
  )
}