import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'

function FAQDev() {
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
                    <div className="text-[#070D0E] text-base md:text-lg">What does NurtureMe. Appliance do?</div>
                    <div className="text-[#070D0E] font-bold px-6" onClick={showFaq1}>
                        <FaAngleDown className={`text-xl ${faq1 ? 'rotate-180' : 'rotate-0'}`} />
                    </div>
                </div>
                <div className={`text-[#070d0e w-[99%] mx-auto bg-[#ffba46] px-4 pt-4 pb-3 rounded-bl-xl rounded-br-xl ${faq1 ? 'block' : 'hidden'}`}>NurtureMe. Appliance is an automated plant watering device that you can control and modify with our NurtureMe. app. It let's you keep track of your plants' water levels and water them for you.</div>
            </div>

            {/* FAQ-2 */}
            <div className="flex flex-col -space-y-1 w-full md:w-3/4 mx-auto rounded-xl">
                <div className="flex justify-between items-center pl-4 py-2.5 rounded-xl shadow-xl bg-[#ffba46] z-10" onClick={showFaq2}>
                    <div className="text-[#070D0E] text-base md:text-lg">Where can I get it?</div>
                    <div className="text-[#070D0E] font-bold px-6" onClick={showFaq2}>
                        <FaAngleDown className={`text-xl ${faq2 ? 'rotate-180' : 'rotate-0'}`} />
                    </div>
                </div>
                <div className={`text-[#070d0e w-[99%] mx-auto bg-[#ffba46] px-4 pt-4 pb-3 rounded-bl-xl rounded-br-xl ${faq2 ? 'block' : 'hidden'}`}>We have spread our products throughout major sales companies such as Amazon and Shopify. You can order them from one of those stores and get them delivered to your doorsteps. More stores to come soon!</div>
            </div>

            {/* FAQ-3 */}
            <div className="flex flex-col -space-y-1 w-full md:w-3/4 mx-auto rounded-xl">
                <div className="flex justify-between items-center pl-4 py-2.5 rounded-xl shadow-xl bg-[#ffba46] z-10" onClick={showFaq3}>
                    <div className="text-[#070D0E] text-base md:text-lg">How can I identify which device is connected to which plant?</div>
                    <div className="text-[#070D0E] font-bold px-6" onClick={showFaq3}>
                        <FaAngleDown className={`text-xl ${faq3 ? 'rotate-180' : 'rotate-0'}`} />
                    </div>
                </div>
                <div className={`text-[#070d0e w-[99%] mx-auto bg-[#ffba46] px-4 pt-4 pb-3 rounded-bl-xl rounded-br-xl ${faq3 ? 'block' : 'hidden'}`}>There are multiple ways to achieve that. The easiest way is to touch the date added in your plant profile and the respective device will beep. Or you can also match the device id in the plant profile with the id located on the device.</div>
            </div>

            {/* FAQ-4 */}
            <div className="flex flex-col -space-y-1 w-full md:w-3/4 mx-auto rounded-xl">
                <div className="flex justify-between items-center pl-4 py-2.5 rounded-xl shadow-xl bg-[#ffba46] z-10" onClick={showFaq4}>
                    <div className="text-[#070D0E] text-base md:text-lg">Is it possible to be tracked by the device?</div>
                    <div className="text-[#070D0E] font-bold px-6" onClick={showFaq4}>
                        <FaAngleDown className={`text-xl ${faq4 ? 'rotate-180' : 'rotate-0'}`} />
                    </div>
                </div>
                <div className={`text-[#070d0e w-[99%] mx-auto bg-[#ffba46] px-4 pt-4 pb-3 rounded-bl-xl rounded-br-xl ${faq4 ? 'block' : 'hidden'}`}>Absolutely not! We have a double encryption system employed on any data transfer between you and us. Your data is processed and never stored on our most secure servers. So there is no chance of anyone else knowing your location.</div>
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

export default FAQDev