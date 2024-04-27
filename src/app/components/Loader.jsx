"use client"
// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";

// export default function Myloader() {
//     const [loder, setloader] = useState(true);

//     useEffect(() => {
//         setTimeout(() => {
//             setloader(false);
//             document.body.classList.remove("overflow-hidden")

//         }, 2000);
//     }, []);
//     return (
//         <>
//             <div>
//                 {loder ? (
//                     <section
//                         style={{ zIndex: "999999999" }}
//                         className=" bg-black top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center overflow-hidden"
//                     >
//                         <div className="preloader flex flex-col justify-center items-center h-screen">
//                             <div className="flex gap-3 items-center zoom-in-out-box cursor-pointer ">
//                                 <p></p>
//                                 <div role="status">
//                                     <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-[#fff] fill-[#000]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                         <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
//                                         <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
//                                     </svg>
//                                     <span className="sr-only">Loading...</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 ) : (
//                     ""
//                 )}
//             </div>
//         </>
//     )
// }
import { useState, useEffect } from "react";

export default function MyLoader() {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
            document.body.classList.remove("overflow-hidden");
        }, 1500);
    }, []);

    return (
        <div>
            {loader ? (
                <section style={{ zIndex: "999999999" }} className="bg-[#EEC6A6] top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center overflow-hidden">
                    <div className="preloader flex flex-col justify-center items-center h-screen animate-fade-in">
                        <div className="flex items-center cursor-pointer">
                            <span><svg width="39" height="43" viewBox="0 0 39 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.6527 7.29053V50.6946H15.6151" stroke="#003E92" stroke-width="1.81691" />
                                <path d="M11.578 14.3564H15.6156V28.9927M11.578 46.1524H15.6156V28.9927M15.6156 28.9927H23.6908M23.6908 28.9927V14.3564H27.2237M23.6908 28.9927V46.1524H27.2237" stroke="#F77B0B" stroke-width="1.81691" />
                                <path d="M3.50183 40.6004H9.55821V2.74805L19.6522 7.79503L29.7461 2.74805V40.6004H35.2978" stroke="#003E92" stroke-width="1.81691" />
                            </svg>
                            </span>
                            <p className="animate-text-writing font-helv font-bold text-3xl text-[#003E92]">MarcJoachimHubrich</p>
                            {/* <div role="status" className="animate-spin">
                                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 fill-current" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div> */}
                        </div>
                    </div>
                </section>
            ) : null}
        </div>
    );
}