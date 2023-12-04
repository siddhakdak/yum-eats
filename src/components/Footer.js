import React from 'react'
import {FaFacebookSquare, FaInstagram, FaGithubSquare, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='m-auto px-4 py-2 bg-[#24262b]'>
        <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div> 
                <h1 className='w-full text-3xl font-bold text-orange-500'>YumEats</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laboriosam cumque distinctio excepturi veritatis praesentium atque nobis quos odio, eius dolores fuga reiciendis beatae sed eos molestias ipsum modi inventore.</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaLinkedin size={30}/>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>New York</li>
                        <li className='py-2 text-sm'>India</li>
                        <li className='py-2 text-sm'>Dubai</li>
                        <li className='py-2 text-sm'>Australia</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Menu</h6>
                    <ul>
                        <li className='py-2 text-sm'>Home</li>
                        <li className='py-2 text-sm'>Delivery</li>
                        <li className='py-2 text-sm'>Menu Items</li>
                        <li className='py-2 text-sm'>Category</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>New York</li>
                        <li className='py-2 text-sm'>India</li>
                        <li className='py-2 text-sm'>Dubai</li>
                        <li className='py-2 text-sm'>Australia</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>New York</li>
                        <li className='py-2 text-sm'>India</li>
                        <li className='py-2 text-sm'>Dubai</li>
                        <li className='py-2 text-sm'>Australia</li>
                    </ul>
                </div>
            </div>

        </div>
        <div>
            <h3 className='flex justify-center font-bold text-yellow-400'> Developed by Siddhak Dak</h3>
        </div>
    </div>
    
  )
}

export default Footer