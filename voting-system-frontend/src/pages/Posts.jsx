import { useState, useEffect } from "react"
import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"

const Posts = () => {
    const [posts, setPost] = useState([])
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/posts`)
            .then(res => setPost(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
        <div className="rounded-full"><Link to="/signup" >Signup</Link></div>
            <div className="container">
                <div className="flex flex-wrap justify-evenly">{/*i stands for index and is predetermined in react for the indexes of the objects obtained from posts*/} 
                
                    {posts.map((item, i) => (  
                        <div className="w-1/3 shadow-xl p-5 key={i}">
                            <h1>{item.title}</h1>
                            <Link to={item.url}>{item.url}</Link>
                            <p>{item.postes}</p>
                            <p>{item.votes}</p>
                        </div>

                    ))}

                </div>
            </div>

        </>
    )
}

export default Posts