import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import  Loader  from './Loader';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const [products, setProducts] = useState([]);
  const [loader,setLoader] = useState(false);
  const fetchProducts = async () => {
    setLoader(true);
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
    setLoader(false);
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
    {loader ? <Loader/> : (<div style={{display:"flex",flexWrap:"wrap",marginLeft:"70px"}}>
      {
        products.map((product) => {
          return (
            <>
            <div style={{width:"340px",backgroundColor:"#6438A4",height:"59vh", border:"2px solid black",padding:"10px 20px",margin:"10px",borderRadius:"30px",color:"white"}}>
              <h2>{product.title.slice(0,10)}...</h2>
              <h4>{product.category}</h4>
              <p>{product.description.slice(0,90)}...Read More</p>
              <img src={product.image} width={"100px"} height={"100px"}/><br />
              <span> Price :{product.price}$</span><br />
              <button style={{backgroundColor:"yellow",color:"black",border:"none",padding:"5px",borderRadius:"7px"}}><Link to={`/pricing/${product.id}`}>Buy Now</Link></button>
            </div>
            </>
          )
        })
      }
    </div>)}
    </>
  )
}

export default Pricing
