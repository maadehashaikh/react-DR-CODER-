import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Pricing = () => {
  const [products,setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  }
  useEffect(()=>{
    fetchProducts();
  },[]);
  console.log(products);
  return (
    <div>
    {
      products.map((product)=>{
      return (
        <>
        <h1>{product.title}</h1>
        <h2>{product.category}</h2>
        <p>{product.description}</p>
        <img src={product.image} width={"200px"}/>
        <p>{product.price}$</p>
        <p>{product.rating.rate}</p>
        </> 
      )
      })
}
    </div>
  )
}

export default Pricing
