import React from "react";

const CreateAccountPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <div className="w-full max-w-sm bg-white p-6 ">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-2">
          Create Your Fere Account
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Get started on your ferry riding experience!
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Name */}
          <div>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded-md py-4 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
            />
          </div>
          {/* Email */}
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded-md py-4 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
            />
          </div>
          {/* Password */}
          <div>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded-md py-4 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
            />
          </div>
          {/* Confirm Password */}
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-500 rounded-md py-4 px-6 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
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

          {/* Log in button */}
          <button className="flex items-center justify-center w-full p-3 border border-black rounded-full bg-white shadow-md hover:shadow-lg transition">
            <span className="mr-2">🔐</span> Log In back to your account
          </button>

          {/* Terms & Privacy */}
          <div className="flex items-center justify-center mt-4">
            <input
              type="checkbox"
              className="mr-2 form-checkbox rounded border-gray-400 text-blue-500"
            />
            <span className="text-xs text-gray-600">
              By signing up, you agree to our{" "}
              <a href="#" className="text-blue-500 underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500 underline">
                Privacy Policy
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountPage;
