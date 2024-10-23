import React from "react";
import errorImage from '../assets/errorImage.svg';
function ErrorPage() {
 return (
   <div className="flex flex-col justify-center items-center min-h-screen ">
     <div className="bg-white p-8 text-center w-full">
       <h2 className="text-2xl  mb-4">
         We're Sorry, this email doesn’t exist in our database
       </h2>
       <p className="text-gray-600 mb-6">
         <a href="/edit-email" className="text-red-500 hover:underline">
           Go back
         </a>{" "}
         to edit your email address and try again.
       </p>
       <div className="flex flex-col items-center mb-4">
         <img
           src={errorImage}
           alt="Error Illustration"
           className="w-20 h-auto"
         />
       </div>
     </div>
   </div>
 );
}
export default ErrorPage;
