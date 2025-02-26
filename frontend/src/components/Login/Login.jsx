import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authAction } from '../../store';
import './Login.css';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [inputs, setInputs] = useState({
        email: '',
        password: '',
    });


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
            const response = await axios.post(`${process.env.REACT_APP_BACKEND}/api/v1/login`, {
                email: inputs.email,
                password: inputs.password,
            });

            console.log(response.data.user);
            
            toast.success(response.data.message); // Show success notification
            dispatch(authAction.login()); // Dispatch user login action
            sessionStorage.setItem("Id" ,response.data.user._id)
            navigate('/Courses'); // Redirect to the dashboard after successful login
        } catch (error) {
            console.log(error.message);
            const errorMessage = error.response?.data?.message || 'An error occurred';
            toast.error(errorMessage); // Show error notification
        }
    };

    return (
        <div className='SignIn'>
            <ToastContainer />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="label" htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        className='w-full p-4'
                        name="email"
                        value={inputs.email}
                        onChange={handleInputs}
                        type="email"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="label p-2" htmlFor="exampleInputPassword1">Password</label>
                    <input
                        className="w-full p-4"
                        name="password" // Changed to 'password' for consistency
                        value={inputs.password}
                        onChange={handleInputs}
                        type="password"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        required
                    />
                </div>
                <button type="submit" className="button-signIn">Sign In</button>
                <a href="/SignUp" className='text-blue-700'>I don't have an Account</a>
            </form>
        </div>
    );
}

export default Login;
