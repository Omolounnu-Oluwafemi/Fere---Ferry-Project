import React from "react";

const WelcomeBackPage = () => {
  return (
    <div className="min-h-screen flex flex-col mt-10 items-center">
      <div className="w-full max-w-sm bg-white p-5 ">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-2">
          Welcome Back to Fere!
        </h1>
        <p className="text-center text-gray-500 mb-10">Let's keep moving.</p>

        {/* Form */}
        <form className="space-y-8">
          {/* Email */}
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded-md py-5 px-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
            />
          </div>
          {/* Password */}
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded-md py-5 px-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
            />
          </div>

                   {/* OR Divider */}
          <div className="text-center my-4">
            <span className="text-gray-500">OR</span>
          </div>


          {/* Google Button */}
          <button className="flex items-center justify-center w-full mb-3 p-3 border border-black rounded-full bg-white shadow-md hover:shadow-lg transition">
            <img
              src="https://img.icons8.com/color/24/000000/google-logo.png"
              alt="Google"
              className="mr-2"
            />
            Continue with Google
          </button>

          {/* Create Account Button */}
          <button className="flex items-center justify-center w-full p-3 border border-black rounded-full bg-white shadow-md hover:shadow-lg transition">
            <span className="mr-2">🧑‍💻</span> Create new account
          </button>

          {/* Forgot Password */}
          <div className="text-center mt-4">
            <a href="#" className="text-red-500 text-md">
              Forgot your Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WelcomeBackPage;
