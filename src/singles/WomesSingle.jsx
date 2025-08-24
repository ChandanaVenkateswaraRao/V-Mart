import React from 'react'
import Navbar from '../stores/Components/Navbar'
import { womanData } from '../stores/data/woman'
import { useParams } from 'react-router-dom'
import { useCart } from '../stores/context/CartContext'
const WomesSingle = () => {
    const {id} = useParams()
    const {addToCart, cartItems} = useCart()
    const product = womanData.find((item)=>item.id==id)
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

export default WomesSingle
