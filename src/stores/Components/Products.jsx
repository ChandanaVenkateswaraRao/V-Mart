import React from 'react'
import Mobiles from './Mobiles'
import Computers from './Computer'
import Watches from './Watches'
import Menfashion from './Menfashion'
import Womenfashion from './Womenfashion'
import Furniture from './Furniture'
import Ac from './Ac'
import Kichen from './Kichen'
import MobilePage from '../pages/MobilePage'

const Products = () => {
  return (
    <div>
      {/* <MobilePage/> */}
      <Mobiles/>
      <Computers/>
      <Watches/>
      <Menfashion/>
      <Womenfashion/>
      <Furniture/>
      <Ac/>
      <Kichen/>
    </div>
  )
}

export default Products
