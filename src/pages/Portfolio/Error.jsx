import React from 'react'
import { FaTelegramPlane, FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { Link } from 'react-router-dom'
import DropDown from './components/DropDown'

function Error() {
    return (
        <div className="selection:text-white selection:bg-[#ffaa00]">
            {/* Header and Hero */}
            <div className="h-screen" id='hero'>
                <header className="select-none flex justify-between items-center px-4 lg:px-36 pt-12 md:pt-8 z-20">
                    <Link to='/' >
                        <img src="../images/Frame.png" alt="" className="w-12 md:w-20" />
                    </Link>
                    <div className="w-4/5 xl:w-1/3 flex justify-end space-x-2 md:space-x-6">
                        <DropDown />
                        <Link to='/about' className="text-lg md:text-xl text-[#FFAA00] hover:text-sky-500 duration-500 group font-merienda">
                            <div className="px-2 py-1">About</div>
                            <div className="w-0 h-[1px] group-hover:w-full group-hover:origin-center bg-[#FFAA00] group-hover:bg-sky-500 duration-500"></div>
                        </Link>
                        <Link to='/UI' className="text-lg md:text-xl text-[#FFAA00] hover:text-[#00D48D] duration-500 group font-merienda">
                            <div className="px-2 py-1">UI</div>
                            <div className="w-0 h-[1px] group-hover:w-full group-hover:origin-center bg-[#FFAA00] group-hover:bg-[#00D48D] duration-500"></div>
                        </Link>
                    </div>
                </header>
                <div className="font-play text-3xl md:text-5xl text-[#ffba46] w-fit mx-auto mt-36">404</div>
                <div className="font-play text-xl text-gray-800 w-fit mx-auto mt-4">Page Not Found</div>
                <div className='mx-auto mt-4 w-fit'>
                    <Link to='/'>
                        <button className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                            <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative">
                                Home
                            </div>
                            <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                            <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="px-4 md:px-36 py-12 w-full bg-gray-950 flex space-y-4 md:space-y-0 flex-col md:flex-row justify-between place-self-end">
                <div className="hidden md:block md:place-self-end">
                    <a href='/' >
                        <img src="./images/Frame.png" alt="" className="w-20" />
                    </a>
                    <div className="text-xl text-white place-self-end">@2023 Daniel Teshome</div>
                </div>
                <div className="flex flex-col space-y-4">
                    <div className="font-play text-4xl text-white">Contact Me</div>
                    <a href='mailto:@danielteshome2001@gmail.com' className="font-play text-xl text-white">danielteshome2001@gmail.com</a>
                    <div className="font-play text-xl text-white">+251 978 133 810</div>
                    <div className="font-play text-xl text-white">📍 Addis Ababa, ET</div>
                    <div className="flex gap-x-12 my-12 w-fit">
                        <a href='https://www.linkedin.com/in/daniel-w-designer' target='_blank' rel='noreferrer' className="text-white hover:scale-110 duration-500">
                            <div className="">
                                <FaLinkedin className='text-2xl' />
                            </div>
                        </a>
                        <a href='https://t.me/+251978133810' target='_blank' rel='noreferrer' className="text-white hover:scale-110 duration-500">
                            <div className="">
                                <FaTelegramPlane className='text-2xl' />
                            </div>
                        </a>
                        <a href='https://www.facebook.com/profile.php?id=100080415339378' target='_blank' rel='noreferrer' className="text-white hover:scale-110 duration-500">
                            <div className="">
                                <FaFacebookF className='text-2xl' />
                            </div>
                        </a>
                        <a href='https://wa.me/251978133810?text=Hello!' target='_blank' rel='noreferrer' className="text-white hover:scale-110 duration-500">
                            <div className="">
                                <IoLogoWhatsapp className='text-2xl' />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="md:hidden md:place-self-end">
                    <a href='/' >
                        <img src="./images/Frame.png" alt="" className="w-20" />
                    </a>
                    <div className="text-xl text-white place-self-end">@2023 Daniel Teshome</div>
                </div>
            </div>
        </div>
    )
}

export default Error