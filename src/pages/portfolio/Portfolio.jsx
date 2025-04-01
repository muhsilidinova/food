import React from 'react'
import foto from '../../assets/list3.jpg'
import foto1 from '../../assets/portfolio/crop.png'
import foto2 from '../../assets/portfolio/drink.png'
import foto3 from '../../assets/portfolio/soup2.png'
import foto4 from '../../assets/portfolio/launch.png'
import foto5 from '../../assets/portfolio/cold.png'
import foto6 from '../../assets/portfolio/rack.png'

const card = [
  {
    title: 'Premium Deep Sea Snow\nWhite Cod Fillet',
    img: foto1,
    dialogue: 'Launch • Dinner',
    imgClass: 'w-[700px] h-[600px]',
    titleClass: 'mt-[-130px] ml-[60px]',
    dialogueClass: 'ml-[66px]'
  },
  {
    title: 'Option of natural\nwine available',
    img: foto2,
    dialogue: 'Drink • Fruit',
    imgClass: 'w-[300px] h-[600px] ml-[780px] mt-[-580px]',
    titleClass: 'ml-[800px] mt-[-140px]',
    dialogueClass: 'ml-[805px]'
  },
  {
    title: 'Best pumpkin for \n pumpkin soup',
    img: foto3,
    dialogue: 'Launch • Starters',
    imgClass: 'w-[300px] h-[600px] mt-[40px]',
    titleClass: 'mt-[-120px] ml-[60px]',
    dialogueClass: 'ml-[60px]'
  },
  {
    title: 'Strip Steak With Rosemary \n Butter',
    img: foto4,
    dialogue: 'Dinner • Launch',
    imgClass: 'w-[700px] h-[600px] ml-[380px] mt-[-595px]',
    titleClass: 'ml-[400px] mt-[-120px]',
    dialogueClass: 'ml-[400px]'
  },
  {
    title: 'Braised Sliced Abalone,Fish \n Maw with Premium Seafood',
    img: foto5,
    dialogue: 'Cold Dishes • Starters',
    imgClass: 'w-[490px] mt-[30px]',
    titleClass: 'ml-[65px] mt-[-125px]',
    dialogueClass: 'ml-[65px]'
  },
  {
    title: 'Pan Fried Live Prawn with \n Superior Soy Sauce',
    img: foto6,
    dialogue: 'Starter • Dinner',
    imgClass: 'w-[490px] ml-[590px] mt-[-600px]',
    titleClass: 'ml-[605px] mt-[-125px]',
    dialogueClass: 'ml-[605px]'
  },
]

function Portfolio() {
  return (
    <div className='w-full m-auto text-black'>
      <div style={{ backgroundImage: `url(${foto})` }} className='bg-no-repeat bg-cover h-[700px]'>
        <h1 className='text-[60px] text-black font-bold pt-80 text-center'style={{ fontFamily: "Rufina, serif" }}>Portfolio - Grids</h1>
      </div>
      <div className='w-[1400px] m-auto'>
        <div className='text-center'>
          {/* block 2 */}
          <div className='bg-[#FFFFFF] w-[1400px] ml-[-40px] mt-10 relative '>
            <ul className='flex list-none ml-[420px] text-[20px] text-[#424242] font-bold cursor-pointer'style={{ fontFamily: "Rufina, serif" }}>
              <li className='group relative hover:text-[#686868] transition-all ease-in-out'>All<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#686868] transition-all duration-300 ease-in-out group-hover:w-full"></span></li>
              <li className='group relative ml-[30px] hover:text-[#686868] transition-colors ease-in-out'>Starter<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#686868] transition-all duration-300 ease-in-out group-hover:w-full"></span></li>
              <li className='group relative ml-[30px] hover:text-[#686868] transition-colors ease-in-out'>Launch<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#686868] transition-all duration-300 ease-in-out group-hover:w-full"></span></li>
              <li className='group relative ml-[30px] hover:text-[#686868] transition-colors ease-in-out'>dinner<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#686868] transition-all duration-300 ease-in-out group-hover:w-full"></span></li>
              <li className='group relative ml-[30px] hover:text-[#686868] transition-colors ease-in-out'>Drinks<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#686868] transition-all duration-300 ease-in-out group-hover:w-full"></span></li>
              <li className='group relative ml-[30px] hover:text-[#686868] transition-colors ease-in-out'>Sweets<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#686868] transition-all duration-300 ease-in-out group-hover:w-full"></span></li>
              <li className='group relative ml-[30px] hover:text-[#686868] transition-colors ease-in-out'>Fruits<span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#686868] transition-all duration-300 ease-in-out group-hover:w-full"></span></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-[50px]">
          <div className="max-w-[1200px]">
            {card.map((card, index) => (
              <div key={index} className="text-white">
                <img src={card.img} className={`${card.imgClass} rounded-xl ml-[50px] grayscale-[5%] brightness-75 transition-all duration-500 hover:brightness-90 hover:scale-105 cursor-pointer`} />
                <h1 className={`${card.titleClass} text-[30px] font-bold relative z-10`} style={{ fontFamily: "Rufina, serif" }}>
                  {card.title.split("\n").map((line, idx) => (
                    <span key={idx}>{line}<br /></span>
                  ))}</h1>
                <p className={`${card.dialogueClass} relative z-10`} style={{ fontFamily: "Rufina, serif" }}>{card.dialogue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio






