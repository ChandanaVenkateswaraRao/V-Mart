import React, { useState } from 'react'
import { watchData } from '../data/watch'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
const WatchesPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (event)=>{
    if(selectedProduct.includes(event)){
      setSelectedProduct(selectedProduct.filter((item)=> item !==event )) 
    } else{
      setSelectedProduct([...selectedProduct, event]);
    }
  }
   const filteredProduct =
      selectedProduct.length === 0
        ? watchData
        : watchData.filter((comp) => selectedProduct.includes(comp.brand));
  




  return (
      
      <>
     <Navbar/>
            
     <div className="fullpage">
        <div className="pro-selected">
                {watchData
                  .map((comp) => comp.brand)
                  .filter((value, index, self) => self.indexOf(value) === index) // Ensures unique companies
                  .map((brand) => (
                    <div key={brand} className="pro-input">
                      <label>
                        <input
                          type="checkbox"
                          checked={selectedProduct.includes(brand)}
                          onChange={() => companyHandler(brand)}
                        />
                        {brand}
                      </label>
                    </div>
                  ))}
          </div>
      <div className='pageSection'>
      {
        filteredProduct.map((item)=>{
            return(
                <div key={item.id}>
                  <Link to = {`/Watches/${item.id}`}><div className="pageImg">
                        <img src={item.image} alt="" />
                    </div></Link>
                    
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

export default WatchesPage
