import React from 'react'
import {mobileData} from '../data/mobiles'

import { Link } from 'react-router-dom'

const Mobiles = () => {
    const firstFiveImages  = mobileData.slice(0,5)
  return (
   <>
   <Link to='/Mobiles' style={{ color: "black", textDecoration: "none" }}>
    <div className='proTilte'> <h2 >Mobiles</h2> </div>
     
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

export default Mobiles
