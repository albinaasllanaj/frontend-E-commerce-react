import React from 'react'
import './Breadcrumb.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

 const Breadcrumb = (props) => {
  const {product} = props;
  return (
    <div className='breadcrum'>
    HOME <img src={arrow_icon} alt="arrow icon" />  SHOP <img src={arrow_icon} alt="arrow icon" /> {product.category} <img src={arrow_icon} alt="arrow icon" /> <span className="product-name">{product.name}</span>
</div>

  )
}

export default Breadcrumb