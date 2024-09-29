import React, { useState } from 'react'

import {useNavigate} from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { useDispatch } from 'react-redux';
// import { authAction } from '../../store';

import "./SignUp.css"

function SignUp() {
    // const dispatch = useDispatch(); 
    // const navigator = useNavigate()

    const [Inputs, setInputs] = useState({
        email : "",
        username : "",
        password : ""
    })

    const handleInputs = (e) => {
        const {name, value} = e.target;
        setInputs({...Inputs, [name] : value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    }   
    //     if(Inputs.username.length < 5) {
    //         toast.error("Username length atleast 5")
    //         return;
    //     }
    //     if(Inputs.password.length < 8) {
    //         toast.error("Password length atleast 8")
    //         return;
    //     }
    //     try {
    //         await axios.post(`${window.location.origin}/api/v1/register`,Inputs).then((response)=> {
    //             console.log(response);
    //             if(response.data.message == "Already Exists!!!") {
    //                 toast.error(Inputs.username +" "+ response.data.message)
    //                 navigator("/SignIn")
    //             }
    //             else {
    //                 sessionStorage.setItem("Id" ,response.data._id)
    //                 dispatch(authAction.login())
    //                 // toast.success(Inputs.username +" "+ response.data.message)
    //                 setInputs({email : "",username : "",password : ""});
    //                 navigator("/todo")
    //             }
    //         })
    //     }catch(error) {
    //         console.log(error);
    //         toast.error("Error : Error")
    //     }
    //     // console.log(Inputs);


    // }


    return (
        <div className='SignUp'>
            <ToastContainer/>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label className="label p-2" for="InputName">Name</label>
                    <input className="w-full p-4" type="text" class="form-control" id="InputName" aria-describedby="nameHelp" value={Inputs.username} name='username' onChange={handleInputs} placeholder="Enter Name" />
                </div>

                <div class="form-group">
                    <label className="label p-2" for="InputEmail">Email</label>
                    <input className="w-full p-4" type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" value={Inputs.email} name='email' onChange={handleInputs} placeholder="Enter email" />
                </div>

                <div class="form-group">
                    <label className="label p-2" for="InputPassword">Password</label>
                    <input className="w-full p-4" type="password" class="form-control" id="InputPassword" placeholder="Password" value={Inputs.password} name='password' onChange={handleInputs} />
                </div>
                
                <button type="submit" class="button-signUp">Sign Up</button>
                <a href="/Login" className='text-blue-700'>Already have a Account</a>
            </form>
        </div>
    )
}

export default SignUp
