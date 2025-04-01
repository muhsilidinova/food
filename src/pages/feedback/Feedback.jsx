import React from 'react'
import img1 from '../../assets/feedback/Image (11).png'
import img2 from '../../assets/feedback/Blog_Category.png'

function Feedback() {
  return (
    <div className='w-full m-auto max-w-[1500px]'>
      <img src={img1} className='bg-no-repeat bg-cover h-[700px]' />
     <img src={img2} className='relative bottom-[500px] ml-[200px]' />
     <h1 className='relative bottom-[500px]'>Three Ideas for Cooking Goat Meat at Home</h1> 
      </div>
      

  )
}

export default Feedback
