import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import DropDown from './components/DropDown'
import { FaTelegramPlane, FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { BsArrowUpShort } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Home() {

    useEffect(() => {
        gsap.fromTo('.up', { y: 200 }, {
            y: 0, duration: 0.1,
            scrollTrigger: {
                trigger: '.feat',
                start: 'top 20%',
                end: 'top 20%',
                scrub: 0.1,
                toggleActions: 'play none none reset',
            }
        })
    })

    return (
        <div className="selection:text-white selection:bg-[#ffaa00]">
            <a href='#header' className="up w-12 h-12 rounded-full flex justify-center items-center border border-[#ffba46] fixed z-40 shadow-2xl bg-[#000401] hover:bg-[#ffba46] group duration-500 bottom-6 right-6 md:right-16">
                <BsArrowUpShort className='text-[#ffba46] text-2xl group-hover:text-white duration-500' />
            </a>
            {/* Header and Hero */}
            <div className="min-h-screen pb-4 sm:pb-0" id='hero'>
                <header className="select-none flex justify-between items-center px-4 lg:px-8 xl:px-36 pt-12 md:pt-8 z-20" id='header'>
                    <Link to='/' >
                        <img src="./images/Frame.png" alt="" className="w-12 md:w-20" />
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
                <h1 className="text-4xl md:text-7xl font-grenze font-bold mx-auto w-fit mt-32 md:mt-[72px] select-none text-[#ffba46]">Daniel Teshome 🐱‍💻</h1>
                <div className="w-[90vw] md:w-[50vw] mx-auto text-center text-gray-800 font-medium mt-20 sm:mt-24 font-play">I am a Product Designer and a Digital Marketer with a passion for crafting digital experiences that are both visually striking and intuitive. I firmly believe that great design is a never-ending pursuit, and I am always seeking out new ways to improve and evolve the products I create.</div>
                <div className="flex space-x-4 mt-20 sm:mt-24 md:mt-16 mx-auto w-fit">
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
                <div className="flex space-x-4 mt-4 mx-auto w-fit">
                    <a href='./Daniel_Teshome_Resume_CV.pdf' rel='noreferrer' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden w-fit">
                        <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative">
                            Resume/CV
                        </div>
                        <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                        <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                    </a>
                </div>
            </div>

            <section className="mx-2 lg:mx-24 mt-24 pb-24">
                <div className="text-2xl md:text-4xl text-gray-800 mx-auto w-fit select-none font-play feat">Featured Projects</div>
                <div className="text-xl text-gray-800 mb-12 lg:mb-36 font-play mx-auto w-fit mt-4 lg:mt-12 select-none text-center">"There's always room for improvement."</div>
                <div className="flex flex-col lg:flex-row items-center lg:space-x-4 mb-12 lg:mb-0">
                    <div className="px-6 xl:px-24 py-16 lg:py-24 mb-16 lg:mb-32 bg-zinc-50 shadow-xl rounded-3xl flex flex-col items-center w-full lg:w-1/2">
                        <div className="text-3xl lg:text-6xl text-[#ffba46] font-merienda text-center mb-12">NurtureMe.</div>
                        <div className="text-xl text-black text-center font-play mb-4">NurtureMe. ... A Brand-new cross-platform mobile application and website to control, manage, purchase and do more with the NurtureMe. home automation tool.</div>
                        <a href='/nurtureme'>
                            <button className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                                <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative">
                                    View Project
                                </div>
                                <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                                <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                            </button>
                        </a>
                    </div>
                    <div className="flex flex-col space-y-3 items-center w-full lg:w-1/2 group">
                        <div className="w-full flex items-center group">
                            <img src="./images/ProjectNurtureMe/4.png" alt="" className="select-none mx-0 group-hover:scale-105 duration-500" />
                        </div>
                        <div className="mx-4 lg:mx-0 hidden lg:flex items-center -space-x-8 group w-fit mt-6 z-10 select-none group-hover:mx-1 duration-500">
                            <div className="flex w-36 mx-0 group-hover:mx-2 duration-500 group-hover:scale-105">
                                <img src="./images/ProjectNurtureMe/1.png" alt="" className="" />
                            </div>
                            <div className="flex w-48 z-10 mx-0 group-hover:mx-2 duration-500 group-hover:scale-105">
                                <img src="./images/ProjectNurtureMe/screens/F2.png" alt="" className="" />
                            </div>
                            <div className="flex w-36 mx-0 group-hover:mx-2 duration-500 group-hover:scale-105">
                                <img src="./images/ProjectNurtureMe/3.png" alt="" className="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:space-x-4 mt-24">
                    <div className="flex -gap-x-8 items-center w-full lg:w-1/2 group">
                        <div className="hidden w-6/12 lg:flex items-center group">
                            <img src="./images/ProjectCryptoFix/1.png" alt="" className="select-none mx-0 group-hover:scale-105 duration-500" />
                        </div>
                        <div className="w-full flex items-center group">
                            <img src="./images/ProjectCryptoFix/2.png" alt="" className="select-none mx-0 group-hover:scale-105 duration-500" />
                        </div>
                    </div>
                    <div className="px-6 xl:px-24 py-16 lg:py-24 mb-16 md:mb-32 bg-zinc-50 shadow-xl rounded-3xl flex flex-col items-center w-full lg:w-1/2">
                        <div className="text-3xl lg:text-6xl text-purple-600 font-merienda text-center mb-12">CryptoFix</div>
                        <div className="text-xl text-black text-center font-play mb-4">CryptoFix is an agency in the cryptocurrency industry. And this is a cross-platform app fot advertisers to join CryptoFix and create ad campaigns that will be places one a variety of cryptocurrency websites and apps.</div>
                        <a href='/crypto'>
                            <button className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                                <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative">
                                    View Project
                                </div>
                                <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                                <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                            </button>
                        </a>
                    </div>
                </div>
            </section>
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

export default Home