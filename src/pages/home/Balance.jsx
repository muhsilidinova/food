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
import image10 from '../../assets/Pagination.png'
import { Link } from "react-router-dom"

export default function Balance() {
  return (
    <div>
    <div className="bg-[#FFFFFF] text-black m-auto w-[1400px] font-serif">
    <div className="pt-[98px] ml-[100px]">
      <img src={surot5} className="w-[170px] ml-[40px]"/>
      <h1 className="text-[30px] font-bold" >Premium Quality</h1>
      <p className="text-[#4D4D4D] ml-[-20px]">Only the finest ingredients, carefully selected <br/><span className='ml-2'>to guarantee superior taste and freshness.</span></p>
    </div>
    <div className="ml-[560px] mt-[-260px]">
      <img src={surot6} className="w-[170px] ml-[60px]"/>
      <h1 className="text-[30px] font-bold">Seasonal Vegetables</h1>
      <p className="text-[#4D4D4D] ml-[-4px]">A fresh selection of seasonal vegetables, hand <br/><span className='ml-[27px]'>picked  for the best taste and quality</span> </p>
    </div>
    <div className="ml-[1050px] mt-[-260px] pb-10">
      <img src={surot7} className="w-[170px] ml-[50px]"/>
      <h1 className="text-[30px] font-bold ml-[50px]" >Fresh Fruit</h1>
      <p className="text-[#4D4D4D] ml-[-25px]">A delicious variety of fresh, juicy fruits packed <br/><span className='ml-[30px]'>with natural sweetness and nutrients</span>.</p>
    </div>
  </div>
   {/* block 6 */}
    <div className="bg-[#FFFFFF] text-black m-auto w-[1400px] relative font-serif">
      <div className="pt-[90px]">
        <img src={image3} className="w-[540px] rounded ml-[70px] transition-all duration-600 hover:brightness-90 hover:scale-105"/>
        <div className="ml-[80px]" >
        <h1 className="text-[35px]">Fruit and vegetables and <br/>protection against diseases</h1>
        <img src={image7} className="w-[500px] mt-[10px]"/>
        <p className="text-[#4D4D4D] mt-[15px]">Packed with essential vitamins and antioxidants, fruits and vegetables <br />support 
        a strong immune system and reduce the risk of various diseases.</p>
        </div>
      </div>
      <div className="ml-[760px] absolute top-[90px]" >
        <img src={image2} className="w-[540px] rounded transition-all duration-600 hover:brightness-90 hover:scale-105"/>
        <div className="ml-[10px]">
          <h1 className="text-[35px]">Asparagus Spring Salad with <br/>Rocket, Goat's Cheese</h1>
          <img src={image7} className="w-[500px] mt-[15px]"/>
          <p className="text-[#4D4D4D] mt-[15px]">A fresh and vibrant spring salad with tender asparagus, peppery rocket, <br/>and creamy goat’s cheese. </p>
        </div>
      </div>
    </div>
  {/* block 7 */}
  <div className="bg-[#FFFFFF] text-black m-auto w-[1400px] font-serif">
    <div className="pt-[70px]">
      <h1 className="text-[50px] text-center font-semibold">Calories Energy <br/>Balance</h1>
      <p className="text-[#4D4D4D] text-center font-medium ">Every calorie is a step toward fueling your body with the energy it deserves. </p>
    </div>
    <div className="mt-[50px]">
    <div className="ml-[150px]">
      <img src={surot9} className="w-[300px] rounded"/>
      <h1 className="text-[#517100] text-[30px] font-semibold mt-[-410px] ml-[15px]">Beef</h1>
      <Link to='starterPage'><img src={image1} className="ml-[240px] w-[30px] mt-[-30px]"/></Link>
    </div>
    <div className="ml-[550px] mt-[-45px]">
      <img src={surot8} className="w-[300px] rounded"/>
      <h1 className="text-[#517100] text-[30px] font-semibold mt-[-410px] ml-[15px]">Chicken</h1>
      <Link to='mainPage'><img src={image1} className="ml-[240px] w-[30px] mt-[-30px]"/></Link>
    </div>
    <div className="ml-[970px] mt-[-42px]">
      <img src={surot10} className="w-[300px] rounded"/>
      <h1 className="text-[#517100] text-[30px] font-semibold mt-[-410px] ml-[15px]">Desert</h1>
      <Link to='soupPage'><img src={image1} className="ml-[240px] w-[30px] mt-[-30px] "/></Link>
    </div>
    </div>
  </div>
    </div>
  )
}
