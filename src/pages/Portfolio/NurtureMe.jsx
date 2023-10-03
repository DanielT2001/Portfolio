import React, { useEffect } from 'react'
import { FaTelegramPlane, FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { BsArrowUpShort } from 'react-icons/bs'
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function NurtureMe() {

    useEffect(() => {
        gsap.fromTo('.up', { y: 200 }, {
            y: 0, duration: 0.1,
            scrollTrigger: {
                trigger: '.prod',
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
                        <div className="text-3xl lg:text-6xl text-[#ffba46] font-merienda mb-2">NurtureMe.</div>
                        <div className="text-xl text-[#ffba46] font-play mb-2">Mobile App and Web Design</div>
                        <div className="text-gray-800 font-play mb-12">NurtureMe. is a new home automation tool that can be used to monitor, control and take care of plants by measuring and adjusting their moisture levels.</div>
                        <div className="flex justify-center space-x-6 mx-auto">
                            <a href='nurtureme/page' target='_blank' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                                <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative text-center">
                                    Landing Page
                                </div>
                                <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                                <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                            </a>
                            <a href='https://www.figma.com/proto/vmPBTsMxTDXrnOFpkoaIt2/NurtureMe.?type=design&node-id=78-1228&scaling=scale-down&page-id=78%3A1219&starting-point-node-id=78%3A1220' target='_blank' rel='noreferrer' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                                <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative text-center">
                                    View Figma Prototype
                                </div>
                                <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                                <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                            </a>
                        </div>
                    </div>

                    <div className="flex -space-x-8 items-center w-11/12">
                        <div className="lg:hover:scale-105 duration-500 z-0">
                            <img src="../images/ProjectNurtureMe/4.png" alt="" className="" />
                        </div>
                        <div className="flex flex-col space-y-2 z-10">
                            <div className="lg:hover:scale-105 duration-500">
                                <img src="../images/ProjectNurtureMe/5.png" alt="" className="" />
                            </div>
                            <div className="lg:hover:scale-105 duration-500">
                                <img src="../images/ProjectNurtureMe/6.png" alt="" className="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pt-32'>
                <div className="min-h-screen px-4 lg:px-8 xl:px-36 pb-6 lg:pb-24 flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:space-x-8 items-center">
                    <div className="flex flex-col lg:w-1/2 space-y-4">
                        <div className="prod text-4xl text-gray-800 font-merienda">Overview</div>
                        <div className="font-play font-medium text-gray-950"><span className='font-bold'>The Product:</span> NurtureMe. is a user-friendly platform that makes things easier for users by automating the care they give to their plants and minimizing the chances of the plants being forgotten.</div>
                        <div className="font-play font-medium text-gray-950 flex flex-col space-y-2">
                            The Product is composed of three tools that work together:
                            <div className="px-4 font-semibold text-gray-800">NurtureMe. Device</div>
                            <div className="px-4 font-semibold text-gray-800">NurtureMe. Landing Page</div>
                            <div className="px-4 font-semibold text-gray-800">NurtureMe. Mobile App</div>
                        </div>
                        <div className="font-play font-medium text-gray-950"><span className='font-bold'>Client:</span> NurtureMe. Home Automation Inc.</div>
                        <div className="font-play font-medium text-gray-950"><span className='font-bold'>Project Length:</span> 45 Day Sprint</div>
                        <div className="font-play font-medium text-gray-950"><span className='font-bold'>Team:</span> Daniel Teshome 😉</div>
                        <div className="font-play font-medium text-gray-950"><span className='font-bold'>Tools:</span> Figma, Maze, Adobe Photoshop, Adobe Lightroom, Visual Studio Code, General Social Media Platforms</div>
                        <div className="font-play font-medium text-gray-950"><span className='font-bold'>Responsibilities:</span> User Researches, Business Goals and Value Proposals, Branding & Identity, User Personas, Sitemaps, User Journeys, High Fidelity Wireframes and Prototypes, Style guides, Web Development, Marketing Funnels.</div>
                        <div className="font-play font-medium text-gray-950"><span className='font-bold'>Roles:</span> Product Designer, UX Researcher, Graphic Designer, Web Developer, Digital Marketer</div>
                    </div>
                    <div className="flex space-x-4 lg:w-1/2 mt-12 lg:mt-0">
                        <div className="z-10">
                            <img src="../images/ProjectNurtureMe/features/list.png" alt="" className="hover:scale-105 hover:-translate-y-4 duration-500" />
                        </div>
                        <div className="">
                            <img src="../images/ProjectNurtureMe/devFeatures/3.png" alt="" className="hover:scale-105 hover:-translate-y-4 duration-500" />
                        </div>
                    </div>
                </div>
                <div className="px-4 lg:px-8 xl:px-36 pb-6 lg:py-24 flex flex-col space-y-16 items-center">
                    <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:space-x-8 items-center">
                        <div className="flex space-x-4 lg:w-1/2 mb-24 lg:mb-0">
                            <div className="z-10">
                                <img src="../images/ProjectNurtureMe/4.png" alt="" className="rounded hover:scale-105 hover:-translate-y-4 duration-500" />
                            </div>
                        </div>
                        <div className="flex flex-col lg:w-1/2 space-y-3">
                            <div className="text-4xl text-gray-800 font-merienda">Problem Statement</div>
                            <div className="font-play font-medium text-gray-950">In today's busy world, people often forget to water their plants, resulting in plant damage or loss. Additionally, users may want to conserve water while still maintaining healthy plants. Therefore, there is a need for an app interface that can not only control the electronic watering device but also serve as a watering reminder, even when the device is not connected. The app must be user-friendly and intuitive for users who may not be tech-savvy.</div>
                        </div>
                    </div>
                    <a href='https://www.figma.com/proto/vmPBTsMxTDXrnOFpkoaIt2/NurtureMe.?type=design&node-id=78-1228&scaling=scale-down&page-id=78%3A1219&starting-point-node-id=78%3A1220' target='_blank' rel='noreferrer' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                        <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative">
                            View Figma Prototype
                        </div>
                        <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                        <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                    </a>
                </div>
                <div className="px-4 lg:px-8 xl:px-36 pt-12 lg:pt-24 pb-16 lg:pb-24 flex flex-col space-y-16 items-center">
                    <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:space-x-8 items-center">
                        <div className="flex flex-col lg:w-1/2 space-y-3 mb-24">
                            <div className="text-4xl text-gray-800 font-merienda">Solution</div>
                            <div className="font-play font-medium text-gray-950">I developed a user-friendly mobile app that allows for <span className='font-bold'>easy creation and management </span>of plant profiles. The app <span className='font-bold'>connects</span> to the NurtureMe watering tool and includes a <span className='font-bold'>scheduling feature</span> for plant care reminders. The app delivers an intuitive user experience, empowering users to maintain healthy and beautiful plants effortlessly.</div>
                        </div>
                        <div className="flex space-x-4 lg:w-1/2">
                            <div className="z-10">
                                <img src="../images/ProjectNurtureMe/screens/F2.png" alt="" className="rounded hover:scale-105 hover:-translate-y-4 duration-500" />
                            </div>
                            <div className="z-10">
                                <img src="../images/ProjectNurtureMe/2.png" alt="" className="rounded hover:scale-105 hover:-translate-y-4 duration-500" />
                            </div>
                        </div>
                    </div>
                    <a href='https://www.figma.com/proto/vmPBTsMxTDXrnOFpkoaIt2/NurtureMe.?type=design&node-id=78-1228&scaling=scale-down&page-id=78%3A1219&starting-point-node-id=78%3A1220' target='_blank' rel='noreferrer' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                        <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative">
                            View Figma Prototype
                        </div>
                        <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                        <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                    </a>
                </div>
                <div className="flex flex-col items-center">
                    <div className="px-4 lg:px-8 xl:px-36 py-0 lg:py-24 flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:space-x-8 items-center">
                        <div className="flex space-x-4 lg:w-1/2 mb-24 lg:mb-0">
                            <div className="">
                                <img src="../images/ProjectNurtureMe/devFeatures/3.png" alt="" className="rounded hover:scale-105 hover:-translate-y-4 duration-500" />
                            </div>
                            <div className="">
                                <img src="../images/ProjectNurtureMe/screens/F6.png" alt="" className="rounded hover:scale-105 hover:-translate-y-4 duration-500" />
                            </div>
                        </div>
                        <div className="flex flex-col lg:w-1/2 space-y-3">
                            <div className="text-4xl text-gray-800 font-merienda">Process</div>
                            <div className="font-play font-medium text-gray-950">My method was centered around creating <span className='font-bold'>a comfortable flow and easy interaction </span>with the device for users. I conducted research and interviews to understand users' pain points and needs. Prioritizing the user experience allowed me to create a design that meets functional requirements and delivers a satisfying experience.</div>
                        </div>
                    </div>
                    <a href='https://www.figma.com/proto/vmPBTsMxTDXrnOFpkoaIt2/NurtureMe.?type=design&node-id=78-1228&scaling=scale-down&page-id=78%3A1219&starting-point-node-id=78%3A1220' target='_blank' rel='noreferrer' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden mt-6 lg:mt-0">
                        <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative">
                            View Figma Prototype
                        </div>
                        <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                        <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                    </a>
                </div>
                <div className="px-4 lg:px-8 xl:px-36 py-24 flex flex-col items-center">
                    <div className="w-fit text-5xl text-gray-800 font-merienda mb-16">Project Scope</div>
                    <div className="md:px-4 lg:px-16 font-play font-medium text-gray-950 mb-6"><span className='font-bold'>NurtureMe. Home Automation Inc.</span> company, charged me with the responsibility of developing a mobile-based platform that provides a seamless and effortless experience for users to communicate, use, and interact with their plant watering device. As a first step, I conducted a thorough study of the device, its features, goals, and limitations. Additionally, I conducted stakeholder interviews to gain an in-depth understanding of their expectations, needs, and goals.</div>
                    <div className="px-4 lg:px-36 font-play text-gray-900 self-start mb-6">
                        Business Goals
                        <ul className="ml-4">
                            <li className="list-disc">Increase user engagement</li>
                            <li className="list-disc">Improve retention rates</li>
                            <li className="list-disc">Achieve high user satisfaction</li>
                            <li className="list-disc">Build brand awareness</li>
                            <li className="list-disc">Generate revenue</li>
                        </ul>
                    </div>
                    <div className="text-lg font-play font-medium text-gray-950 mb-6">I also proposed a Landing page & Social Media Marketing as side projects to the mobile UI/UX Design Project, which were approved for their potential to capture new customers, increase revenue, user engagement and future expansions. The landing page offers benefits such as improved search engine visibility, social media sharing, and a comprehensive overview of the app's features. This project was approved after presenting a comprehensive plan, including design mockups and a timeline for completion. It's an exciting opportunity to elevate the app's success and provide users with a more immersive experience.</div>
                </div>
                <div className="px-4 lg:px-8 xl:px-36 py-24 flex flex-col space-y-16 items-center ">
                    <div className="w-fit text-5xl text-gray-800 font-merienda">Research & Insights</div>
                    <div className="flex w-full justify-around lg:items-center">
                        <div className="flex flex-col space-y-4 items-center w-1/3">
                            <div className="font-merienda text-6xl text-[#ffba46]">15</div>
                            <div className="font-play text-xl font-semibold text-gray-800 text-center">Survey Questions</div>
                        </div>
                        <div className="flex flex-col space-y-4 items-center w-1/3">
                            <div className="font-merienda text-6xl text-[#ffba46]">16</div>
                            <div className="font-play text-xl font-semibold text-gray-800 text-center">User Surveys</div>
                        </div>
                        <div className="flex flex-col space-y-4 items-center w-1/3">
                            <div className="font-merienda text-6xl text-[#ffba46]">3</div>
                            <div className="font-play text-xl font-semibold text-gray-800">Interviews</div>
                        </div>
                    </div>
                    <div className="lg:w-5/6 rounded-xl shadow-2xl p4 lg:p-12" id='NurtHero'>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-4">
                            <div className="flex flex-col space-y-4">
                                <div className="text-4xl font-merienda text-[#ffba46]">100%</div>
                                <div className="font-play text-gray-50">of users have a variety of plants with different watering needs</div>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div className="text-4xl font-merienda text-[#ffba46]">94%</div>
                                <div className="font-play text-gray-50">of users have different priorities when it comes to plant care</div>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div className="text-4xl font-merienda text-[#ffba46]">88%</div>
                                <div className="font-play text-gray-50">of users are motivated to improve their watering experiences</div>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div className="text-4xl font-merienda text-[#ffba46]">75%</div>
                                <div className="font-play text-gray-50">of users have experienced plant damage due to over-watering and/or under-watering</div>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div className="text-4xl font-merienda text-[#ffba46]">69%</div>
                                <div className="font-play text-gray-50">of users have different environments that can impact their plant care</div>
                            </div>
                            <div className="flex flex-col space-y-4">
                                <div className="text-4xl font-merienda text-[#ffba46]">60%</div>
                                <div className="font-play text-gray-50">of users rely on variety of sources of information</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-5/6 flex flex-col">
                        <div className="font-play text-xl text-gray-800 mb-4">Key takeaways from the surveys:</div>
                        <ul className="ml-4 flex flex-col space-y-2">
                            <li className="list-disc ml-4">Plant watering reminder apps should be customizable and personalized to meet users' diverse needs and preferences.</li>
                            <li className="list-disc ml-4">Water conservation is crucial for plant owners, and an app with water-saving features can be helpful.</li>
                            <li className="list-disc ml-4">A plant watering reminder app can address common pain points like forgetting to water or over/under-watering plants.</li>
                            <li className="list-disc ml-4">An app with reliable plant care information can benefit both novice and experienced plant owners.</li>
                            <li className="list-disc ml-4">Apps should adapt to different environments to meet diverse plant owner needs.</li>
                        </ul>
                    </div>
                </div>
                <div className="px-4 lg:px-8 xl:px-36 py-24 flex flex-col items-center">
                    <div className="text-5xl text-center text-gray-800 font-merienda mt-6 mb-16">Personas</div>
                    <div className="text-xl font-play text-gray-900 pb-4">Based on the findings from surveys and interviews, I have developed these Personas with the intention of highlighting common patterns and pain points among users. By doing so, I have been able to deepen my empathy towards users and their needs.</div>
                    <div className="text-xl font-play text-gray-900 pb-24">After careful consideration, I selected Maria and David as the most suitable personas for the project. Through thorough research, I identified that these personas share the most significant pain points of our target users, which makes them ideal representatives of our user base. In addition, their characteristics and behaviors align with our product's goals and objectives, allowing us to better tailor the design and marketing strategies to meet the needs of our intended audience.</div>
                    <div className="font-play text-3xl text-gray-800 mb-8 self-start">Maria Levine</div>
                    <div className="rounded-xl shadow bg-lime-200 p-2 lg:p-8 w-full mb-16">
                        <div className="flex flex-col space-y-12 rounded-lg bg-zinc-50 px-2 py-8">
                            <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:space-x-8 w-full">
                                <div className="flex lg:w-1/3">
                                    <div className="">
                                        <img src="../images/ProjectNurtureMe/Maria.jpg" alt="" className="shadow-xl rounded-full" />
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-4 lg:w-2/3">
                                    <div className="font-play text-xl text-[#ffba46] text-center">"Plant care is a form of self-care. It reminds me to slow down and appreciate the beauty around me."</div>
                                    <div className="font-play text-2xl text-gray-800 font-semibold text-center">Maria Levine | 30 | Working Mom | Amsterdam</div>
                                    <div className="font-play text-gray-900 lg:text-right">Maria is a busy working mom with two young children. She enjoys gardening as a way to relax and spend time outdoors. In addition to being a busy working mom with two young children, Maria is an avid gardener who spends much of her free time tending to her plants. She grew up in a rural area and has always had a deep appreciation for nature and the environment. Her love of gardening began as a child when she would help her grandmother tend to her vegetable garden. Now, she has a large garden with a variety of plants, including flowers, herbs, and vegetables. Although her busy schedule can make it difficult to keep up with her plants, she finds that gardening is a relaxing and rewarding way to unwind after a long day.</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-y-4">
                                <div className="flex flex-col md:flex-row gap-y-4 md:justify-around items-center w-full">
                                    <div className="rounded-b-xl overflow-hidden">
                                        <div className="flex-col flex items-center space-y-4 px-4 lg:px-8 pt-12 pb-4 rounded-t-xl lg:rounded-t-full bg-[#ffba46]">
                                            <div className="text-xl font-play text-white">Pain Points</div>
                                            <ul className="font-play text-white">
                                                <li className="list-disc ml-4">Forgetting Plants</li>
                                                <li className="list-disc ml-4">Lacking time; Busy</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="rounded-b-xl overflow-hidden">
                                        <div className="flex-col flex items-center space-y-4 px-4 lg:px-8 pt-12 pb-4 rounded-t-xl lg:rounded-t-full bg-[#ffba46]">
                                            <div className="text-xl font-play text-white">Goals</div>
                                            <ul className="font-play text-white">
                                                <li className="list-disc ml-4">Water Plants Regularly</li>
                                                <li className="list-disc ml-4">Keep Plants Alive</li>
                                                <li className="list-disc ml-4">Efficient Schedules</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="rounded-b-xl overflow-hidden">
                                        <div className="flex-col flex items-center space-y-4 px-4 lg:px-8 pt-12 pb-4 rounded-t-xl lg:rounded-t-full bg-[#ffba46]">
                                            <div className="text-xl font-play text-white">Our Role</div>
                                            <ul className="font-play text-white">
                                                <li className="list-disc ml-4">Scheduling Reminders</li>
                                                <li className="list-disc ml-4">Automatic Watering</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-col flex items-center space-y-2">
                                    <div className="text-xl font-play text-[#ffba46]">Interested In</div>
                                    <div className="font-play text-gray-900">Family Well-being / Quality Times</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="font-play text-3xl text-gray-800 mb-8 self-start">David Thatcher</div>
                    <div className="rounded-xl shadow bg-lime-200 p-2 lg:p-8 w-full">
                        <div className="flex flex-col space-y-12 rounded-lg bg-zinc-50 px-2 py-8">
                            <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:space-x-8 w-full">
                                <div className="flex lg:w-1/3">
                                    <div className="">
                                        <img src="../images/ProjectNurtureMe/david.jpg" alt="" className="shadow-xl rounded-full" />
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-4 lg:w-2/3">
                                    <div className="font-play text-xl text-[#ffba46] text-center">"Plant care and environmental sustainability go hand in hand. We can make a difference by being mindful of our water use."</div>
                                    <div className="font-play text-2xl text-gray-800 font-semibold text-center">David Thatcher | 47 | Homeowner | CA</div>
                                    <div className="font-play text-gray-900 lg:text-right">David is a homeowner who is passionate about environmental sustainability. He has always been interested in finding ways to reduce his carbon footprint and live a more eco-friendly lifestyle. He has solar panels on his roof, composts his food waste, and has installed energy-efficient appliances throughout his home. David is also an avid gardener and takes great pride in his lush, green yard. He has a variety of plants, including fruits and vegetables that he grows for his family to eat. David is always looking for ways to conserve water and reduce waste, and he believes that plant care is an important part of environmental stewardship.</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-y-4">
                                <div className="flex flex-col md:flex-row gap-y-4 md:justify-around items-center w-full">
                                    <div className="rounded-b-xl overflow-hidden">
                                        <div className="flex-col flex items-center space-y-4 px-4 lg:px-8 pt-12 pb-4 rounded-t-xl lg:rounded-t-full bg-[#ffba46]">
                                            <div className="text-xl font-play text-white">Pain Points</div>
                                            <ul className="font-play text-white">
                                                <li className="list-disc ml-4">Water Wastage</li>
                                                <li className="list-disc ml-4">Forgetting Plants</li>
                                                <li className="list-disc ml-4">Environmental Damage</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="rounded-b-xl overflow-hidden">
                                        <div className="flex-col flex items-center space-y-4 px-4 lg:px-8 pt-12 pb-4 rounded-t-xl lg:rounded-t-full bg-[#ffba46]">
                                            <div className="text-xl font-play text-white">Goals</div>
                                            <ul className="font-play text-white">
                                                <li className="list-disc ml-4">Conserving Water</li>
                                                <li className="list-disc ml-4">Water Plants Regularly</li>
                                                <li className="list-disc ml-4">Efficient Schedules</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="rounded-b-xl overflow-hidden">
                                        <div className="flex-col flex items-center space-y-4 px-4 lg:px-8 pt-12 pb-4 rounded-t-xl lg:rounded-t-full bg-[#ffba46]">
                                            <div className="text-xl font-play text-white">Our Role</div>
                                            <ul className="font-play text-white">
                                                <li className="list-disc ml-4">Gauge Water Amounts</li>
                                                <li className="list-disc ml-4">Scheduling Reminders</li>
                                                <li className="list-disc ml-4">Automatic Watering</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-col flex items-center space-y-2">
                                    <div className="text-xl font-play text-[#ffba46]">Interested In</div>
                                    <div className="font-play text-gray-900">Environmental Sustainability / Family Well-being</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-24">
                    <div className="px-4 lg:px-8 xl:px-36 mb-12 flex flex-col items-center ">
                        <div className="w-fit text-5xl text-gray-800 font-merienda mt-6 mb-16">User Flows</div>
                        <div className="text-xl font-play text-gray-900 pb-16">To better understand the needs of users, I conducted comprehensive research and interviews to gain insights into their plant care process, lifestyle, and pain points. Specifically, I sought to understand how users research and care for their plants, as well as how they try to avoid forgetting to water them. This information allowed me to develop a clear picture of users' lives and needs, and to conceptualize how <span className='font-bold'>NurtureMe Home Automation Inc.</span> can best serve them by addressing their pain points and enhancing their plant care experience.</div>
                        <div className="font-play text-xl text-gray-900 flex w-full justify-between">
                            I created three user flows based on common tasks that the target user would do on the app.
                        </div>
                    </div>
                    <div className="px-4 lg:px-8 xl:px-36 mb-12">
                        <div className="font-play text-xl text-gray-900 lg:px-16">Flow 1
                            <div className="text-base">Adding a New Plant</div>
                        </div>
                        <div className="">
                            <img src="../images/ProjectNurtureMe/flows/Flow1.png" alt="" className="w-full" />
                        </div>
                    </div>
                    <div className="px-4 lg:px-8 xl:px-36 mb-12">
                        <div className="font-play text-xl text-gray-900 lg:px-16">Flow 2
                            <div className="text-base">Adding a New Reminder</div>
                        </div>
                        <div className="">
                            <img src="../images/ProjectNurtureMe/flows/Flow2.png" alt="" className="w-full" />
                        </div>
                    </div>
                    <div className="px-4 lg:px-8 xl:px-36 mb-12">
                        <div className="font-play text-xl text-gray-900 lg:px-16">Flow 3
                            <div className="text-base">Deleting a Plant Profile</div>
                        </div>
                        <div className="">
                            <img src="../images/ProjectNurtureMe/flows/Flow3.png" alt="" className="w-full" />
                        </div>
                    </div>
                </div>
                <div className="px-4 lg:px-8 xl:px-36 pt-24 pb-8 flex flex-col items-center">
                    <div className="text-5xl text-center text-gray-800 font-merienda mt-6 mb-16">Design Studio</div>
                    <div className="text-xl font-play text-gray-900 pb-24">With a focus on the targeted user personas, user flows, and insights gleaned from user research, I began the process of compiling research and generating sketches to conceptualize a plant watering reminder app that also controls an automatic watering device. During the preliminary stages of sketching and creating wireframes, my primary objective was to integrate the three key elements that emerged from my research: personalization, simplicity, and ease of use. By prioritizing these elements, a cohesive structure was established within the app, which facilitated an engaging and user-friendly environment to control the device and communicate with the user.</div>
                    <div className="text-2xl text-center text-gray-800 font-play mt-6 mb-16">Mobile App</div>
                    <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4">
                        <div className="lg:w-1/2 flex flex-col items-center">
                            <div className="px-4 mb-4 w-64">
                                <img src="../images/ProjectNurtureMe/wire/1.jpg" alt="" className="rounded shadow-xl" />
                            </div>
                            <div className="w-32 mx-auto -mt-20 mb-14 rotate-90">
                                <img src="../images/arrow.svg" alt="" className="" />
                            </div>
                            <div className="text-lg text-gray-900 font-play bg-zinc-50 p-4 rounded-xl shadow-xl">
                                I positioned plants of greatest interest at the center of the homepage to enhance browsing experience. Prominently displaying them reduces search time and increases engagement with the platform.
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col items-center">
                            <div className="px-4 mb-4 w-64">
                                <img src="../images/ProjectNurtureMe/wire/2.jpg" alt="" className="rounded shadow-xl" />
                            </div>
                            <div className="w-16 mx-auto -mt-4 mb-6 rotate-90">
                                <img src="../images/arrow.svg" alt="" className="" />
                            </div>
                            <div className="text-lg text-gray-900 font-play bg-zinc-50 p-4 rounded-xl shadow-xl">
                                I chose a unique bottom navigation design instead of the common top-left back button. Outlining the current screen's button helps users quickly identify their location and improve their sense of control, reducing cognitive load.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 lg:px-8 xl:px-36 pb-8 flex flex-col items-center">
                    <img src="../images/ProjectNurtureMe/flows/site.png" alt="" className="rounded" />
                </div>
                <div className="text-2xl text-center text-gray-800 font-play mt-12 mb-4">Website</div>
                <div className="px-4 lg:px-12 pt-8 pb-24 flex flex-col lg:flex-row gap-x-4">
                    <div className="lg:w-1/3 flex flex-col lg:flex-row items-center -mb-4 lg:mb-20">
                        <div className="p-4 rounded-xl h-fit bg-zinc-50 shadow-xl font-play text-gray-900 text-lg">I implemented a fixed sidebar with the product brand to provide users with quick and easy access to essential information without interrupting their flow of navigation.</div>
                        <div className="self-start lg:self-center w-12 lg:w-64 ml-4 lg:ml-0 lg:-mr-20 -rotate-90 lg:rotate-180">
                            <img src="../images/arrow.svg" alt="" className="" />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 lg:w-2/3">
                        <div className="flex flex-col items center">
                            <div className="flex items-center">
                                <div className="p-4">
                                    <img src="../images/ProjectNurtureMe/wire/3.jpg" alt="" className="rounded shadow-xl" />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-4">
                                <div className="flex flex-col items-center lg:w-1/2">
                                    <div className="self-start lg:self-center w-20 ml-12 -mt-8 mb-6 rotate-90">
                                        <img src="../images/arrow.svg" alt="" className="" />
                                    </div>
                                    <div className="p-4 rounded-xl bg-zinc-50 shadow-xl font-play text-gray-900 text-lg">I added a testimonials section on the website to enhance users' trust in the product or service by providing social proof. Testimonials build credibility and increase conversion rates by allowing users to read about the experiences of other customers. Additionally, they provide valuable feedback to the company for continuous improvement of the product or service.</div>
                                </div>
                                <div className="flex flex-col items-center lg:w-1/2">
                                    <div className="">
                                        <div className="hidden lg:block w-20 mx-auto -mt-8 mb-6 rotate-90">
                                            <img src="../images/arrow.svg" alt="" className="" />
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-zinc-50 shadow-xl font-play text-gray-900 text-lg">I added an app features section to the website to provide users with a comprehensive overview of the app's functionalities and benefits. This helps users easily identify the app's value proposition and make informed decisions about downloading and using it. It also allows the company to differentiate itself from competitors and showcase its unique strengths.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 lg:px-8 xl:px-36 pb-8 flex flex-col items-center">
                    <div className="text-5xl text-center text-gray-800 font-merienda mt-6 mb-16">Style Guide</div>
                    <div className="text-xl font-play text-gray-900 pb-4">In this project, I have used unique approaches to make my designs great. One of them is composing a style guide and sticking to it. Throughout the project, I followed these guides to keep my designs consistent and visually appealing for the users.</div>
                    <div className="text-xl font-play italic text-gray-900 pb-24">*These Colors and Fonts were carefully chosen and tested for accessibility and contrast. Color blinded, long sighted and short sighted users were taken into consideration. And all of them has passed the necessary tests.</div>
                    <div className="flex flex-col gap-y-4 lg:flex-row gap-x-4 mb-6">
                        <div className="">
                            <img src="../images/ProjectNurtureMe/flows/guide1.png" alt="" className="rounded" />
                        </div>
                        <div className="">
                            <img src="../images/ProjectNurtureMe/flows/guide2.png" alt="" className="rounded" />
                        </div>
                    </div>
                    <div className="flex gap-x-4 lg:gap-x-0 mx-auto mb-6 lg:w-1/2 w-fit">
                        <div className="hidden lg:block">
                            <img src="../images/ProjectNurtureMe/flows/guide3.png" alt="" className="rounded" />
                        </div>
                        <div className="lg:hidden lg:w-0">
                            <img src="../images/ProjectNurtureMe/flows/guide4.png" alt="" className="rounded" />
                        </div>
                    </div>
                </div>
                <div className="px-4 lg:px-8 xl:px-36 pt-24 pb-8 flex flex-col items-center">
                    <div className="text-5xl text-center text-gray-800 font-merienda mt-6 mb-16">Usability Testing & Iterations</div>
                    <div className="text-xl font-play text-gray-900 pb-6">I performed basic usability testing utilizing mid and high fidelity wireframes. The objective of this testing was to evaluate users' capacity to navigate the system seamlessly and without encountering any difficulties. The testing process involved participants completing specific tasks while their interactions were closely observed, with any issues or difficulties being meticulously noted.</div>
                    <div className="self-start pb-6">
                        <div className="text-xl font-bold font-play text-gray-900 pb-3">I had my 6 sample users to complete the following tasks:</div>
                        <div className="text-xl px-4 font-play text-gray-900 pb-2">1. Add a New Plant</div>
                        <div className="text-xl px-4 font-play text-gray-900 pb-2">2. Add a New Reminder</div>
                        <div className="text-xl px-4 font-play text-gray-900 pb-2">3. Delete a Plant Profile</div>
                        <div className="text-lg italic font-play text-gray-900">* These same tasks will be tested again with other new 6 users split into control(Experiences the app only) and experimental(Experiences the app after visiting the webpage) groups</div>
                    </div>
                    <div className="self-start text-xl font-play text-gray-900 pb-16">Mid fidelity wireframes were chosen for the testing to familiarize the users with the brand, the overall feel of the app and identify even more potential problems.</div>
                    <div className="text-2xl font-play font-semibold text-gray-800 pb-6 self-start">Test Results</div>
                    <div className="self-start text-xl font-play text-gray-900 pb-6">And as expected, I had some issues I can work on. By doing some more researches, and more tests with my users, I have found the best solutions that perfectly suit the users needs and my clients goals.</div>
                    <div className="self-start text-xl font-play text-gray-900 pb-16">Most of the issues were minor ones which only took one or two iterations and tests to solve, while also changing the product drastically. On the contrary, there was an issue that took a lot more brainstorming and trials than the rest. I have summarized the issues I worked on and their respective solutions as follows.</div>
                </div>
                <div className="px-4 lg:px-12 mb-8 flex flex-col gap-y-4">
                    <div className="px-24 text-2xl w-fit mx-auto font-play font-semibold text-gray-800 pb-6 self-start">Navigation</div>
                    <div className="flex flex-col lg:flex-row gap-y-4 gap-x-2 items-center lg:items-start">
                        <div className="lg:w-[30%] flex flex-col items-center space-y-4">
                            <div className="">
                                <img src="../images/ProjectNurtureMe/prevImp/nav/1.png" alt="" className="h-[75vh] lg:h-fit xl:h-[75vh]" />
                            </div>
                            <div className="p-4 rounded-xl h-fit bg-zinc-50 shadow-xl font-play text-gray-900 text-lg">Dynamic text and icon changes in the navigation bar, such as replacing the home icon, text and background with just the text "Home" when the user navigates away from the home screen was found to be confusing since it contradicted users' expectation of a constant navigation bar and lead them to believe it is broken.</div>
                        </div>
                        <div className="rotate-90 lg:rotate-0 w-16 lg:w-[5%] self-center">
                            <div className="w-full">
                                <img src="../images/arrow.svg" alt="" className="w-full" />
                            </div>
                        </div>
                        <div className="lg:w-[30%] flex flex-col items-center space-y-4">
                            <div className="">
                                <img src="../images/ProjectNurtureMe/prevImp/nav/2.png" alt="" className="h-[75vh] lg:h-fit xl:h-[75vh]" />
                            </div>
                            <div className="p-4 rounded-xl h-fit bg-zinc-50 shadow-xl font-play text-gray-900 text-lg">Replacing the home button with a generic back button was found to be confusing for users as it does not provide a clear indication of their location within the app.</div>
                        </div>
                        <div className="rotate-90 lg:rotate-0 w-16 lg:w-[5%] self-center">
                            <div className="w-full">
                                <img src="../images/arrow.svg" alt="" className="" />
                            </div>
                        </div>
                        <div className="lg:w-[30%] flex flex-col items-center space-y-4">
                            <div className="">
                                <img src="../images/ProjectNurtureMe/prevImp/nav/3.png" alt="" className="h-[75vh] lg:h-fit xl:h-[75vh]" />
                            </div>
                            <div className="p-4 rounded-xl h-fit bg-zinc-50 shadow-xl font-play text-gray-900 text-lg">Keeping the same button state after navigating to a different screen was found to be even more confusing and actually even worse than the methods used before.</div>
                        </div>
                    </div>
                    <div className="self-center flex flex-col lg:flex-row gap-y-4 gap-x-4 items-center lg:w-1/2 2xl:w-7/12">
                        <div className="w-4/5 md:w-2/5 lg:w-5/12 flex items-center">
                            <div className="">
                                <img src="../images/ProjectNurtureMe/prevImp/nav/final.png" alt="" className="" />
                            </div>
                        </div>
                        <div className="lg:w-7/12">
                            <div className="rounded-xl h-fit font-play text-gray-900 text-lg">I implemented a navigation button which loses its background and becomes outlined when the users moves away from the parent screen, while letting the user know that they are on a different screen and what the most recent parent screen was.</div>
                        </div>
                    </div>
                </div>
                <div className="px-4 lg:px-8 xl:px-36 pt-24 pb-8 flex flex-col items-center">
                    <div className="mb-8">
                        <div className="text-xl font-play font-semibold text-gray-800 pb-6 self-start">Color Scheme</div>
                        <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4 items-center">
                            <div className="lg:w-7/12 flex items-center">
                                <div className="w-3/5">
                                    <img src="../images/ProjectNurtureMe/prevImp/1.png" alt="" className="" />
                                </div>
                                <div className="w-2/5 lg:self-end">
                                    <img src="../images/ProjectNurtureMe/6.png" alt="" className="" />
                                </div>
                            </div>
                            <div className="lg:w-2/5">
                                <div className="p-4 rounded-xl h-fit font-play text-gray-900 text-lg">The colors chosen did not communicate the brand effectively. To address this issue, I consulted with the client to gain a better understanding of their brand and the colors that would best represent it. I then iteratively refined the design until I achieved a color scheme that was consistent with the brand's identity and effectively communicated the brand's values.</div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="text-xl font-play font-semibold text-gray-800 pb-6 self-start">In-app Purchases</div>
                        <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4 items-center">
                            <div className="lg:w-2/5">
                                <div className="p-4 rounded-xl h-fit font-play text-gray-900 text-lg"> I chose to handle the in-app purchases on the website instead of within the app. Handling in-app purchases on the website can help reduce clutter and distractions within the app, leading to a more streamlined and focused experience.</div>
                            </div>
                            <div className="lg:w-7/12 flex items-center">
                                <div className="w-3/5">
                                    <img src="../images/ProjectNurtureMe/prevImp/2.png" alt="" className="" />
                                </div>
                                <div className="w-2/5 lg:self-end">
                                    <img src="../images/ProjectNurtureMe/6.png" alt="" className="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="text-xl font-play font-semibold text-gray-800 pb-6 self-start">Custom Pictures</div>
                        <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4 items-center">
                            <div className="lg:w-7/12 flex items-center">
                                <div className="w-3/5">
                                    <img src="../images/ProjectNurtureMe/prevImp/3.png" alt="" className="" />
                                </div>
                                <div className="w-2/5 lg:self-end">
                                    <img src="../images/ProjectNurtureMe/prevImp/_3.png" alt="" className="" />
                                </div>
                            </div>
                            <div className="lg:w-2/5">
                                <div className="p-4 rounded-xl h-fit font-play text-gray-900 text-lg">Users' need to add custom pictures from their personal gallery was initially not acknowledged but was later added to the UX/UI design. By allowing users to add their own custom pictures, it provides them with a sense of ownership and control over their experience within the app or website.</div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="text-xl font-play font-semibold text-gray-800 pb-6 self-start">Visual Communication</div>
                        <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4 items-center">
                            <div className="lg:w-2/5">
                                <div className="p-4 rounded-xl h-fit font-play text-gray-900 text-lg">The original design provided little in the way of visual interest or information for the user. By adding leaf sketches to the welcome page, I provided the user with a more immersive and engaging experience that reflects the app's focus on plant care and watering.</div>
                            </div>
                            <div className="lg:w-7/12 flex items-center">
                                <div className="w-3/5">
                                    <img src="../images/ProjectNurtureMe/prevImp/4.png" alt="" className="" />
                                </div>
                                <div className="w-2/5 lg:self-end">
                                    <img src="../images/ProjectNurtureMe/prevImp/_4.png" alt="" className="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-8">
                        <div className="text-xl font-play font-semibold text-gray-800 pb-6 self-start">New Color Introduction</div>
                        <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4 items-center">
                            <div className="lg:w-7/12 flex items-center">
                                <div className="w-3/5">
                                    <img src="../images/ProjectNurtureMe/prevImp/5.png" alt="" className="" />
                                </div>
                                <div className="w-2/5 lg:self-end">
                                    <img src="../images/ProjectNurtureMe/prevImp/_5.png" alt="" className="" />
                                </div>
                            </div>
                            <div className="lg:w-2/5">
                                <div className="p-4 rounded-xl h-fit font-play text-gray-900 text-lg">The introduction of the new color created a visual inconsistency that disrupted the existing color scheme and branding of the app or website. This lead to confusion and a poor user experience, as users struggled to understand the significance of the new color or how it relates to the existing design.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 lg:px-8 xl:px-36 pt-24 pb-8 flex flex-col items-center">
                    <div className="text-5xl text-center text-gray-800 font-merienda mt-6 mb-16">Final Results</div>
                    <div className="text-xl font-play text-gray-900 pb-6">After numerous researches, tests, and tweaks, I managed to complete the project and fulfil my clients needs and expectations. As intended from the start, I designed an app that is easy for users to use, to understand and to implement. I also increased users engagement significantly. The side project I suggested and worked on was also another big success. As I predicted, it helped in increasing user retention rates. It also helped in familiarizing users with the app before trying the app, which enhanced the users' experiences.</div>
                    <div className="flex justify-center space-x-6 mx-auto">
                        <a href='nurtureme/page' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                            <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative">
                                Landing Page
                            </div>
                            <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                            <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                        </a>
                        <a href='https://www.figma.com/proto/vmPBTsMxTDXrnOFpkoaIt2/NurtureMe.?type=design&node-id=78-1228&scaling=scale-down&page-id=78%3A1219&starting-point-node-id=78%3A1220' target='_blank' rel='noreferrer' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                            <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative">
                                View Figma Prototype
                            </div>
                            <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                            <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                        </a>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4 mt-24 mb-16 lg:w-4/5">
                        <div className="lg:w-1/2">
                            <div className="text-xl font-play font-semibold text-gray-800 pb-3 self-start">Website</div>
                            <div className="text-lg font-play font-semibold text-gray-900 pb-3 self-start">Created a simple and fast landing page</div>
                            <div className="font-play text-gray-900 text-lg">Based on the design system I used for the mobile app, I developed a responsive website to help users learn more about the app, download it, and purchase the tool. It also helped my client reach more users and grow their audience sizes. I used the latest technologies to make the website secure, performant, fast and good looking. I used <span className='font-bold text-sky-400'>React</span> to give it the extra-ordinary performance, <span className='font-bold text-red-500'>React Router V6</span> to simulate app-like page transitions, <span className='font-bold text-sky-500'>Tailwind-CSS</span> to give it good looks and responsiveness and <span className='font-bold text-lime-400'>GSAP</span> to render micro-animations.</div>
                        </div>
                        <div className="lg:w-1/2 flex space-x-4">
                            <div className="">
                                <img src="../images/ProjectNurtureMe/7.png" alt="" className="" />
                            </div>
                        </div>
                    </div>
                    <a href='nurtureme/page' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden">
                        <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative">
                            Landing Page
                        </div>
                        <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                        <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                    </a>
                    <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4 mt-24 mb-16 lg:w-4/5">
                        <div className="lg:w-1/2 flex space-x-4">
                            <div className="">
                                <img src="../images/ProjectNurtureMe/6.png" alt="" className="" />
                            </div>
                            <div className="">
                                <img src="../images/ProjectNurtureMe/screens/F1.png" alt="" className="" />
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="text-xl font-play font-semibold text-gray-800 pb-3 self-start">Home Screen</div>
                            <div className="text-lg font-play font-semibold text-gray-900 pb-3 self-start">Created a home screen with easy navigation system</div>
                            <div className="font-play text-gray-900 text-lg">I developed a home screen that provided users with easy access to multiple parts of the app. The home screen featured clear and consistent icons and text, organized in a logical and intuitive layout that reflected the app's core features and functionality.</div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4 mt-24 mb-16 lg:w-4/5">
                        <div className="lg:w-1/2">
                            <div className="text-xl font-play font-semibold text-gray-800 pb-3 self-start">Search Engine</div>
                            <div className="text-lg font-play font-semibold text-gray-900 pb-3 self-start">An easy to use search methods</div>
                            <div className="font-play text-gray-900 text-lg">I integrated a way to search for plants and reminders either by typing them down or by using voice search. Users can use any one they prefer.</div>
                        </div>
                        <div className="lg:w-1/2 flex space-x-4">
                            <div className="">
                                <img src="../images/ProjectNurtureMe/screens/F1.png" alt="" className="" />
                            </div>
                            <div className="">
                                <img src="../images/ProjectNurtureMe/screens/F6.png" alt="" className="" />
                            </div>
                        </div>
                    </div>
                    <a href='https://www.figma.com/proto/vmPBTsMxTDXrnOFpkoaIt2/NurtureMe.?type=design&node-id=78-1228&scaling=scale-down&page-id=78%3A1219&starting-point-node-id=78%3A1220' target='_blank' rel='noreferrer' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden mt-12 lg:mt-0 mb-12 lg:mb-0">
                        <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative">
                            View Figma Prototype
                        </div>
                        <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                        <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                    </a>
                    <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4 mt-24 mb-16 lg:w-4/5">
                        <div className="lg:w-1/2 flex space-x-4">
                            <div className="">
                                <img src="../images/ProjectNurtureMe/devFeatures/1.png" alt="" className="" />
                            </div>
                            <div className="">
                                <img src="../images/ProjectNurtureMe/devFeatures/2.png" alt="" className="" />
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="text-xl font-play font-semibold text-gray-800 pb-3 self-start">Adding Plants</div>
                            <div className="text-lg font-play font-semibold text-gray-900 pb-3 self-start">Multiple ways to add plants</div>
                            <div className="font-play text-gray-900 text-lg">I designed a system in which the user will be able to choose the best way of adding plants for themselves.</div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-y-4 gap-x-4 mt-24 mb-16 lg:w-4/5">
                        <div className="lg:w-1/2">
                            <div className="text-xl font-play font-semibold text-gray-800 pb-3 self-start">Accounts</div>
                            <div className="text-lg font-play font-semibold text-gray-900 pb-3 self-start">Synchronization of personal preferences</div>
                            <div className="font-play text-gray-900 text-lg">I designed the app to be able to save the users custom preferences and store them for later use in another device of the users.</div>
                        </div>
                        <div className="lg:w-1/2 flex space-x-4">
                            <div className="">
                                <img src="../images/ProjectNurtureMe/features/profile.png" alt="" className="" />
                            </div>
                            <div className="">
                                <img src="../images/ProjectNurtureMe/features/person.png" alt="" className="" />
                            </div>
                        </div>
                    </div>
                    <a href='https://www.figma.com/proto/vmPBTsMxTDXrnOFpkoaIt2/NurtureMe.?type=design&node-id=78-1228&scaling=scale-down&page-id=78%3A1219&starting-point-node-id=78%3A1220' target='_blank' rel='noreferrer' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden mb-6">
                        <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative">
                            View Figma Prototype
                        </div>
                        <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                        <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                    </a>
                </div>
                <div className="px-4 lg:px-8 xl:px-36 flex flex-col items-center gap-y-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                        <div className="">
                            <img src="../images/ProjectNurtureMe/screens/F2.png" alt="" className="" />
                        </div>
                        <div className="">
                            <img src="../images/ProjectNurtureMe/2.png" alt="" className="" />
                        </div>
                        <div className="">
                            <img src="../images/ProjectNurtureMe/6.png" alt="" className="" />
                        </div>
                        <div className="">
                            <img src="../images/ProjectNurtureMe/features/list.png" alt="" className="" />
                        </div>
                        <div className="">
                            <img src="../images/ProjectNurtureMe/devFeatures/3.png" alt="" className="" />
                        </div>
                        <div className="">
                            <img src="../images/ProjectNurtureMe/devFeatures/1.png" alt="" className="" />
                        </div>
                        <div className="">
                            <img src="../images/ProjectNurtureMe/features/alarm.png" alt="" className="" />
                        </div>
                        <div className="">
                            <img src="../images/ProjectNurtureMe/features/voice.png" alt="" className="" />
                        </div>
                        <div className="">
                            <img src="../images/ProjectNurtureMe/features/profile.png" alt="" className="" />
                        </div>
                        <div className="">
                            <img src="../images/ProjectNurtureMe/devFeatures/2.png" alt="" className="" />
                        </div>
                        <div className="">
                            <img src="../images/ProjectNurtureMe/devFeatures/4.png" alt="" className="" />
                        </div>
                        <div className="">
                            <img src="../images/ProjectNurtureMe/devFeatures/5.png" alt="" className="" />
                        </div>
                    </div>
                    <a href='https://www.figma.com/proto/vmPBTsMxTDXrnOFpkoaIt2/NurtureMe.?type=design&node-id=78-1228&scaling=scale-down&page-id=78%3A1219&starting-point-node-id=78%3A1220' target='_blank' rel='noreferrer' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden mt-12">
                        <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative">
                            View Figma Prototype
                        </div>
                        <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                        <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                    </a>
                </div>
                <div className="px-4 lg:px-8 xl:px-36 pt-24 flex flex-col items-center gap-y-4">
                    <div className="text-5xl text-center text-gray-800 font-merienda mt-16 mb-16">Reflections & the Future</div>
                    <div className="text-xl font-play text-gray-900 pb-6">Working with NurtureMe. Home Automation Inc. was one of the most incredible projects I have been a part of. It allowed to express my passion as much as I can. Apart from that, it helped and challenged me to push my every skill to another level while also teaching me new ones. The hardest part was building the designs into one complete clickable app prototype. It helped me take my prototyping skill to a whole another level.</div>
                    <div className="flex flex-col gap-y-4 pb-6">
                        <div className="text-gray-900 font-play text-xl italic">*In users tests and researches, this prototype was split into parts to concentrate on and study one feature at a time.</div>
                        <img src="../images/ProjectNurtureMe/proto.png" alt="" className="" />
                    </div>
                    <div className="text-xl font-play text-gray-900 pb-6">In the near future, I plan to collaborate with my team and add more features to make the product's scope wider, which in turn would increase users' satisfaction and the clients value and revenue. Some examples include expansions to web applications. These features would let the users access their plants from more devices. I am looking forward to building these features and improve the site's functionality and user experience.</div>
                    <div className="text-xl font-play text-gray-900 pb-6 self-start">I invite you to look at the complete prototype and experience and enjoy the concept yourself.</div>
                    <a href='https://www.figma.com/proto/vmPBTsMxTDXrnOFpkoaIt2/NurtureMe.?type=design&node-id=78-1228&scaling=scale-down&page-id=78%3A1219&starting-point-node-id=78%3A1220' target='_blank' rel='noreferrer' className="shadow group hover:shadow-xl duration-500 rounded border border-zinc-400 relative overflow-hidden mt-12 mb-48">
                        <div className="p-4 group-hover:text-white duration-500 font-play z-10 relative">
                            View Figma Prototype
                        </div>
                        <div className="absolute bottom-full group-hover:bottom-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                        <div className="absolute top-full group-hover:top-0 duration-[250ms] bg-black z-0 w-full h-full"></div>
                    </a>
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
        </div>
    )
}

export default NurtureMe