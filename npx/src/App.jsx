import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data } from 'autoprefixer'
import Header from './components/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import About from './pages/about'
import ContactUs from './pages/contactus'
import Services from './pages/services'
import Productdetail from './pages/productdetail'


import Productlist from './pages/productlist'
import Home from './pages/home'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/Home' element={<Home/>} />
          {/* <Route path='/Home' element={<Home/>} /> */}
          <Route path='/products' element={<Productlist />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/services' element={<Services />} />
          <Route path="/products/:id" element={<Productdetail/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
