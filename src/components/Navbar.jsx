import React from 'react'
import { Link } from 'react-router';
import { FaCcAmazonPay } from "react-icons/fa";
import { RiShoppingBagFill } from "react-icons/ri";
import { IoLogInOutline } from "react-icons/io5";
import Logo from './Logo';

const Navbar = () => {
  return (
    <>
<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Logo/>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to={'/'} className="mr-5 hover:text-gray-900">Home</Link>
      <Link to={'/cart'} className="mr-5 hover:text-gray-900">Cart</Link>
     
    </nav>
    <button className="inline-flex items-center bg-indigo-600 border-0 py-1 px-3 text-white focus:outline-none hover:bg-indigo-400 rounded text-base mt-4 md:mt-0">Login
    <IoLogInOutline className='mx-2 text-2xl' />
    </button>
  </div>
</header>



    </>
  )
}

export default Navbar