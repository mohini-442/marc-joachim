import Image from "next/image";


export default function Button2(props) {
    return (
        <>
            <div className={`${props.name} bg-gradient-1 p-[1.7px] w-[275px] rounded-[8px] mx-auto cursor-pointer`}>
                <div className='bg-white w-[272px]  rounded-[8px] p-1 sm:p-[18px_23px_18px_10px] flex items-center'>
                    <Image src="/assets/svg/buttonsvg.svg" alt="buttonsvg" width={50} height={47} className='max-sm:w-[12%]' />
                    <span className='bg-gradient-1 text-transparent bg-clip-text font-inter font-medium text-base capitalize'>Book a non-binding initial consultation now</span>
                </div>
            </div>
        </>
    )
}