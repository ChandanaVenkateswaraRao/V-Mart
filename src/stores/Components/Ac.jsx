import React from 'react'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom'
const Ac = () => {
    const firstFiveImages = acData.slice(0,5)
  return (
    <>
    <Link to='/AC'  style={{ color: "black", textDecoration: "none" }}>
        <div className='proTilte'><h2 >Air Conditioner</h2></div>
     
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

export default Ac
