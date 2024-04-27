import { myarray } from "../common/Helper"
import CardPrints from "./CardPrints"
import Image from "next/image";
import buttonsvg from '../../../public/assets/svg/buttonsvg.svg'
import Button from "./Button";

export default function Fault() {
    return (
        <>
            <div className="relative z-[2]">
                <div className="max-w-[1140px] mx-auto px-3 pt-8 md:pt-20 lg:pt-44 relative">
                    <div className="absolute top-[-26%] left-0 hidden lg:block">
                        <div className="relative">
                            <div className="flex items-center flex-col">
                                <p className="font-poppins font-light text-xl transform rotate-[270deg] pb-5">MJH</p>
                                <div className="ps-1">
                                    <div className="w-[2px] h-[269px] bg-[#F77B0B]"></div>
                                    <div className="h-[2px] w-[26px] bg-[#F77B0B]"></div>
                                </div>
                            </div>
                            <div className="flex absolute bottom-[-4%] left-[97%]">
                                <h2 className="text-[40px] font-helv font-normal transform rotate-[270deg]">01</h2>
                                <p className="uppercase text-2xl font-helv font-normal pt-6 ">fault</p>
                            </div>
                        </div>
                    </div>
                    <div className="block lg:hidden">
                        <div className="flex items-center sm:pb-7">
                            <h2 className="text-[40px] font-helv font-normal ">01</h2>
                            <p className="uppercase text-2xl font-helv font-normal  relative after:bg-[#F77B0B] after:w-[160%] after:h-[1px] after:absolute after:bottom-0 after:left-0">fault</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap mx-auto justify-center ps-5">
                        <div data-aos="fade-up-right">
                            <h2 className="font-normal text-[40px] md:text-[50px] lg:text-[60px] font-helv mb-0 leading-[47px] lg:leading-[72px] text-center sm:text-start">IT'S NOT</h2>
                            <h2 className="font-normal text-[40px] md:text-[50px] lg:text-[60px] font-helv sm:ps-20 leading-[47px] lg:leading-[72px]"><span className="text-[#F77B0B]">YOUR</span> FAULT!</h2>
                        </div>
                        <div className="sm:ps-14 pt-4" data-aos="fade-up-left">
                            <div className='relative after:bg-[#9800B0]  after:w-[1.7px] after:h-full after:absolute after:top-0 after:start-0 ps-3'>
                                <p className="font-poppins text-sm md:text-[16px] font-normal max-w-[255px] leading-[25px]">It's not your fault for not knowing how to let go of the partner who no longer made you feel special.</p>
                            </div>
                        </div>
                    </div>
                    <p data-aos="fade-up-right" className="font-bold font-helv text-base sm:text-lg md:text-xl text-center pt-2 md:pt-5 lg:pt-14 capitalize">How would you know when you are busy with completely different things at the moment:
                    </p>

                </div>
                <div className="bg-faultbg bg-cover max-md:h-[500px] overflow-y-scroll bg-size bg-center bg-no-repeat max-lg:py-8 max-lg:px-4 mt-4 md:mt-8">
                    <div className="max-w-[1140px] mx-auto flex justify-end lg:pe-16">
                        <div className='flex flex-wrap  justify-center lg:justify-start'>
                            {myarray.map((data, index) => (
                                <div key={index} >
                                    <div className={`w-[250px] h-[162px] duration-300 hover:bg-[#003E92] bg-[#003E9233] p-[42px_38px]`}>
                                        <p className='text-white text-base font-normal font-poppins'>{data.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <CardPrints />
                </div>
                <div className="px-3">
                    <p data-aos="fade-up-right" className="font-poppins text-base font-normal  pt-5 lg:pt-12 text-center pb-3 md:pb-5">You are not alone! Numerous women before you stood exactly at this point, where you are now.</p>

                    <Button name='!mx-auto'/>
                </div>
                <Image src='/assets/images/faultellipse.png' alt="faultellipse" width={409} height={297} className="absolute top-[7%] right-0 z-[-1] w-[12%] hidden lg:block"></Image>
            </div>
        </>
    )
}


