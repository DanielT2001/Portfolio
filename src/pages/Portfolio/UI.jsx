import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import DropDown from './components/DropDown'
import { FaTelegramPlane, FaFacebookF, FaFigma, FaLaptop, FaTabletAlt, FaMobileAlt, FaLinkedin } from 'react-icons/fa'
import { BsArrowUpShort } from 'react-icons/bs'
import { SiFigma, SiGreensock, SiReact, SiReactrouter, SiTailwindcss } from 'react-icons/si'
import { IoLogoWhatsapp } from 'react-icons/io'
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function UI() {

    useEffect(() => {
        gsap.fromTo('.up', { y: 200 }, {
            y: 0, duration: 0.1,
            scrollTrigger: {
                trigger: '.proj',
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
            <div className='min-h-screen flex flex-col' id='hero'>
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
                        <Link to='/UI' className="text-lg md:text-xl text-[#00D48D] font-merienda">
                            <div className="px-2 py-1">UI</div>
                            <div className="w-full h-[1px] bg-[#00D48D]"></div>
                        </Link>
                    </div>
                </header>
                <div className="px-4 lg:px-8 xl:px-36 pb-12 flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 items-center my-auto">
                    <div className="lg:w-1/2 mt-12 lg:mt-32 xl:mt-0">
                        <div className="text-3xl lg:text-6xl text-[#ffba46] font-merienda mb-2">UI Design Works</div>
                        <div className="text-xl text-[#ffba46] font-play mb-2">Simple UI and Web Design Projects</div>
                        <div className="text-gray-800 font-play mb-2 lg:mb-12">I have a passion for creating intuitive and visually striking interfaces that enhance the user experience. In my portfolio, you will see a variety of projects that demonstrate my skills in UI UX design, from websites to mobile apps. But these next projects were done while learning, others while freelancing for teams or just out of personal curiosity. Although they may not all be entirely UX and UI Designs, they showcase my versatility as a designer and my willingness to explore new design challenges.</div>
                    </div>
                    <div className="flex -space-x-8 items-center w-full lg:w-11/12">
                        <div className="w-10/12 hover:scale-110 duration-500">
                            <a href='#Travel' className="">
                                <img src="../images/UI/Web/4TL.png" alt="" className="" />
                            </a>
                        </div>
                        <div className="flex flex-col items-center w-4/12 gap-y-2">
                            <a href='#Loop' className="hover:scale-110 duration-500">
                                <img src="../images/UI/Web/2LT.png" alt="" className="" />
                            </a>
                            <a href='#Dlux' className="w-2/3 hover:scale-110 duration-500 z-10">
                                <img src="../images/UI/Web/5B.png" alt="" className="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-2xl md:text-4xl mt-20 text-gray-800 mx-auto w-fit select-none font-play">Projects</div>
            <div className="proj px-4 lg:px-8 xl:px-36 pt-36 pb-12 flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 items-center my-auto" id='Food'>
                <div className="flex flex-col space-y-3 items-center w-full lg:w-1/2 group">
                    <div className="mx-4 lg:mx-0 flex items-center -space-x-8 group w-fit mt-6 z-10 select-none duration-500">
                        <div className="flex w-36 2xl:w-64 mx-0 group-hover:mx-1.5 duration-500 group-hover:scale-105">
                            <img src="../images/UI/UI/F1.png" alt="" className="" />
                        </div>
                        <div className="flex w-48 2xl:w-80 z-10 mx-0 group-hover:mx-1.5 duration-500 group-hover:scale-105">
                            <img src="../images/UI/UI/F2.png" alt="" className="" />
                        </div>
                        <div className="flex w-36 2xl:w-64 mx-0 group-hover:mx-1.5 duration-500 group-hover:scale-105">
                            <img src="../images/UI/UI/F3.png" alt="" className="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 items-center lg:w-1/2">
                    <div className="text-3xl lg:text-4xl text-[#ffba46] font-merienda">Food Delivery</div>
                    <div className="text-xl lg:text-2xl text-[#ffba46] font-play mb-2">Mobile Design</div>
                    <div className="text-xl text-black text-center font-play">This project represents one of my early forays into UI UX Designing. The goal of the project was to create a simple, user-friendly application that would enable customers to order food and have it delivered directly to their homes. As a passion project, my primary focus was on the app's UI design, with the aim of creating an interactive and intuitive experience for users.</div>
                    <div className="flex items-center gap-x-8 p-4">
                        <SiFigma className='text-3xl' />
                    </div>
                    <div className="flex space-x-4 mx-auto w-fit">
                        <a href='https://www.figma.com/proto/CJJlOWiWvVyphVgWi4bU7p/Food-Deliver-App?node-id=207%3A736&scaling=scale-down&page-id=207%3A2&starting-point-node-id=207%3A378&show-proto-sidebar=1' target='_blank' rel='noreferrer' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                            <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative">
                                <FaFigma className='text-2xl' />
                            </div>
                            <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                            <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="px-4 lg:px-8 xl:px-36 pt-36 pb-12 flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 items-center my-auto" id='Dlux'>
                <div className="flex flex-col gap-y-4 items-center lg:w-1/2">
                    <div className="text-3xl lg:text-4xl text-[#ffba46] font-merienda">Dlux Business</div>
                    <div className="text-xl lg:text-2xl text-[#ffba46] font-play mb-2">Web Design</div>
                    <div className="text-xl text-black text-center font-play">I designed this web UI and coded it into a live website, prioritizing a clean and modern design, usability, and accessibility. I used React, Tailwind CSS and GSAP to ensure responsiveness and optimized web performance. The final product represents a successful collaboration between design and development.</div>
                    <div className="flex items-center gap-x-8 p-4">
                        <SiFigma className='text-3xl' />
                        <SiReact className='text-3xl' />
                        <SiTailwindcss className='text-3xl' />
                        <SiGreensock className='text-3xl' />
                    </div>
                    <div className="flex space-x-4 mx-auto w-fit">
                        <a href='https://www.figma.com/proto/rIYzZkYhoRfEb6ZgQpBZI8/Business?node-id=1%3A1140&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=1%3A1140' target='_blank' rel='noreferrer' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                            <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative">
                                <FaFigma className='text-2xl' />
                            </div>
                            <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                            <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                        </a>
                        <a href='https://dluxbusinessv2.netlify.app/' target='_blank' rel='noreferrer' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                            <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative">
                                <FaLaptop className='hidden lg:block text-2xl' />
                                <FaTabletAlt className='hidden md:block lg:hidden text-2xl' />
                                <FaMobileAlt className='block md:hidden text-2xl' />
                            </div>
                            <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                            <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                        </a>
                    </div>
                </div>
                <div className="flex -space-x-8 items-center w-full lg:w-1/2 group">
                    <div className="w-10/12">
                        <div className="hover:scale-110 duration-500">
                            <img src="../images/UI/Web/5BL.png" alt="" className="" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-4/12 gap-y-2">
                        <div className="hover:scale-110 duration-500">
                            <img src="../images/UI/Web/5BT.png" alt="" className="" />
                        </div>
                        <div className="w-2/3 hover:scale-110 duration-500 z-10">
                            <img src="../images/UI/Web/5B.png" alt="" className="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 lg:px-8 xl:px-36 pt-36 pb-12 flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 items-center my-auto" id='Travel'>
                <div className="flex -space-x-8 items-center w-full lg:w-1/2 group">
                    <div className="flex flex-col items-center w-4/12 gap-y-2">
                        <div className="hover:scale-110 duration-500">
                            <img src="../images/UI/Web/4TT.png" alt="" className="" />
                        </div>
                        <div className="w-2/3 hover:scale-110 duration-500 z-10">
                            <img src="../images/UI/Web/4T.png" alt="" className="" />
                        </div>
                    </div>
                    <div className="w-10/12">
                        <div className="hover:scale-110 duration-500">
                            <img src="../images/UI/Web/4TL.png" alt="" className="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 items-center lg:w-1/2">
                    <div className="text-3xl lg:text-4xl text-[#ffba46] font-merienda">Travel Agency</div>
                    <div className="text-xl lg:text-2xl text-[#ffba46] font-play mb-2">Web Design</div>
                    <div className="text-xl text-black text-center font-play">In this project, I challenged myself to code a visually compelling and user-friendly web UI with engaging animations. I used React, Tailwind CSS, and GSAP to ensure responsiveness and enhance the user experience. The project pushed my design and coding skills to the next level.</div>
                    <div className="flex items-center gap-x-8 p-4">
                        <SiReact className='text-3xl' />
                        <SiTailwindcss className='text-3xl' />
                        <SiGreensock className='text-3xl' />
                    </div>
                    <div className="flex space-x-4 mx-auto w-fit">
                        <a href='https://travlerv4.netlify.app/' target='_blank' rel='noreferrer' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                            <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative">
                                <FaLaptop className='hidden lg:block text-2xl' />
                                <FaTabletAlt className='hidden md:block lg:hidden text-2xl' />
                                <FaMobileAlt className='block md:hidden text-2xl' />
                            </div>
                            <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                            <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="px-4 lg:px-8 xl:px-36 pt-36 pb-12 flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 items-center my-auto">
                <div className="flex flex-col gap-y-4 items-center lg:w-1/2">
                    <div className="text-3xl lg:text-4xl text-[#ffba46] font-merienda">Le Portfolio</div>
                    <div className="text-xl lg:text-2xl text-[#ffba46] font-play mb-2">Web Design</div>
                    <div className="text-xl text-black text-center font-play">As a UI/UX designer, I coded my own portfolio website, showcasing a modern and user-friendly interface with engaging animations. Despite my primary focus being on design, I learned and implemented coding techniques using HTML, CSS,  JavaScript, React, Tailwind and GSAP. This project demonstrates my ability to create engaging UI/UX designs and bring them to life through coding.</div>
                    <div className="flex items-center gap-x-8 p-4">
                        <SiFigma className='text-3xl' />
                        <SiReact className='text-3xl' />
                        <SiReactrouter className='text-3xl' />
                        <SiTailwindcss className='text-3xl' />
                        <SiGreensock className='text-3xl' />
                    </div>
                    <div className="flex space-x-4 mx-auto w-fit">
                        <a href='/' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                            <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative">
                                <FaLaptop className='hidden lg:block text-2xl' />
                                <FaTabletAlt className='hidden md:block lg:hidden text-2xl' />
                                <FaMobileAlt className='block md:hidden text-2xl' />
                            </div>
                            <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                            <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                        </a>
                    </div>
                </div>
                <div className="flex -space-x-8 items-center w-full lg:w-1/2 group">
                    <div className="w-10/12">
                        <div className="hover:scale-110 duration-500">
                            <img src="../images/UI/Web/3PL.png" alt="" className="" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-4/12 gap-y-2">
                        <div className="hover:scale-110 duration-500">
                            <img src="../images/UI/Web/3PT.png" alt="" className="" />
                        </div>
                        <div className="w-2/3 hover:scale-110 duration-500 z-10">
                            <img src="../images/UI/Web/3P.png" alt="" className="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 lg:px-8 xl:px-36 pt-36 pb-12 flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 items-center my-auto">
                <div className="flex -space-x-8 items-center w-full lg:w-1/2 group">
                    <div className="">
                        <div className="hover:scale-110 duration-500">
                            <img src="../images/UI/UI/1BL.png" alt="" className="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 items-center lg:w-1/2">
                    <div className="text-3xl lg:text-4xl text-[#ffba46] font-merienda">BMB Finance</div>
                    <div className="text-xl lg:text-2xl text-[#ffba46] font-play mb-2">Web Design</div>
                    <div className="text-xl text-black text-center font-play">To showcase my skills for a crypto currency website freelance job, I designed this visually appealing and informative website. The project featured a clean and engaging interface with intuitive navigation and animations. It highlights my ability to create effective interfaces for niche audiences.</div>
                    <div className="flex items-center gap-x-8 p-4">
                        <SiFigma className='text-3xl' />
                    </div>
                    <div className="flex space-x-4 mx-auto w-fit">
                        <a href='https://www.figma.com/proto/cNteCH0o34PdP1XEe3TXnR/BMB?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2' target='_blank' rel='noreferrer' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                            <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative">
                                <FaFigma className='text-2xl' />
                            </div>
                            <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                            <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="px-4 lg:px-8 xl:px-36 pt-36 pb-12 flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 items-center my-auto">
                <div className="flex flex-col gap-y-4 items-center lg:w-1/2">
                    <div className="text-3xl lg:text-4xl text-[#ffba46] font-merienda">Habitual Shopping</div>
                    <div className="text-xl lg:text-2xl text-[#ffba46] font-play mb-2">Mobile Design</div>
                    <div className="text-xl text-black text-center font-play">I created this shopping app as a passion project to focus on UI design. The goal was to create an engaging and intuitive interface for users to browse and purchase products. I concentrated on creating a modern and visually appealing design that would be user-friendly and easy to navigate. The project allowed me to develop my design skills and gain experience in creating engaging interfaces for mobile apps.</div>
                    <div className="flex items-center gap-x-8 p-4">
                        <SiFigma className='text-3xl' />
                    </div>
                    <div className="flex space-x-4 mx-auto w-fit">
                        <a href='https://www.figma.com/proto/a7A2yblcELQCNK772H2MpG/Habitual-Final-Compositions?node-id=585%3A11793&scaling=scale-down&page-id=579%3A7980&starting-point-node-id=585%3A10987&show-proto-sidebar=1' target='_blank' rel='noreferrer' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                            <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative">
                                <FaFigma className='text-2xl' />
                            </div>
                            <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                            <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col space-y-3 items-center w-full lg:w-1/2 group">
                    <div className="mx-4 lg:mx-0 flex items-center -space-x-8 group w-fit mt-6 z-10 select-none duration-500">
                        <div className="flex w-36 2xl:w-64 mx-0 group-hover:mx-1.5 duration-500 group-hover:scale-105">
                            <img src="../images/UI/UI/H2.png" alt="" className="" />
                        </div>
                        <div className="flex w-48 2xl:w-80 z-10 mx-0 group-hover:mx-1.5 duration-500 group-hover:scale-105">
                            <img src="../images/UI/UI/H1.png" alt="" className="" />
                        </div>
                        <div className="flex w-36 2xl:w-64 mx-0 group-hover:mx-1.5 duration-500 group-hover:scale-105">
                            <img src="../images/UI/UI/H4.png" alt="" className="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 lg:px-8 xl:px-36 pt-36 pb-12 flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 items-center my-auto">
                <div className="flex -space-x-8 items-center w-full lg:w-1/2 group">
                    <div className="flex flex-col items-center w-4/12 gap-y-2">
                        <div className="hover:scale-110 duration-500">
                            <img src="../images/UI/Web/1AT.png" alt="" className="" />
                        </div>
                        <div className="w-2/3 hover:scale-110 duration-500 z-10">
                            <img src="../images/UI/Web/1A.png" alt="" className="" />
                        </div>
                    </div>
                    <div className="w-10/12">
                        <div className="hover:scale-110 duration-500">
                            <img src="../images/UI/Web/1AL.png" alt="" className="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 items-center lg:w-1/2">
                    <div className="text-3xl lg:text-4xl text-[#ffba46] font-merienda">| Agency</div>
                    <div className="text-xl lg:text-2xl text-[#ffba46] font-play mb-2">Web Design</div>
                    <div className="text-xl text-black text-center font-play">I designed and coded this website from scratch as a passion project. The project featured a visually appealing and user-friendly interface with intuitive navigation and clear calls to action. I used React, Tailwind CSS, and GSAP to ensure responsiveness and optimized web performance. The project highlights my ability to create engaging websites from start to finish.</div>
                    <div className="flex items-center gap-x-8 p-4">
                        <SiFigma className='text-3xl' />
                        <SiReact className='text-3xl' />
                        <SiTailwindcss className='text-3xl' />
                        <SiGreensock className='text-3xl' />
                    </div>
                    <div className="flex space-x-4 mx-auto w-fit">
                        <a href='https://www.figma.com/proto/AhLI0BWCum9849CKckPtf6/Dark?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2' target='_blank' rel='noreferrer' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                            <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative">
                                <FaFigma className='text-2xl' />
                            </div>
                            <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                            <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                        </a>
                        <a href='https://designagency2001.netlify.app/' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                            <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative">
                                <FaLaptop className='hidden lg:block text-2xl' />
                                <FaTabletAlt className='hidden md:block lg:hidden text-2xl' />
                                <FaMobileAlt className='block md:hidden text-2xl' />
                            </div>
                            <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                            <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="px-4 lg:px-8 xl:px-36 pt-36 pb-12 flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 items-center my-auto" id='Loop'>
                <div className="flex flex-col gap-y-4 items-center lg:w-1/2">
                    <div className="text-3xl lg:text-4xl text-[#ffba46] font-merienda">Loop Studios</div>
                    <div className="text-xl lg:text-2xl text-[#ffba46] font-play mb-2">Web Design</div>
                    <div className="text-xl text-black text-center font-play">I did this project as my first website to enhance my skills on the core Framework of designing a website, Tailwind CSS. I learned the most important concepts of Tailwind. Although at that time it was new to me and I struggled, I believe it is this one that got my skills to the level they are now today.</div>
                    <div className="flex items-center gap-x-8 p-4">
                        <SiFigma className='text-3xl' />
                        <SiReact className='text-3xl' />
                        <SiTailwindcss className='text-3xl' />
                        <SiGreensock className='text-3xl' />
                    </div>
                    <div className="flex space-x-4 mx-auto w-fit">
                        <a href='https://loopstudios2001.netlify.app/' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                            <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative">
                                <FaLaptop className='hidden lg:block text-2xl' />
                                <FaTabletAlt className='hidden md:block lg:hidden text-2xl' />
                                <FaMobileAlt className='block md:hidden text-2xl' />
                            </div>
                            <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                            <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                        </a>
                    </div>
                </div>
                <div className="flex -space-x-8 items-center w-full lg:w-1/2 group">
                    <div className="w-10/12">
                        <div className="hover:scale-110 duration-500">
                            <img src="../images/UI/Web/2LL.png" alt="" className="" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-4/12 gap-y-2">
                        <div className="hover:scale-110 duration-500">
                            <img src="../images/UI/Web/2LT.png" alt="" className="" />
                        </div>
                        <div className="w-2/3 hover:scale-110 duration-500 z-10">
                            <img src="../images/UI/Web/2L.png" alt="" className="" />
                        </div>
                    </div>
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

export default UI