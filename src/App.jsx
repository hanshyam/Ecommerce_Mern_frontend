import React from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import './App.css';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Register from './pages/Register'
import ProductPage from './pages/ProductPage';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivaryPolicy from './pages/PrivaryPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsAndCondition from './pages/TermsAndCondition';
import Cart from './pages/Cart';
import CheckoutPage from './pages/CheckoutPage';

const App = () => {
  return (
       <>
       <BrowserRouter>
         <Routes>
            <Route path='/checkout' element={<CheckoutPage />}/>
            <Route path='/' element={<Layout />}>
               <Route index element={<Home />}/>
               <Route path='/about' element={<About />}/>
               <Route path='/contact' element={<Contact />}/>
               <Route path='/store' element={<OurStore />}/>
               <Route path='/blogs' element={<Blog />}/>
               <Route path='/blog/:id' element = {<SingleBlog/>}/>
               <Route path='/compare-product' element={<CompareProduct />}/>
               <Route path='/cart' element={<Cart />}/>
               <Route path='/wishlist' element={<Wishlist />}/>
               <Route path='/product/:id' element = {<ProductPage/>}/>
               <Route path='/account/login' element = {<Login/>}/>
               <Route path='/account/register' element = {<Register/>}/>
               <Route path='/account/register' element = {<Register/>}/>
               <Route path='/account/forgot-password' element = {<ForgotPassword/>}/>
               <Route path='/account/reset-password' element = {<ResetPassword/>}/>
               <Route path='/privacy-policy' element = {<PrivaryPolicy/>}/>
               <Route path='/refund-policy' element = {<RefundPolicy/>}/>
               <Route path='/shipping-policy' element = {<ShippingPolicy/>}/>
               <Route path='/terms-and-conditions' element = {<TermsAndCondition/>}/>
            </Route>
         </Routes>
       </BrowserRouter>
       </>
  )
}

export default App
 