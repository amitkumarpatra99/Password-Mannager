// eslint-disable-next-line no-unused-vars
import React from 'react'

const Navbar = () => {
  return (
    <nav className=' bg-[#133E87]  '>

      <div className="mycontainer  flex gap-4 py-3 items-center
       px-6 justify-between">

        <div className="logo  font-bold h-10  text-3xl">
          <img width={30} className='inline  mx-2' src="/icons/security.png" alt="" />
          <span className='hover:text-white cursor-pointer text-gray-200 hover:font-extrabold'>Password <span className='animate-pulse text-white'> Keeper </span> </span>
        </div>


        <div className='flex'>
          <a target="_blank" href="https://github.com/amitkumarpatra99">
            <button className='text-white my-1  '>
              <span className='flex gap-1 font-semibold items-center   rounded-full   mx-1 px-1'> <img className=' p-1 w-10 rounded-full bg-slate-400' src="/icons/Github logo.svg" alt="Github Logo" />GitHub </span>
            </button>
          </a>

          <a target="_blank" href="https://mrpatra.netlify.app/">
            <button className='text-white my-1  '>
              <span className='flex gap-1 font-semibold items-center   rounded-full   mx-2 px-3'> <img className=' p-1 w-10 rounded-full' src="/icons/DP.jpg" alt="Github Logo" /> Owner  </span>
            </button>
          </a>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
