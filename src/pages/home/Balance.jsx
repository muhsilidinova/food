import React from 'react'
import surot5 from '../../assets/ryba.png'
import surot6 from '../../assets/morkov.png'
import surot7 from '../../assets/limon.png'
import surot8 from '../../assets/starter.png'
import surot9 from '../../assets/main.png'
import surot10 from '../../assets/soup.png'
import image1 from '../../assets/icon1.png'
import image2 from '../../assets/blog/asparagus.png'
import image3 from '../../assets/blog/vegetables.png'
import image4 from '../../assets/blog/fashion.png'
import image5 from '../../assets/blog/julie.png'
import image6 from '../../assets/blog/diannne.png'
import image7 from '../../assets/Line.png'
import image8 from '../../assets/”.png'
import image9 from '../../assets/Avatar.png'
import image10 from '../../assets/Pagination.png'
import { Link } from "react-router-dom"
export default function Balance() {
  return (
    <div>
    <div className="bg-[#FFFFFF] text-black m-auto w-[1400px]">
    <div className="pt-[98px] ml-[100px]">
      <img src={surot5} className="w-[170px] ml-[10px] transition-all duration-600 hover:brightness-70 hover:scale-110 cursor-pointer"/>
      <h1 className="text-[30px] font-bold" style={{ fontFamily: "Rufina, serif" }}>Premium Quality</h1>
      <p className="text-[#4D4D4D] ml-[-30px]">Lorem ipsum dolor sit amet, consectetur <br/><span className="ml-[15px]">adipiscing elit. Neque congue arcu</span></p>
    </div>
    <div className="ml-[560px] mt-[-260px]">
      <img src={surot6} className="w-[170px] ml-[40px] transition-all duration-600 hover:brightness-70 hover:scale-110 cursor-pointer"/>
      <h1 className="text-[30px] font-bold" style={{ fontFamily: "Rufina, serif" }}>Seasonal Vegetables</h1>
      <p className="text-[#4D4D4D] ml-[-15px]">Lorem ipsum dolor sit amet, consectetur <br/><span className="ml-[15px]">adipiscing elit. Neque congue arcu</span></p>
    </div>
    <div className="ml-[1050px] mt-[-260px] pb-10">
      <img src={surot7} className="w-[170px] ml-[30px] transition-all duration-600 hover:brightness-70 hover:scale-110 cursor-pointer"/>
      <h1 className="text-[30px] font-bold ml-[50px]" style={{ fontFamily: "Rufina, serif" }}>Fresh Fruit</h1>
      <p className="text-[#4D4D4D] ml-[-15px]">Lorem ipsum dolor sit amet, consectetur <br/><span className="ml-[15px]">adipiscing elit. Neque congue arcu</span></p>
    </div>
  </div>
   {/* block 6 */}
    <div className="bg-[#FFFFFF] text-black m-auto w-[1400px] relative">
      <div className="pt-[90px]">
        <img src={image3} className="w-[560px] rounded ml-[70px] transition-all duration-600 hover:brightness-90 hover:scale-105 cursor-pointer"/>
        <img src={image4} className="w-[130px] ml-[490px] absolute top-[95px]"/>
        <img src={image5} className="w-[430px] ml-[80px]"/>
        <div className="ml-[80px]" style={{ fontFamily: "Rufina, serif" }}>
        <h1 className="text-[45px] font-bold">Fruit and vegetables and <br/>protection against diseases</h1>
        <img src={image7} className="w-[520px] mt-[10px]"/>
        <p className="text-[#4D4D4D] mt-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="ml-[760px] absolute top-[90px]" >
        <img src={image2} className="w-[560px] rounded transition-all duration-600 hover:brightness-90 hover:scale-105 cursor-pointer"/>
        <img src={image4} className="w-[130px] ml-[420px] absolute top-[5px]"/>
        <img src={image6} className="w-[430px] ml-[10px]"/>
        <div className="ml-[10px]" style={{ fontFamily: "Rufina, serif" }}>
          <h1 className="text-[45px] font-bold">Asparagus Spring Salad with Rocket, Goat's Cheese</h1>
          <img src={image7} className="w-[520px] mt-[15px]"/>
          <p className="text-[#4D4D4D] mt-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
      </div>
    </div>
  {/* block 7 */}
  <div className="bg-[#FFFFFF] text-black m-auto w-[1400px]">
    <div className="pt-[70px]">
      <h1 className="text-[50px] text-center font-semibold" style={{ fontFamily: "Rufina, serif" }}>Calories Energy <br/>Balance</h1>
      <p className="text-[#4D4D4D] text-center font-medium ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    </div>
    <div className="mt-[50px]">
    <div className="ml-[150px]">
      <img src={surot8} className="w-[300px] rounded"/>
      <h1 className="text-[#517100] text-[30px] font-semibold mt-[-410px] ml-[15px]" >Starters</h1>
      <Link to='starterPage'><img src={image1} className="ml-[240px] w-[30px] mt-[-30px]"/></Link>
    </div>
    <div className="ml-[550px] mt-[-45px]">
      <img src={surot9} className="w-[300px] rounded"/>
      <h1 className="text-[#517100] text-[30px] font-semibold mt-[-410px] ml-[15px]" >Mains</h1>
      <Link to='mainPage'><img src={image1} className="ml-[240px] w-[30px] mt-[-30px]"/></Link>
    </div>
    <div className="ml-[970px] mt-[-42px]">
      <img src={surot10} className="w-[300px] rounded"/>
      <h1 className="text-[#517100] text-[30px] font-semibold mt-[-410px] ml-[15px]">Soups</h1>
      <Link to='soupPage'><img src={image1} className="ml-[240px] w-[30px] mt-[-30px] pb-[500px]"/></Link>
    </div>
    </div>
  </div>
  {/* block 8 */}
  <div className="bg-[#FFFFFF] m-auto text-black w-[1400px] relative">
      <h1 className="text-[40px] font-bold ml-[150px] relative z-10">“ Lorem ipsum dolor sit amet,
         consectetur adipiscing <br/>elit. Purus lorem id penatibus imperdiet. Turpis egestas <br/>ultricies purus Lorem ipsum dolor sit amet.</h1>
        <img src={image8} className="w-[190px] ml-[1050px] absolute top-[30px] z-0"/>
        <img src={image9} className="w-[100px] mt-[30px] ml-[50px]"/>
        <div className="ml-[170px] absolute top-58">
        <h1 className="text-[25px] font-bold">John Doe</h1>
        <p className="text-[#4D4D4D] text-[13px]">Bloger</p>
        <div className="w-[140px]">
        <img src={image10} className="ml-[800px] absolute top-5"/>
      </div>
        </div>
  </div>   
    </div>
  )
}
