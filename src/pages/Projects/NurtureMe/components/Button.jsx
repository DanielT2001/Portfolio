import React, { useState } from 'react'
import { BsListNested } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'

function Button({ onTrigger, appOrDev }) {
    const [menu, setmenu] = useState(false);
    const showDev = () => {
        onTrigger()
    }
    const showMenu = () => {
        setmenu(!menu)
    }
    return (
        <>
            <div className="text-[#FFBA46] text-xl md:hidden">
                <BsListNested className={menu ? 'hidden' : 'block'} onClick={showMenu} />
                <AiOutlineClose className={menu ? 'block' : 'hidden'} onClick={showMenu} />
                <div className={menu ? 'bg-gradient-to-r from-[#58a371] to-[#0e1e22]' : ''}>
                    <div className="absolute top-12 right-12 bg-gradient-to-r from-[#58a371] to-[#0e1e22] z-30 rounded-xl shadow-2xl">
                        <div className={menu ? 'block p-4' : 'hidden'}>
                            <div className='text-play text-[16px] flex flex-col space-y-2 items-end'>
                                <a href='#features' className="" onClick={showMenu}>Features</a>
                                <a href='#pricing' className="" onClick={showMenu}>Pricing</a>
                                <a href='#FAQs' className="" onClick={showMenu}>FAQs</a>
                                {appOrDev ?
                                    <div className="font-bold" onClick={showDev} onClickCapture={showMenu}>Device</div>
                                    :
                                    <div className="font-bold" onClick={showDev} onClickCapture={showMenu}>App</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Button