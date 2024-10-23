import React from "react";

const ResetPassword = () => {
  return (
    <div className="min-h-screen flex flex-col mt-10 items-center">
      <div className="w-full max-w-sm bg-white p-3">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-2">
          Enter Your email address
        </h1>
        <p className="text-center text-gray-500 mb-10">
          Do this to reset your password
        </p>

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

          <div className="text-center mt-4">
            <a href="#" className="text-red-500 text-md">
              Go back
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
