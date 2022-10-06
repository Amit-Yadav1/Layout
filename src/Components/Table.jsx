import React from 'react'
import  VisibilityIcon from '@mui/icons-material/Visibility'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Table() {
    let [users, setUsers] = useState([])
    async function getData() {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await res.json()
            setUsers(data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div className='container-fluid'>
                <h4 className='background text-light text-center p-2'>Details of Post API</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope='col'>User Id</th>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item, index) => {
                                return <tr key={index}>
                                    <td>{item.userId}</td>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td><Link className='btn text-primary' style={{border:"none"}} to={`/comment/${item.id}`} ><VisibilityIcon/></Link></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
