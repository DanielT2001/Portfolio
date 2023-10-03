import React from 'react'
import { FaTelegramPlane, FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { CgMaze } from 'react-icons/cg'
import { IoShareSocialOutline } from 'react-icons/io5'
import { IoLogoWhatsapp } from 'react-icons/io'
import { SiAdobecreativecloud, SiAdobexd, SiFigma, SiGreensock, SiReact, SiTailwindcss } from 'react-icons/si'
import { Link } from 'react-router-dom';
import DropDown from './components/DropDown';

function About() {
    return (
        <div className="selection:text-white selection:bg-[#ffaa00]">
            <div className='min-h-screen' id='hero'>
                <header className="select-none flex justify-between items-center px-4 lg:px-36 pt-12 md:pt-8 z-20">
                    <Link to='/' >
                        <img src="./images/Frame.png" alt="" className="w-12 md:w-20" />
                    </Link>
                    <div className="w-4/5 xl:w-1/3 flex justify-end  space-x-2 md:space-x-6">
                        <DropDown />
                        <div to='/about' className="text-lg md:text-xl text-sky-500 duration-500 group font-merienda">
                            <div className="px-2 py-1">About</div>
                            <div className="w-full h-[1px] origin-center bg-sky-500 duration-500"></div>
                        </div>
                        <Link to='/UI' className="text-lg md:text-xl text-[#FFAA00] hover:text-[#00D48D] duration-500 group font-merienda">
                            <div className="px-2 py-1">UI</div>
                            <div className="w-0 h-[1px] group-hover:w-full group-hover:origin-center bg-[#FFAA00] group-hover:bg-[#00D48D] duration-500"></div>
                        </Link>
                    </div>
                </header>
                <div className="px-4 lg:px-12 xl:px-36 py-12 flex flex-col">
                    <div className="px-0 lg:px-4 flex flex-col lg:flex-row gap-y-6  lg:gap-y-0 lg:-space-x-8 2xl:items-center">
                        <div className="flex flex-col mt-12 mb-12 lg:mb-24 2xl:mb-36 items-center w-full lg:w-[55%]">
                            <div className="text-3xl font-play font-bold  text-gray-700 mb-6 self-start"><span className='font-grenze text-5xl text-[#ffba46]'>Daniel Teshome</span>.</div>
                            <div className="px-2 md:px-12 py-6 bg-zinc-100 bg-opacity-80 shadow-2xl">
                                <div className="text-lg font-play tracking-normal text-center text-gray-900">
                                    I am a seasoned Product Designer, Web Developer and Digital Marketer with a relentless passion for creating exceptional digital experiences. I pride myself on being a user advocate and believe that user-centered design is the key to building products that truly resonate with people. I am not content with just meeting expectations - I strive to exceed them by pushing the envelope with my designs and constantly seeking out new challenges. With a proven track record of success in fast-paced, collaborative environments, I excel at working alongside developers, stakeholders, and other designers to deliver world-class products that delight users.
                                </div>
                            </div>
                            <div className="flex space-x-4 mt-24 md:mt-16 mx-auto w-fit">
                                <a href='https://www.linkedin.com/in/daniel-w-designer' target='_blank' rel='noreferrer' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                                    <div className="p-4 text-zinc-800 group-hover:text-white duration-500 font-play z-10 relative">
                                        <FaLinkedin className='text-2xl' />
                                    </div>
                                    <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                                    <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                                </a>
                                <a href='https://t.me/+251978133810' target='_blank' rel='noreferrer' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                                    <div className="p-4 text-zinc-800 group-hover:text-white duration-500 font-play z-10 relative">
                                        <FaTelegramPlane className='text-2xl' />
                                    </div>
                                    <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                                    <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                                </a>
                                <a href='https://www.facebook.com/profile.php?id=100080415339378' target='_blank' rel='noreferrer' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                                    <div className="p-4 text-zinc-800 group-hover:text-white duration-500 font-play z-10 relative">
                                        <FaFacebookF className='text-2xl' />
                                    </div>
                                    <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                                    <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                                </a>
                                <a href='https://wa.me/251978133810?text=Hello!' target='_blank' rel='noreferrer' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                                    <div className="p-4 text-zinc-800 group-hover:text-white duration-500 font-play z-10 relative">
                                        <IoLogoWhatsapp className='text-2xl' />
                                    </div>
                                    <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                                    <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                                </a>
                            </div>
                        </div>
                        <div className="hidden lg:block w-full lg:w-[45%]">
                            <img src="./images/me.jpg" alt="" className="rounded shadow-xl" />
                        </div>
                        <div className="lg:hidden block w-full lg:w-[45%]">
                            <img src="./images/me.jpg" alt="" className="rounded shadow-xl" />
                        </div>
                    </div>
                    <div className="lg:px-4 mt-24 lg:mt-0 2xl:mt-24 mx-auto flex flex-col gap-y-4 md:flex-row md:gap-x-6 lg:gap-x-8 items-center lg:items-start 2xl:items-center">
                        <div className="flex gap-x-8 2xl:items-center">
                            <div className="w-20">
                                <SiAdobexd className='text-5xl text-zinc-800 mx-auto' />
                            </div>
                            <div className="w-20">
                                <SiAdobecreativecloud className='text-5xl text-zinc-800 mx-auto' />
                            </div>
                            <div className="w-20">
                                <CgMaze className='text-5xl text-zinc-800 mx-auto' />
                            </div>
                        </div>
                        <div className="flex gap-x-8 2xl:items-center">
                            <div className="w-20">
                                <SiFigma className='text-5xl text-zinc-800 mx-auto' />
                            </div>
                            <div className="w-20">
                                <IoShareSocialOutline className='text-5xl text-zinc-800 mx-auto' />
                            </div>
                        </div>
                        <div className="flex gap-x-8 2xl:items-center">
                            <div className="w-20">
                                <SiReact className='text-5xl text-zinc-800 mx-auto' />
                            </div>
                            <div className="w-20">
                                <SiTailwindcss className='text-5xl text-zinc-800 mx-auto' />
                            </div>
                            <div className="w-20">
                                <SiGreensock className='text-5xl text-zinc-800 mx-auto' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-screen flex flex-col justify-between items-center">
                <div className="px-4 lg:px-36 py-4 pt-24 mb-2 font-grenze text-4xl text-center text-gray-800">How I make your Products & Results Great</div>
                <div className="px-4 lg:px-36 text-xl text-gray-800 font-play mx-auto w-fit select-none text-center">"There's always room for improvement."</div>
                <div className="px-4 lg:px-36 py-12 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                    <div className="flex flex-col space-y-4 rounded-xl shadow bg-gray-50 lg:hover:shadow-xl lg:hover:bg-[#ffba46] lg:hover:text-white lg:hover:-translate-y-4 lg:hover:-translate-x-4 duration-500 p-2 md:p-4 text-play">
                        <div className="flex items-center w-full space-x-4">
                            {/* <div className="bg-gray-100 rounded-md shadow-xl p-2">
                                <AiOutlineRadarChart className='text-xl text-gray-800' />
                            </div> */}
                            <div className="text-xl text-center w-full">Optimal UX Design</div>
                        </div>
                        <div className="font-play"> I design apps and websites that engage and guide users towards their goals with user-centric design.</div>
                    </div>
                    <div className="flex flex-col space-y-4 rounded-xl shadow bg-gray-50 lg:hover:shadow-xl lg:hover:bg-[#ffba46] lg:hover:text-white lg:hover:-translate-y-4 duration-500  p-2 md:p-4 text-play text-center">
                        <div className="flex items-center w-full space-x-4">
                            {/* <div className="bg-gray-100 rounded-md shadow-xl p-2">
                                <AiOutlineAreaChart className='text-xl text-gray-800' />
                            </div> */}
                            <div className="text-xl text-center w-full">Ongoing Improvements</div>
                        </div>
                        <div className="font-play">I am committed to continuously improving my work to maximize the value and revenue of your product.</div>
                    </div>
                    <div className="flex flex-col space-y-4 rounded-xl shadow bg-gray-50 lg:hover:shadow-xl lg:hover:bg-[#ffba46] lg:hover:text-white lg:hover:-translate-y-4 lg:hover:translate-x-4 duration-500 p-4 text-play text-center">
                        <div className="flex items-center w-full space-x-4">
                            {/* <div className="bg-gray-100 rounded-md shadow-xl p-2">
                                <BsDiagram3 className='text-xl text-gray-800' />
                            </div> */}
                            <div className="text-xl text-center w-full">Strategic Business Plans</div>
                        </div>
                        <div className="font-play">We will work closely to understand your business objectives and develop comprehensive plans to attract and retain more customers.</div>
                    </div>
                    <div className="flex flex-col space-y-4 rounded-xl shadow bg-gray-50 lg:hover:shadow-xl lg:hover:bg-[#ffba46] lg:hover:text-white lg:hover:translate-y-4 lg:hover:-translate-x-4 duration-500  p-2 md:p-4 text-play text-center">
                        <div className="flex items-center w-full space-x-4">
                            {/* <div className="bg-gray-100 rounded-md shadow-xl p-2">
                                <AiFillCustomerService className='text-xl text-gray-800' />
                            </div> */}
                            <div className="text-xl text-center w-full">Comprehensive Consultation</div>
                        </div>
                        <div className="font-play">I offer unlimited consultation to ensure that your product is always evolving, with new features and enhanced user experiences.</div>
                    </div>
                    <div className="flex flex-col space-y-4 rounded-xl shadow bg-gray-50 lg:hover:shadow-xl lg:hover:bg-[#ffba46] lg:hover:text-white lg:hover:translate-y-4 duration-500  p-2 md:p-4 text-play text-center">
                        <div className="flex items-center w-full space-x-4">
                            {/* <div className="bg-gray-100 rounded-md shadow-xl p-2">
                                <BsFillBrushFill className='text-xl text-gray-800' />
                            </div> */}
                            <div className="text-xl text-center w-full">Customized Design Solutions</div>
                        </div>
                        <div className="font-play">I collaborate closely with you to understand your requirements and preferences, delivering solutions that meet and exceed your expectations.</div>
                    </div>
                    <div className="flex flex-col space-y-4 rounded-xl shadow bg-gray-50 lg:hover:shadow-xl lg:hover:bg-[#ffba46] lg:hover:text-white lg:hover:translate-y-4 lg:hover:translate-x-4 duration-500  p-2 md:p-4 text-play text-center">
                        <div className="flex items-center w-full space-x-4">
                            {/* <div className="bg-gray-100 rounded-md shadow-xl p-2">
                                <BsArrowRepeat className='text-xl text-gray-800' />
                            </div> */}
                            <div className="text-xl text-center w-full">Comprehensive Testing</div>
                        </div>
                        <div className="FcRefresh">I employ a range of testing methodologies, including functional, performance, and user experience testing, to thoroughly assess and validate all aspects of the product.</div>
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
        </div >
    )
}

export default About