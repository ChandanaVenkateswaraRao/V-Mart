import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
const Navbar = () => {
  const {cartItems} = useCart()
  return (
    <>
    <div className='navSection'>
      <div className="title" >
        <Link to='/'  style={{ color: "white", textDecoration: "none" }}><h2>V-Mart</h2></Link>
        
      </div>
      <div className="search">
        <input type="text" placeholder='Search...' />
      </div>
      <div className="user">
        <Link  style={{ color: "white", textDecoration: "none" }}><div className='user-details'>
            SignIN/SignUp
        </div></Link>
        
        <Link to = '/Cart'  style={{ color: "white", textDecoration: "none" }}><div className='cart'>
            cart
            <span>{cartItems.length}</span>
        </div></Link>
        
      </div>
      
    </div>
    <div className="subMenu">
        <ul>
           <Link to = '/mobiles'  style={{ color: "white", textDecoration: "none" }}><li>Mobiles</li></Link>
            <Link to = '/Computers'  style={{ color: "white", textDecoration: "none" }}><li>Computers</li></Link>
            <Link to='/Watches'  style={{ color: "white", textDecoration: "none" }}><li>Watches</li></Link>
            <Link to = '/MensFashion'  style={{ color: "white", textDecoration: "none" }}><li>Men Fashions</li></Link>
            <Link to = '/WomenDressing'  style={{ color: "white", textDecoration: "none" }}> <li>Women Dressing</li></Link>
           <Link to = '/Furniture'  style={{ color: "white", textDecoration: "none" }}><li>Furniture</li></Link>
            <Link to = '/AC'  style={{ color: "white", textDecoration: "none" }}> <li>Ac</li></Link>
           <Link to = '/Kichen'  style={{ color: "white", textDecoration: "none" }}> <li>Kitchen</li></Link>
        </ul>
    </div>
    </>
  )
}

export default Navbar
