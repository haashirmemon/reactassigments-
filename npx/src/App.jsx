import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data } from 'autoprefixer'
import Header from './components/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Productslist from './pages/home'
import About from './pages/about'
import ContactUs from './pages/contactus'
import Services from './pages/services'


function App() {
 return(
  <>
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Productslist/>}>
  </Route>
  <Route path='/about' element={<About/>}/> 
  <Route path='/contactus' element={<ContactUs/>}/>
  <Route path='/services' element={<Services/>}/>
</Routes>
</BrowserRouter>
  </>
 )
}

export default App;
