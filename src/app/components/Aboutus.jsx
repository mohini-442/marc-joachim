import React from 'react'
import Image from "next/image";
import { Arrow } from './Icons';

const Aboutus = () => {
    return (
        <div className='lg:pt-56 pt-12 sm:pt-20 relative z-10'>
            <div className='max-w-[1140px] px-2 mx-auto relative'>
                <div className="absolute top-[-36%] left-0 hidden lg:block">
                    <div className="relative">
                        <div className="flex items-center flex-col">
                            <div className="ps-1">
                                <div className="w-[2px] h-[167px] bg-[#F77B0B]"></div>
                                <div className="h-[2px] w-[26px] bg-[#F77B0B]"></div>
                            </div>
                        </div>
                        <div className="flex absolute bottom-[-4%] left-[97%]">
                            <h2 className="text-[40px] font-helv font-normal transform rotate-[270deg]">05</h2>
                            <p className="uppercase text-2xl font-helv font-normal pt-6 ">about</p>
                        </div>
                    </div>
                </div>
                <div className="block lg:hidden">
                    <div className="flex items-center gap-1 pb-5">
                        <h2 className="text-[40px] font-helv font-normal ">05</h2>
                        <p className="uppercase text-2xl font-helv font-normal  relative after:bg-[#F77B0B] after:w-[160%] after:h-[1px] after:absolute after:bottom-0 after:left-0">about</p>
                    </div>
                </div>
                <div className='flex flex-row flex-wrap'>
                    <div className='lg:w-1/2 w-full' data-aos="fade-up-right">
                        <Image src="/assets/images/lawyer.png" alt="lawyer" height={574} width={559} className=' mx-auto lg:mx-0' />
                    </div>
                    <div className='lg:w-1/2 lg:ps-12 pt-5 lg:pt-0 w-full flex justify-center lg:justify-start flex-col'>
                        <h2 className='text-[40px] sm:text-[46px] md:text-[50px] lg:text-[52px] font-normal font-helv leading-[40px] md:leading-[66px] text-center lg:text-start' data-aos="fade-up-left">LAWYER <span className='text-[#F77B0B]'> &</span> DIVORCE COACH</h2>
                        <p className=' text-[32px] lg:text-[36px] font-normal font-helv uppercase  text-center lg:text-start leading-[33px] md:leading-[66px]' data-aos="fade-up-left"> <span className='text-[#F77B0B] '>M</span>arc <span className='text-[#F77B0B]'>J</span>oachim <span className='text-[#F77B0B]'>H</span>ubrich</p>
                        <h3 className='font-helv text-base sm:text-xl font-semibold capitalize  lg:pt-6 pt-1 text-center lg:text-start' data-aos="fade-up-left">About the mindset agency coach</h3>
                        <p className='font-poppins text-sm sm:text-base font-normal text-black opacity-70 lg:pt-4 text-center lg:text-start' data-aos="fade-up-left">Marc J. Hubrich is the founder of the mindset agency specializing in consulting services.</p>
                        <div className='bg-gradient-1 p-[1.7px] max-w-[350px] rounded-[59px] mt-4 lg:mt-9 mx-auto lg:mx-0' data-aos="fade-up-left">
                            <div className='bg-white max-w-[350px] sm:h-[56px] rounded-[59px] px-4 py-3 sm:p-[16px_32px] flex items-center gap-3'>
                                <p className='bg-gradient-1 text-transparent bg-clip-text'>Learn more about the agency</p>
                                <Arrow />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Image src="/assets/images/wave.png" alt="wave" height={211} width={738} className=' absolute bottom-[3%] right-[0%] z-[-1] hidden lg:block' />
        </div>
    )
}

export default Aboutus