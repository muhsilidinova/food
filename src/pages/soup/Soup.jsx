import React from 'react'
import { useState, useEffect } from 'react';
import { addCart } from '../../redux/CartSlice';
import foto1 from '../../assets/desert/foto1.jpg'
import foto2 from '../../assets/desert/foto2.jpg'
import foto3 from '../../assets/desert/foto3.jpg'
import foto4 from '../../assets/desert/foto4.jpg'
import foto5 from '../../assets/desert/foto5.jpg'
import foto6 from '../../assets/desert/foto6.jpg'
import foto7 from '../../assets/desert/foto7.jpg'
import foto8 from '../../assets/desert/foto8.jpg'
import foto9 from '../../assets/desert/foto9.jpg'
import foto10 from '../../assets/desert/foto10.jpg'
import foto11 from '../../assets/desert/foto11.jpg'
import foto12 from '../../assets/desert/foto12.jpeg'
import foto13 from '../../assets/desert/foto13.jpg'
import foto14 from '../../assets/desert/foto14.jpg'
import foto15 from '../../assets/desert/foto15.jpg'

const card = [
  {
    id: 1,
    img: foto1,
    name: 'Blackberry Fool',
    title: 'A creamy, sweet dessert made with fresh blackberries and whipped cream.',
    price: '$25.9'
  },
  {
    id: 2,
    img: foto2,
    name: 'Chocolate Gateau',
    title: 'A rich, decadent chocolate cake with layers of smooth, velvety ganache.',
    price: '$97.7'
  },
  {
    id: 3,
    img: foto3,
    name: 'Christmas Pudding Trifle',
    title: 'A festive layered dessert with rich Christmas pudding, creamy custard, and whipped cream.',
    price: '$25.9'
  },
  {
    id: 4,
    img: foto4,
    name: 'Dundee cake',
    title: 'A classic Dundee cake made with sultanas, currants, and almonds, offering a rich, sweet flavor.',
    price: '$59.2'
  },
  {
    id: 5,
    img: foto5,
    name: 'Nanaimo Bars',
    title: 'A classic Canadian dessert with a crumbly base, creamy custard filling, and a layer of chocolate',
    price: '$29.0'
  },
  {
    id: 6,
    img: foto6,
    name: 'Pancakes',
    title: 'Soft, light pancakes with a slightly crisp edge, perfect for breakfast or brunch.',
    price: '$20.9'
  },
  {
    id: 7,
    img: foto7,
    name: 'Peach & Blueberry Grunt',
    title: 'A fruity, spiced dessert featuring peaches and blueberries, topped with soft, pillowy dumplings.',
    price: '$80.1'
  },
  {
    id: 8,
    img: foto8,
    name: 'Peanut Butter Cheesecake',
    title: 'A creamy, rich cheesecake with a smooth peanut butter flavor and a crunchy graham cracker crust.',
    price: '$29.2'
  },
  {
    id: 9,
    img: foto9,
    name: 'Pumpkin Pie',
    title: 'A classic fall dessert with a spiced pumpkin filling in a flaky, buttery crust.',
    price: '$27.9'
  },
  {
    id: 10,
    img: foto10,
    name: 'Sticky Toffee Pudding Ultimate',
    title: 'A rich and indulgent dessert with moist toffee sponge, drizzled with a warm, gooey toffee sauce.',
    price: '$30.9'
  },
  {
    id: 11,
    img: foto11,
    name: 'Strawberries Romanoff',
    title: 'Sweet strawberries topped with a luscious, whipped cream and orange-flavored liqueur sauce.',
    price: '$62.3'
  },
  {
    id: 12,
    img: foto12,
    name: 'Strawberry Rhubarb Pie',
    title: 'A sweet and tart pie filled with juicy strawberries and tangy rhubarb in a flaky, buttery crust.',
    price: '$27.8'
  },
  {
    id: 13,
    img: foto13,
    name: 'Sugar Pie',
    title: 'A rich and creamy pie with a smooth, caramelized filling and a buttery, flaky crust.',
    price: '$62.2'
  },
  {
    id: 14,
    img: foto14,
    name: 'Summer Pudding',
    title: 'A light and fruity pudding made with fresh summer berries, layered between slices of bread and chilled to perfection.',
    price: '$67.9'
  },
  {
    id: 15,
    img: foto15,
    name: 'Battenberg Cake',
    title: 'A rich, moist cake with alternating layers of pink and yellow sponge, all covered in marzipan for a classic touch.',
    price: '$50.6'
  },
]

function Soup() {
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
        <h1 className="text-4xl text-[#233000]">Dessert</h1>
        <p className="text-[#9E9E9E] mt-4">Dessert is a course that concludes a meal. The course usually consists of sweet foods, such 
        as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may 
        include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world,
         such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to 
         conclude a meal. The term dessert can apply to many confections, such as biscuits, cakes, cookies, custards,
          gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in 
          dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly 
          savory to create desserts.</p>
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

export default Soup

