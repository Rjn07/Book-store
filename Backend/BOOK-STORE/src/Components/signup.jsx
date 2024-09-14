import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Login from './login'; // Adjust the import path as necessary

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [message, setMessage] = useState('');
    const [messageClass, setMessageClass] = useState('');
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        };

        try {
            const res = await axios.post('http://localhost:4001/user/signup', userInfo);
            console.log(res.data);

            setMessage('Signup Successful');
            setMessageClass('text-green-500');

            setTimeout(() => {
                navigate('/');
            }, 3000);
        } catch (err) {
            console.error(err);

            setMessage(err.response?.data?.message || 'An error occurred');
            setMessageClass('text-red-500');
        }
    };

    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className="w-[600px]">
                    <div className="modal-box">
                        {message && (
                            <div id="message" className={messageClass}>
                                {message}
                            </div>
                        )}
                        <form type="post" onSubmit={handleSubmit(onSubmit)}>
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </Link>
                            <h3 className="font-bold text-lg">Signup</h3>
                            <div className="mt-4 space-y-2">
                                <span>Name</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Enter your fullname"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register("fullname", { required: true })}
                                />
                                <br />
                                {errors.fullname && (
                                    <span className="text-sm text-red-500">
                                        This field is required
                                    </span>
                                )}
                            </div>
                            {/* Email */}
                            <div className="mt-4 space-y-2">
                                <span>Email</span>
                                <br />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && (
                                    <span className="text-sm text-red-500">
                                        This field is required
                                    </span>
                                )}
                            </div>
                            {/* Password */}
                            <div className="mt-4 space-y-2">
                                <span>Password</span>
                                <br />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register("password", { required: true })}
                                />
                                <br />
                                {errors.password && (
                                    <span className="text-sm text-red-500">
                                        This field is required
                                    </span>
                                )}
                            </div>
                            {/* Button */}
                            <div className="flex justify-around mt-4">
                                <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                    Signup
                                </button>
                                <p className="text-xl">
                                    Have an account?{" "}
                                    <span className="underline text-blue-500 cursor-pointer" onClick={() => document.getElementById("login-modal").showModal()}>
                                        Login
                                    </span>
                                </p>
                            </div>
                        </form>
                        <dialog id="login-modal" className="modal">
                            <Login />
                            <button onClick={() => document.getElementById("login-modal").close()} className="modal-close">
                                ✕
                            </button>
                        </dialog>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
