import React from 'react'
import { mobileData } from '../stores/data/mobiles'
import { useParams } from 'react-router-dom'
import Navbar from '../stores/Components/Navbar'
import { useCart } from '../stores/context/CartContext'
const MobileSingle = () => {
    const {id} = useParams()
    const {addToCart, cartItems} = useCart()
    const product = mobileData.find((item)=>item.id === id)
  return (
    <>
    <Navbar/>
    <div className='ind-page'>
      <div className='ind-image'>
         <img src={product.image} alt="" />
      </div>
      <div className="ind-details">
        <div className='ind-model space'>
            <h3>{product.model}</h3>
        </div>
        <div className="ind-company space">
            <h3>{product.company}</h3>
        </div>
        <div className="ind-price space"> 
            <h2>{product.price}$</h2>
        </div>
        <div className="ind-dis space">
            <p>{product.description}</p>
        </div>
        
        <button onClick={()=>addToCart(product)}>Add to cart</button>
      </div>
    </div>
    </>
  )
}

export default MobileSingle
