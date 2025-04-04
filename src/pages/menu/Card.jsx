import React from 'react'

const Card = ({ title, description }) => {
    return (
      <div className="border border-gray-300 p-6 m-4 w-60 rounded-lg shadow-lg hover:scale-105 transition-transform font-serif">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <button onClick={() => window.location.href = "/pizza"} className=' px-4 py-2 text-white rounded-lg bg-green-800 hover:bg-[#233000] transition-colors cursor-pointer'>Подробнее</button>
      </div>
    );
  };

export default Card



