import React, { useState } from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../Components/Navbar'

import { Link } from 'react-router-dom'
const MobilePage = () => {

  const [selectedProduct, setselectedProduct] = useState([])

  const companyHandler = (event)=>{
      if(selectedProduct.includes(event)){
        setselectedProduct(selectedProduct.filter(item=>item!==event))
      }else{
        setselectedProduct([...selectedProduct,event])
      }
  }
 const filteredProduct = selectedProduct.length ===0?mobileData:mobileData.filter((img)=>selectedProduct.includes(img.company))
 
  return (
    

    <>
     <Navbar/>

     <div className="fullpage">
     <div className="pro-selected">
      {mobileData.map((phone)=>{
        return(
          <div className='pro-input'>
            <label >
              <input type="checkbox"  checked = {selectedProduct.includes(phone.company)} onChange={()=>companyHandler(phone.company)}/>
              {phone.company}
            </label>

          </div>
        )
      })}
     </div>
      <div className='pageSection'>
      {
        filteredProduct.map((item)=>{
            return(
                <div>
                  <Link to={`/Mobile/${item.id}`}>
                    <div className="pageImg">
                        <img src={item.image} alt="" />
                    </div>
                  </Link>
                    
                    <div className="proModel">
                      {item.category}, {item.model}
                    </div>
                </div>
            )
        })
      }
    </div>
     </div>
    </>
  )
}

export default MobilePage
