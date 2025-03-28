import React from 'react'
import CANCELIMAG from "../assest/cancel.gif"
import { Link } from 'react-router-dom'
const Cancel = () => {
  return (
    <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-1'>
    <img src={CANCELIMAG} width={150} height={150} className='mix-blend-multiply'/>
    <p className='text-red-600 font-bold text-xl'>Payment Cancel</p>
    <Link to={"/cart"} className='p-2 px-3 my-4 border-2 border-red-500 rounded font-semibold text-red-600 hover:bg-red-600 hover:text-white'>
    Go To Cart
    </Link>
</div>
  )
}

export default Cancel