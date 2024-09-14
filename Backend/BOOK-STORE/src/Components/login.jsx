import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios"; // Make sure to import axios

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate(); // Use navigate for redirection

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/login", userInfo);
      console.log(res.data);
      
      const msg = document.getElementById("message");
      msg.innerText = "Login Successful";
      msg.className = "text-green-500"; // Use Tailwind classes for styling

      setTimeout(() => {
        navigate("/"); // Use navigate instead of window.location.href
      }, 3000);
      localStorage.setItem('Users', JSON.stringify(res.data.user));

    } catch (err) {
      console.error(err);

      const msg = document.getElementById("message");
      msg.innerText = err.response?.data?.message || "An error occurred";
      msg.className = "text-red-500"; // Use Tailwind classes for styling
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <div id="message" className="mb-4"></div>
          <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()} // Corrected string ID
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Login</h3>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <label htmlFor="email" className="block font-bold text-lg">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Write your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: "This field is required" })}
              />
              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}
            </div>
            {/* Password */}
            <div className="mt-4 space-y-2">
              <label htmlFor="password" className="block font-bold text-lg">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Type your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: "This field is required" })}
              />
              {errors.password && (
                <span className="text-red-700">{errors.password.message}</span>
              )}
            </div>
            <div className="flex justify-around mt-3">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <p>
                Not registered{" "}
                <Link
                  to="/signup"
                  className="text-blue-500 underline cursor-pointer"
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
