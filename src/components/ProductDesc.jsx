import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Pricing from './Pricing';
const ProductDesc = () => {
  const [product, setProduct] = useState(null);
  const params = useParams();
  const fetchProduct = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
    setProduct(response.data);
  }
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div>
      <div className='container'>
        <div className='rows'>
          <div className='col-lg-6'>
            <img src={product.image} width={"300px"} height={"300px"} />
          </div>
          <div className='col-lg-6'>
            <h3>{product.title}</h3>
            <h6>{product.description}</h6>
            <h6>{product.price}</h6>
            <h6>{product.category}</h6>
            <h6>Product Reviews : {product.rating.rate}</h6>
            <h6>Product Reviews : {product.rating.count}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDesc
