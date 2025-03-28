import React from 'react'
import foto1 from '../../assets/about/Image.png'
import foto2 from '../../assets/about/Image (1).png'
import foto3 from '../../assets/about/Tomato.svg'
import foto4 from '../../assets/about/Image (2).png'
import foto5 from '../../assets/about/Image (3).png'
import video from '../../assets/delicious.mp4'
import foto6 from '../../assets/about/rosemary.png'
import foto7 from '../../assets/about/Image (4).png'
import foto8 from '../../assets/about/Image (5).png'
import foto9 from '../../assets/about/Image (6).png'
import foto10 from '../../assets/about/rosemary (1).png'
import foto11 from '../../assets/about/Our Story (1).png'

function About() {
  return (
    <div >
      <div className="flex justify-between items-center bg-[#233000] max-w-[1300px] m-auto px-6">
    <img src={foto1} className='mt-[-20px]'/>
   <div className=''>
    <h1 className='fond-bold text-[70px] text-white ml-[-700px] '>Who We Are</h1>
    <p className='text-white ml-[-700px]'>The most important thing for us is to give you the <br /> comfortable dining experience</p>
   </div>
</div>
{/* 2блок */}
<div className='mt-[400px] bg-[#FFFFFF] m-auto max-w-[1500px]'>
  <h1 className='font-bold text-[70px] text-[000000] ml-[220px] relative bottom-[150px]'>Our Story</h1>
<p className='text-[#4D4D4D] ml-[230px] relative bottom-[120px]'>Lorem ipsum dolor sit amet, consectetur adipiscing. <br /> Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus <br /> auctor tincidunt lacus nunc. </p>
<img src={foto2} className='relative bottom-[600px] ml-[750px] mt-[150px] w-[600px]' />
<img src={foto3} className='ml-[580px] relative bottom-[1100px] w-[200px]' />
</div>
{/* 3 блок */}
 <div className='mt-[-600px] m-auto max-w-[1500px]'>
  <h1 className='font-bold text-[40px] text-[#000000] ml-[230px]'>Restuarant Manager</h1>
  <p className='text-[000000] ml-[400px]'>Carson Hugn</p>
  <img src={foto4} className='w-[550px] ml-[150px] mt-[20px]' />
  <p className='text-[#4D4D4D] ml-[800px] relative bottom-[660px]'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Et in sed in pellentesque ornare <br /> nunc nisl. </p>
  <div>
    <h1 className='font-bold text-[40px] text-[#000000] ml-[900px] relative bottom-[450px]'>Executive Chef</h1>
    <p className='text-[#000000] ml-[990px] relative bottom-[440px]'>Jane Cooper</p>
    <img src={foto5} className='ml-[800px] w-[500px] relative bottom-[420px]' />
    <p className='text-[#4D4D4D] ml-[330px] relative bottom-[520px]'>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Et in sed in pellentesque ornare <br />nunc nisl. Augue habitant accumsan, ut <br />parturient orci ac etiam congue mi. </p>
  </div>
 </div>
 {/* 4 блок */}
   <div className='ml-[2400px] mt-[-350px] '>
  <img src={foto11} className='w-[1300px]'/>
  <iframe width="1300" height="515" src={video} frameborder="0" allow=" accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


 
 {/* 5 блок */}
 <div className=' bg-[#FFFFFF] m-auto max-w-[1500px]'>
 <img src={foto6} className='ml-[1100px] w-[300px]' />
 <h1 className='font-bold text-[90px] ml-[240px] relative bottom-[220px]'>Sophisticated Process</h1>
 <img src={foto7} className='ml-[200px] relative bottom-[100px] w-[650px]' />
 <h1 className='font-bold text-[40px] text-[#000000] ml-[900px] relative bottom-[500px]'>01.Slice</h1>
 <p className='text-[#4D4D4D] relative bottom-[470px] ml-[900px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Purus lorem id penatibus imperdiet. Turpis egestas <br /> ultricies purus auctor tincidunt lacus nunc. 
  Convallis <br /> pellentesque quis fringilla sagittis. Egestas in risus sit <br /> nunc nunc, arcu donec nam etiam.</p>
 
 <div>
  <img src={foto8} className='ml-[950px] relative bottom-[170px] w-[450px]' />
  <h2 className='font-bold text-[40px] ml-[1000px] relative bottom-[120px]'>02.Pickled</h2>
  <p className='text-[#4D4D4D] ml-[1000px] relative bottom-[100px]'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. Purus lorem <br /> id penatibus imperdiet.</p>
 </div>
 <div>
  <h1 className='text-[40px] font-bold relative bottom-[600px] ml-[250px]'>03.Bake</h1>
 <p className='ml-[250px] relative bottom-[600px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Purus lorem id penatibus imperdiet.</p>
  <img src={foto9} className='relative bottom-[580px] ml-[250px] w-[450px]' />
  <img src={foto10} className='relative bottom-[600px] w-[200px] ml-[100px]' />
  </div>
 </div>
    </div>
    
  )
}

export default About
