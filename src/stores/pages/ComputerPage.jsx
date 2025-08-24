import React, { useState } from 'react';
import { computerData } from '../data/computers';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';

const ComputerPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (event) => {
    if (selectedProduct.includes(event)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== event));
    } else {
      setSelectedProduct([...selectedProduct, event]);
    }
  };

  const filteredProduct =
    selectedProduct.length === 0
      ? computerData
      : computerData.filter((comp) => selectedProduct.includes(comp.company));

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {computerData
            .map((comp) => comp.company)
            .filter((value, index, self) => self.indexOf(value) === index) // Ensures unique companies
            .map((company) => (
              <div key={company} className="pro-input">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(company)}
                    onChange={() => companyHandler(company)}
                  />
                  {company}
                </label>
              </div>
            ))}
        </div>

        <div className="pageSection">
          {filteredProduct.map((item) => (
            <div key={item.id}>
              <Link to={`/Computers/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt="" />
                </div>
              </Link>
              <div className="proModel">
                {item.category}, {item.model}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ComputerPage;
