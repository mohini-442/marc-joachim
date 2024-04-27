"use client"
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { clientscard } from '../common/Helper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Myslider2 = () => {
    return (
        <div id='Testimonials'>
            <div className='max-w-[1140px] mx-auto px-3 pt-20 lg:pt-44 relative'>
                <div className="block lg:hidden">
                    <div className="flex items-center gap-1 ">
                        <h2 className="text-[40px] font-helv font-normal ">06</h2>
                        <p className="uppercase text-2xl font-helv font-normal  relative after:bg-[#F77B0B] after:w-[160%] after:h-[1px] after:absolute after:bottom-0 after:left-0">Mjh</p>
                    </div>
                </div>
                <div className="absolute top-[-3%] right-0 hidden lg:block">
                    <div className="relative">
                        <div className="flex items-center flex-col">
                            <p className="font-poppins font-light text-xl transform rotate-[270deg] pb-5">MJH</p>
                            <div className="ps-1">
                                <div className="w-[2px] h-[200px] bg-[#F77B0B]"></div>
                                <div className="h-[2px] w-[26px] bg-[#F77B0B] translate-x-[-24px]"></div>
                            </div>
                        </div>
                        <div className="flex absolute bottom-[-4%] right-[140%]">
                            <h2 className="text-[40px] font-helv font-normal transform rotate-[90deg]">06</h2>
                        </div>
                    </div>
                </div>
                <h2 className='font-helv font-normal text-[46px] lg:text-[52px] uppercase text-center' data-aos="fade-up-right">What our <span className='text-[#F77B0B]'> clients</span> say</h2>
                <div className='pt-2 relative' data-aos="fade-up">
                    <Swiper
                        id='clientcard'
                        direction={'vertical'}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="sm:h-[600px] h-[670px]"
                        // style={{ height: 600 }}
                    >
                        {clientscard.map((data, index) => (
                            <SwiperSlide key={index}>
                                <div>
                                    <div className='mx-8 md:mx-16 lg:w-[820px] mt-20 md:h-[270px] lg:mx-auto pt-12 p-4 md:p-[58px_50px_32px] shadow-[0px_2px_48px_0px#00000014] relative'>
                                        <p className='font-poppins font-normal text-center max-w-[630px] mx-auto text-sm md:text-base opacity-70'>Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. </p>
                                        <h2 className='font-poppins font-semibold text-sm md:text-base text-center pt-1 md:pt-4'>{data.head}</h2>
                                        <p className='font-poppins text-sm md:text-base font-normal text-center md:pt-1 opacity-70'>Limana Enterprises, CA</p>
                                        <Image src="/assets/images/client1.png" alt="client1" className='absolute top-[-20%] left-[44%]' width={86} height={86} />
                                    </div>
                                    <div className='mx-8 md:mx-16 md:flex lg:w-[820px] gap-5 lg:mx-auto'>
                                        <div className='md:w-[400px] w-full shadow-[0px_2px_48px_0px#00000014] mt-2 md:mt-4 md:h-[207px] p-5 md:p-[25px_36px_30px]'>
                                            <p className='font-popins text-sm md:text-base font-normal text-center pt-1 opacity-70'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                            <h2 className='font-poppins font-semibold text-sm md:text-base text-center pt-1 md:pt-4'>{data.head2}</h2>
                                            <p className='font-poppins text-base md:text-base font-normal text-center md:pt-1 opacity-70'>Limana Enterprises, CA</p>
                                        </div>
                                        <div className='w-full md:w-[400px] shadow-[0px_2px_48px_0px#00000014] mt-2 md:mt-4 md:h-[207px] p-5 md:p-[25px_36px_30px]'>
                                            <p className='font-popins text-sm md:text-base font-normal text-center pt-1 opacity-70'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                            <h2 className='font-poppins font-semibold text-sm md:text-base text-center pt-1 md:pt-4'>{ data.head3}</h2>
                                            <p className='font-poppins text-base md:text-base font-normal text-center md:pt-1 opacity-70'>Limana Enterprises, CA</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Image src="/assets/images/colon.png" alt="colon" className='max-md:w-[10%] absolute top-[10%] md:top-[6%] right-[3%]' width={98} height={69} />
                </div>
            </div>
        </div>
    )
}

export default Myslider2