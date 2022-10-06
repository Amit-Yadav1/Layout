import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';

export default function LeftNav() {
  return (
    <>
      <div className="list-group">
        <h4 className='background text-center text-light p-2'>Menu</h4>
        <Link to="/about-us" className="list-group-item list-group-item-action">About Us</Link>
        <Link to="/table" className="list-group-item list-group-item-action">Post</Link>
        <Link to="/formdata" className="list-group-item list-group-item-action">User</Link>
        <Link to="/mastercart" className="list-group-item list-group-item-action">Master Cart</Link>
      </div>
    </>
  )
}
