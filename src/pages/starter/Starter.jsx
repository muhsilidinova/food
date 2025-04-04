import React from 'react'
import { useState, useEffect } from 'react';
import { addCart} from '../../redux/CartSlice';
// import Product from '../../components/Cart/Product'
import foto1 from '../../assets/beef/asado.jpg'
import foto2 from '../../assets/beef/bistek.jpg';
import foto3 from '../../assets/beef/bourguignon.jpg'
import foto4 from '../../assets/beef/bowls.jpg'
import foto5 from '../../assets/beef/brisked.jpg'
import foto6 from '../../assets/beef/caldereta.jpg'
import foto7 from '../../assets/beef/dumpling.jpg'
import foto8 from '../../assets/beef/mac.jpg'
import foto9 from '../../assets/beef/mechado.jpg'
import foto10 from '../../assets/beef/mein.jpg'
import foto11 from '../../assets/beef/mustard.jpg'
import foto12 from '../../assets/beef/oyster.jpg'
import foto13 from '../../assets/beef/roast.jpg'
import foto14 from '../../assets/beef/wellington.jpg'
import foto15 from '../../assets/beef/montreal.jpg'
import foto16 from '../../assets/beef/massaman.jpg'
import foto17 from '../../assets/beef/colabki.jpg'
import foto18 from '../../assets/beef/oxtail.jpg'
import foto19 from '../../assets/beef/carrots.jpg'
import foto20 from '../../assets/beef/szecchuan.jpg'

const card = [
  {
    id: 1,
    img: foto1,
    name: 'Beef Asado',
    title: 'Slow-cooked to perfection, infused with rich spices and savory flavors.',
    price: '$3.80'
  },
  {
    id: 2,
    img: foto2,
    name: 'Beef Brisket Pot Roast',
    title: 'Slow-braised to tenderness, infused with rich flavors and aromatic herbs.',
    price: '$2.81'
  },
  {
    id: 3,
    img: foto3,
    name: 'Beef Bourguignon',
    title: 'Slow-cooked in red wine with tender beef, aromatic herbs, and rich flavors.',
    price: '$2.50'
  },
  {
    id: 4,
    img: foto4,
    name: 'Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber',
    title: 'Beef Banh Mi Bowls with Sriracha Mayo, vibrant flavors of pickled cucumber, carrot, and savory beef.',
    price: '$5.10'
  },
  {
    id: 5,
    img: foto5,
    name: 'Beef Brisket Pot Roast',
    title: 'Slow-cooked to perfection with rich flavors and tender texture',
    price: '$1.87'
  },
  {
    id: 6,
    img: foto6,
    name: 'Beef Caldereta',
    title: 'A rich and hearty stew slow-cooked with tomatoes, spices, and tender beef.',
    price: '$10.0'
  },
  {
    id: 7,
    img: foto7,
    name: 'Beef Dumpling Stew',
    title: 'A hearty and comforting dish with tender beef, rich broth, and fluffy dumplings.',
    price: '$9.01'
  },
  {
    id: 8,
    img: foto8,
    name: 'Bif Mac',
    title: 'A hearty dish with tender beef, creamy cheese sauce, and perfectly cooked pasta.',
    price: '$30.1'
  },
  {
    id: 9,
    img: foto9,
    name: 'Beef Mechado',
    title: 'A flavorful stew of tender beef, tomatoes, and spices, slow-cooked to perfection.',
    price: '$5.08'
  },
  {
    id: 10,
    img: foto10,
    name: 'Beef Lo Mein',
    title: 'Savory stir-fried noodles with tender beef, vibrant vegetables, and rich sauce.',
    price: '$9.1'
  },
  {
    id: 11,
    img: foto11,
    name: 'Beef and Mustard Pie',
    title: 'A hearty savory pie with tender beef, tangy mustard, and a flaky crust.',
    price: '$7.60'
  },
  {
    id: 12,
    img: foto12,
    name: 'Beef and Oyster pie',
    title: 'A rich and savory pie filled with tender beef, succulent oysters, and a flaky pastry crust.',
    price: '$5.01'
  },
  {
    id: 13,
    img: foto13,
    name: 'Beef Brisket Pot Roast',
    title: 'Slow-cooked to perfection with tender beef, rich flavors, and a hearty broth.',
    price: '$7.9'
  },
  {
    id: 14,
    img: foto14,
    name: 'Beef Wellington',
    title: 'A luxurious dish with tender beef wrapped in mushroom duxelles and flaky puff pastry.',
    price: '$5.08'
  },
  {
    id: 15,
    img: foto15,
    name: 'Montreal Smoked Meat',
    title: 'A flavorful and tender smoked beef, seasoned with a blend of spices and slow-cooked to perfection.',
    price: '$8.01'
  },
  {
    id: 16,
    img: foto16,
    name: 'Massaman Beef curry',
    title: 'A rich and aromatic curry with tender beef, fragrant spices, and a creamy coconut sauce.',
    price: '$21.1'
  },
  {
    id: 17,
    img: foto17,
    name: 'Golabki (cabbage roll)',
    title: 'A hearty dish with tender cabbage stuffed with savory meat, rice, and spices, all simmered in a rich tomato sauce.',
    price: '$3.10'
  },
  {
    id: 18,
    img: foto18,
    name: 'Oxtail with broad beans',
    title: 'A savory and tender stew with rich flavors, slow-cooked to perfection.',
    price: '$22.5'
  },
  {
    id: 19,
    img: foto19,
    name: 'Soy-Glazed Meatloaves with Wasabi Mashed Potatoes & Roasted Carrots',
    title: 'A savory and flavorful dish with tender meat, creamy potatoes, and sweet roasted vegetables.',
    price: '$24.1'
  },
  {
    id: 20,
    img: foto20,
    name: 'Szechuan Beef',
    title: 'A bold and spicy dish with tender beef, aromatic spices, and a savory, fiery sauce.',
    price: '$5.10'
  },
]

function Starter() {
  const [cart, setCart] = useState([]);
  const [product, setProduct] = useState([])

  async function getPro() {
    try {
      // const res = await axios.get(API)
      setProduct(res.data)  // Используйте res.data, чтобы получить данные из ответа
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPro()
  }, [])

  const addCart = (item) => {
    setCart([...cart, item])
  }

  return (
    <div className="w-full max-w-[1400px] mx-auto p-10 bg-white text-black">
      <div className="font-serif pt-8 border-t-2 border-[#4a4747]">
        <h1 className="text-4xl text-[#233000]">BEEF</h1>
        <p className="text-[#9E9E9E] mt-4">Beef is the culinary name for meat from cattle, particularly skeletal muscle.
          Humans have been eating beef since prehistoric times. Beef is a source of high-quality protein and essential nutrients.</p>
        <h2 className="text-3xl pt-16 ml-[70px]">MEALS</h2>
      </div>

      <div className="flex justify-center mt-12">
        <div className="max-w-[1200px] grid grid-cols-3 gap-8">
          {card && card.length > 0 ? (
            card.map((card, index) => (
              <div key={index} className="mb-8 font-serif">
                <img src={card.img} className='rounded-xl grayscale-[5%] brightness-75'/>
                <h1 className='text-[30px] font-bold'>{card.name}</h1> 
                <h3 className='text-[20px] font-semibold text-[#233000]'>{card.price}</h3>
                <h2 className='text-[17px] mt-2 text-[#4a4747]'>
                  {card.title.split("\n").map((line, id) => (
                    <span key={id}>{line}</span>
                  ))}
                </h2>
                <button onClick={() => dispatch(addCart(product))}className="mt-4 px-15 py-2 bg-[#233000] text-white rounded-lg hover:bg-[#1a2400] cursor-pointer">Add to Cart</button>
              </div>
            ))
          ) : (
            <p className="text-[#9E9E9E]">No items available.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Starter
