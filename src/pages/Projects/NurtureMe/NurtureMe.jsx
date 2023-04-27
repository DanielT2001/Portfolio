import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../index.css'
import { BsArrowUpShort } from 'react-icons/bs'
import { FaGooglePlay, FaAppStoreIos, FaFacebookF, FaTelegramPlane, FaTwitter, FaInstagram, FaAmazon, FaShopify } from 'react-icons/fa';
import FAQs from './components/FAQs'
import FAQDev from './components/FAQDev'
import Button from './components/Button';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

function ProjectNurtureMe() {

    const [showOne, setShowOne] = useState(true)

    const devButton = () => {
        setShowOne(!showOne)
    }

    useEffect(() => {
        gsap.fromTo('.whole', { opacity: 0 }, { opacity: 1, duration: 0.2, delay: 0.2 })
    }, [showOne])

    useEffect(() => {
        gsap.fromTo('.up', { y: 200 }, {
            y: 0, duration: 0.1,
            scrollTrigger: {
                trigger: '.tests',
                start: 'top 20%',
                end: 'top 20%',
                scrub: 0.1,
                toggleActions: 'play none none reset',
            }
        })
    })

    return (
        showOne ?
            <div className="whole selection:bg-[#ffba46] selection:text-white relative" id='NurtHero'>

                <a href='#header' className="up w-12 h-12 rounded-full flex justify-center items-center border border-[#ffba46] fixed z-40 shadow-2xl bg-[#000401] hover:bg-[#ffba46] group duration-500 bottom-6 right-6 md:right-16">
                    <BsArrowUpShort className='text-[#ffba46] text-2xl group-hover:text-[#000401] duration-500' />
                </a>

                <div className="flex flex-col relative">

                    {/* Sidebar */}

                    <header className="w-16 h-screen hidden lg:flex fixed bg-[#0e1e22] shadow-md shadow-black z-10">
                        <a href='/nurtureme' className="text-germania text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#11272c] to-[#34844e] mx-auto self-center px-4 py-1 rounded-full border border-[#58a371] select-none">N</a>
                    </header>

                    {/* Header */}

                    <div className="bg-[#070D0E] w-full md:pl-16 shadow-xl" id='header'>
                        <section className="">
                            <header className="flex justify-between items-center px-1 md:mx-2 mt-10 md:mt-4 lg:mt-0 py-1 border-2 md:border-none border-[#58A371] rounded-full">
                                <div className="bg-gradient-to-r from-[#58a371] md:from-transparent to-[#0e1e22] md:to-transparent w-full flex justify-between items-center rounded-full px-2.5 md:px-4 py-1.5 md:py-3">
                                    <Link to='/nurtureme' className="text-germania font-extrabold text-lg sm:text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#11272c] to-[#34844e] select-none">NurtureMe.</Link>
                                    <div className="hidden text-merienda md:flex justify-between items-center w-3/5 lg:w-2/5 xl:1/3 text-[#FFBA46]">
                                        <div className="group">
                                            <a href='#features' className='px-4 py-1 font-medium text-sm'>Features</a>
                                            <div className="hidden sm:block h-[1px] w-0 group-hover:w-full bg-[#ffba46] origin-left duration-500 rounded"></div>
                                        </div>
                                        <div className="group">
                                            <a href='#pricing' className='px-4 py-1 font-medium text-sm'>Pricing</a>
                                            <div className="hidden sm:block h-[1px] w-0 group-hover:w-full bg-[#ffba46] origin-left duration-500 rounded"></div>
                                        </div>
                                        <div className="group">
                                            <a href='#FAQs' className='px-4 py-1 font-medium text-sm'>FAQs</a>
                                            <div className="hidden sm:block h-[1px] w-0 group-hover:w-full bg-[#ffba46] origin-left duration-500 rounded"></div>
                                        </div>
                                        <div className="bg-gradient-to-r from-[#081012] to-[#58A371] rounded-xl p-0.5 shadow-xl hover:shadow-none duration-500 shadow-[#34844e]/20">
                                            <button className="w-full h-full bg-gradient-to-r from-[#58A371] to-[#081012] hover:from-[#081012] hover:to-[#081012] duration-500 px-10 py-1.5 rounded-xl font-medium text-sm" onClick={devButton}>Device</button>
                                        </div>
                                    </div>
                                    <Button onTrigger={devButton} appOrDev={showOne} />
                                </div>
                            </header>
                        </section>
                    </div>

                    {/* Hero */}

                    <section className='md:min-h-screen lg:h-full 2xl:min-h-screen mt-10 md:mt-6 2xl:mt-10 flex flex-col md:flex-row md:items-center relative'>

                        {/* Left Side */}

                        <div className="hidden md:flex flex-col items-center space-y-4 self-center w-1/2 lg:w-2/5 mx-2 md:mx-2 lg:ml-20">
                            <div className="text-xl md:text-4xl text-[#ffba46] text-merienda text-center font-medium md:font-extrabold z-30">Water smarter, not harder with our plant watering app!</div>
                            <div className="text-base text-[#ffba46] text-play">Say goodbye to wilted plants and hello to healthy greenery with our plant watering and reminder app. With our intuitive interface and customizable watering schedules, you can easily keep track of your plants' needs and never forget to water them again. Download now and let us help you keep your plants thriving.</div>
                            <div className="flex space-x-4 xl:space-x-8 px-2 py-4 w-[90%] sm:w-[70%] md:w-full xl:w-[90%] text-[#ffba46]">
                                <button className="w-full h-full bg-[#000401] px-4 md:px-4 lg:px-4 py-4 rounded-xl border border-[#ffba46] shadow-2xl flex justify-around items-center hover:text-[#000401] hover:bg-[#ffba46] duration-500">
                                    <FaGooglePlay className='text-4xl' />
                                    <div className="flex flex-col space-y-1 text-play">
                                        <div className="text-xs">Download From</div>
                                        <div className="text-base">Google Play</div>
                                    </div>
                                </button>
                                <button className="w-full h-full bg-[#000401] px-4 md:px-4 lg:px-4 py-4 rounded-xl border border-[#ffba46] shadow-2xl flex justify-around items-center hover:text-[#000401] hover:bg-[#ffba46] duration-500">
                                    <FaAppStoreIos className='text-4xl' />
                                    <div className="flex flex-col space-y-1 text-play">
                                        <div className="text-xs">Download From</div>
                                        <div className="text-base">App Store</div>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Right Side */}

                        <div className="w-full md:w-1/2 lg:w-3/5 -mr-4 md:mr-6 z-10">
                            <div className="shadow-green-400 flex justify-center -space-x-1.5 md:-space-x-6 w-full">
                                <div className="w-24 md:w-36 mt-8 md:mt-36 z-10 group">
                                    <img src="../images/ProjectNurtureMe/1.png" alt="" className="w-full group-hover:-translate-x-12 group-hover:-translate-y-4 group-hover:-skew-x-6 group-hover:skew-y-6 group-hover:scale-110 duration-500" />
                                </div>
                                <div className="w-36 md:w-60 flex flex-col space-y-8 items-center group z-20">
                                    <img src="../images/ProjectNurtureMe/2.png" alt="" className="w-full group-hover:-translate-y-4 group-hover:scale-110 delay-200 duration-500" />
                                    <div className="text-germania font-extrabold text-lg sm:text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#11272c] to-[#34844e] select-none">NurtureMe.</div>
                                </div>
                                <div className="w-24 md:w-36 mt-8 md:mt-36 group">
                                    <img src="../images/ProjectNurtureMe/3.png" alt="" className="w-full group-hover:translate-x-12 group-hover:-translate-y-4 group-hover:skew-x-6 group-hover:-skew-y-6 group-hover:scale-110 duration-500" />
                                </div>
                            </div>
                        </div>

                        {/* Top from 0px-768px Viewport */}

                        <div className="flex md:hidden flex-col items-center space-y-4 self-center w-full mt-8 md:mt-0 md:w-2/5 md:mx-0 lg:ml-20">
                            <div className="mx-4 md:mx-0 text-xl md:text-4xl text-[#ffba46] text-merienda text-center font-medium md:font-extrabold z-30">Water smarter, not harder with our plant watering app!</div>
                            <div className="mx-2 md:mx-0 text-sm text-[#ffba46] text-play">Say goodbye to wilted plants and hello to healthy greenery with our plant watering and reminder app. With our intuitive interface and customizable watering schedules, you can easily keep track of your plants' needs and never forget to water them again. Download now and let us help you keep your plants thriving.</div>
                            <div className="flex space-x-3 md:space-x-8 px-2 py-4 w-[90%] sm:w-[70%] md:w-full xl:w-[90%] text-[#ffba46]">
                                <button className="w-full h-full bg-[#000401] px-2 md:px-4 py-2 md:py-4 rounded-xl border border-[#ffba46] shadow-2xl flex justify-around items-center hover:text-[#000401] hover:bg-[#ffba46] duration-500">
                                    <FaGooglePlay className='text-2xl md:text-4xl' />
                                    <div className="flex flex-col space-y-1 text-play">
                                        <div className="text-xs">Download From</div>
                                        <div className="text-sm md:text-base">Google Play</div>
                                    </div>
                                </button>
                                <button className="w-full h-full bg-[#000401] px-2 md:px-4 py-2 md:py-4 rounded-xl border border-[#ffba46] shadow-2xl flex justify-around items-center hover:text-[#000401] hover:bg-[#ffba46] duration-500">
                                    <FaAppStoreIos className='text-2xl md:text-4xl' />
                                    <div className="flex flex-col space-y-1 text-play">
                                        <div className="text-xs">Download From</div>
                                        <div className="text-sm md:text-base">App Store</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Testimonials */}

                    <section className="tests mt-16 md:mt-20 space-y-8 sm:space-y-16 lg:ml-24 flex flex-col items-center select-none mr-2 sm:mr-4 md:mr-8 ml-2 sm:ml-4 md:ml-8 lg:mr-0 text-play">
                        <div className="self-center" id='testimonials'>
                            <div className="text-2xl md:text-3xl text-[#ffba46] text-merienda text-center mt-20 mr-0 lg:mr-16">Don't just take our word for it. Thousands of users love what we made!</div>
                        </div>

                        {/* 1 */}

                        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 w-full lg:w-[90%] lg:mr-8">
                            <div className="flex flex-col items-center -space-y-6 lg:mt-12 group hover:-translate-y-3 duration-500">
                                <div className="rounded-full border border-[#070D0E] shadow-xl w-28 z-10 group-hover:scale-125 duration-500">
                                    <img src="../images/ProjectNurtureMe/test/test1.jpg" alt="" className="rounded-full" />
                                </div>
                                <div className="px-4 pt-8 pb-6 text-[#ffba46] bg-[#070d0e] border border-[#ffba46] rounded flex flex-col space-y-4 items-center group-hover:text-[#070d0e] group-hover:bg-[#ffba46] duration-500">
                                    <div className="text-xl text-center">David Lee</div>
                                    <div className="text-base md:text-lg text-center">"This app is a lifesaver! I travel a lot for work, so it's hard to keep up with watering my plants. But with
                                        this app, I can control my watering device from anywhere in the world. The app is so easy to use, and the reminders always
                                        keep me on track. I would recommend this app to anyone who loves plants but has a busy lifestyle."</div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center -space-y-6 group hover:-translate-y-3 duration-500">
                                <div className="rounded-full border border-[#070D0E] shadow-xl w-28 z-10 group-hover:scale-125 duration-500">
                                    <img src="../images/ProjectNurtureMe/test/test2.jpg" alt="" className="rounded-full" />
                                </div>
                                <div className="px-4 pt-8 pb-6 text-[#ffba46] bg-[#070d0e] border border-[#ffba46] rounded flex flex-col space-y-4 items-center group-hover:text-[#070d0e] group-hover:bg-[#ffba46] duration-500">
                                    <div className="text-xl text-center">Sarah Johnson</div>
                                    <div className="text-base md:text-lg text-center">"I absolutely love this app! As a busy working mom, I always forget to water my plants. But with this app, I never have to worry about it again. The reminders are so helpful, and I love that I can control my electronic watering device from my phone. My plants have never looked better!"</div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center -space-y-6 lg:mt-12 group hover:-translate-y-3 duration-500">
                                <div className="rounded-full border border-[#070D0E] shadow-xl w-28 z-10 group-hover:scale-125 duration-500">
                                    <img src="../images/ProjectNurtureMe/test/test3.jpg" alt="" className="rounded-full" />
                                </div>
                                <div className="px-4 pt-8 pb-6 text-[#ffba46] bg-[#070d0e] border border-[#ffba46] rounded flex flex-col space-y-4 items-center group-hover:text-[#070d0e] group-hover:bg-[#ffba46] duration-500">
                                    <div className="text-xl text-center">Thomas Wilson</div>
                                    <div className="text-base md:text-lg text-center">"I was skeptical at first, but this app has exceeded my expectations. The interface is user-friendly, and the reminders are a great way to keep me on track with watering my plants. Plus, the ability to control my watering device remotely a game-changer. I highly recommend this app to any plant lover!"</div>
                                </div>
                            </div>

                            <div className="flex lg:hidden flex-col items-center -space-y-6 group hover:-translate-y-3 duration-500">
                                <div className="rounded-full border border-[#070D0E] shadow-xl w-28 z-10 group-hover:scale-125 duration-500">
                                    <img src="../images/ProjectNurtureMe/test/test4.jpg" alt="" className="rounded-full" />
                                </div>
                                <div className="px-4 pt-8 pb-6 text-[#ffba46] bg-[#070d0e] border border-[#ffba46] rounded flex flex-col space-y-4 items-center group-hover:text-[#070d0e] group-hover:bg-[#ffba46] duration-500">
                                    <div className="text-xl text-center">Olivia Davis</div>
                                    <div className="text-base md:text-lg text-center">"I am so impressed with this app! The design is so sleek and intuitive, and the reminders are a great way to
                                        keep me accountable for watering my plants regularly. I also love that I can track the moisture levels of my plants and
                                        adjust the watering frequency accordingly. This app has truly transformed my plant care routine!"</div>
                                </div>
                            </div>
                        </div>

                        {/* 2 */}

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 w-full lg:w-[60%] lg:mr-8 self-center">
                            <div className="hidden lg:flex flex-col items-center -space-y-6 group hover:-translate-y-3 duration-500">
                                <div className="rounded-full border border-[#070D0E] shadow-xl w-28 z-10 group-hover:scale-125 duration-500">
                                    <img src="../images/ProjectNurtureMe/test/test4.jpg" alt="" className="rounded-full" />
                                </div>
                                <div className="px-4 pt-8 pb-6 text-[#ffba46] bg-[#070d0e] border border-[#ffba46] rounded flex flex-col space-y-4 items-center group-hover:text-[#070d0e] group-hover:bg-[#ffba46] duration-500">
                                    <div className="text-xl text-center">Olivia Davis</div>
                                    <div className="text-base md:text-lg text-center">"I am so impressed with this app! The design is so sleek and intuitive, and the reminders are a great way to
                                        keep me accountable for watering my plants regularly. I also love that I can track the moisture levels of my plants and
                                        adjust the watering frequency accordingly. This app has truly transformed my plant care routine!"</div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center -space-y-6 group hover:-translate-y-3 duration-500">
                                <div className="rounded-full border border-[#070D0E] shadow-xl w-28 z-10 group-hover:scale-125 duration-500">
                                    <img src="../images/ProjectNurtureMe/test/test5.jpg" alt="" className="rounded-full" />
                                </div>
                                <div className="px-4 pt-8 pb-6 text-[#ffba46] bg-[#070d0e] border border-[#ffba46] rounded flex flex-col space-y-4 items-center group-hover:text-[#070d0e] group-hover:bg-[#ffba46] duration-500">
                                    <div className="text-xl text-center">Emily Chen</div>
                                    <div className="text-base md:text-lg text-center">"I've tried a lot of plant watering apps in the past, but this one is by far the best. The design is beautiful
                                        and modern, and the reminders are so helpful. I also love that I can set different watering schedules for each of my plants.
                                        This app has made plant care so much easier and more enjoyable!"</div>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* Features */}

                    <section className="mt-16 md:mt-20  ml-0 lg:ml-24 flex flex-col">
                        <div className="self-center" id='features'>
                            <div className="text-2xl md:text-3xl text-[#ffba46] text-merienda mt-20 mr-0 lg:mr-16">Features</div>
                        </div>
                        <div className="mt-8 text-center text-[#ffba46] self-center mr-2 lg:mr-16 mx-2 md:mx-0 text-play">Our app is designed to fit seamlessly into your life, so you can focus on what's important - while we take care of the rest.</div>

                        <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 mx-2 md:mx-4 lg:mx-0 text-play">
                            <div className="mt-12 md:mt-24 lg:mt-36 z-10 flex items-center w-full md:w-[50%] lg:w-[45%] space-x-3 md:space-x-6 group">
                                <div className="text-[#ffba46] w-3/5">
                                    <div className="text-2xl md:text-3xl mb-6">Customizable Reminders</div>
                                    <div className="">Choose when and how often you want to receive reminders for each of your plants and adjust the frequency based on your individual needs. With our app, you can set up a personalized watering schedule that works best for you and your plants.</div>
                                </div>
                                <div className="w-48 sm:w-72 md:w-96 group-hover:scale-90 duration-500">
                                    <img src="../images/ProjectNurtureMe/features/alarm.png" alt="" className="w-full" />
                                </div>
                            </div>
                            <div className="z-10 flex items-center w-full md:w-[45%] space-x-3 md:space-x-6 self-end mt-24 lg:mt-[360px] group">
                                <div className="w-48 sm:w-72 md:w-96 group-hover:scale-90 duration-500">
                                    <img src="../images/ProjectNurtureMe/features/camera.png" alt="" className="w-full" />
                                </div>
                                <div className="text-[#ffba46] w-3/5">
                                    <div className="text-2xl md:text-3xl mb-6 text-right">Snap & Go</div>
                                    <div className="text-right">Take a photo of your plant on the-go and let our app do the rest! Our powerful image recognition technology will identify your plant species and provide customized care recommendations. With Snap & Go,you'll have all the information you need right at your fingerprints.</div>
                                </div>
                            </div>

                        </div>
                        <div className="mt-24 md:mt-0 flex flex-col md:flex-row space-x-0 md:space-x-8 mx-2 md:mx-4 lg:mx-0 text-play">
                            <div className="mt-12 md:mt-24 lg:mt-36 z-10 flex items-center w-full md:w-[50%] lg:w-[45%] space-x-3 md:space-x-6 group">
                                <div className="text-[#ffba46] w-3/5">
                                    <div className="text-2xl md:text-3xl mb-6">Use your own photos</div>
                                    <div className="">Have a perfect photo of your plant already saved? No problem. Easily upload and manage  all your plant photos from your phone's gallery, giving you a visual timeline of your plant's growth.</div>
                                </div>
                                <div className="w-48 sm:w-72 md:w-96 group-hover:scale-90 duration-500">
                                    <img src="../images/ProjectNurtureMe/features/gallery.png" alt="" className="w-full" />
                                </div>
                            </div>
                            <div className="z-10 flex items-center w-full md:w-[45%] space-x-3 md:space-x-6 self-end mt-24 lg:mt-[360px] group">
                                <div className="w-48 sm:w-72 md:w-96 group-hover:scale-90 duration-500">
                                    <img src="../images/ProjectNurtureMe/features/list.png" alt="" className="w-full" />
                                </div>
                                <div className="text-[#ffba46] w-3/5">
                                    <div className="text-2xl md:text-3xl mb-6 text-right">Smart Plant Tracking</div>
                                    <div className="text-right">Keep track of all your plants in one place, and get reminders when it's time to water them. Our app uses advanced algorithms and ensure your plants stay healthy and happy.</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 mx-2 md:mx-4 lg:mx-0 text-play">
                            <div className="mt-24 lg:mt-36 z-10 flex items-center w-full md:w-[50%] lg:w-[45%] space-x-3 md:space-x-6 group">
                                <div className="text-[#ffba46] w-3/5">
                                    <div className="text-2xl md:text-3xl mb-6">Personalize your experience</div>
                                    <div className="">Create a unique profile to keep track of your plants and their specific needs. Set reminders and personalize them. Customization is key to a successful plant-parenting experience, and our app offers just that.</div>
                                </div>
                                <div className="w-48 sm:w-72 md:w-96 group-hover:scale-90 duration-500">
                                    <img src="../images/ProjectNurtureMe/features/profile.png" alt="" className="w-full" />
                                </div>
                            </div>
                            <div className="z-10 flex items-center w-full md:w-[45%] space-x-3 md:space-x-6 self-end mt-24 lg:mt-[360px] group">
                                <div className="w-48 sm:w-72 md:w-96 group-hover:scale-90 duration-500">
                                    <img src="../images/ProjectNurtureMe/features/voice.png" alt="" className="w-full" />
                                </div>
                                <div className="text-[#ffba46] w-3/5">
                                    <div className="text-2xl md:text-3xl mb-6 text-right">Hands-Free Plant Identification</div>
                                    <div className="text-right">Our app makes plant identification effortless with built-in voice search. Just say the name of the plant, and our app will find it for you. No typing or scrolling required.</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Pricing */}

                    <section className="mt-24 lg:mt-48 ml-0 lg:ml-24 flex flex-col">
                        <div className="text-3xl text-[#ffba46] text-merienda self-center mr-0 lg:mr-16" id='pricing'>Pricing</div>
                        <div className="mt-8 text-center text-[#ffba46] self-center mr-2 mx-2 md:mx-0 lg:mr-16 text-play">Discover our flexible pricing options tailored to your unique requirements, without breaking the bank.</div>
                        <div className="flex flex-col md:flex-row space-x-0 md:space-x-3 xl:space-x-8 lg:w-5/6 xl:w-2/3 mr-0 lg:mr-8 mt-16 self-center text-play">

                            <div className="flex border border-[#ffba46] bg-transparent hover:bg-[#000401] hover:-translate-y-3 duration-500 pt-8 pb-4 mx-0 rounded-md flex-col items-center space-y-2 md:space-y-4 w-full mt-8 group">
                                <div className="w-full flex flex-col items-center space-y-2 px-1 lg:px-4 py-2 rounded bg-[#ffba46] group-hover:bg-[#000401] duration-500 shadow-lg">
                                    <div className="text-xl text-[#000401] group-hover:text-[#ffba46] duration-500">Free</div>
                                    <div className="text-[#000401] flex justify-center items-center group-hover:text-[#ffba46] duration-500">
                                        <div className="text-2xl text-center">$0 / month</div>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <div className="text-[#ffba46] text-center">10 Reminders</div>
                                </div>
                                <div className="flex space-x-2">
                                    <div className="text-[#ffba46] text-center">2 Locations</div>
                                </div>
                            </div>

                            <div className="flex border border-[#ffba46] pt-8 pb-4 mt-8 md:mt-0 rounded-md flex-col justify-center items-center space-y-2 md:space-y-4 w-full h-fit bg-[#ffba46] shadow-2xl hover:bg-[#000401] hover:-translate-y-6 duration-500 group">
                                <div className="w-full flex flex-col items-center space-y-2 px-1 lg:px-4 py-2 rounded bg-[#000401] group-hover:bg-[#ffba46] duration-500 shadow-lg">
                                    <div className="text-xl text-[#ffba46] group-hover:text-[#070D0E] duration-500">Basic</div>
                                    <div className="text-[#ffba46] flex space-x-1 justify-center items-center group-hover:text-[#070D0E] duration-500">
                                        <del className="text-sm text-center">$155 / month</del>
                                        <div className="text-2xl text-center">$25 / month</div>
                                    </div>
                                    <div className="flex space-x-2 group">
                                        <div className="text-[#ffba46] text-xl text-center group-hover:text-[#070D0E] duration-500">Best for Individuals</div>
                                    </div>
                                </div>
                                <div className="flex justify-center group">
                                    {/* <BsAward className='w-6 h-6 text-[#070D0E] group-hover:text-[#ffba46] duration-500' /> */}
                                    <div className="text-[#070D0E] text-center group-hover:text-[#ffba46] duration-500">1 Bonus NurtureMe. Appliance</div>
                                </div>
                                <div className="flex space-x-2 group">
                                    {/* <BsPlus className='w-6 h-6 text-[#070D0E] group-hover:text-[#ffba46] duration-500' /> */}
                                    <div className="text-[#070D0E] text-center group-hover:text-[#ffba46] duration-500">Unlimited Reminders</div>
                                </div>
                                <div className="flex space-x-2 group">
                                    {/* <BsPlus className='w-6 h-6 text-[#070D0E] group-hover:text-[#ffba46] duration-500' /> */}
                                    <div className="text-[#070D0E] text-center group-hover:text-[#ffba46] duration-500">10 NurtureMe. Integrations</div>
                                </div>
                                <div className="flex space-x-2 group">
                                    {/* <BsPlus className='w-6 h-6 text-[#070D0E] group-hover:text-[#ffba46] duration-500' /> */}
                                    <div className="text-[#070D0E] text-center group-hover:text-[#ffba46] duration-500">Unlimited Locations</div>
                                </div>
                            </div>

                            <div className="flex border border-[#ffba46] pt-8 pb-4 rounded-md flex-col justify-center items-center space-y-2 md:space-y-4 w-full mt-8 bg-[#000401] hover:bg-transparent hover:-translate-y-3 duration-500 group">
                                <div className="w-full flex flex-col items-center space-y-2 px-1 lg:px-4 py-2 rounded bg-[#ffba46] group-hover:bg-transparent duration-500 shadow-lg">
                                    <div className="text-xl text-[#070D0E] group-hover:text-[#ffba46] duration-500">Pro</div>
                                    <div className="text-[#070D0E] flex space-x-1 justify-center items-center group-hover:text-[#ffba46] duration-500">
                                        <del className="text-sm text-center">$190 / month</del>
                                        <div className="text-2xl text-center">$45 / month</div>
                                    </div>
                                    <div className="flex space-x-2 group">
                                        <div className="text-[#070D0E] text-xl text-center group-hover:text-[#ffba46] duration-500">Best for Large Spaces</div>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    {/* <BsPlus className='w-6 h-6 text-[#ffba46]' /> */}
                                    <div className="text-[#ffba46] text-center">Unlimited Reminders</div>
                                </div>
                                <div className="flex justify-center">
                                    {/* <BsPlus className='w-6 h-6 text-[#ffba46]' /> */}
                                    <div className="text-[#ffba46] text-center">Unlimited NurtureMe. Integrations</div>
                                </div>
                                <div className="flex space-x-2">
                                    {/* <BsPlus className='w-6 h-6 text-[#ffba46]' /> */}
                                    <div className="text-[#ffba46] text-center">Unlimited Locations</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Frequently Asked Questions */}

                    <section className="mt-48 ml-0 lg:ml-24 flex flex-col pb-24">
                        <div className="text-3xl text-[#ffba46] text-merienda self-center mr-0 lg:mr-16 mb-12 text-center" id='FAQs'>Frequently Asked Questions</div>
                        <div className="mr-0 lg:mr-8 flex flex-col px-2 md:px-0 space-y-4 text-play">
                            <FAQs />
                        </div>
                    </section>

                    {/* Footer */}

                    <footer className="mt-48 ml-0 lg:ml-16 flex flex-col py-4 bg-[#000]">
                        <div className="flex flex-col space-y-8 sm:space-y-0 sm:flex-row px-2 sm:px-4 md:px-16 lg:px-24 justify-between sm:items-center">
                            <div className="w-full sm:w-1/3 flex flex-col space-y-8">
                                <a href='#header' className="text-germania font-extrabold text-lg sm:text-xl md:text-3xl text-[#ffba46] select-none">NurtureMe.</a>
                                <div className="text-[#ffba46] text-play">is proud to introduce our first-ever plant watering device and app, designed to revolutionize the way people
                                    care for their plants. The app is compatible with both iOS and Android devices. We're
                                    excited to bring this innovative product to market and help plant lovers everywhere simplify their plant care routine.</div>
                            </div>
                            <div className="flex space-x-16 sm:justify-evenly w-full sm:w-2/3">
                                <div className="flex flex-col space-y-3 text-merienda text-[#ffba46]">
                                    <div className="group">
                                        <a href='#features' className='sm:px-4 py-1'>Features</a>
                                        <div className="hidden sm:block h-[1px] w-0 group-hover:w-full bg-[#ffba46] origin-left duration-500 rounded"></div>
                                    </div>
                                    <div className="group">
                                        <a href='#testimonials' className='sm:px-4 py-1'>Testimonials</a>
                                        <div className="hidden sm:block h-[1px] w-0 group-hover:w-full bg-[#ffba46] origin-left duration-500 rounded"></div>
                                    </div>
                                    <div className="group">
                                        <a href='#pricing' className='sm:px-4 py-1'>Pricing</a>
                                        <div className="hidden sm:block h-[1px] w-0 group-hover:w-full bg-[#ffba46] origin-left duration-500 rounded"></div>
                                    </div>
                                    <div className="group">
                                        <a href='#FAQs' className='sm:px-4 py-1'>FAQs</a>
                                        <div className="hidden sm:block h-[1px] w-0 group-hover:w-full bg-[#ffba46] origin-left duration-500 rounded"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-3 text-merienda text-[#ffba46]">
                                    <div className="group">
                                        <a href='#header' className='sm:px-4 py-1'>Contact Us</a>
                                        <div className="hidden sm:block h-[1px] w-0 group-hover:w-full bg-[#ffba46] origin-left duration-500 rounded"></div>
                                    </div>
                                    <div className="group">
                                        <a href='#header' className='sm:px-4 py-1'>Privacy & Security</a>
                                        <div className="hidden sm:block h-[1px] w-0 group-hover:w-full bg-[#ffba46] origin-left duration-500 rounded"></div>
                                    </div>
                                    <div className="group">
                                        <a href='#header' className='sm:px-4 py-1'>Terms of Service</a>
                                        <div className="hidden sm:block h-[1px] w-0 group-hover:w-full bg-[#ffba46] origin-left duration-500 rounded"></div>
                                    </div>
                                    <div className="group">
                                        <a href='#header' className='sm:px-4 py-1'>Help</a>
                                        <div className="hidden sm:block h-[1px] w-0 group-hover:w-full bg-[#ffba46] origin-left duration-500 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex px-2 sm:px-4 md:px-16 lg:px-24 justify-between py-12">
                            <div className="text-play text-[#ffba46]">©2023 NurtureMe.</div>
                            <div className="text-[#ffba46] flex justify-between items-center w-1/3 sm:w-1/4 lg:w-1/6">
                                <a href="#header">
                                    <FaFacebookF className="h-6 w-6" />
                                </a>
                                <a href="#header">
                                    <FaTelegramPlane className="h-6 w-6" />
                                </a>
                                <a href="#header">
                                    <FaTwitter className="h-6 w-6" />
                                </a>
                                <a href="#header">
                                    <FaInstagram className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

            :

            <div className="whole selection:bg-[#ffba46] selection:text-white relative" id='NurtHero'>

                <a href='#header' className="up w-12 h-12 rounded-full flex justify-center items-center border border-[#ffba46] fixed z-40 shadow-2xl bg-[#000401] hover:bg-[#ffba46] group duration-500 bottom-6 right-6 md:right-16">
                    <BsArrowUpShort className='text-[#ffba46] text-2xl group-hover:text-[#000401] duration-500' />
                </a>

                <div className="flex flex-col relative">

                    {/* Sidebar */}

                    <header className="w-16 h-screen hidden lg:flex fixed bg-[#0e1e22] shadow-md shadow-black z-10">
                        <a href='/nurtureme' className="text-germania text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#11272c] to-[#34844e] mx-auto self-center px-4 py-1 rounded-full border border-[#58a371] select-none">N</a>
                    </header>

                    {/* Header */}

                    <div className="bg-[#070D0E] w-full md:pl-16 shadow-xl" id='header'>
                        <section className="">
                            <header className="flex justify-between items-center px-1 md:mx-2 mt-4 md:mt-0 py-1 border-2 md:border-none border-[#58A371] rounded-full">
                                <div className="bg-gradient-to-r from-[#58a371] md:from-transparent to-[#0e1e22] md:to-transparent w-full flex justify-between items-center rounded-full px-2.5 md:px-4 py-1.5 md:py-3">
                                    <Link to='/nurtureme' className="text-germania font-extrabold text-lg sm:text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#11272c] to-[#34844e] select-none">NurtureMe.</Link>
                                    <div className="hidden text-merienda md:flex justify-between items-center w-3/5 lg:w-2/5 xl:1/3 text-[#FFBA46]">
                                        <div className="group">
                                            <a href='#features' className='px-4 py-1 font-medium text-sm'>Features</a>
                                            <div className="hidden sm:block h-[1px] w-0 group-hover:w-full bg-[#ffba46] origin-left duration-500 rounded"></div>
                                        </div>
                                        <div className="group">
                                            <a href='#pricing' className='px-4 py-1 font-medium text-sm'>Pricing</a>
                                            <div className="hidden sm:block h-[1px] w-0 group-hover:w-full bg-[#ffba46] origin-left duration-500 rounded"></div>
                                        </div>
                                        <div className="group">
                                            <a href='#FAQs' className='px-4 py-1 font-medium text-sm'>FAQs</a>
                                            <div className="hidden sm:block h-[1px] w-0 group-hover:w-full bg-[#ffba46] origin-left duration-500 rounded"></div>
                                        </div>
                                        <div className="bg-gradient-to-r from-[#081012] to-[#58A371] rounded-xl p-0.5 shadow-xl hover:shadow-none duration-500 shadow-[#34844e]/20">
                                            <button className="w-full h-full bg-gradient-to-r from-[#58A371] to-[#081012] hover:from-[#081012] hover:to-[#081012] duration-500 px-10 py-1.5 rounded-xl font-medium text-sm" onClick={devButton}>App</button>
                                        </div>
                                    </div>
                                    <Button onTrigger={devButton} />
                                </div>
                            </header>
                        </section>
                    </div>

                    {/* Hero */}

                    <section className='md:min-h-screen lg:h-full 2xl:min-h-screen mt-10 md:mt-6 2xl:mt-10 flex flex-col md:flex-row md:items-center relative'>

                        {/* Left Side */}

                        <div className="hidden md:flex flex-col items-center space-y-4 self-center w-1/2 lg:w-2/5 mx-2 md:mx-2 lg:ml-20">
                            <div className="text-xl md:text-4xl text-[#ffba46] text-merienda text-center font-medium md:font-extrabold z-30">Smart device to accompany our Smart Watering app!</div>
                            <div className="text-base text-[#ffba46] text-play">Say goodbye to wilted plants and hello to healthy greenery with our plant watering and reminder app. With our intuitive interface and customizable watering schedules, you can easily keep track of your plants' needs and never forget to water them again. Get it now!</div>
                            <div className="flex space-x-4 xl:space-x-8 px-2 py-4 w-[90%] sm:w-[70%] md:w-full xl:w-[90%] text-[#ffba46]">
                                <button className="w-full h-full bg-[#000401] px-4 md:px-4 lg:px-4 py-4 rounded-xl border border-[#ffba46] shadow-2xl flex justify-around items-center hover:text-[#000401] hover:bg-[#ffba46] duration-500">
                                    <FaAmazon className='text-4xl' />
                                    <div className="flex flex-col space-y-1 text-play">
                                        <div className="text-xs">Buy From</div>
                                        <div className="text-base">Amazon</div>
                                    </div>
                                </button>
                                <button className="w-full h-full bg-[#000401] px-4 md:px-4 lg:px-4 py-4 rounded-xl border border-[#ffba46] shadow-2xl flex justify-around items-center hover:text-[#000401] hover:bg-[#ffba46] duration-500">
                                    <FaShopify className='text-4xl' />
                                    <div className="flex flex-col space-y-1 text-play">
                                        <div className="text-xs">Buy From</div>
                                        <div className="text-base">Shopify</div>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* Right Side */}

                        <div className="w-full md:w-1/2 lg:w-3/5 -mr-4 md:mr-6 z-10">
                            <div className="shadow-green-400 flex justify-center -space-x-1.5 md:-space-x-6 w-full">
                                <div className="w-full group mx-2 md:mx-4 lg:mx-6 flex flex-col justify-between items-center">
                                    <div className="text-germania font-extrabold text-3xl sm:text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r md:bg-none from-[#11272c] to-[#34844e] select-none">NurtureMe.</div>
                                    <div className="w-5/6 sm:w-3/4 md:w-5/6 lg:w-3/5 2xl:w-3/4 flex flex-col space-y-8 items-center group z-20">
                                        <img src="../images/ProjectNurtureMe/dev3.jpg" alt="" className="group-hover:-translate-y-8 group-hover:scale-110 delay-200 duration-500 rounded-xl" />
                                    </div>
                                    <div className="text-germania font-extrabold text-3xl sm:text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#11272c] to-[#34844e] select-none">NurtureMe.</div>
                                </div>
                            </div>
                        </div>

                        {/* Top from 0px-768px Viewport */}

                        <div className="flex md:hidden flex-col items-center space-y-4 self-center w-full mt-8 md:mt-0 md:w-2/5 md:mx-0 lg:ml-20">
                            <div className="mx-4 md:mx-0 text-xl md:text-4xl text-[#ffba46] text-merienda text-center font-medium md:font-extrabold z-30">Smart device to accompany our Smart Watering app!</div>
                            <div className="mx-2 md:mx-0 text-sm text-[#ffba46] text-play">Say goodbye to wilted plants and hello to healthy greenery with our plant watering and reminder app. With our intuitive interface and customizable watering schedules, you can easily keep track of your plants' needs and never forget to water them again. Get it now!</div>
                            <div className="flex space-x-4 xl:space-x-8 px-2 py-4 w-[90%] sm:w-[70%] md:w-full xl:w-[90%] text-[#ffba46]">
                                <button className="w-full h-full bg-[#000401] px-4 md:px-4 lg:px-4 py-4 rounded-xl border border-[#ffba46] shadow-2xl flex justify-around items-center hover:text-[#000401] hover:bg-[#ffba46] duration-500">
                                    <FaAmazon className='text-4xl' />
                                    <div className="flex flex-col space-y-1 text-play">
                                        <div className="text-xs">Buy From</div>
                                        <div className="text-base">Amazon</div>
                                    </div>
                                </button>
                                <button className="w-full h-full bg-[#000401] px-4 md:px-4 lg:px-4 py-4 rounded-xl border border-[#ffba46] shadow-2xl flex justify-around items-center hover:text-[#000401] hover:bg-[#ffba46] duration-500">
                                    <FaShopify className='text-4xl' />
                                    <div className="flex flex-col space-y-1 text-play">
                                        <div className="text-xs">Buy From</div>
                                        <div className="text-base">Shopify</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Testimonials */}

                    <section className="tests mt-16 md:mt-20 space-y-8 sm:space-y-16 lg:ml-24 flex flex-col items-center select-none mr-2 sm:mr-4 md:mr-8 ml-2 sm:ml-4 md:ml-8 lg:mr-0 text-play">
                        <div className="self-center" id='testimonials'>
                            <div className="text-2xl md:text-3xl text-[#ffba46] text-merienda text-center mt-20 mr-0 lg:mr-16">Here are just only some of our many, many admirers.</div>
                        </div>

                        {/* 1 */}

                        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 w-full lg:w-[90%] lg:mr-8">
                            <div className="flex flex-col items-center -space-y-6 lg:mt-12 group hover:-translate-y-3 duration-500">
                                <div className="rounded-full border border-[#070D0E] shadow-xl w-28 z-10 group-hover:scale-125 duration-500">
                                    <img src="../images/ProjectNurtureMe/dev/dev5.jpg" alt="" className="rounded-full" />
                                </div>
                                <div className="px-4 pt-8 pb-6 text-[#ffba46] bg-[#070d0e] border border-[#ffba46] rounded flex flex-col space-y-4 items-center group-hover:text-[#070d0e] group-hover:bg-[#ffba46] duration-500">
                                    <div className="text-xl text-center">Ethan Hernandez</div>
                                    <div className="text-base md:text-lg text-center">"I'm absolutely thrilled with the plant watering reminder app and electronic watering device! It's such a relief to know that my plants are being taken care of, even when I'm not around. The app is very user-friendly and the device is very efficient. Highly recommend it to all plant lovers!"</div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center -space-y-6 group hover:-translate-y-3 duration-500">
                                <div className="rounded-full border border-[#070D0E] shadow-xl w-28 z-10 group-hover:scale-125 duration-500">
                                    <img src="../images/ProjectNurtureMe/dev/dev2.jpg" alt="" className="rounded-full" />
                                </div>
                                <div className="px-4 pt-8 pb-6 text-[#ffba46] bg-[#070d0e] border border-[#ffba46] rounded flex flex-col space-y-4 items-center group-hover:text-[#070d0e] group-hover:bg-[#ffba46] duration-500">
                                    <div className="text-xl text-center">Isobel Smith</div>
                                    <div className="text-base md:text-lg text-center">"The electronic watering device and plant watering reminder app have made my life so much easier. I'm not the best at remembering to water my plants, but with this device, I don't have to worry about that anymore. The app is also very helpful in keeping track of watering schedules. Thank you for this amazing product!"</div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center -space-y-6 lg:mt-12 group hover:-translate-y-3 duration-500">
                                <div className="rounded-full border border-[#070D0E] shadow-xl w-28 z-10 group-hover:scale-125 duration-500">
                                    <img src="../images/ProjectNurtureMe/test/test3.jpg" alt="" className="rounded-full" />
                                </div>
                                <div className="px-4 pt-8 pb-6 text-[#ffba46] bg-[#070d0e] border border-[#ffba46] rounded flex flex-col space-y-4 items-center group-hover:text-[#070d0e] group-hover:bg-[#ffba46] duration-500">
                                    <div className="text-xl text-center">Thomas Wilson</div>
                                    <div className="text-base md:text-lg text-center">"As someone who's always on the go, the plant watering reminder app and electronic watering device have been a lifesaver. I love that I can control the watering from my phone, and the device is very reliable and efficient. The app is also very easy to use and sends me reminders when it's time to water my plants. Highly recommend it to others!"</div>
                                </div>
                            </div>

                            <div className="flex lg:hidden flex-col items-center -space-y-6 group hover:-translate-y-3 duration-500">
                                <div className="rounded-full border border-[#070D0E] shadow-xl w-28 z-10 group-hover:scale-125 duration-500">
                                    <img src="../images/ProjectNurtureMe/dev/dev4.jpg" alt="" className="rounded-full" />
                                </div>
                                <div className="px-4 pt-8 pb-6 text-[#ffba46] bg-[#070d0e] border border-[#ffba46] rounded flex flex-col space-y-4 items-center group-hover:text-[#070d0e] group-hover:bg-[#ffba46] duration-500">
                                    <div className="text-xl text-center">Samantha Heck</div>
                                    <div className="text-base md:text-lg text-center">"I can't say enough good things about the plant watering reminder app and electronic watering device. The device is very sleek and modern-looking, and it's incredibly easy to use. The app is also very helpful in keeping track of watering schedules and sending reminders. I've recommended this to all my plant-loving friends!"</div>
                                </div>
                            </div>
                        </div>

                        {/* 2 */}

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 w-full lg:w-[60%] lg:mr-8 self-center">
                            <div className="hidden lg:flex flex-col items-center -space-y-6 group hover:-translate-y-3 duration-500">
                                <div className="rounded-full border border-[#070D0E] shadow-xl w-28 z-10 group-hover:scale-125 duration-500">
                                    <img src="../images/ProjectNurtureMe/dev/dev4.jpg" alt="" className="rounded-full" />
                                </div>
                                <div className="px-4 pt-8 pb-6 text-[#ffba46] bg-[#070d0e] border border-[#ffba46] rounded flex flex-col space-y-4 items-center group-hover:text-[#070d0e] group-hover:bg-[#ffba46] duration-500">
                                    <div className="text-xl text-center">Samantha Scott</div>
                                    <div className="text-base md:text-lg text-center">"I can't say enough good things about the plant watering reminder app and electronic watering device. The device is very sleek and modern-looking, and it's incredibly easy to use. The app is also very helpful in keeping track of watering schedules and sending reminders. I've recommended this to all my plant-loving friends!"</div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center -space-y-6 group hover:-translate-y-3 duration-500">
                                <div className="rounded-full border border-[#070D0E] shadow-xl w-28 z-10 group-hover:scale-125 duration-500">
                                    <img src="../images/ProjectNurtureMe/dev/dev3.jpg" alt="" className="rounded-full" />
                                </div>
                                <div className="px-4 pt-8 pb-6 text-[#ffba46] bg-[#070d0e] border border-[#ffba46] rounded flex flex-col space-y-4 items-center group-hover:text-[#070d0e] group-hover:bg-[#ffba46] duration-500">
                                    <div className="text-xl text-center">Rachel Tucker</div>
                                    <div className="text-base md:text-lg text-center">"The plant watering reminder app and electronic watering device are simply amazing. I used to struggle with keeping my plants alive, but now they're thriving thanks to this device. The app is also very helpful in keeping track of watering schedules and sending reminders. I couldn't be happier with my purchase!"</div>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* Features */}

                    <section className="mt-16 md:mt-20  ml-0 lg:ml-24 flex flex-col">
                        <div className="self-center" id='features'>
                            <div className="text-2xl md:text-3xl text-[#ffba46] text-merienda mt-20 mr-0 lg:mr-16">Features</div>
                        </div>
                        <div className="mt-8 text-center text-[#ffba46] self-center mr-2 lg:mr-16 mx-2 md:mx-0 text-play">Our equipment is designed to work in a wide spectrum of conditions and is packed with many useful features.</div>

                        <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 mx-2 md:mx-4 lg:mx-0 text-play">
                            <div className="mt-12 md:mt-24 lg:mt-36 z-10 flex items-center w-full md:w-[50%] lg:w-[45%] space-x-3 md:space-x-6 group">
                                <div className="text-[#ffba46] w-3/5">
                                    <div className="text-2xl md:text-3xl mb-6">Know Everything</div>
                                    <div className="">Thanks to our device, you have everything that is to know about to know about your plant right at your hand. Plus, you can easily adjust watering schedules, amounts and times. But we are also more than capable of managing it all by ourselves.</div>
                                </div>
                                <div className="w-48 sm:w-72 md:w-96 group-hover:scale-90 duration-500">
                                    <img src="../images/ProjectNurtureMe/devfeatures/3.png" alt="" className="w-full rounded-xl" />
                                </div>
                            </div>
                            <div className="z-10 flex items-center w-full md:w-[45%] space-x-3 md:space-x-6 self-end mt-24 lg:mt-[360px] group">
                                <div className="w-48 sm:w-72 md:w-96 group-hover:scale-90 duration-500">
                                    <img src="../images/ProjectNurtureMe/devfeatures/4.png" alt="" className="w-full" />
                                </div>
                                <div className="text-[#ffba46] w-3/5">
                                    <div className="text-2xl md:text-3xl mb-6 text-right">Easy Setup</div>
                                    <div className="text-right">We made our setup process as simple as anything can get to save your precious time even more. It is equipped with two methods of connections. Scan a QR-Code or Fill the code yourself if you prefer that.</div>
                                </div>
                            </div>

                        </div>
                        <div className="mt-24 md:mt-0 flex flex-col md:flex-row space-x-0 md:space-x-8 mx-2 md:mx-4 lg:mx-0 text-play">
                            <div className="mt-12 md:mt-24 lg:mt-36 z-10 flex items-center w-full md:w-[50%] lg:w-[45%] space-x-3 md:space-x-6 group">
                                <div className="text-[#ffba46] w-3/5">
                                    <div className="text-2xl md:text-3xl mb-6">Scan Away</div>
                                    <div className="">Are you in a rush? Just aim your camera towards the QR-Code and we will do the rest. Each of our devices come with unique identification codes and once you scan the QR-Code of the one you just bought, we will automatically add it into your list along with the plant profile you made.</div>
                                </div>
                                <div className="w-48 sm:w-72 md:w-96 group-hover:scale-90 duration-500">
                                    <img src="../images/ProjectNurtureMe/devfeatures/2.png" alt="" className="w-full" />
                                </div>
                            </div>
                            <div className="z-10 flex items-center w-full md:w-[45%] space-x-3 md:space-x-6 self-end mt-24 lg:mt-[360px] group">
                                <div className="w-48 sm:w-72 md:w-96 group-hover:scale-90 duration-500">
                                    <img src="../images/ProjectNurtureMe/devfeatures/1.png" alt="" className="w-full" />
                                </div>
                                <div className="text-[#ffba46] w-3/5 text-right">
                                    <div className="text-2xl md:text-3xl mb-6">Code it in</div>
                                    <div className="text-right">Got a little time to spare? Or got a bad camera condition? Don't worry! We've got you covered. In such cases, our device also comes with identification codes right below the qr code. Fill that in and as always we will do the rest for you.</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 mx-2 md:mx-4 lg:mx-0 text-play">
                            <div className="mt-24 lg:mt-36 z-10 flex items-center w-full md:w-[50%] lg:w-[45%] space-x-3 md:space-x-6 group">
                                <div className="text-[#ffba46] w-3/5">
                                    <div className="text-2xl md:text-3xl mb-6">Out of the box Functionality</div>
                                    <div className="">Are you too busy to set it up? Don't worry! Our device comes with a feature that makes it run without being setup just right out of the box. Just fill it up and put it with your plant. It will keep it hydrated to an extent that is optimum for most plant types.</div>
                                </div>
                                <div className="w-48 sm:w-72 md:w-96 group-hover:scale-90 duration-500">
                                    <img src="../images/ProjectNurtureMe/dev4.jpg" alt="" className="w-full rounded-xl" />
                                </div>
                            </div>
                            <div className="z-10 flex items-center w-full md:w-[45%] space-x-3 md:space-x-6 self-end mt-24 lg:mt-[360px] group">
                                <div className="w-48 sm:w-72 md:w-96 group-hover:scale-90 duration-500">
                                    <img src="../images/ProjectNurtureMe/devfeatures/5.png" alt="" className="w-full" />
                                </div>
                                <div className="text-[#ffba46] w-3/5">
                                    <div className="text-2xl md:text-3xl mb-6 text-right">Easy Disconnect</div>
                                    <div className="text-right">For any unfortunate reason if you decide to disconnect and stop using our device or hopefully assign it to another plant, we have designed an easy disconnect feature. Just go to your plant list section in our app and delete the plant you want to disconnect. Then you can reconnect it to another plant.</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Pricing */}

                    <section className="mt-24 lg:mt-48 ml-0 lg:ml-24 flex flex-col">
                        <div className="text-3xl text-[#ffba46] text-merienda self-center mr-0 lg:mr-16" id='pricing'>Pricing</div>
                        <div className="mt-8 text-center text-[#ffba46] self-center mr-2 mx-2 md:mx-0 lg:mr-16 text-play">Discover our flexible pricing options tailored to your unique requirements, without breaking the bank.</div>
                        <div className="flex flex-col md:flex-row space-x-0 md:space-x-3 xl:space-x-8 lg:w-5/6 xl:w-2/3 mr-0 lg:mr-8 mt-16 self-center text-play">

                            <div className="flex border border-[#ffba46] bg-transparent hover:bg-[#000401] hover:-translate-y-3 duration-500 pt-8 pb-4 mx-0 rounded-md flex-col items-center space-y-2 md:space-y-4 w-full mt-8 group">
                                <div className="w-full flex flex-col items-center space-y-2 px-1 lg:px-4 py-2 rounded bg-[#ffba46] group-hover:bg-[#000401] duration-500 shadow-lg">
                                    <div className="text-xl text-[#000401] group-hover:text-[#ffba46] duration-500">Get 1 For</div>
                                    <div className="text-[#000401] flex justify-center items-center group-hover:text-[#ffba46] duration-500">
                                        <div className="text-2xl text-center">Free</div>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <div className="text-[#ffba46] text-center">With Your First Basic</div>
                                </div>
                                <div className="flex space-x-2">
                                    <div className="text-[#ffba46] text-center">Basic NurtureMe. Subscription</div>
                                </div>
                                <div className="flex space-x-2 group">
                                    {/* <BsPlus className='w-6 h-6 text-[#ffba46]' /> */}
                                    <div className="text-center text-[#ffba46]">2 Years Warranty</div>
                                </div>
                            </div>

                            <div className="flex border border-[#ffba46] h-full pt-8 pb-4 mt-8 md:mt-0 rounded-md flex-col justify-center items-center space-y-2 md:space-y-4 w-full bg-[#ffba46] shadow-2xl hover:bg-[#000401] hover:-translate-y-6 duration-500 group">
                                <div className="w-full flex flex-col items-center space-y-2 px-1 lg:px-4 py-2 rounded bg-[#000401] group-hover:bg-[#ffba46] duration-500 shadow-lg">
                                    <div className="text-xl text-[#ffba46] group-hover:text-[#070D0E] duration-500">Basic</div>
                                    <div className="text-[#ffba46] flex space-x-1 justify-center items-center group-hover:text-[#070D0E] duration-500">
                                        <del className="text-sm text-center">$275</del>
                                        <div className="text-2xl text-center">$70 / Piece</div>
                                    </div>
                                    <div className="flex space-x-2 group">
                                        <div className="text-[#ffba46] text-xl text-center group-hover:text-[#070D0E] duration-500">Best for Individuals</div>
                                    </div>
                                </div>
                                <div className="flex space-x-2 group">
                                    {/* <BsPlus className='w-6 h-6 text-[#070D0E] group-hover:text-[#ffba46] duration-500' /> */}
                                    <div className="text-[#070D0E] text-center group-hover:text-[#ffba46] duration-500">3 upto 5 NurtureMe. Devices</div>
                                </div>
                                {/* <div className="flex space-x-2 group">
                  <BsPlus className='w-6 h-6 text-[#070D0E] group-hover:text-[#ffba46] duration-500' />
                  <div className="text-[#070D0E] text-center group-hover:text-[#ffba46] duration-500">10 NurtureMe. Integrations</div>
                </div> */}
                                <div className="flex space-x-2 group">
                                    {/* <BsPlus className='w-6 h-6 text-[#070D0E] group-hover:text-[#ffba46] duration-500' /> */}
                                    <div className="text-[#070D0E] text-center group-hover:text-[#ffba46] duration-500">Unlimited Locations</div>
                                </div>
                                <div className="flex space-x-2 group">
                                    {/* <BsPlus className='w-6 h-6 text-[#070D0E] group-hover:text-[#ffba46] duration-500' /> */}
                                    <div className="text-[#070D0E] text-center group-hover:text-[#ffba46] duration-500">3 Years Warranty</div>
                                </div>
                            </div>

                            <div className="flex border border-[#ffba46] pt-8 pb-4 rounded-md flex-col justify-center items-center space-y-2 md:space-y-4 w-full mt-8 bg-[#000401] hover:bg-transparent hover:-translate-y-3 duration-500 group">
                                <div className="w-full flex flex-col items-center space-y-2 px-1 lg:px-4 py-2 rounded bg-[#ffba46] group-hover:bg-transparent duration-500 shadow-lg">
                                    <div className="text-xl text-[#070D0E] group-hover:text-[#ffba46] duration-500">Pro</div>
                                    <div className="text-[#070D0E] flex space-x-1 justify-center items-center group-hover:text-[#ffba46] duration-500">
                                        <del className="text-sm text-center">$270</del>
                                        <div className="text-2xl text-center">$55 / Piece</div>
                                    </div>
                                    <div className="flex space-x-2 group">
                                        <div className="text-[#070D0E] text-xl text-center group-hover:text-[#ffba46] duration-500">Best for Large Spaces</div>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    {/* <BsPlus className='w-6 h-6 text-[#ffba46]' /> */}
                                    <div className="text-[#ffba46] text-center">More than 5 NurtureMe. Devices</div>
                                </div>
                                <div className="flex justify-center">
                                    {/* <BsPlus className='w-6 h-6 text-[#ffba46]' /> */}
                                    <div className="text-[#ffba46] text-center">Free Upgrade to Pro Subscription</div>
                                </div>
                                <div className="flex space-x-2">
                                    {/* <BsPlus className='w-6 h-6 text-[#ffba46]' /> */}
                                    <div className="text-[#ffba46] text-center">Unlimited Locations</div>
                                </div>
                                <div className="flex space-x-2">
                                    {/* <BsPlus className='w-6 h-6 text-[#ffba46]' /> */}
                                    <div className="text-[#ffba46] text-center">5 Years Warranty</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Frequently Asked Questions */}

                    <section className="mt-48 ml-0 lg:ml-24 flex flex-col pb-24">
                        <div className="text-3xl text-[#ffba46] text-merienda self-center mr-0 lg:mr-16 mb-12 text-center" id='FAQs'>Frequently Asked Questions</div>
                        <div className="mr-0 lg:mr-8 flex flex-col px-2 md:px-0 space-y-4 text-play">
                            <FAQDev />
                        </div>
                    </section>

                    {/* Footer */}

                    <footer className="mt-48 ml-0 lg:ml-16 flex flex-col py-4 bg-[#000]">
                        <div className="flex flex-col space-y-8 sm:space-y-0 sm:flex-row px-2 sm:px-4 md:px-16 lg:px-24 justify-between sm:items-center">
                            <div className="w-full sm:w-1/3 flex flex-col space-y-8">
                                <a href='#header' className="text-germania font-extrabold text-lg sm:text-xl md:text-3xl text-[#ffba46] select-none">NurtureMe.</a>
                                <div className="text-[#ffba46] text-play">is proud to introduce our first-ever plant watering device and app, designed to revolutionize the way people
                                    care for their plants. The app is compatible with both iOS and Android devices. We're
                                    excited to bring this innovative product to market and help plant lovers everywhere simplify their plant care routine.</div>
                            </div>
                            <div className="flex space-x-16 sm:justify-evenly w-full sm:w-2/3">
                                <div className="flex flex-col space-y-3 text-merienda text-[#ffba46]">
                                    <div className="group">
                                        <a href='#features' className='sm:px-4 py-1'>Features</a>
                                        <div className="hidden sm:block h-[1px] w-0 group-hover:w-full bg-[#ffba46] origin-left duration-500 rounded"></div>
                                    </div>
                                    <div className="group">
                                        <a href='#testimonials' className='sm:px-4 py-1'>Testimonials</a>
                                        <div className="hidden sm:block h-[1px] w-0 group-hover:w-full bg-[#ffba46] origin-left duration-500 rounded"></div>
                                    </div>
                                    <div className="group">
                                        <a href='#pricing' className='sm:px-4 py-1'>Pricing</a>
                                        <div className="hidden sm:block h-[1px] w-0 group-hover:w-full bg-[#ffba46] origin-left duration-500 rounded"></div>
                                    </div>
                                    <div className="group">
                                        <a href='#FAQs' className='sm:px-4 py-1'>FAQs</a>
                                        <div className="hidden sm:block h-[1px] w-0 group-hover:w-full bg-[#ffba46] origin-left duration-500 rounded"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col space-y-3 text-merienda text-[#ffba46]">
                                    <div className="group">
                                        <a href='#header' className='sm:px-4 py-1'>Contact Us</a>
                                        <div className="hidden sm:block h-[1px] w-0 group-hover:w-full bg-[#ffba46] origin-left duration-500 rounded"></div>
                                    </div>
                                    <div className="group">
                                        <a href='#header' className='sm:px-4 py-1'>Privacy & Security</a>
                                        <div className="hidden sm:block h-[1px] w-0 group-hover:w-full bg-[#ffba46] origin-left duration-500 rounded"></div>
                                    </div>
                                    <div className="group">
                                        <a href='#header' className='sm:px-4 py-1'>Terms of Service</a>
                                        <div className="hidden sm:block h-[1px] w-0 group-hover:w-full bg-[#ffba46] origin-left duration-500 rounded"></div>
                                    </div>
                                    <div className="group">
                                        <a href='#header' className='sm:px-4 py-1'>Help</a>
                                        <div className="hidden sm:block h-[1px] w-0 group-hover:w-full bg-[#ffba46] origin-left duration-500 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex px-2 sm:px-4 md:px-16 lg:px-24 justify-between py-12">
                            <div className="text-play text-[#ffba46]">©2023 NurtureMe.</div>
                            <div className="text-[#ffba46] flex justify-between items-center w-1/3 sm:w-1/4 lg:w-1/6">
                                <a href="#header">
                                    <FaFacebookF className="h-6 w-6" />
                                </a>
                                <a href="#header">
                                    <FaTelegramPlane className="h-6 w-6" />
                                </a>
                                <a href="#header">
                                    <FaTwitter className="h-6 w-6" />
                                </a>
                                <a href="#header">
                                    <FaInstagram className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
    );
}

export default ProjectNurtureMe;
