import React from 'react'
import { mycards, mycards2 } from '../common/Helper'
import Button from './Button'

const Takestep = () => {
    return (
        <>
            <div className='pt-10 md:pt-32 lg:pt-56'>
                <div className='max-w-[1140px] px-3 mx-auto block lg:hidden'>
                    <div className="flex items-center gap-1 pb-4">
                        <h2 className="text-[40px] font-helv font-normal ">07</h2>
                        <p className="uppercase text-2xl font-helv font-normal  relative after:bg-[#F77B0B] after:w-[160%] after:h-[1px] after:absolute after:bottom-0 after:left-0">take step</p>
                    </div>
                </div>
                <div className='bg-[#F2F8FF] py-8 lg:pt-16 lg:pb-14 '>
                    <div className='max-w-[1140px] mx-auto px-3 pt-2 pb-1 relative'>
                        <div className="absolute top-[-200%] left-0 hidden lg:block">
                            <div className="relative">
                                <div className="flex items-center flex-col">
                                    <p className="font-poppins font-light text-xl transform rotate-[270deg] pb-5"> MJH</p>
                                    <div className="ps-1">
                                        <div className="w-[2px] h-[269px] bg-[#F77B0B]"></div>
                                        <div className="h-[2px] w-[26px] bg-[#F77B0B]"></div>
                                    </div>
                                </div>
                                <div className="flex absolute bottom-[-4%] left-[97%]">
                                    <h2 className="text-[40px] font-helv font-normal transform rotate-[270deg]">07</h2>
                                    <p className="uppercase text-2xl font-helv font-normal pt-5 text-nowrap">take step</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-wrap justify-center lg:justify-between' data-aos="fade-up-right">
                            <div className='max-md:max-w-[610px]'>
                                <h2 className='text-[40px] sm:text-[46px] md:text-[50px] lg:text-[52px] font-normal font-helv md:max-w-[530px] uppercase leading-[40px] md:leading-[66px] text-center lg:text-start'>Request your </h2>
                                <h2 className='text-[40px] sm:text-[46px] md:text-[50px] lg:text-[52px] font-normal font-helv max-w-[630px] uppercase leading-[40px] md:leading-[66px] text-center lg:text-start'> <span className='text-[#F77B0B] '>non-binding</span> strategy meeting now!</h2>
                            </div>
                            <div data-aos="fade-up-left">
                                <div className="pt-5">
                                    <div className='relative after:bg-[#9800B0] after:w-[1.7px] after:h-full md:after:h-[121px] after:mt-1 after:absolute after:top-0 after:start-0 ps-3'>
                                        <p className="font-poppins text-sm sm:text-[16px] font-normal max-w-[345px] leading-[22px] md:leading-[25px]">Click on the button below, choose an appointment and answer the questions truthfully. One of our strategy consultants will then contact you and conduct your free consultation. We can advise you on the following topics: </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-takestep bg-center bg-size bg-cover bg-no-repeat lg:h-[808px]'>
                    <div className='max-w-[1140px] px-3 mx-auto py-20 lg:pt-[111px]'>
                        <div className='max-sm:h-[400px] max-sm:overflow-y-scroll'>
                            <div className='flex flex-wrap justify-center'>
                                {mycards.map((data, index) => (
                                    <div key={index} >
                                        <div data-aos="fade-up" className={`w-[250px] h-[200px] duration-300 hover:bg-[#003E92] bg-[#FFFFFF26] p-[61px_48px]`}>
                                            <p className=' text-white text-base font-normal font-poppins'>{data.para}</p>
                                        </div>
                                    </div>

                                ))}
                            </div>
                            <div className='flex flex-wrap justify-center sm:pt-9'>
                                {mycards2.map((data, index) => (
                                    <div key={index} >
                                        <div data-aos="fade-up" className={`w-[250px] h-[200px] duration-300 hover:bg-[#003E92] bg-[#FFFFFF26] p-[61px_42px]`}>
                                            <p className=' text-white text-base font-normal font-poppins'>{data.para}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Button name='!mt-5 md:!mt-14 !mx-auto' data-aos="fade-up-right" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Takestep