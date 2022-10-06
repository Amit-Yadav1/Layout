import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

export default function MasterCart() {
    let [contacts, setContacts] = useState([])
    async function mainData() {
        try {
            const data = JSON.parse(localStorage.getItem('data')) || [];
            setContacts(data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        mainData()
    }, [])
    function deleteRecord(index) {
        if (window.confirm("Press a Button!")) {
            const newContacts = [...contacts];
            newContacts.splice(index, 1);
            setContacts(newContacts);
            localStorage.setItem('data', JSON.stringify(newContacts))
        }
    }
    function updateContactItems(index) {
        const id = prompt("Enter Id");
        const name = prompt("Enter Name");
        const maincategory = prompt("Enter Maincategory");
        const subcategory = prompt("Enter Subcategory");
        const brand = prompt("Enter Brand");
        const color = prompt("Enter Color");
        const size = prompt("Enter Size");
        const baseprice = prompt("Enter Baseprice");
        const description = prompt("Enter Description");
        const old = JSON.parse(localStorage.getItem('data')) || [];
        const myData = old.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    id:id,
                    name:name,
                    maincategory:maincategory,
                    subcategory:subcategory,
                    brand:brand,
                    color:color,
                    size:size,
                    baseprice:baseprice,
                    description:description
                }
            }
            return item;
        })
        localStorage.setItem('data', JSON.stringify(myData))
        window.location.reload();
    }
    return (
        <>
            <div className='container-fluid'>
                <h4 className='background text-light text-center p-2'>Products Details</h4>
                <Link to='/cartform' ><button className='background text-light btn'>Add<AddIcon /></button></Link>
                <hr />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope='col'>Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Maincategory</th>
                            <th scope="col">Subcategory</th>
                            <th scope="col">Brand</th>
                            <th scope='col'>Color</th>
                            <th scope="col">Size</th>
                            <th scope="col">Baseprice</th>
                            <th scope="col">Decription</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contacts.map((item, index) => {
                                return <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.maincategory}</td>
                                    <td>{item.subcategory}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.color}</td>
                                    <td>{item.size}</td>
                                    <td>{item.baseprice}</td>
                                    <td>{item.description}</td>
                                    <td><button className='btn text-primary' style={{ border: "none" }} onClick={() => deleteRecord(index)}><DeleteIcon /></button></td>
                                    <td><button className='btn text-primary' style={{ border: "none" }} onClick={() => updateContactItems(index)}><EditIcon /></button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
