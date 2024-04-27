"use client"
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
                                <path d="M19.6527 7.29053V50.6946H15.6151" stroke="#003E92" strokeWidth="1.81691" />
                                <path d="M11.578 14.3564H15.6156V28.9927M11.578 46.1524H15.6156V28.9927M15.6156 28.9927H23.6908M23.6908 28.9927V14.3564H27.2237M23.6908 28.9927V46.1524H27.2237" stroke="#F77B0B" strokeWidth="1.81691" />
                                <path d="M3.50183 40.6004H9.55821V2.74805L19.6522 7.79503L29.7461 2.74805V40.6004H35.2978" stroke="#003E92" strokeWidth="1.81691" />
                            </svg>
                            </span>
                            <p className="animate-text-writing font-helv font-bold text-3xl text-[#003E92]">MarcJoachimHubrich</p>
                        </div>
                    </div>
                </section>
            ) : null}
        </div>
    );
}
