import React from 'react'
import surot1 from '../../assets/logoo.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="bg-[#233000] text-white py-12 mt-[100px]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-wrap justify-between gap-8 pb-12 ml-[50px]">
          <div className="w-full sm:w-1/4 ">
            <img src={surot1} alt="Logo" className="w-[150px] mb-4 ml-[-70px]" />
            <p className="text-sm ml-[-70px] font-serif">Delicious food delivered right to <br /> your door. Taste the best flavors with us!</p>
          </div>
          <div className="w-full sm:w-1/4 font-serif">
            <h3 className="font-semibold text-lg mb-4 ml-[-150px]">Contacts</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#9CAA00] ml-[-150px]">+1+86 852 346 000</a></li>
              <a href="https://foodrink.netlify.app/" className="hover:text-[#9CAA00] ml-[-150px]">info@foodzero.com</a>
              <li><a href="#" className="hover:text-[#9CAA00] ml-[-150px]">1959 Sepulveda Blvd.</a></li>
              <li><a href="#" className="hover:text-[#9CAA00] ml-[-150px]">Culver City, CA, 90230</a></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/4 font-serif">
            <h3 className="font-semibold text-lg mb-4 ml-[-300px]">Follow Us</h3>
            <ul className="space-y-2">
            <Link to='contactPage' className='text-white hover:text-[#9CAA00] ml-[-300px]'>Contact</Link>
              <li><a href="#" className="hover:text-[#9CAA00] ml-[-300px]">Instagram</a></li>
              <li><a href="#" className="hover:text-[#9CAA00] ml-[-300px]">Twitter</a></li>
            </ul>
          </div>
          <div className="ml-[1000px] mt-[-190px] font-serif">
            <h3 className="font-semibold text-lg">Never Miss a Recipe</h3>
            <input type="email" placeholder="Email Address" className="p-2 w-[300px] border rounded-[5px] mt-[35px] mb-4"/>
            <button className="bg-[#9CAA00] w-[300px] text-white py-2 rounded-md hover:bg-[#7f9000] cursor-pointer ">Subscribe</button>
          </div>
        </div>
        <div className="border-t border-[#9CAA00] pt-4 text-center text-sm font-seri">
          <p>© 2020 Zero Inc. All rights Reserved</p>
        </div>
      </div>
    </div>
  )
}