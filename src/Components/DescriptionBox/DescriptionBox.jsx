import React from 'react'
import './DescriptionBox.css'

 const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box">Reviews (122)</div>
      </div>
        <div className="descriptionbox-description">
          <p>
E-commerce, short for electronic commerce, is the process of buying and selling goods and services online. 
It involves online stores, digital marketplaces, and online payment 
systems, enabling customers to shop and make transactions over the internet.</p>

      <p>
      E-commerce has evolved into various forms, such as B2C (business-to-consumer), B2B (business-to-business), 
      and C2C (consumer-to-consumer) models.  It has revolutionized the way people 
      shop and conduct business, offering convenience, a wide selection of products, and the ability to shop from anywhere with an internet connection.
      </p>
        </div>
    </div>
  )
}

export default DescriptionBox