"use client"
import { useEffect } from "react";
import Aboutus from "./components/Aboutus";
import Analysis from "./components/Analysis";
import Fault from "./components/Fault";
import Goal from "./components/Goal";
import Headersec from "./components/Headersec";
import Mjh from "./components/Mjh";
import Myfooter from "./components/Myfooter";
import Takestep from "./components/Takestep";
import Yourex from "./components/Yourex";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Myslider2 from "./components/Myslider2";
import Backtotop from "./components/Backtotop";
import Myloader from "./components/Loader";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <Headersec />
      <Fault />
      <Mjh />
      <Goal />
      <Analysis />
      <Yourex />
      <Aboutus />
      <Myslider2 />
      <Takestep />
      <Myfooter />
      <Backtotop />
      <Myloader />
    </>
  );
}
