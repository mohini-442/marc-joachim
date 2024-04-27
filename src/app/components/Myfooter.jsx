import { Facebook, Instagram, Mail, Twitter } from "./Icons"

const Myfooter = () => {
    return (
        <div className="bg-footerbg bg-size bg-center bg-no-repeat py-24">
            <div className="max-w-[1140px] px-3 mx-auto relative">
                <div className="flex justify-center">
                    <div >
                        <a href=""><img src="/assets/svg/footerlogo.svg" alt="footerlogo" className="cursor-pointer mx-auto" data-aos="fade-up" height={90} width={240} /></a>
                        <p className="font-poppins font-normal text-base text-white lg:max-w-[264px] text-center md:pt-4" data-aos="fade-up">(c)2024 MARC JOACHIM HUBRICH
                            All Rights Reserved</p>
                    </div>
                </div>
                <div className="sm:absolute top-[4%] xl:right-0 right-4 flex max-sm:justify-center pt-4 sm:pt-0 sm:flex-col gap-1" data-aos="fade-up-left">
                    <Facebook />
                    <Twitter />
                    <Mail />
                    <Instagram/>
                </div>
            </div>

        </div>
    )
}

export default Myfooter