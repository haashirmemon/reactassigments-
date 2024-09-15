
import './App.css'

import Header from './components/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import About from './pages/about'
import ContactUs from './pages/contactus'
import Services from './pages/services'
import Productdetail from './pages/productdetail'


import Productlist from './pages/productlist'

import Themecontextprovider from './context/themecontext'
import Signinform from './pages/auth/signin'
import Signupform from './pages/auth/signup'
import Home from './pages/Home'
function App() {
  return (
    <>
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/products' element={<Productlist />} />
          <Route path='/about' element={<About />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/services' element={<Services />} />
          <Route path="/products/:id" element={<Productdetail/>} />
          <Route path="/signin" element={<Signinform/>} />
          <Route path="/signin/signup" element={<Signupform/>} />
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App;
