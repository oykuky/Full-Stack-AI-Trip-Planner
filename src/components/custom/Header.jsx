import React, { useEffect } from 'react';
import { Button } from '../ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


function Header() {
  const user=JSON.parse(localStorage.getItem('user'));
  useEffect(() =>{
    console.log(user)
  },[])
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-4'>
      <img src='/logo.svg'/>
      <div >
       {user? 
       <div className='flex items-center gap-4'>
        <Button variant="outline" className= "rounded-full">My Trips </Button> 
         <Popover>
          <PopoverTrigger>
            <img src={user?.picture} className='rounded-full w-[38px] h-[38px]' />
          </PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
         </Popover>

       </div>
       : <Button>Sign In</Button> 
       }
      </div>
    </div>
  )
}

export default Header
