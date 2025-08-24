import React from 'react'
import { womanData } from '../data/woman'
import  {Link}  from 'react-router-dom'
const Womenfashion = () => {
    const firstFiveImages = womanData.slice(0,5)
  return (
    <>
    <Link to='/WomenDressing' style={{ color: "black", textDecoration: "none" }}>
     <div className='proTilte'><h2 >Woman Dressing</h2></div>
     
     <div className='proSection'>
        {
            firstFiveImages.map((item)=>{
                return (
                    <div className='imgBox'>
                        <img className='proImage' src={item.image} alt="" />
                    </div>
                )
            })
        }
      
    </div>
    </Link>
   </>
  )
}

export default Womenfashion
