"use client"
import Image from "next/image";
import buttonsvg from '../../../public/assets/svg/buttonsvg.svg'
import { slidercard } from "../common/Helper";
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import Button from "./Button";

const Analysis = () => {
    return (
        <div>
            <div className='max-w-[1140px] px-3 mx-auto pt-10 md:pt-12 lg:pt-72 relative'>
                <div className="absolute top-[2%] right-0 hidden lg:block">
                    <div className="relative">
                        <div className="flex items-center flex-col">
                            <p className="font-poppins font-light text-xl transform rotate-[270deg] pb-5">MJH</p>
                            <div className="ps-1">
                                <div className="w-[2px] h-[200px] bg-[#F77B0B]"></div>
                                <div className="h-[2px] w-[26px] bg-[#F77B0B] translate-x-[-24px]"></div>
                            </div>
                        </div>
                        <div className="flex absolute bottom-[-4%] right-[140%]">
                            <p className="uppercase text-2xl font-helv font-normal pt-6 ">analysis</p>
                            <h2 className="text-[40px] font-helv font-normal transform rotate-[90deg]">04</h2>
                        </div>
                    </div>
                </div>
                <div className="block lg:hidden">
                    <div className="flex items-center gap-1 ">
                        <h2 className="text-[40px] font-helv font-normal ">04</h2>
                        <p className="uppercase text-2xl font-helv font-normal  relative after:bg-[#F77B0B] after:w-[160%] after:h-[1px] after:absolute after:bottom-0 after:left-0">analysis</p>
                    </div>
                </div>
                <div className='flex flex-wrap pt-4'>
                    <div className='lg:w-5/12 w-full flex items-center justify-center lg:justify-start'>
                        <div>
                            <h3 className='font-helv text-[29px] font-normal text-center lg:text-start leading-[32px] md:leading-[62px]' data-aos="fade-up-right">THE FOUR PHASES OF</h3>
                            <h2 className='text-[40px] sm:text-[48px] md:text-[52px] font-normal font-helv leading-[42px] md:leading-[62px]  text-center lg:text-start' data-aos="fade-up-right">SEPARATION
                                <span className='text-[#F77B0B]'> MINDSET</span></h2>
                            <p className='font-normal font-poppins text-sm sm:text-base text-black opacity-70 leading-5 sm:leading-6 lg:pt-2  text-center lg:text-start' data-aos="fade-up-right">There are 4 typical separation phases. The 4 phases are not always clearly separated from each other and can overlap.</p>
                            <Button name='!mt-3 !sm:mt-4 lg:!mt-9 !mx-auto lg:!mx-0' data-aos="fade-up-right" />
                        </div>
                    </div>
                    <div className='lg:w-7/12 pt-4 md:pt-8 lg:pt-0 lg:ps-12 mx-auto w-full ' data-aos="fade-up-left">
                        <Swiper
                            effect={'flip'}
                            grabCursor={true}
                            pagination={true}
                            navigation={true}
                            modules={[EffectFlip, Pagination, Navigation]}
                        >
                            {slidercard.map((data, index) => (
                                <SwiperSlide key={index}>
                                    <div className='mx-auto sm:mx-10 md:mx-24 lg:mx-0 lg:w-full h-[320px] p-6 sm:h-[448px] bg-[#003E92] flex flex-col justify-center items-center relative z-10 overflow-hidden'>
                                        <p className='text-base sm:text-lg font-poppins font-semibold text-white capitalize text-center'>{data.heading}</p>
                                        <p className='text-base sm:text-lg font-poppins font-semibold text-white capitalize text-center'>{data.head}</p>
                                        <p className='font-normal text-sm sm:text-base font-poppins text-white sm:max-w-[364px] text-center sm:pt-3'>{data.para}</p>
                                        <Image src="/assets/images/sliderellipse.png" alt="sliderellipse" className='absolute bottom-0 right-0 z-[-1]' width={382} height={249} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Analysis