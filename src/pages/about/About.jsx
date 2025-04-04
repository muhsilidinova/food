import React, { useState, useEffect } from 'react'
import foto2 from '../../assets/about/Image (1).png'
import foto4 from '../../assets/about/Image (2).png'
import foto5 from '../../assets/about/Image (3).png'
import foto7 from '../../assets/about/Image (4).png'
import foto8 from '../../assets/about/Image (5).png'
import foto9 from '../../assets/about/Image (6).png'
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
    <div className="font-serif bg-white">

    {/* Первый блок: Who We Are */}
    <div className="max-w-[1300px] m-auto px-6 pt-[300px] text-black text-center">
      <h1 className="text-[70px] font-bold mb-6">Who We Are</h1>
      <p>The most important thing for us is to give you the <br /> comfortable dining experience</p>
    </div>
  
    {/* Карусель */}
    <div className="mt-16">
      <CarouselSlice />
    </div>
  
    {/* Our Story блок */}
    <div className="max-w-[1400px] m-auto px-6 py-32 flex flex-col lg:flex-row gap-12 items-start">
      <div className="flex-1 mt-[20px]">
        <h1 className="font-bold text-[70px] mb-6">Our Story</h1>
        <p className="text-[#4D4D4D] text-lg leading-7">
        Our story began with simple things.
From the love of real taste,<br /> to the moments that you want to remember, and to the people <br /> you want to be with.
We believe that the most precious memories <br /> are born not in a hurry, but in the silence of a cup of tea, in the smell <br /> of fresh pastries, in a light conversation over dinner.
From the first <br /> day, we collect these moments — slowly, with care, piece by piece, <br /> sip by sip.
And with every moment like this, we are getting closer to you. <br /> It's not just food here. It's warm in here. There's a house here.
This is us. <br /> And everything is just beginning.
        </p>
      </div>
      <div className="flex flex-col items-center gap-6">
        <img src={foto2} className="w-[600px] rounded-xl" />
      </div>
    </div>
  
    {/* Третий блок: Менеджер и Шеф-повар */}
    <div className="max-w-[1400px] m-auto px-6 py-20 grid lg:grid-cols-2 gap-20">
  
      {/* Менеджер */}
      <div>
        <h1 className="text-[40px] font-bold mb-2">Restaurant Manager</h1>
        <p className="text-black mb-4">Carson Hugn</p>
        <img src={foto4} className="w-full rounded-xl mb-4" />
        <p className="text-[#4D4D4D] text-base leading-7">
          Experienced and passionate about creating memorable dining experiences, Carson has been managing restaurants for over 10 years.
          With a keen eye for detail and a commitment to customer satisfaction, he ensures that every guest feels welcomed and valued.
          His leadership style emphasizes teamwork, efficiency, and maintaining the highest standards of service.
        </p>
      </div>
  
      {/* Шеф-повар */}
      <div>
        <h1 className="text-[40px] font-bold mb-2">Executive Chef</h1>
        <p className="text-black mb-4">Jane Cooper</p>
        <img src={foto5} className="w-full rounded-xl mb-4" />
        <p className="text-[#4D4D4D] text-base leading-7">
          Jane is a talented executive chef with over 9 years of experience in the culinary industry. Her culinary artistry is marked by
          sophistication, attention to detail, and a passion for using fresh high-quality ingredients. She leads the kitchen with professionalism,
          creating not only delicious but visually appealing dishes. Jane is dedicated to inspiring her team and maintaining high standards
          of excellence in the kitchen.
        </p>
      </div>
    </div>
  
    {/* Пятый блок: Sophisticated Process */}
    <div className="max-w-[1400px] m-auto px-6 py-28">
      <h1 className="font-bold text-[90px] text-center mb-20">Sophisticated Process</h1>
  
      <div className="flex flex-wrap justify-center gap-10">
  
        {/* Slice */}
        <div className="flex flex-col items-center max-w-[400px]">
          <img src={foto7} className="w-[350px] rounded-xl" />
          <h2 className="font-bold text-[30px] mt-4">01. Slice</h2>
          <p className="text-[#4D4D4D] text-center mt-2">
            The taste of life is the moments when we enjoy every sip, every bite that brings joy. <br />
            Imagine sitting in a cozy cafe in Bishkek, with the soft evening light and a cup of fragrant tea.
          </p>
        </div>
  
        {/* Pickled */}
        <div className="flex flex-col items-center max-w-[400px]">
          <img src={foto8} className="w-[350px] rounded-xl" />
          <h2 className="font-bold text-[30px] mt-4">02. Pickled</h2>
          <p className="text-[#4D4D4D] text-center mt-2">
            Do you remember the taste of childhood? A jar on a shelf, grandma in an apron, dill, garlic and secret magic.
            Pickled life isn’t for those with a sweet tooth.
          </p>
        </div>
  
        {/* Bake */}
        <div className="flex flex-col items-center max-w-[400px]">
          <img src={foto9} className="w-[350px] rounded-xl" />
          <h2 className="font-bold text-[30px] mt-4">03. Bake</h2>
          <p className="text-[#4D4D4D] text-center mt-2">
            The smell of fresh pastries fills the air, spreads through the rooms, and warms the coziest corners of memory.
          </p>
        </div>
  
      </div>
    </div>
  </div>
  )
}

export default About
