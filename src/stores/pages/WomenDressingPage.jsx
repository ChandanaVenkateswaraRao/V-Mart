import React , {useState}from 'react'
import { womanData } from '../data/woman'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
const WomenDressingPage = () => {
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
         ? womanData
         : womanData.filter((comp) => selectedProduct.includes(comp.brand));
  return (

    <>
    <Navbar/>
           
    <div className="fullpage">
       <div className="pro-selected">
               {womanData
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
               <div>
                <Link to = {`/WomenDressing/${item.id}`}> <div className="pageImg">
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

  //   <>
  //   <Navbar/>
  //    <div className='pageSection'>
  //    {
  //      womanData.map((item)=>{
  //          return(
  //              <div>
  //               <Link to = {`/WomenDressing/${item.id}`}> <div className="pageImg">
  //                      <img src={item.image} alt="" />
  //                  </div></Link>
                  
  //                  <div className="proModel">
  //                    {item.category}, {item.model}
  //                  </div>
  //              </div>
  //          )
  //      })
  //    }
  //  </div>
  //  </>
  )
}

export default WomenDressingPage
