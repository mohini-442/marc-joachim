import Image from "next/image";


export default function Button(props) {
    return (
        <>
            <div className={`${props.name} bg-gradient-1 p-[1.7px] w-[327px] sm:w-[426px] rounded-[59px] cursor-pointer duration-300 hover:shadow-[0px_0px_18px#8703C5]`}>
                <div className='bg-white w-[324px] sm:w-[422px] sm:h-[56px] rounded-[59px] p-1 sm:p-[5px_38px_9px_5px] flex items-center'>
                    <Image src="/assets/svg/buttonsvg.svg" alt="buttonsvg" width={50} height={47} className='max-sm:w-[12%]' />
                    <span className='bg-gradient-1 text-transparent bg-clip-text font-inter font-medium text-sm sm:text-base capitalize'>Book a non-binding initial consultation now</span>
                </div>
            </div>
        </>
    )
}