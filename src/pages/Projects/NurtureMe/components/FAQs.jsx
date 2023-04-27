import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'

function FAQs() {
    const [faq1, setFaq1] = useState(true)
    const [faq2, setFaq2] = useState(false)
    const [faq3, setFaq3] = useState(false)
    const [faq4, setFaq4] = useState(false)
    const [faq5, setFaq5] = useState(false)

    const showFaq1 = () => {
        if (faq1 === false) {
            setFaq1(true)
            setFaq2(false)
            setFaq3(false)
            setFaq4(false)
            setFaq5(false)
        } else {
            setFaq1(false)
            setFaq2(true)
        }
    }

    const showFaq2 = () => {
        if (faq2 === false) {
            setFaq1(false)
            setFaq2(true)
            setFaq3(false)
            setFaq4(false)
            setFaq5(false)
        } else {
            setFaq2(false)
            setFaq3(true)
        }
    }

    const showFaq3 = () => {
        if (faq3 === false) {
            setFaq1(false)
            setFaq2(false)
            setFaq3(true)
            setFaq4(false)
            setFaq5(false)
        } else {
            setFaq3(false)
            setFaq4(true)
        }
    }

    const showFaq4 = () => {
        if (faq4 === false) {
            setFaq1(false)
            setFaq2(false)
            setFaq3(false)
            setFaq4(true)
            setFaq5(false)
        } else {
            setFaq4(false)
            setFaq5(true)
        }
    }

    const showFaq5 = () => {
        if (faq5 === false) {
            setFaq1(false)
            setFaq2(false)
            setFaq3(false)
            setFaq4(false)
            setFaq5(true)
        } else {
            setFaq5(false)
            setFaq1(true)
        }
    }

    return (
        <>
            {/* FAQ-1 */}
            <div className="flex flex-col -space-y-1 w-full md:w-3/4 mx-auto rounded-xl">
                <div className="flex justify-between items-center pl-4 py-2.5 rounded-xl shadow-xl bg-[#ffba46] z-10" onClick={showFaq1}>
                    <div className="text-[#070D0E] text-base md:text-lg">What does NurtureMe. do?</div>
                    <div className="text-[#070D0E] font-bold px-6" onClick={showFaq1}>
                        <FaAngleDown className={`text-xl ${faq1 ? 'rotate-180' : 'rotate-0'}`} />
                    </div>
                </div>
                <div className={`text-[#070d0e w-[99%] mx-auto bg-[#ffba46] px-4 pt-4 pb-3 rounded-bl-xl rounded-br-xl ${faq1 ? 'block' : 'hidden'}`}>NurtureMe. is a mobile app that helps you keep track of and fulfil your plants' water needs by combining the NurtureMe. watering appliance, your plant list and custom reminders.</div>
            </div>

            {/* FAQ-2 */}
            <div className="flex flex-col -space-y-1 w-full md:w-3/4 mx-auto rounded-xl">
                <div className="flex justify-between items-center pl-4 py-2.5 rounded-xl shadow-xl bg-[#ffba46] z-10" onClick={showFaq2}>
                    <div className="text-[#070D0E] text-base md:text-lg">Is the app available in multiple languages?</div>
                    <div className="text-[#070D0E] font-bold px-6" onClick={showFaq2}>
                        <FaAngleDown className={`text-xl ${faq2 ? 'rotate-180' : 'rotate-0'}`} />
                    </div>
                </div>
                <div className={`text-[#070d0e w-[99%] mx-auto bg-[#ffba46] px-4 pt-4 pb-3 rounded-bl-xl rounded-br-xl ${faq2 ? 'block' : 'hidden'}`}>Currently, our app is available in English and Spanish. However, we are actively working on adding support for additional languages in the near future.</div>
            </div>

            {/* FAQ-3 */}
            <div className="flex flex-col -space-y-1 w-full md:w-3/4 mx-auto rounded-xl">
                <div className="flex justify-between items-center pl-4 py-2.5 rounded-xl shadow-xl bg-[#ffba46] z-10" onClick={showFaq3}>
                    <div className="text-[#070D0E] text-base md:text-lg">Can I add custom notes to my plant profiles?</div>
                    <div className="text-[#070D0E] font-bold px-6" onClick={showFaq3}>
                        <FaAngleDown className={`text-xl ${faq3 ? 'rotate-180' : 'rotate-0'}`} />
                    </div>
                </div>
                <div className={`text-[#070d0e w-[99%] mx-auto bg-[#ffba46] px-4 pt-4 pb-3 rounded-bl-xl rounded-br-xl ${faq3 ? 'block' : 'hidden'}`}>Yes, our app allows you to add custom notes to your plant profiles. This is a great way to to keep track of important information.</div>
            </div>

            {/* FAQ-4 */}
            <div className="flex flex-col -space-y-1 w-full md:w-3/4 mx-auto rounded-xl">
                <div className="flex justify-between items-center pl-4 py-2.5 rounded-xl shadow-xl bg-[#ffba46] z-10" onClick={showFaq4}>
                    <div className="text-[#070D0E] text-base md:text-lg">Can I use the app to track multiple gardens or indoor plants?</div>
                    <div className="text-[#070D0E] font-bold px-6" onClick={showFaq4}>
                        <FaAngleDown className={`text-xl ${faq4 ? 'rotate-180' : 'rotate-0'}`} />
                    </div>
                </div>
                <div className={`text-[#070d0e w-[99%] mx-auto bg-[#ffba46] px-4 pt-4 pb-3 rounded-bl-xl rounded-br-xl ${faq4 ? 'block' : 'hidden'}`}>Yes, our app allows you to create multiple gardens or indoor plant collections, each with its own set of plant profiles. This is our great way to keep track of all your plants in one place.</div>
            </div>

            {/* FAQ-5 */}
            <div className="flex flex-col -space-y-1 w-full md:w-3/4 mx-auto rounded-xl">
                <div className="flex justify-between items-center pl-4 py-2.5 rounded-xl shadow-xl bg-[#ffba46] z-10" onClick={showFaq5}>
                    <div className="text-[#070D0E] text-base md:text-lg">How secure is my data on the app?</div>
                    <div className="text-[#070D0E] font-bold px-6" onClick={showFaq5}>
                        <FaAngleDown className={`text-xl ${faq5 ? 'rotate-180' : 'rotate-0'}`} />
                    </div>
                </div>
                <div className={`text-[#070d0e w-[99%] mx-auto bg-[#ffba46] px-4 pt-4 pb-3 rounded-bl-xl rounded-br-xl ${faq5 ? 'block' : 'hidden'}`}>We take security of your data very seriously. All of your plant profiles and your other data are stored securely on our Linux servers, and we use industry-standard encryption to protect your information.</div>
            </div>
        </>
    )
}

export default FAQs