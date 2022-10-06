import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutUs from './AboutUs'
import CartForm from './CartForm'
import Comment from './Comment'
import Footer from './Footer'
import Form from './Form'
import FormData from './FormData'
import Header from './Header'
import LeftNav from './LeftNav'
import MasterCart from './MasterCart'
import Table from './Table'
export default function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <div className='row'>
          <div className='col-md-3 col-12'>
            <LeftNav />
          </div>
          <div className='col-md-9 col-12'>
          <Routes>
            <Route path="/about-us" element={<AboutUs />}></Route>
            <Route path="/table" element={<Table />}></Route>
            <Route path="/comment/:_id" element={<Comment />}></Route>
            <Route path="/form" element={<Form />}></Route>
            <Route path="/formdata" element={<FormData />}></Route>
            <Route path="/cartform" element={<CartForm />}></Route>
            <Route path="/mastercart" element={<MasterCart />}></Route>
          </Routes>
          </div>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  )
}
