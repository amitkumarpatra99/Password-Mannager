import React from 'react'

const Navbar = () => {
  return (
    <nav className=' bg-[#003161] text-white '>

      <div className="mycontainer flex gap-4 py-3 items-center
       px-6 justify-between">

        <div className="logo  font-bold h-10 text-2xl">
          <span className='text-[#FFF4B7]'>&lt;</span>
          <span className='text-cyan-400'> Password</span>
          <span className=' text-[#FFF4B7]'> Mannager </span>
          <span className=' text-[#FFF4B7]'>/&gt; </span>
        </div>           

        <a target="_blank" href="https://github.com/">
          <button className='text-white my-1  '>
            <span className='flex gap-1 font-semibold items-center text-black  bg-[#FFF4B7] rounded-full   mx-2 px-3'> <img className=' p-1 w-10 rounded-full ' src="/icons/Github logo.svg" alt="Github Logo" /> GitHub </span>
          </button>
        </a>

      </div>
    </nav>
  )
}

export default Navbar
