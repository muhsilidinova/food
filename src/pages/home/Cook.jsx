import React from 'react'
import surot1 from '../../assets/Leaf.png'
import surot2 from '../../assets/brown.png'
import surot3 from '../../assets/man.png'
import surot4 from '../../assets/leaf2.png'
export default function Cook() {
  return (
    <div className='bg-[#EBF0E4]'>
              <div className=" text-black m-auto w-[1400px]">
                <div className="pt-[90px]">
                  <img src={surot1} className="w-[240px] ml-[80px]"/>
                  <img src={surot2} className="w-[260px] ml-[100px] mt-[-110px] relative z-10"/>
                  <img src={surot3} className="w-[550px] mt-[-498px] ml-[90px]"/>
                </div>
                <div className="mt-[-500px] ml-[800px] pb-15">
                  <h1 className="font-semibold text-[65px]" style={{ fontFamily: "Rufina, serif" }}>Excellent cook</h1>
                  <p className="text-[#4D4D4D] text-[13px] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Purus lorem id 
                  penatibus imperdiet. Turpis egestasultricies <br/> purus auctor tincidunt lacus nunc. </p>
                  <img src={surot4} className="w-[250px] mt-[50px] ml-[150px]" />
                </div>
              </div>
    </div>
  )
}
