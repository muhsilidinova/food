import React, { useState, useEffect } from 'react'
import foto1 from '../../assets/about/Image.png'
import foto2 from '../../assets/about/Image (1).png'
import foto3 from '../../assets/about/Tomato.svg'
import foto4 from '../../assets/about/Image (2).png'
import foto5 from '../../assets/about/Image (3).png'
import foto6 from '../../assets/about/rosemary.png'
import foto7 from '../../assets/about/Image (4).png'
import foto8 from '../../assets/about/Image (5).png'
import foto9 from '../../assets/about/Image (6).png'
import foto10 from '../../assets/about/rosemary (1).png'
import foto11 from '../../assets/about/Our Story (1).png'
import image1 from '../../assets/about/about4.jpg'
import image2 from '../../assets/about/about2.jpg'
import image3 from '../../assets/about/about3.jpg'

const CarouselSlice = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    { img: image1 },
    { img: image2 },
    { img: image3 },
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(nextImage, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden w-full max-w-[1400px] mx-auto shadow-lg mt-[-360px]">
      <div className="flex transition-transform duration-8000 ease-in-out ">
        <img src={images[currentIndex].img} alt={`Image ${currentIndex + 1}`}className="w-[1400px] h-[700px] object-cover"/>
      </div>
      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
        <button onClick={prevImage}className="text-black px-4 py-2 rounded-full opacity-70 hover:opacity-100">❮</button>
        <button onClick={nextImage}className="text-black px-4 py-2 rounded-full opacity-70 hover:opacity-100">❯</button>
      </div>
    </div>
  )
}

const About = () => {
  return (
    <div>
      {/* Первый блок */}
      <div className="flex justify-between text-black items-center bg-[#FFFFFF] max-w-[1300px] m-auto px-6 relative">
        <div className="text-black pt-[300px] font-serif ml-[700px] ">
          <h1 className="text-[70px] font-bold absolute z-10">Who We Are</h1>
          <p className='absolute z-10 mt-[110px] ml-5'>The most important thing for us is to give you the <br /> comfortable dining experience</p>
        </div>
      </div>

      {/* Карусель */}
      <div className="mt-16">
        <CarouselSlice />
      </div>

      {/* Второй блок */}
      <div className="pt-[600px] bg-[#FFFFFF] m-auto max-w-[1500px]">
        <h1 className="font-bold text-[70px] text-[000000] ml-[220px] relative bottom-[150px]">Our Story</h1>
        <p className="text-[#4D4D4D] ml-[230px] relative bottom-[120px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing. <br /> Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus <br /> auctor tincidunt lacus nunc.{' '}
        </p>
        <img src={foto2} className="relative bottom-[600px] ml-[750px] mt-[150px] w-[600px] rounded-xl" />
        <img src={foto3} className="ml-[580px] relative bottom-[1100px] w-[200px]" />
      </div>

      {/* Третий блок */}
      <div className="mt-[-600px] m-auto max-w-[1500px] font-serif">
        <h1 className="font-bold text-[40px] text-[#000000] ml-[230px]">Restaurant Manager</h1>
        <p className="text-[000000] ml-[400px]">Carson Hugn</p>
        <img src={foto4} className="w-[550px] ml-[150px] mt-[30px] rounded-xl" />
        <p className="text-[#4D4D4D] ml-[720px] relative bottom-[660px] pt-6">Experienced and passionate about creating memorable
           dining experiences, Carson has <br /> been managing restaurants for over 10 years. With a keen eye for detail and a 
           commitment <br />to customer satisfaction, he ensures that every guest feels welcomed and valued. His <br />leadership
            style emphasizes teamwork, efficiency, and maintaining the <br />highest standards of service.</p>
        <div>
          <h1 className="font-bold text-[40px] text-[#000000] ml-[950px] relative bottom-[450px]">Executive Chef</h1>
          <p className="text-[#000000] ml-[1050px] relative bottom-[440px]">Jane Cooper</p>
          <img src={foto5} className="ml-[850px] w-[500px] relative bottom-[420px] rounded-xl" />
          <p className="text-[#4D4D4D] ml-[170px] relative bottom-[600px]">Jane is a talented executive chef with over 9 
            years of experience in the culinary <br />industry. Her culinary artistry is marked by sophistication, attention to 
            detail, and a ,<br />passion for using fresh high-quality ingredients. She leads the kitchen with <br />professionalism, 
            creating not only delicious but visually appealing dishes. <br />Jane is dedicated to inspiring her team and maintaining 
            high standards <br />of excellence in the kitchen.</p>
        </div>
      </div>

      {/* Пятый блок */}
      <div className="bg-[#FFFFFF] m-auto max-w-[1400px] mt-[-300px] font-serif">
        <img src={foto6} className="ml-[1000px] w-[300px]"/>
        <h1 className="font-bold text-[90px] ml-[200px] relative bottom-[220px]">Sophisticated Process</h1>
        <img src={foto7} className="ml-[100px] relative bottom-[100px] w-[650px] rounded-xl"/>
        <h1 className="font-bold text-[40px] text-[#000000] ml-[900px] relative bottom-[500px]">01.Slice</h1>
        <p className="text-[#4D4D4D] relative bottom-[470px] ml-[900px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Purus lorem id penatibus imperdiet. Turpis egestas <br /> ultricies purus auctor tincidunt lacus nunc. Convallis <br /> pellentesque quis fringilla sagittis. Egestas in risus sit <br /> nunc nunc, arcu donec nam etiam.
        </p>
        <div>
          <img src={foto8} className="ml-[900px] relative bottom-[170px] w-[450px] rounded-xl" />
          <h2 className="font-bold text-[40px] ml-[1000px] relative bottom-[120px]">02.Pickled</h2>
          <p className="text-[#4D4D4D] ml-[1000px] relative bottom-[120px]">
            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. Purus lorem <br /> id penatibus imperdiet.
          </p>
        </div>
        <div>
          <h1 className="text-[40px] font-bold relative bottom-[600px] ml-[240px]">03.Bake</h1>
          <p className="ml-[180px] relative bottom-[600px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Purus lorem id penatibus imperdiet.</p>
          <img src={foto9} className="relative bottom-[580px] ml-[130px] w-[450px] rounded-xl" />
          <img src={foto10} className="mt-[-700px] w-[200px] ml-[100px] rounded-xl" />
        </div>
      </div>
    </div>
  )
}

export default About
