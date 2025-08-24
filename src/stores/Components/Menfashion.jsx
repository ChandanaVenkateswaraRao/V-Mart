import React from 'react'
import { menData } from '../data/men'
import  {Link}  from 'react-router-dom'
const Menfashion = () => {
    const firstFiveImages = menData.slice(0,5)
  return (
    <>
    <Link to = '/MensFashion' style={{ color: "black", textDecoration: "none" }}>
        <div className='proTilte'> <h2 >Men Fashion</h2></div>
       
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

export default Menfashion
