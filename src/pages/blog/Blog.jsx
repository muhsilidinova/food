import React from 'react'
import foto1 from '../../assets/blog/vegetables.png'
import foto2 from '../../assets/blog/asparagus.png'
import foto3 from '../../assets/blog/yelfruit.png'
import foto4 from '../../assets/blog/ceramic.png'
import foto5 from '../../assets/blog/strawberry.png'
import foto6 from '../../assets/blog/vaetable.png'
import foto7 from '../../assets/blog/fashion.png'
import surot1 from '../../assets/blog/julie.png'
import surot2 from '../../assets/blog/diannne.png'
import surot3 from '../../assets/blog/jennifer.png'
import surot4 from '../../assets/blog/theresa.png'
import surot5 from '../../assets/blog/leslie.png'
import surot6 from '../../assets/blog/blog.png'
import surot7 from '../../assets/list.jpg'

const card = [
  {
    title: 'Fruit and vegetablesand \n protection against diseases',
    img: foto1,
    dialogue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Asparagus Spring Salad with \n Rocket, Goats Cheese',
    img: foto2,
    dialogue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    title: '7 Reasons to Start Your Day \n With Lemon Water',
    img: foto3,
    dialogue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    title: 'Three Ideas for Cooking \n Goat Meat at Home',
    img: foto4,
    dialogue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    title: '12 Sparkling Wines Were \n Loving This Summer',
    img: foto5,
    dialogue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    title: 'The Best Style of Dough for \n Dumplings',
    img: foto6,
    dialogue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
]

function Blog() {
  return (
        <div className="w-full m-auto relative">
          <div style={{ backgroundImage: `url(${surot7})` }} className='bg-no-repeat w-full bg-si bg-cover pt-70 h-[700px]'>
            {/* <img src={surot7} className='absolute'/> */}
            <h1 className='text-[80px] justify-center items-center flex text-white' style={{ fontFamily: "Rufina, serif" }}>Blogs</h1>
          </div>
          <div className='grid grid-cols-2 gap-6 w-[1200px] m-auto mt-[200px]'>
          {card.map((card, index) => (
            <div key={index} className="bg-white p-4 rounded-lg ">
              <img src={card.img} className="w-full object-cover rounded-lg"/>
              <h1 className="text-[24px] mt-3 font-bold" style={{ fontFamily: "Rufina, serif" }}>
                {card.title.split("\n").map((line, idx) => (
                  <span key={idx}>{line}<br/></span>
                ))}
              </h1>
              <p className="text-[#4D4D4D] mt-2 text-[13px]">{card.dialogue}</p>
            </div>
          ))}
    </div>
    </div>  
  )
  
}

export default Blog

