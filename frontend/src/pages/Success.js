import React from 'react'
import SUCCESSIMAG from "../assest/success.gif"
import {Link} from "react-router-dom"
const Success = () => {
  return (
    <div className='bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-1'>
            <img src={SUCCESSIMAG} width={150} height={150}/>
            <p className='text-green-600 font-bold text-xl'>Payment Successfully</p>
            <Link to={"/order"} className='p-2 px-3 my-4 border-2 border-green-500 rounded font-semibold text-green-600 hover:bg-green-600 hover:text-white'>
            See Order
            </Link>
    </div>
  )
}

export default Success