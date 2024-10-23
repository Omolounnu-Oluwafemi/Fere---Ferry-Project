import React, { useState, useEffect } from "react";

const PasswordverificationCode = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [otp, setOtp] = useState(new Array(4).fill(""));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleResendCode = () => {
    setTimeLeft(60); // Reset the timer to 60 seconds when "Resend Code" is clicked
  };

  return (
    <div className="min-h-screen flex flex-col mt-10">
      <div className="w-full max-w-sm p-3">
        {/* Title */}
        <h1 className="text-xl font-semibold text-gray-800 mb-3 text-left leading-relaxed">
          A code to reset your password was sent to your email address
        </h1>
        {/* Edit Email Link */}
        <a href="#" className="text-red-500 mb-8 block text-left text-lg">
          Edit Email Address
        </a>

        {/* OTP Input */}
        <div className="flex space-x-5 mb-4">
          {otp.map((_, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              maxLength="1"
              className="w-12 h-12 text-center text-lg border border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
              value={otp[index]}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </div>

        {/* Resend Timer */}
        <p className="mt-10 text-gray-500 text-left">
          Resend code in {timeLeft} seconds
        </p>

        {/* Resend Link */}
        {timeLeft === 0 && (
          <button
            className="mt-4 text-red-500 text-left"
            onClick={handleResendCode}
          >
            Resend Code
          </button>
        )}
      </div>
    </div>
  );
};

export default PasswordverificationCode;
