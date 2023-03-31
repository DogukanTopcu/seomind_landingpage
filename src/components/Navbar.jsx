import Image from 'next/image';
import React from 'react';

import Logo from "../../public/seomind.svg";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center mt-6 mx-5'>
      <div className='flex justify-start items-center'>
        <Image src={Logo} width={65} />
        <h1 className='navbarTitle'>SEOMIND</h1>
        <div className='preAlfa text-xs font-thin ml-2 border-white'>PRE-ALPHA</div>
      </div>

      <div className='flex justify-end  items-center'>
        <h1 className='navText mr-5'>PRODUCT</h1>
        <h1 className='navText mr-5'>BUSINESS</h1>
        <h1 className='navText mr-5'>PPRICING</h1>
        <h1 className='navText mr-5'>RESOURCES</h1>
        <div className='waitlist py-2 px-4'>JOIN THE WAITLIST</div>
      </div>
    </div>
  )
}

export default Navbar