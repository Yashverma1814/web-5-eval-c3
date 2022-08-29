import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Product from "./Product";
import {Navigate} from 'react-router-dom'


const Products = () => {

  const [data,setData] = useState([])
  const {token} = useContext(AuthContext)
  const fetchData = () => { 
    fetch(`http://localhost:8080/products`)
    .then((res)=>(res.json()))
    .then((res)=>(setData(res)))
    .catch((err)=>console.log(err))
    console.log(data)

  }
  useEffect(()=>{
    fetchData();
    console.log(token)
  },[])
  if(token===''){
    return <Navigate to={'/login'} />
  }
  return <div className="products-div">{
      data.map((el)=>{
        return (<div key={el.id}>
          <Product item={el}/>
        </div>)
      })
    }</div>;
};

export default Products;
