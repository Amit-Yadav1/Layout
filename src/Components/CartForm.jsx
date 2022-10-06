import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
    const [show, setShow] = useState({
        id: "",
        name: "",
        maincategory: "",
        subcategory: "",
        brand: "",
        color: "",
        size: "",
        baseprice: "",
        description: "",
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
            maincategory: (show.maincategory),
            subcategory: (show.subcategory),
            brand: (show.brand),
            color: (show.color),
            size: (show.size),
            baseprice: (show.baseprice),
            description: (show.description),
        }
        const old = JSON.parse(localStorage.getItem('data')) || [];
        const data = [...old, newData]
        localStorage.setItem('data', JSON.stringify(data))
        navigate("/mastercart")
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
                                <label className="form-label">Maincategory</label>
                                <input type="text" onChange={getData} className="form-control" name="maincategory" placeholder='Enter Maincotegory Name' />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Subcategory</label>
                                <input type="text" onChange={getData} className="form-control" name="subcategory" placeholder='Enter Subcategory Name' />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Brand</label>
                                <input type="text" onChange={getData} className="form-control" name="brand" placeholder='Enter Brand Name' />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Color</label>
                                <input type="text" onChange={getData} className="form-control" name="color" placeholder='Enter Brand Color' />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Size</label>
                                <input type="text" onChange={getData} className="form-control" name="size" placeholder='Enter Brand Name' />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Baseprice</label>
                                <input type="text" onChange={getData} className="form-control" name="baseprice" placeholder='Enter Base Price' />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Decription</label>
                                <input type="text" onChange={getData} className="form-control" name="description" placeholder='Description' />
                            </div>
                            <button className="btn background text-light w-100" type="onclick" onClick={postData}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

