// import React from 'react'
// import { useSelector } from 'react-redux'

// function Cart() {
//   const {cartItem} = useSelector((state) => state.cart) 
//   return (
//   <div className='mt-[50px] w-[1300px] m-auto'>
//       <div className="basket">
//       {
//         cartItem.map((item) => (
//           <div className="">
//         <div className="w-[400px] flex items-center gap-[50px] text-[20px] font-extrabold">
//           <img src={item.imageUrl} className='w-[80px] h-[80px]'/>
//           <h6>{item.title}</h6>          
//         </div>
//         <p className='text-[20px] font-extrabold'>{item.price}</p>
//         <input type='number' placeholder='0' className='w-[55px] h-[32px] rounded-[5px] text-center bg-[#e1dede] border-0 outline-none'/>
//         <p>{item.viewsCount}</p>
//       </div> 
//         ))
//       }
//       </div>
//   </div>
//   )
// }

// export default Cart

import React, { useState } from 'react';

function Cart() {
  // Инициализируем состояние для корзины с начальной информацией
  const [cartItem, setCartItem] = useState([
    { id: 1, title: 'Product 1', price: 20, quantity: 1, imageUrl: '...', viewsCount: 100 },
    { id: 2, title: 'Product 2', price: 30, quantity: 2, imageUrl: '...', viewsCount: 50 },
  ]);

  // Функция для изменения количества товара
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 0) {
      setCartItem(prevState => 
        prevState.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      )
    }
  }

  return (
    <div className='cart'>
      {cartItem.map(item => (
        <div key={item.id} className="card-product">
          <div className="card-block">
            <img src={item.imageUrl} className='cardImg' alt={item.title} />
            <h6>{item.title}</h6>
          </div>
          <p>{item.price}</p>
          <input 
            type='number' 
            value={item.quantity}
            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
            className='quantity-input'
          />
          <p>Views: {item.viewsCount}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
