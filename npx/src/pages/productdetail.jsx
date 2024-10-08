import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Themecontext } from '../context/themecontext';
import { useContext } from 'react';

function Productdetail() {
const {id}=useParams()
const [product,setproduct] =useState({})
const [loading,setloading] =useState(true)
const [notfound,setnotfound] =useState(false)
const {theme,settheme}= useContext(Themecontext)

useEffect(()=>{
    setnotfound(false)
    axios.get(`https://dummyjson.com/products/${id}`)
    .then((res)=>{
setproduct(res.data)
    setloading(false)
    })
    .catch((err)=>{
        setloading(false)
        setnotfound(true)
        console.log(err)
    })
},[])


    return(
   <div  className={`${theme === 'light' ? "bg-white text-black" : "bg-zinc-400 text-white"}`}>
     <div className="  container mx-auto">
        {
        loading ? <h1>loading...</h1>:
        notfound?<h1>products not found..</h1>:
        <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={product.thumbnail}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {product.title}
              <br className="hidden lg:inline-block" />
             
            </h1>
            <p className="mb-8 leading-relaxed">
             {product.description}
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
             Add to cart
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              $ {product.price}
              </button>
            </div>
          </div>
        </div>
      </section>
        }
        
        
      </div>
   </div>



      
    )
}

export default Productdetail



