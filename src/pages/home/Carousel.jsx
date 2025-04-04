import React, { useState } from "react";
import foto from '../../assets/carousel/blake.jpg';
import foto1 from '../../assets/carousel/ben.jpg';
import foto2 from '../../assets/carousel/chris.jpg';
import foto3 from '../../assets/carousel/erich.jpg';
import foto4 from '../../assets/carousel/john.jpg';
import foto5 from '../../assets/carousel/juan.jpg';

const slides = [
  { 
    id: 1, 
    img: foto, 
    name: "Blake Lively", 
    title: "Recipes: 09", 
    cuisine: "Cuisine: French" 
  },
  { 
    id: 2, 
    img: foto1, 
    name: "Ben Affleck", 
    title: "Recipes: 04", 
    cuisine: "Cuisine: Indian"
  },
  { 
    id: 3, 
    img: foto2, 
    name: "Chris Brown", 
    title: "Recipes: 08", 
    cuisine: "Cuisine: American" 
  },
  { 
    id: 4, 
    img: foto3, 
    name: "Erich Maria", 
    title: "Recipes: 13", 
    cuisine: "Cuisine: Italian" 
  },
  { 
    id: 5, 
    img: foto4, 
    name: "John Doe", 
    title: "Recipes: 05", 
    cuisine: "Cuisine: Japanese" 
  },
  { 
    id: 6, 
    img: foto5, 
    name: "Juan Carlos",
    title: "Recipes: 10", 
    cuisine: "Cuisine: Mexican" 
  },
]

const Carousel = () => {
  const [index, setIndex] = useState(0)
  const visibleSlides = 3

  const nextSlide = () => setIndex((index + visibleSlides) % slides.length)
  const prevSlide = () => setIndex((index - visibleSlides + slides.length) % slides.length)

  return (
    <div className="relative w-full max-w-[1300px] mx-auto overflow-hidden mt-130">
       <div className="text-center"> 
        <h1 className="text-[40px] font-bold font-serif">Our Top Chiefs</h1>
        </div>
      <div className="max-w-[1300px] h-[400px] m-auto relative flex gap-4 mt-8"> 
       
        {[0, 1, 2].map((i) => {
          const slideIndex = (index + i) % slides.length
          const item = slides[slideIndex]
          return (
            <div key={item.id} className="w-1/3 right-5 bg-white p-4 rounded-lg font-serif">
             
              <img src={item.img} className="h-[250px] ml-[70px] object-cover w-[250px] rounded-full" alt={item.name} />
              <h1 className="text-2xl mt-6 ml-[120px]">{item.name}</h1>
              <p className="mt-4 text-[20px] text-gray-600 ml-[120px]">{item.title}</p>
              <h2 className="font-semibold text-lg mt-2  ml-[120px]">{item.cuisine}</h2>
            </div>
          )
        })}
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-2 -translate-y-1/2 px-3 py-1 rounded-full cursor-pointer">❮</button>
      <button onClick={nextSlide} className="absolute top-1/2 right-1 -translate-y-1/2 px-3 py-1 rounded-full cursor-pointer">❯</button>
    </div>
  )
}

export default Carousel
