

import { useEffect, useState ,useContext} from 'react'
import axios from "axios";
import Productcard from '../components/productcard';
import Categorychips from '../components/categorychips';
import { Themecontext } from '../context/themecontext';
import Button from '../components/button';




function Productlist() {
  const [products, setproducts] = useState([])
  const [loading , setloading] = useState(true)
  const [categories ,setcategories ] = useState('')
  const {theme,settheme}= useContext(Themecontext)
  const {search , setSearch} =useState()

  const [chosencategory , setchosencategory] = useState("All")

  
  useEffect(() => {
    console.log("use affect call hogaya");
    const url =
      chosencategory === "All"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${chosencategory}`;
    axios.get(url)
      .then((res) => {  
        console.log(res.data.products)
        setproducts(res.data.products)
        setloading(false)
      })
    
      .catch((err) => {console.log(err)
        setloading(false)}
  )}, [chosencategory])

  

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then((res) => {  
        console.log(res);
        setcategories(res.data)
        setloading(false)
      })
      .catch((err) => {console.log(err)
        setloading(false)}
  )}, [])


  return (
 <div className={`${theme === 'light' ? "bg-white text-black" : "bg-zinc-400 text-white"}`}>

   <div className='container mx-auto'> 
  { loading ?(<h1>loading ...</h1>) 
  :    
  (<div> 
        <input
        placeholder="Search"
       
        type="search"
        className="w-full border-2 p-3 font-bold"
        onChange={(e) => setSearch(e.target.value)}
      />  

      
    <div className='flex gap-3 flex-wrap'>
    <Categorychips
    onClick={()=>setchosencategory("All")}
    ischosen={chosencategory==="All"}
     category={{
      slug : "All",
      name : "All"
    }
    } />


      {categories.map((category)=> <Categorychips 
      onClick={()=>setchosencategory(category.slug)}
      
      ischosen={category.slug===chosencategory}
      category={category} key={category.slug}/>)}</div>
 

  <div class="flex flex-wrap -m-4">
  {products.map((items) => <Productcard items={items} key={items.id}/>)}
  </div>
</div>
    )}
    </div> 
  
 </div>
  
  )




}
export default Productlist