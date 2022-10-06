import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

export default function FormData() {
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
            localStorage.setItem('data',JSON.stringify(newContacts))
        }
    }
    return (
        <>
            <div className='container-fluid'>
                <h4 className='background text-light text-center p-2'>User Details</h4>
                <Link to='/form' ><button className='background text-light btn'>Add<AddIcon /></button></Link>
                <hr />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope='col'>Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contacts.map((item, index) => {
                                return <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td><button className='btn text-primary' style={{ border: "none" }} onClick={() => deleteRecord(index)}><DeleteIcon /></button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
