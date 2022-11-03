import { Rating } from '@mui/material';
import React from 'react';
import './Product.css';

export default function Product({id,title,price,rating,image}) {
  return (
        <div className="product">
            <div className="product__info">
                {/* {id} */}
                <p>{title}</p>
                <p className="product_price"><small>$</small><strong>{price}</strong> </p>
                <div className="div product__rating">
                    {Array(rating).fill().map(() => (<p>⭐</p>))}</div>
             {/* <div className="product__rating">⭐</div> */}
            </div>
             
            
             <img src={image} alt="productimage"className='product-image' />
             {/* <p>Product 1</p> */}
             <button>Add to Basket</button>
        </div>
  )
}
