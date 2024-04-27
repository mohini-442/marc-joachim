import React from 'react'
import Image from "next/image";

const Goal = () => {
    return (
        <>
            <div className='relative z-10 pt-14  md:pt-20'>
                <div className="block lg:hidden">
                    <div className="flex items-center gap-1 ">
                        <h2 className="text-[40px] font-helv font-normal ">03</h2>
                        <p className="uppercase text-2xl font-helv font-normal  relative after:bg-[#F77B0B] after:w-[160%] after:h-[1px] after:absolute after:bottom-0 after:left-0">GOAL</p>
                    </div>
                </div>
                <div className='bg-[#F2F8FF]'>
                    <div className='max-w-[1140px] mx-auto px-3 '>
                        <div className='py-7 md:py-10 lg:py-14'>
                            <div className='flex flex-wrap justify-center lg:justify-between'>
                                <div className='w-[100px] hidden lg:block'></div>
                                <h2 className='text-[40px] md:text-[46px] lg:text-[52px] font-helv font-normal uppercase ' data-aos="fade-up-right"> <span className='text-[#F77B0B]'>TARGET</span> group</h2>
                                <div className="ps-5" data-aos="fade-up-left">
                                    <div className='relative after:bg-[#9800B0] after:w-[1.7px] after:h-[67px] after:mt-1 after:absolute after:top-0 after:start-0 ps-3'>
                                        <p className="font-poppins text-[16px] font-normal max-w-[300px] leading-[25px]"> The coaching is aimed at married women who have already separated or are thinking of separating.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-goal bg-center bg-cover bg-no-repeat lg:h-[623px] bg-size'>
                    <div className='max-w-[1140px] px-3 mx-auto relative py-8 md:py-24' >
                        <div className='flex flex-wrap justify-center lg:justify-start'>
                            <div className='lg:w-1/2 w-full lg:py-[20px]'>
                                <div className='xxs:w-[382px] sm:h-[187px] bg-[#FFFFFF1F] p-5 sm:p-[40px] border border-[#FFFFFF26] mx-5 sm:mx-auto lg:mx-0' data-aos="fade-up-right">
                                    <p className='font-poppins text-sm sm:text-base font-normal text-white capitalize sm:max-w-[280px]'>You have separated and have the feeling that you can never be happy again and that you will be alone forever.</p>
                                </div>
                                <div className='xxs:w-[382px] sm:h-[187px] bg-[#FFFFFF1F] p-5 sm:p-[40px] border border-[#FFFFFF26] mt-4 sm:mt-8 mx-auto lg:mx-0' data-aos="fade-up-right">
                                    <p className='font-poppins text-sm sm:text-base font-normal text-white capitalize sm:max-w-[280px]'>How are you supposed to be able to let go of someone who is so entangled with your life? It&apos;s impossible, isn&apos;t it?</p>
                                </div>
                            </div>
                            <div className='lg:w-1/2 w-full block lg:hidden'>
                                <div className='xxs:w-[382px] sm:h-[187px] lg:h-[272px] bg-[#003E92B2] p-5 sm:p-[40px] lg:p-[65px_28px_77px_39px] border border-[#FFFFFF26] mt-4 sm:mt-8 lg:mx-0 mx-auto'>
                                    <p className='font-poppins text-sm sm:text-base font-normal text-white capitalize sm:max-w-[280px]'>To understand how to let go of your partner, you need a detailed step-by-step action plan, which you will receive from me in a 1:1 coaching session.</p>
                                </div>
                            </div>
                        </div>
                        <div className='hidden lg:block absolute bottom-[-7%] right-12' data-aos="fade-up-left">
                            <div className='w-[338px] h-[272px] bg-[#003E92B2] p-[65px_28px_77px_39px] border border-[#FFFFFF26] mt-8'>
                                <p className='font-poppins text-base font-normal text-white capitalize max-w-[280px]'>To understand how to let go of your partner, you need a detailed step-by-step action plan, which you will receive from me in a 1:1 coaching session.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Image src="/assets/images/goalellipse.png" alt="goalellipse" height={612} width={615} className='absolute z-[-1] bottom-[-38%] hidden xl:block'/>
            </div>
        </>
    )
}

export default Goal