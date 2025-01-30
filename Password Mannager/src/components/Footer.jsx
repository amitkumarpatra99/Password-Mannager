// eslint-disable-next-line no-unused-vars
import React from 'react'


const Footer = () => {
  return (
    <>

<div className=' flex   bg-[#133E87] text-white justify-evenly h-10 fixed bottom-0 w-full '>

        {/* <div>

          <div className="logo justify-center items-center    font-semibold h-10 text-xl">
          <img width={30} className='inline  mx-2' src="/icons/key.png" alt="" />
          Password 
          <span className=' text-white'> Keeper </span>
          </div>

        </div> */}

        <div className='flex items-center gap-2  '>
          Created With <img className='w-7 hover:animate-bounce' src="/icons/heart.png" alt="" /> by <p className='font-semibold  hover:font-bold  '>MR PATRA</p>
        </div>


      </div>
    </>
  )
}

export default Footer
