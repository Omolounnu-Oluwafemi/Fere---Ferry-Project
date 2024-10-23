import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faBank,
  faChevronRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Payment = () => {
 return (
   <div className="flex flex-col items-center min-h-screen  mt-10">
     <div className="bg-white p-6  w-full">
       {/* Close Button */}
       <button className="absolute top-2 right-3 text-gray-600 hover:text-gray-800">
         <FontAwesomeIcon icon={faTimes} />
       </button>
       {/* Title */}
       <h2 className="text-3xl font-semibold mb-4">Set up payment method</h2>
       <p className="text-gray-600 mb-6">
         Save your card info for faster checkout.
       </p>
       <button className="flex items-center justify-center w-full mb-5 p-3 border border-black rounded-full bg-white shadow-md hover:shadow-lg transition">
         <FontAwesomeIcon icon={faCreditCard} className="h-5 w-5 mr-2" />
         Add Card
         <FontAwesomeIcon icon={faChevronRight} className="h-5 w-5 ml-auto" />
       </button>
       <button className="flex items-center justify-center w-full mb-5 p-3 border border-black rounded-full bg-white shadow-md hover:shadow-lg transition">
         <FontAwesomeIcon icon={faBank} className="h-5 w-5 mr-2" />
         Link Bank Account
         <FontAwesomeIcon icon={faChevronRight} className="h-5 w-5 ml-auto" />
       </button>
       <p className="text-red-500 mt-10 text-center">
         I'll do it later, thanks.
       </p>
     </div>
   </div>
 );
}

export default Payment
