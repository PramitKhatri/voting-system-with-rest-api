import axios from 'axios';
import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const[username,setName]=useState('')
    const[password,setPassword]=useState('')

    const handleSubmit=async (eventS) =>{
        // preventdefault stops the form action="" to work which we need
        eventS.preventDefault()
        try{
            //                     same as http://127.0.0.1:8000/signup
            await axios.post(`http://localhost:8000/signup`,{username,password})
            toast.success('Registration Successful')// after submit the username and password should not be left in signup form to remove that we set the value as empty
            setName('')
            setPassword('')
        }
        catch(err){
            // the error in data.error is obtained from backend views.py signup jsonresponse
            toast.error(err.response.data.error)   
        }
    }
    return (
        <>
        {/* toast container will create a pop up box that shows confirmation go to https://fkhadra.github.io/react-toastify/introduction and click show toast button */}
        <ToastContainer theme='colored' position='top-center'/>
            <div className="container">
                <div className="flex flex-wrap justify-center">
                    <div className="w1/2">
                        <form action="" className='p-5 shadow-xl'>
                            <div className="mb-2">
                                <label htmlFor="uname">UserName</label>
                                <input type="text" name="uname" id="uname" className='form-input' onChange={(eventU)=>setName(eventU.target.value)} value={username} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="pwd">Password</label>
                                <input type="password" name="pwd" id="pwd" className='form-input' onChange={(eventP)=>setPassword(eventP.target.value)} value={password} />
                            </div>
                            <button onClick={handleSubmit}>Signup</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup