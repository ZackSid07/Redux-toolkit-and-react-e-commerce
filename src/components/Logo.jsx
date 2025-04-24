import React from 'react'
import { RiShoppingBagFill } from 'react-icons/ri'
import { Link } from 'react-router'

const Logo = () => {
  return (
    <>
        <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <RiShoppingBagFill className='text-4xl text-purple-500' />
            <span className="ml-3 text-xl">Spon-shop</span>
        </Link>
    </>
  )
}

export default Logo