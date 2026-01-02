
import React from 'react'
import { Menu, LogOut } from 'lucide-react'

const Adminheader = ({setOpen}) => {
  return (
    <header className='flex items-center justify-between px-4 py-3 bg-background '>
      <button onClick={() => setOpen(true)} className='lg:hidden sm:block !bg-black'> 
        <Menu />
        <span className='sr-only'>Toggle Menu</span>
      </button>
      <div className="flex flex-1 justify-end">
        <button className='inline-flex gap-2 item-center rounded-md px-4 py-2 text-sm font-medium shadow !bg-black'> 
          <LogOut />
          Logout
        </button>
      </div>
    </header>
  )
}

export default Adminheader