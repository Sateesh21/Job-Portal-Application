import React from 'react'
import {assets} from '../assets/assets';
const Footer = () => {
  return (
    <div className='container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20'>
      <a target="_blank" href="https://github.com/Sateesh21"><span className="cursor-pointer font-bold italic">Boundary.IO</span></a>
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 mx-sm:hidden'>Copyright <span className='italic text-slate-900 font-semibold'><a target='_blank' href="https://www.linkedin.com/in/sateesh16">@SateeshSunkara</a></span> || All Rights Reserved.</p>
      <p className='flex-1 border-gray-400 pl-4 text-sm text-gray-500 mx-sm:hidden'>Checkout my <span className='italic text-slate-900 font-semibold'><a target='_blank' href="">Portfolio</a></span></p>
      <div className='flex gap-2.5'>
        <a target='_blank' href="https://www.instagram.com/mr.sateesh.sd/"><img className='w-25' width={50} src={assets.instagram} alt="" /></a>
        {/* <a target='_blank' href="https://www.instagram.com/mr.sateesh.sd"><img lassName='w-50'width={50} src={assets.linkedin_logo} alt="" /></a>
        <a target='_blank' href="https://www.instagram.com/mr.sateesh.sd"><img lassName='w-40' width={50}  src={assets.github} alt="" /></a> */}
      </div>
    </div>
  )
}

export default Footer
