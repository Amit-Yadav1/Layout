import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Form() {
    const [show, setShow] = useState({
        id: "",
        name: "",
        username: "",
        email: "",
        phone: ""
    })
    const navigate = useNavigate()
    function getData(e) {
        const name = e.target.name
        const value = e.target.value
        setShow((old) => {
            return {
                 ...old,
                [name]: value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        const newData = {
            id: (show.id),
            name: (show.name),
            username: (show.username),
            email: (show.email),
            phone: (show.phone)
        }
        const old = JSON.parse(localStorage.getItem('data')) || [];
        const data = [...old, newData]
        localStorage.setItem('data', JSON.stringify(data))
        navigate("/formdata")
    }
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='mb-3'>
                        <h4 className='background text-light text-center p-2'>Profile</h4>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Id</label>
                                <input type="text" onChange={getData} className="form-control" name="id" placeholder='Enter Id' />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" onChange={getData} className="form-control" name="name" placeholder='Enter Name' />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">User Name</label>
                                <input type="text" onChange={getData} className="form-control" name="username" placeholder='Enter User Name' />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" onChange={getData} className="form-control" name="email" placeholder='Enter Email Id' />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input type="text" onChange={getData} className="form-control" name="phone" placeholder='Enter Phone Number' />
                            </div>
                            <button className="btn background text-light w-100" type="onclick" onClick={postData}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
