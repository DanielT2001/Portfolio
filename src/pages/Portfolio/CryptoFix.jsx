import React from 'react'
import { Link } from 'react-router-dom'
import { FaTelegramPlane, FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'

function CryptoFix() {

    return (
        <div className="selection:text-white selection:bg-[#ffaa00]">
            <div className='min-h-screen flex flex-col' id='hero'>
                <header className="select-none flex justify-between items-center px-4 lg:px-8 xl:px-36 pt-12 md:pt-8 z-20" id='header'>
                    <Link to='/' >
                        <img src="./images/Frame.png" alt="" className="w-12 md:w-20" />
                    </Link>
                    <div className="w-4/5 xl:w-1/3 flex justify-end space-x-2 md:space-x-6">
                        <div className="text-xl text-[#FFAA00] group duration-500 font-merienda">
                            <div className="px-2 py-1 text-[#00D48D] duration-500">UX</div>
                            <div className="h-[1px] w-full group-hover:origin-center bg-[#00D48D] duration-500"></div>
                            <div className="relative">
                                <div className="px-6 py-4 w-48 rounded-lg hidden bg-[#F8F9FE] shadow-lg group group-hover:block duration-500 absolute right-4">
                                    <Link to='/nurtureme' className="px-2 py-1 w-full text-right hover:text-[#00d48d] duration-500 block">NurtureMe.</Link>
                                    <Link to='/crypto' className="px-2 py-1 w-full text-right text-purple-600 hover:text-[#00d48d] duration-500 block">CryptoFix</Link>
                                </div>
                            </div>
                        </div>
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
                <div className="px-4 lg:px-8 xl:px-36 pb-12 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center my-auto">
                    <div className="lg:w-1/2 mt-32 lg:mt-0">
                        <div className="text-3xl lg:text-6xl text-purple-600 font-merienda mb-2">CryptoFix</div>
                        <div className="text-xl text-purple-600 font-play mb-2">Web Design</div>
                        <div className="text-gray-800 font-play mb-12">A website of an ad agency where advertisers come to join and create ad campaigns that will be placed on variety of cryptocurrency websites and apps.</div>
                        <div className="flex justify-center space-x-6 mx-auto">
                            <a href='https://www.figma.com/proto/pPHEKMiGict9D3kvVkb65a/28.-CryptoFix-28?node-id=458-1101&scaling=scale-down-width&page-id=5%3A13&starting-point-node-id=458%3A889' target='_blank' rel='noreferrer' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                                <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative text-center">
                                    View Figma Prototype
                                </div>
                                <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                                <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                            </a>
                        </div>
                    </div>

                    <div className="flex -space-x-8 items-center w-11/12">
                        <div className="lg:hover:scale-105 duration-500 z-0 lg:w-11/12">
                            <img src="../images/ProjectCryptoFix/2.png" alt="" className="" />
                        </div>
                        <div className="lg:hover:scale-105 duration-500 hidden lg:block w-4/12">
                            <img src="../images/ProjectCryptoFix/1.png" alt="" className="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-32'>
                <div className="min-h-screen px-4 lg:px-8 xl:px-36 pb-6 lg:pb-24 flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:space-x-8 items-center">
                    <div className="flex flex-col lg:w-1/2 space-y-4">
                        <div className="prod text-4xl text-gray-800 font-merienda">Overview</div>
                        <div className="font-play font-medium text-gray-950"><span className='font-bold'>The Product:</span> CryptoFix is an ad agency where advertisers come to join and create ad campaigns that will be placed on variety of cryptocurrency websites and apps.</div>
                        <div className="font-play font-medium text-gray-950"><span className='font-bold'>Client:</span> CryptoFix Ad Agency</div>
                        <div className="font-play font-medium text-gray-950"><span className='font-bold'>Project Length:</span> 30 Day Sprint</div>
                        <div className="font-play font-medium text-gray-950"><span className='font-bold'>Team:</span> Daniel Teshome</div>
                        <div className="font-play font-medium text-gray-950"><span className='font-bold'>Tools:</span> Figma, Maze, Adobe Photoshop, Adobe Lightroom</div>
                        <div className="font-play font-medium text-gray-950"><span className='font-bold'>Responsibilities:</span> User Researches, Business Goals and Value Proposals, Branding & Identity, User Personas, Sitemaps, User Journeys, High Fidelity Wireframes and Prototypes, Style guides, Web Development.</div>
                        <div className="font-play font-medium text-gray-950"><span className='font-bold'>Roles:</span> Product Designer, UX Researcher, Graphic Designer, Web Developer</div>
                    </div>
                    <div className="flex space-x-4 lg:w-1/2 mt-12 lg:mt-0">
                        <div className="z-10">
                            <img src="../images/ProjectCryptoFix/3.png" alt="" className="hover:scale-105 hover:-translate-y-4 duration-500" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 lg:px-8 xl:px-36 py-12 w-full flex space-y-4 md:space-y-0 flex-col justify-between place-self-end">
                <div className="text-xl md:text-2xl text-gray-800 text-center mx-auto w-fit select-none font-play feat">I am still compiling this case study and I will be done soon. I really appreciate your patience. Until then, it would make me really happy if you go through my other great works.</div>
                <div className="">
                    <img src="./images/30.png" alt="" className="" />
                </div>
                <div className="flex justify-center space-x-6 mx-auto self-center">
                    <a href='/nurtureme' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                        <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative text-center">
                            NurtureMe.
                        </div>
                        <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                        <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                    </a>
                    <a href='/UI' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                        <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative text-center">
                            UI Designs
                        </div>
                        <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                        <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                    </a>
                </div>
            </div>
            <div className="px-4 lg:px-8 xl:px-36 py-12 w-full bg-gray-950 flex space-y-4 md:space-y-0 flex-col md:flex-row justify-between place-self-end">
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

export default CryptoFix