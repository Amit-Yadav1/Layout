import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Comment() {
    let [Comments, setComments] = useState([])
    let { _id } = useParams()
    async function postData() {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/comments")
            const data = await res.json()
            const get = data.filter((item) => item.postId == parseInt(_id))
            console.log(_id);
            setComments(get)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        postData()
    }, [])
    return (
        <>
            <div className='container-fluid'>
                <h4 className='background text-light text-center p-2'>Details of Comment API</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope='col'>Post Id</th>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Comments.map((item, index) => {
                                return <tr key={index}>
                                    <td>{item.postId}</td>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
