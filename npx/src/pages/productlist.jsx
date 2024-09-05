
import { useEffect, useState } from 'react'
import axios from "axios";
import Productcard from '../components/productcard';
import Categorychips from '../components/categorychips';

function Productlist() {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);
  const [categories, setcategories] = useState([]);
  const [chosencategory, setchosencategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState(""); // New state for search term

  // Fetch products based on the chosen category
  useEffect(() => {
    const url =
      chosencategory === "All"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${chosencategory}`;
    axios.get(url)
      .then((res) => {
        setproducts(res.data.products);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  }, [chosencategory]);

  // Fetch categories
  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then((res) => {
        setcategories(res.data);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  }, []);

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='container mx-auto'>
      {loading ? (
        <h1>loading ...</h1>
      ) : (
        <div>
          {/* Search input */}
          <div className="my-4">
            <input
              type="text"
              placeholder="Search for products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border p-2 rounded w-full"
            />
          </div>

          {/* Categories */}
          <div className='flex gap-3 flex-wrap'>
            <Categorychips
              onClick={() => setchosencategory("All")}
              ischosen={chosencategory === "All"}
              category={{
                slug: "All",
                name: "All"
              }}
            />
            {categories.map((category) => (
              <Categorychips
                onClick={() => setchosencategory(category)}
                ischosen={category === chosencategory}
                category={category}
                key={category}
              />
            ))}
          </div>

          {/* Product cards */}
          <div className="flex flex-wrap -m-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <Productcard items={item} key={item.id} />
              ))
            ) : (
              <h2>No products found</h2>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Productlist;


// function Productlist() {
//   const [products, setproducts] = useState([])
//   const [loading , setloading] = useState(true)
//   const [categories , setcategories] = useState()
//   const [chosencategory , setchosencategory] = useState("All")
//   useEffect(() => {
//     console.log("use affect call hogaya");
//     const url =
//       chosencategory === "All"
//         ? "https://dummyjson.com/products"
//         : `https://dummyjson.com/products/category/${chosencategory}`;
//     axios.get(url)
//       .then((res) => {  
//         console.log(res.data.products)
//         setproducts(res.data.products)
//         setloading(false)
//       })
    
//       .catch((err) => {console.log(err)
//         setloading(false)}
//   )}, [chosencategory])
//   useEffect(() => {
//     axios.get('https://dummyjson.com/products/categories')
//       .then((res) => {  
//         console.log(res);
//         setcategories(res.data)
//         setloading(false)
//       })
//       .catch((err) => {console.log(err)
//         setloading(false)}
//   )}, [])


//   return (
//   <div className='container mx-auto'> 
//   { loading ?(<h1>loading ...</h1>) 
//   :(<div> 
//     <div className='flex gap-3 flex-wrap'>
//     <Categorychips
//     onClick={()=>setchosencategory("All")}
//     ischosen={chosencategory==="All"}
//      category={{
//       slug : "All",
//       name : "All"
//     }
//     } />
//       {categories.map((category)=> <Categorychips 
//       onClick={()=>setchosencategory(category.slug)}
      
//       ischosen={category.slug===chosencategory}
//       category={category} key={category.slug}/>)}</div>


//   <div class="flex flex-wrap -m-4">
//   {products.map((items) => <Productcard items={items} key={items.id}/>)}
//   </div>
// </div>
//     )}
//     </div> 
  
  
//   )




// }
// export default Productlist



