
// src/pages/menu/Menu.jsx
import React from 'react';
import Card from './Card';
import foto from '../../assets/card/sezar.jpg';

const Menu = () => {
  const menu = [
    {
      img: foto,  
      title: 'Блюда',
      description: 'Вкусная пицца с различными начинками и соусами.',
    },
    {
      img: foto,
      title: 'Супы',
      description: 'Свежие суши с рыбой и овощами.',
    },
    {
      img: foto,
      title: 'Салаты',
      description: 'Сочные бургеры с говядиной или курицей.',
    },
    {
      img: foto,
      title: 'Десерты',
      description: 'Сладкие десерты для вашего удовольствия.',
    },
  ];

  return (
    <div className="text-center font-serif">
      {/* Добавлено отображение изображения только у первого элемента */}
      <img src={menu[0].img} alt="Блюдо" className="w-40" />
      <h2 className="text-3xl font-bold mb-8">Меню</h2>
      <div className="flex justify-center flex-wrap gap-4">
        {menu.map((item, index) => (
          <Card key={index} img={item.img} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
}

export default Menu;


