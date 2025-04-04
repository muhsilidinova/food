import React from 'react'  
import { useDispatch } from 'react-redux'
import { addCart} from '../../redux/CartSlice'

function Product({ product }) {
  const dispatch = useDispatch() //redux фунцияларды иштетип берет
  return (
    <div className="max-w-[1300px] ml-[50px] flex flex-wrap mt-[50px]" key={product.id}>
  <div className="w-[250px] mb-8">
    <div className="w-[250px] h-[250px] rounded-[6px] flex justify-center items-center bg-[#b2b2b2]"> {/* Для изображения */}
      <img src={product.imageUrl} alt={product.title} className="w-[170px] h-[150px] object-cover" onClick={() => dispatch(addCart(product))} />
    </div>
    <button className="bg-black text-white py-[8px] w-[250px] mt-[20px] border-none">Add to Cart</button>
    <div className="pro-title mt-[10px]">
      <h6 className="text-[18px] font-extrabold text-black leading-[35px]">{product.title}</h6>
    </div>
    <div className="pro-text flex mt-[10px]">
      <p className="text-[18px] font-extrabold text-[#db4444] leading-[24px] mr-[20px]">${product.price}</p>
      <h4 className="text-[18px] font-extrabold text-black leading-[24px]">{product.viewsCount}</h4>
    </div>
  </div>
</div>
  )
}

export default Product