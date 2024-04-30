"use client"
import React, { useState } from 'react';
import logo from '../../../public/assets/svg/logo.svg';
import Image from "next/image";
import { Phnsvg } from "./Icons";
import Button from './Button';


export default function Headersec() {
    const [show, setshow] = useState(true);
    function nav() {
        setshow(!show);
        document.body.classList.toggle("max-lg:!overflow-hidden")
    }
    return (
        <>
            <div className="h-[650px] sm:h-[810px]  bg-herobg bg-right lg:bg-center bg-cover bg-no-repeat bg-size flex flex-col relative overflow-x-hidden after:w-full lg:after:w-0 after:h-full after:bg-[#EEC6A6] after:opacity-50 after:absolute">
                <div className='relative z-10'>
                    <div className="max-w-[1140px] 2xl:max-w-[1320px] mx-auto py-3 md:py-6 px-3">
                        <div className=" flex justify-between items-center ">
                            <a href=""><Image src={logo} className="max-lg:w-[80%] relative z-10" alt="logo" height={53} width={145} /></a>
                            <ul
                                className={`flex items-center gap-6 mobileView ${show ? "right-[-100%]" : "right-0"}`} >
                                <li onClick={nav}>
                                    <a
                                        className="hover:after:w-[100%] after:w-0 after:absolute after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear text-[#fffcfa] hover:text-[#131200] font-helv text-base font-normal"
                                        href="#benifits"
                                    >
                                        Benifits
                                    </a>
                                </li>
                                <li onClick={nav}>
                                    <a
                                        className="hover:after:w-[100%] after:w-0 after:absolute after:bg-[#000000] after:h-[2px]  relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear text-[#fffcfa] hover:text-[#131200] font-helv text-base font-normal "
                                        href="#Testimonials"
                                    >
                                        Testimonials
                                    </a>
                                </li>
                                <li className='mt-3 lg:mt-0' onClick={nav}>
                                    <a href="" className="font-inter text-sm md:text-base font-medium text-white md:py-4 p-3 md:px-7 bg-gradient-1">Book Consultation Now</a>
                                </li>

                            </ul>
                            <label className=" lg:hidden" onClick={nav}>
                                {show ? (
                                    <div className="z-20 relative pl-2">
                                        <span className="flex bg-[#000] h-[3px] rounded-3xl duration-300 w-6"></span>
                                        <span className="flex bg-[#000] h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                                        <span className="flex bg-[#000] h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                                    </div>
                                ) : (
                                    <div className="z-20 relative">
                                        <span className="flex bg-[#000] absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
                                        <span className="flex bg-[#000] absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
                                    </div>
                                )}
                            </label>
                        </div>

                    </div>
                </div>
                <div className="relative z-[2] px-3 flex-grow justify-center flex flex-col">
                    <div>
                        <div className='max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3'>
                            <div className="flex flex-wrap">
                                <div className="lg:w-1/2 w-full" data-aos="zoom-y-out" data-aos-delay="1800">
                                    <p className=" font-helv text-[#F77B0B] text-base md:text-lg font-semibold capitalize text-center lg:text-start">Marc joachim hubrich</p>
                                    <h1 className="font-normal text-[48px] md:text-[60px] font-helv max-w-[457px] uppercase leading-[57px] md:leading-[77px] text-center lg:text-start mx-auto lg:mx-0">Now I let you
                                        go!</h1>
                                    <p className="text-sm md:text-base font-normal leading-[20px] md:leading-[25px] font-poppins opacity-70 max-w-[452px] text-center lg:text-start mx-auto lg:mx-0">For women who do not want to be completely dragged down by a SEPARATION.
                                    </p>
                                    <p className=" text-sm md:text-base font-normal leading-[20px] md:leading-[25px] font-poppins opacity-70 max-w-[452px] text-center lg:text-start mx-auto lg:mx-0" >
                                        How to let go of your EX so you can leave him behind
                                        without having to run to a therapist right away.</p>
                                    <div className="sm:pt-8 pt-3 flex items-center justify-center lg:justify-start sm:gap-2">
                                        <Button />
                                        <Phnsvg className=' cursor-pointer' />
                                    </div>

                                </div>
                                <div className="block lg:hidden lg:absolute bottom-[5%] right-[-4%] pt-5 mx-auto">
                                    <div className='flex relative z-10'>
                                        <div className='relative after:bg-[#9800B0] after:w-[1.7px] after:h-full after:absolute after:top-0 after:start-0 ps-3'>
                                            <p className='font-helv text-base font-normal text-white uppercase'>Die wichtigsten</p>
                                            <p className='font-helv text-base font-normal text-white uppercase'> Aspekte einer </p>
                                            <p className='font-helv text-base font-normal text-white uppercase'> Trennung:</p>
                                        </div>
                                        <div className='ps-12'>
                                            <ul>
                                                <li className='list-disc font-poppins font-medium text-base text-white capitalize leading-[25px]'>physische Trennung</li>
                                                <li className='list-disc font-poppins font-medium text-base text-white capitalize leading-[25px]'>mentale Trennung</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 hidden lg:block absolute bottom-[5%] right-[-4%]" >
                    <div className='flex relative z-[2]'>
                        <div className='relative after:bg-[#9800B0] after:w-[1.7px] after:h-full after:absolute after:top-0 after:start-0 ps-3'>
                            <p className='font-helv text-base font-normal text-white uppercase' >Die wichtigsten</p>
                            <p className='font-helv text-base font-normal text-white uppercase'> Aspekte einer </p>
                            <p className='font-helv text-base font-normal text-white uppercase'> Trennung:</p>
                        </div>
                        <div className='ps-12'>
                            <ul>
                                <li className='list-disc font-poppins font-medium text-base text-white capitalize leading-[25px]'>physische Trennung</li>
                                <li className='list-disc font-poppins font-medium text-base text-white capitalize leading-[25px]'>mentale Trennung</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}