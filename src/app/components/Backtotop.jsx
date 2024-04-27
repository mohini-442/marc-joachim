"use client"
import React from 'react'
import Image from 'next/image'

export default function Backtotop() {
    const [position, setPosition] = React.useState({ top: 0, left: 0 })
    React.useEffect(() => {
        window.scroll({
            top: position.top,
            left: position.left,
            behavior: 'smooth'
        })
    })
    const scrollTop = React.useRef()
    React.useEffect(() => {
        window.addEventListener('scroll', (e) => {
            window.scrollY > 200
                ? scrollTop.current.style.display = 'inline-block'
                : scrollTop.current.style.display = 'none'
        })
    })
    return (
        <>
            <div className=' mx-auto px-3 max-w-[1150px]'>
                <div onClick={() => setPosition({ ...position, position: { top: 0, left: 0 } })} className="fixed hidden bottom-[1%] right-[1%] z-10 translate-y-[0%] animate-bounce"
                    ref={scrollTop}
                >
                    <Image src="/assets/images/btn.png" alt="" className='w-[55px] cursor-pointer h-[55px] rounded-3xl ' width={25} height={25} />
                </div>
            </div>
        </>
    )
}