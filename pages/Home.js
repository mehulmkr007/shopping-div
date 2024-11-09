import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Product from '../components/Product' 

export default function Home() {
  let productsList = useSelector((state) => state.products.list) 

  return (
    <div className="products-container">
      
      {productsList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          productId={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
  )
}