import React from 'react'

const Navbar = () => {
  return (
    <div className=' bg-gray-200 w-full flex justify-between h-15 items-center shadow px-5'>
        <div className='w-[10%] h-full flex items-center'>
            <h1 className='font-bold text-zinc-800'>LOGO</h1>
        </div>
        <div className='w-[50%]'>
            <ul className='w-full flex gap-6 list-none items-center h-full text-zinc-800 font-medium'>
                <li className='cursor-pointer'>HOME</li>
                <li className='cursor-pointer'>ABOUT US</li>
                <li className='cursor-pointer'>CONTACT US</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar