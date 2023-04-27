import React from 'react'
import { Link } from 'react-router-dom'

function DropDown() {
    return (
        <div className="text-lg md:text-xl text-[#FFAA00] group duration-500 font-merienda">
            <div className="px-2 py-1 group-hover:text-[#00D48D] duration-500">UX</div>
            <div className="w-0 h-[1px] group-hover:w-full group-hover:origin-center bg-[#FFAA00] group-hover:bg-[#00D48D] duration-500"></div>
            <div className="relative">
                <div className="px-6 py-4 w-48 rounded-lg hidden bg-[#F8F9FE] shadow-lg group group-hover:block duration-500 absolute right-4">
                    <Link to='/nurtureme' className="px-2 py-1 w-full text-right hover:text-[#00d48d] duration-500 block">NurtureMe.</Link>
                    <Link to='/crypto' className="px-2 py-1 w-full text-right text-purple-600 hover:text-[#00d48d] duration-500 block">CryptoFix</Link>
                </div>
            </div>
        </div>
    )
}

export default DropDown