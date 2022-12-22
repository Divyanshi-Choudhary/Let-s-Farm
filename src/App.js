import React from 'react'
import Mainpage from './Pages/Mainpage/Mainpage'
import './app.css'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import ProfileRegistration from './Pages/Profile Registration/ProfileRegistration'
import AddItem from './Pages/Add Item/AddItem'
import ProductDetails from './Pages/Product Details/ProductDetails'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Banner from './Components/Banner/Banner'
import SendCode from './Pages/SendCode/SendCode'
import VerifyEmail from './Pages/VerifyEmail/VerifyEmail'
import UserVerified from './Pages/User verified/UserVerified'
import Inventory from './Pages/Inventory/Inventory'

const App = () => {
  return (
    <Router>
      <Banner/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Mainpage/>}/>
        <Route path="accounts/signIn" element={<Login/>}/>
        <Route path="accounts/register" element={<Register/>}/>
        <Route path="/accounts/sendVerificationCode" element={<SendCode/>}/>
        <Route path="/accounts/:email/verification" element ={<VerifyEmail/>}/>
        <Route path="/profile/register" element={<ProfileRegistration/>}/>
        <Route path="/product/add" element={<AddItem/>}/>
        <Route path="/accounts/verified" element={<UserVerified/>}/>
        <Route path="/product" element={<ProductDetails/>}/>
        <Route path="/profile/inventory" element={<Inventory/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App