import React from 'react'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom'
const Furniture = () => {
    const firstFiveImages = furnitureData.slice(0,5)
  return (
    <>
    <Link to = '/Furniture' style={{ color: "black", textDecoration: "none" }}>
        <div className='proTilte'> <h2 >Furniture</h2></div>
    
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

export default Furniture
