import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './SignUp.css';

function SignUp() {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
        courses : []
    });
    const navigator = useNavigate()

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            const response = await axios.post('http://localhost:8000/api/v1/signup', {
                email: inputs.email,
                username: inputs.username,
                password: inputs.password,
                courses: [], // Include any default courses if needed, or update as necessary
            });

            toast.success(response.data.message); // Show success notification
            navigator('/Login'); // Redirect to the login page after successful signup
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'An error occurred';
            toast.error(errorMessage); // Show error notification
        }
    };

    return (
        <div className='SignUp'>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="label p-2" htmlFor="InputName">Name</label>
                    <input
                        className="w-full p-4"
                        type="text"
                        id="InputName"
                        aria-describedby="nameHelp"
                        value={inputs.username}
                        name='username'
                        onChange={handleInputs}
                        placeholder="Enter Name"
                    />
                </div>

                <div className="form-group">
                    <label className="label p-2" htmlFor="InputEmail">Email</label>
                    <input
                        className="w-full p-4"
                        type="email"
                        id="InputEmail"
                        aria-describedby="emailHelp"
                        value={inputs.email}
                        name='email'
                        onChange={handleInputs}
                        placeholder="Enter email"
                    />
                </div>

                <div className="form-group">
                    <label className="label p-2" htmlFor="InputPassword">Password</label>
                    <input
                        className="w-full p-4"
                        type="password"
                        id="InputPassword"
                        placeholder="Password"
                        value={inputs.password}
                        name='password'
                        onChange={handleInputs}
                    />
                </div>
                
                <button type="submit" className="button-signUp">Sign Up</button>
                <a href="/Login" className='text-blue-700'>Already have an Account</a>
            </form>
        </div>
    );
}

export default SignUp;
