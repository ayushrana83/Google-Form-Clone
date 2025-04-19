import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between m-3'>
        {/* logo */}
        <div className='flex items-center gap-1'>
            <img src={"icons/GoogleForm.svg"} className='w-12 h-12'/>
            <h1 className='text-xl font-semibold'>Google Forms</h1>
        </div>
        {/* search */}
        <div className='relative'>
            <input type="text" placeholder='Search by title'  className='text-md font-medium w-3xl outline-none p-3 rounded-xl  bg-gray-100  text-gray-800'/>
            <img className=' w-10 h-10 absolute right-2 top-1 hover:bg-gray-300 p-2 rounded-full' src="icons/Search.svg" alt='Icon' />
        </div>
        {/* user info */}
        <div>
            <div className='rounded-full h-12 w-12 text-center font-semibold px-3 py-3 text-[var(--bg-color)] bg-[var(--primary-color)]'>{/* user name first character */}A</div>
        </div>
    </div>
  )
}

export default Navbar