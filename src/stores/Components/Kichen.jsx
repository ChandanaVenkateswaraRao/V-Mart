import React from 'react'
import { kitchenData } from '../data/kitchen'
import { Link } from 'react-router-dom'
const Kichen = () => {
    const firstFiveImages = kitchenData.slice(0,5)
  return (
    <>
    <Link to = '/Kichen' style={{ color: "black", textDecoration: "none" }}>
    <div className='proTilte' > <h2 >Kichen</h2> </div>
     
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

export default Kichen
