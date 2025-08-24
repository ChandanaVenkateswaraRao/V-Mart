import React from 'react'
import { watchData } from '../data/watch'
import { Link}  from 'react-router-dom'
const Watches = () => {
    const firstFiveImages = watchData.slice(0,5)
  return (
    <>
    <Link to = '/Watches' style={{ color: "black", textDecoration: "none" }}>
        <div className='proTilte'><h2 >Watches</h2></div>
        
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

export default Watches
