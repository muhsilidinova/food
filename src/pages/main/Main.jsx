import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { addCart} from '../../redux/CartSlice';
import Product from '../../components/Cart/Product'
import foto1 from '../../assets/chicken/bask.jpg'
import foto2 from '../../assets/chicken/casserol.jpg'
import foto3 from '../../assets/chicken/gongee.jpg'
import foto4 from '../../assets/chicken/gurri.jpg'
import foto5 from '../../assets/chicken/handi.jpg'
import foto6 from '../../assets/chicken/hotpot.jpg'
import foto7 from '../../assets/chicken/karaage.jpg'
import foto8 from '../../assets/chicken/kentucky.jpg'
import foto9 from '../../assets/chicken/padse.jpg'
import foto10 from '../../assets/chicken/pao.jpg'
import foto11 from '../../assets/chicken/peas.jpg'
import foto12 from '../../assets/chicken/piri.jpg'
import foto13 from '../../assets/chicken/potatoes.jpg'
import foto14 from '../../assets/chicken/primavera.jpg'
import foto15 from '../../assets/chicken/sandwich2.jpg'
import foto16 from '../../assets/chicken/tagos.jpg'
import foto17 from '../../assets/chicken/tandoori.jpg'
import foto18 from '../../assets/chicken/tsos.jpg'

const card = [
  {
    id: 1,
    img: foto1,
    name: 'Chicken Basquaise',
    title: 'Basque chicken with a vibrant Mediterranean flavor',
    price: '$30.9'
  },
  {
    id: 2,
    img: foto2,
    name: 'Chicken Enchilada Casserole',
    title: 'A bold and cheesy Mexican-inspired casserole that’s full of flavor.',
    price: '$23.4'
  },
  {
    id: 3,
    img: foto3,
    name: 'Chicken Congee',
    title: 'Silky smooth chicken congee, slow-cooked for a rich and delicate flavor.',
    price: '$5.9'
  },
  {
    id: 4,
    img: foto4,
    name: 'Thai Green Curry',
    title: 'A fragrant and creamy Thai curry with tender chicken, coconut milk, and aromatic spices.',
    price: '$96.2'
  },
  {
    id: 5,
    img: foto5,
    name: 'Chicken Handi',
    title: 'ender chicken slow-cooked in a fragrant, spiced tomato and yogurt-based gravy.',
    price: '$63.0'
  },
  {
    id: 6,
    img: foto6,
    name: 'Chicken & mushroom Hotpot',
    title: 'Slow-cooked chicken and mushrooms in a flavorful, warming broth.',
    price: '$23.0'
  },
  {
    id: 7,
    img: foto7,
    name: 'Chicken Karaage',
    title: 'Japanese-style fried chicken with a deliciously crispy exterior and juicy interior.',
    price: '$78.2'
  },
  {
    id: 8,
    img: foto8,
    name: 'Kentucky Fried Chicken',
    title: 'Classic Southern-style fried chicken, crispy on the outside and tender on the inside.',
    price: '$23.1'
  },
  {
    id: 9,
    img: foto9,
    name: 'Pad See Ew',
    title: 'Stir-fried rice noodles with a perfect balance of savory, sweet, and tangy flavors.',
    price: '$82.2'
  },
  {
    id: 10,
    img: foto10,
    name: 'Kung Pao Chicken',
    title: 'A flavorful stir-fry with chicken, peanuts, and a savory, spicy kick.',
    price: '$22.0'
  },
  {
    id: 11,
    img: foto11,
    name: 'Jerk chicken with rice & peas',
    title: 'Spicy jerk chicken, perfectly grilled and served with coconut rice and peas.',
    price: '$29.2'
  },
  {
    id: 12,
    img: foto12,
    name: 'Piri-piri chicken and slaw',
    title: 'Spicy piri-piri chicken served with a crunchy, tangy slaw for the perfect balance.',
    price: '$10.9'
  },
  {
    id: 13,
    img: foto13,
    name: 'Honey Balsamic Chicken with Crispy Broccoli & Potatoes',
    title: 'A sweet and savory honey balsamic chicken served with crispy roasted broccoli and tender potatoes.',
    price: '$30.0'
  },
  {
    id: 14,
    img: foto14,
    name: 'Chicken Alfredo Primavera',
    title: 'A creamy, rich chicken Alfredo pasta topped with a mix of fresh primavera vegetables.',
    price: '$42.9'
  },
  {
    id: 15,
    img: foto15,
    name: 'Chick-Fil-A Sandwich',
    title: 'Classic fried chicken sandwich with a crispy coating, fresh pickles, and a soft bun.',
    price: '$90.1'
  },
  {
    id: 16,
    img: foto16,
    name: 'Crock Pot Chicken Baked Tacos',
    title: 'A comforting dish of slow-cooked chicken, baked in crunchy taco shells with melted cheese and savory toppings.',
    price: '$37.2'
  },
  {
    id: 17,
    img: foto17,
    name: 'Tandoori chicken',
    title: 'Grilled tandoori chicken with a smoky char and bold, aromatic spices for a flavorful meal.',
    price: '$10.9'
  },
  {
    id: 18,
    img: foto18,
    name: 'General Tsos Chicken',
    title: 'Tender chicken coated in a crispy batter and served with a flavorful, slightly spicy sauce.',
    price: '$70.3'
  },
]

function Main() {
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

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  return (
    <div className="w-full max-w-[1400px] mx-auto p-10 bg-white text-black">
      <div className="font-serif pt-8 border-t-2 border-[#4a4747]">
        <h1 className="text-4xl text-[#233000]">Chicken</h1>
        <p className="text-[#9E9E9E] mt-4">Chicken is a type of domesticated fowl, a subspecies of the red junglefowl.
           It is one of the most common and widespread domestic animals, with a total population of more than 19 billion
            as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and,
             more rarely, as pets.</p>
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

export default Main
