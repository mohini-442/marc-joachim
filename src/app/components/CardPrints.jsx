import React from 'react'
import { myarray1 } from "../common/Helper"


const CardPrints = () => {
    return (
        <div className='max-w-[1140px]  mx-auto md:pt-[29px]'>
            <div className='flex flex-wrap justify-center lg:justify-start'>
                {myarray1.map((data, index) => (
                    <div className="">
                        <div key={index} className="">
                            <div className="w-[250px] mx-auto h-[162px] md:mx-0 duration-300 hover:bg-[#003E92] bg-[#003E9233] p-[42px_38px]">
                                <p className='text-white text-base font-normal font-poppins'>{data.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardPrints