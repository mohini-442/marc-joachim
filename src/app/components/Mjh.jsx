import React from 'react'
import Image from "next/image";
import { mjhcards } from '../common/Helper';

const Mjh = () => {

    return (
        <div className='relative z-[2]' id='benifits'>
            <div className='max-w-[1140px] px-3 mx-auto pt-9 sm:pt-20 lg:pt-28 relative'>
                <div className="absolute top-[-12%] right-0 hidden lg:block">
                    <div className="relative">
                        <div className="flex items-center flex-col">
                            <p className="font-poppins font-light text-xl transform rotate-[270deg] pb-5">MJH</p>
                            <div className="ps-1">
                                <div className="w-[2px] h-[269px] bg-[#F77B0B]"></div>
                                <div className="h-[2px] w-[26px] bg-[#F77B0B] translate-x-[-24px]"></div>
                            </div>
                        </div>
                        <div className="flex absolute bottom-[-4%] right-[140%]">
                            <h2 className="text-[40px] font-helv font-normal transform rotate-[90deg]">02</h2>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-[-4%] left-0 hidden lg:block">
                    <div className="relative">
                        <div className="flex items-center flex-col">
                            <div className="ps-1">
                                <div className="w-[2px] h-[518px] bg-[#F77B0B]"></div>
                                <div className="h-[2px] w-[26px] bg-[#F77B0B]"></div>
                            </div>
                        </div>
                        <div className="flex absolute bottom-[-4%] left-[97%]">
                            <h2 className="text-[40px] font-helv font-normal transform rotate-[270deg]">03</h2>
                            <p className="uppercase text-2xl font-helv font-normal pt-6 ">GOAL</p>
                        </div>
                    </div>
                </div>
                <div className="block lg:hidden">
                    <div className="flex items-center gap-1 ">
                        <h2 className="text-[40px] font-helv font-normal ">02</h2>
                        <p className="uppercase text-2xl font-helv font-normal  relative after:bg-[#F77B0B] after:w-[160%] after:h-[1px] after:absolute after:bottom-0 after:left-0">MJH</p>
                    </div>
                </div>
                <div className='flex flex-wrap items-center justify-center lg:justify-start ' data-aos="fade-up-right">
                    <h2 className='font-helv font-normal text-[40px] sm:text-[46px] md:text-[50px] lg:text-[60px] md:max-w-[320px] leading-[47px] md:leading-[56px] lg:leading-[66px] uppercase text-center lg:text-sart'>what you will <span className='text-[#F77B0B]'> get </span></h2>
                    <Image src="/assets/images/flower.png" alt="flower" className='hidden sm:block' width={224} height={216} />
                    <div className="ps-5">
                        <div className='relative after:bg-[#9800B0] after:w-[1.7px] after:h-full sm:after:h-[67px] after:mt-1 after:absolute after:top-0 after:start-0 ps-3'>
                            <p className="font-poppins text-sm md:text-[16px] font-normal max-w-[380px] leading-[25px]">I will show you which steps are necessary for you to finally successfully let go of your EX. And I will support you to look confidently into your new future.</p>
                        </div>
                    </div>
                </div>
                <p className='font-semibold text-lg sm:text-xl font-helv text-center pt-2 sm:pt-11' data-aos="fade-up-left">In a 1:1 live coaching session, we will clarify the following questions in particular:</p>
                <div className='flex flex-wrap pt-7 pb-5 justify-center'>
                    {mjhcards.map((data, index) => (
                        <div key={index}>
                            <div className='group' data-aos="fade-up"> 
                                <div className='md:w-[370px] w-full p-7 md:p-[12px_32px] h-[180px] md:h-[230px] flex justify-center items-center duration-300  group-hover:bg-[#F5FAFF]'>
                                    <span className='font-poppins text-base font-normal max-w-[340px] md:max-w-[263px] group-hover:text-[#003E92] capitalize text-center md:text-start opacity-70'>{data.heading}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <img src="/assets/images/flowerellipse.png" alt="flowerellipse" height={301} width={313} className="absolute top-[23%] right-0 z-[-1]  max-w-[160px]" />
            <img src="/assets/images/flowerellipse2.png" alt="flowerellipse" height={301} width={313} className="absolute bottom-[-9%] left-0 z-[-1] max-w-[160px]" />
        </div>
    )
}

export default Mjh
