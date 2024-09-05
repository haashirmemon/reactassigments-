

import { useEffect, useState } from 'react';

function Home() {
  const [post, setPost] = useState([]);
  const [price, setPrice] = useState('select'); // State to hold selected price filter
  const [search, setSearch] = useState(''); // State to hold search input
  const [filtered, setFiltered] = useState([]);

  // Fetch products from the API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // Filtering logic based on search and price
  useEffect(() => {
    const filteredArr = post.filter((product) => {
      const matchesSearch =
        search === '' || product.title.toLowerCase().includes(search.toLowerCase());
      const matchesPrice =
        price === 'select' || // No price filter selected
        (price === '50' && product.price <= 50) ||
        (price === '100' && product.price <= 100) ||
        (price === '150' && product.price <= 150) ||
        (price === '200' && product.price <= 200) ||
        (price === '300' && product.price <= 300) ||
        (price === '500' && product.price <= 500) ||
        (price === '1000' && product.price <= 1000);

      return matchesSearch && matchesPrice;
    });

    setFiltered(filteredArr);
  }, [search, price, post]); // Dependency array includes `search`, `price`, and `post`

  return (
    <>
      <h1 className='mt-4 mb-6 font-serif text-center text-blue-300'>
        Products assignment using React.js
      </h1>

      {/* Search Input */}
      <input
        placeholder="Search"
        type="search"
        className="w-full border-2 p-3 font-bold"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Price Filter Dropdown */}
      <select
        name="prices"
        id="prices"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full border-2 p-3 font-bold"
      >
        <option value="select">All Products</option>
        <option value="50">Up to $50</option>
        <option value="100">Up to $100</option>
        <option value="150">Up to $150</option>
        <option value="200">Up to $200</option>
        <option value="300">Up to $300</option>
        <option value="500">Up to $500</option>
        <option value="1000">Up to $1000</option>
      </select>

      {/* Product Cards Section */}
      <section className="text-white-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {filtered.map((data) => (
              <div key={data.id} className="p-4 md:w-1/3">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={data.image}
                    alt="product"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-2xl title-font font-large text-blue-600 mb-5 font-bold">
                      {data.category}
                    </h2>
                    <h1 className="title-font text-lg text-yellow-300 mb-3 font-bold">
                      {data.title}
                    </h1>
                    <p className="leading-relaxed mb-3 text-green-500">
                      {data.description}
                    </p>
                    <div className="flex items-center flex-wrap">
                      <a className="text-black bg-slate-100 inline-flex items-center md:mb-2 lg:mb-0">
                        {data.price} $
                      </a>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx={12} cy={12} r={3} />
                        </svg>
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                        6
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
