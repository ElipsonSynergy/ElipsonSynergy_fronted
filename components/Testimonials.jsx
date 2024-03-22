"use client"

import { useState, useRef } from "react";
import { Montserrat, Numans } from 'next/font/google';

const monserrat = Montserrat({ subsets: ["latin"] });
const numans = Numans({ subsets: ["latin"], weight: ["400"] });

export default function Testimonials() {

    const [activeSlide, setActiveSlide] = useState(1);
    const slides = ['1', '2', '3'];
    const carouselRef = useRef(null);

    const handlePrevClick = () => {
        if (carouselRef.current) {
          const newSlide = activeSlide > 1 ? activeSlide - 1 : slides.length;
          setActiveSlide(newSlide);
          carouselRef.current.scrollLeft -= (carouselRef.current.scrollWidth / slides.length) ;
        }
    };
    
    const handleNextClick = () => {
        if (carouselRef.current) {
          const newSlide = activeSlide < slides.length ? activeSlide + 1 : 1;
          setActiveSlide(newSlide);
          carouselRef.current.scrollLeft += (carouselRef.current.scrollWidth / slides.length);
          
        }
      };
    
  return (
    <section className="pb-20 pt-20  lg:pb-[120px] lg:pt-[20px]">
        <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className={`${numans.className} mb-2 block text-lg font-semibold text-primary`}>
                Testimonios
              </span>
              <h2
                className={`${monserrat.className} mb-3 text-3xl font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px]`}
              >
                Que Se Dice De Elipson
              </h2>
              <p className="text-base text-body-color">
                La opinión de aquellos con que trabajamos es importante para saber
                que las cosas se están haciendo correctamente.
              </p>
            </div>
        </div>
      <div className="container mx-auto">
        <div>
          <div className="relative flex justify-center">
            <div
              className="relative w-full pb-16 md:w-11/12 lg:w-10/12 xl:w-8/12 xl:pb-0"
            >
              <div
                className="flex-no-wrap snap mx-auto flex h-auto w-full max-w-[300px] overflow-hidden transition-all xs:max-w-[368px] sm:max-w-[508px] md:max-w-[630px] lg:max-w-[738px] 2xl:max-w-[910px]"
                ref={carouselRef}
              >
                <div
                  className="mx-auto h-full min-w-[300px] xs:min-w-[368px] sm:min-w-[508px] sm:p-6 md:min-w-[630px] lg:min-w-[738px] 2xl:min-w-[910px]"
                >
                  <div className="w-full md:flex">
                    <div
                      className="relative mb-12 w-full max-w-[310px] md:mb-0 md:mr-12 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] xl:max-w-[310px] 2xl:mr-16"
                    >
                      <img
                        src="assets/images/testimonials/testimonial-01/image-01.jpg"
                        alt="image"
                        className="w-full rounded-lg"
                      />
                      {/* <span
                        className="absolute -left-6 -top-6 z-[-1] hidden sm:block"
                      >
                        <svg
                          width="77"
                          height="77"
                          viewBox="0 0 77 77"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="1.66343"
                            cy="74.5221"
                            r="1.66343"
                            transform="rotate(-90 1.66343 74.5221)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="1.66343"
                            cy="30.9401"
                            r="1.66343"
                            transform="rotate(-90 1.66343 30.9401)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="16.3016"
                            cy="74.5221"
                            r="1.66343"
                            transform="rotate(-90 16.3016 74.5221)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="16.3016"
                            cy="30.9401"
                            r="1.66343"
                            transform="rotate(-90 16.3016 30.9401)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="30.9398"
                            cy="74.5221"
                            r="1.66343"
                            transform="rotate(-90 30.9398 74.5221)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="30.9398"
                            cy="30.9401"
                            r="1.66343"
                            transform="rotate(-90 30.9398 30.9401)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="45.578"
                            cy="74.5221"
                            r="1.66343"
                            transform="rotate(-90 45.578 74.5221)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="45.578"
                            cy="30.9401"
                            r="1.66343"
                            transform="rotate(-90 45.578 30.9401)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="60.2162"
                            cy="74.5216"
                            r="1.66343"
                            transform="rotate(-90 60.2162 74.5216)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="74.6634"
                            cy="74.5216"
                            r="1.66343"
                            transform="rotate(-90 74.6634 74.5216)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="60.2162"
                            cy="30.9398"
                            r="1.66343"
                            transform="rotate(-90 60.2162 30.9398)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="74.6634"
                            cy="30.9398"
                            r="1.66343"
                            transform="rotate(-90 74.6634 30.9398)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="1.66343"
                            cy="59.8839"
                            r="1.66343"
                            transform="rotate(-90 1.66343 59.8839)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="1.66343"
                            cy="16.3017"
                            r="1.66343"
                            transform="rotate(-90 1.66343 16.3017)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="16.3016"
                            cy="59.8839"
                            r="1.66343"
                            transform="rotate(-90 16.3016 59.8839)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="16.3016"
                            cy="16.3017"
                            r="1.66343"
                            transform="rotate(-90 16.3016 16.3017)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="30.9398"
                            cy="59.8839"
                            r="1.66343"
                            transform="rotate(-90 30.9398 59.8839)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="30.9398"
                            cy="16.3017"
                            r="1.66343"
                            transform="rotate(-90 30.9398 16.3017)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="45.578"
                            cy="59.8839"
                            r="1.66343"
                            transform="rotate(-90 45.578 59.8839)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="45.578"
                            cy="16.3017"
                            r="1.66343"
                            transform="rotate(-90 45.578 16.3017)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="60.2162"
                            cy="59.8839"
                            r="1.66343"
                            transform="rotate(-90 60.2162 59.8839)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="74.6634"
                            cy="59.8839"
                            r="1.66343"
                            transform="rotate(-90 74.6634 59.8839)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="60.2162"
                            cy="16.3017"
                            r="1.66343"
                            transform="rotate(-90 60.2162 16.3017)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="74.6634"
                            cy="16.3017"
                            r="1.66343"
                            transform="rotate(-90 74.6634 16.3017)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="1.66343"
                            cy="45.2455"
                            r="1.66343"
                            transform="rotate(-90 1.66343 45.2455)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="1.66343"
                            cy="1.66347"
                            r="1.66343"
                            transform="rotate(-90 1.66343 1.66347)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="16.3016"
                            cy="45.2455"
                            r="1.66343"
                            transform="rotate(-90 16.3016 45.2455)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="16.3016"
                            cy="1.66347"
                            r="1.66343"
                            transform="rotate(-90 16.3016 1.66347)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="30.9398"
                            cy="45.2455"
                            r="1.66343"
                            transform="rotate(-90 30.9398 45.2455)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="30.9398"
                            cy="1.66347"
                            r="1.66343"
                            transform="rotate(-90 30.9398 1.66347)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="45.578"
                            cy="45.2455"
                            r="1.66343"
                            transform="rotate(-90 45.578 45.2455)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="45.578"
                            cy="1.66347"
                            r="1.66343"
                            transform="rotate(-90 45.578 1.66347)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="60.2162"
                            cy="45.2457"
                            r="1.66343"
                            transform="rotate(-90 60.2162 45.2457)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="74.6634"
                            cy="45.2457"
                            r="1.66343"
                            transform="rotate(-90 74.6634 45.2457)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="60.2162"
                            cy="1.66371"
                            r="1.66343"
                            transform="rotate(-90 60.2162 1.66371)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="74.6634"
                            cy="1.66371"
                            r="1.66343"
                            transform="rotate(-90 74.6634 1.66371)"
                            fill="#3758F9"
                          />
                        </svg>
                      </span>
                      <span className="absolute -bottom-6 -right-6 z-[-1]">
                        <svg
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 32C3 15.9837 15.9837 3 32 3C48.0163 2.99999 61 15.9837 61 32C61 48.0163 48.0163 61 32 61C15.9837 61 3 48.0163 3 32Z"
                            stroke="#13C296"
                            strokeWidth="6"
                          />
                        </svg>
                      </span> */}
                    </div>
                    <div className="w-full">
                      <div>
                        {/* <div className="mb-8 mt-5">
                          <img
                            src="assets/images/testimonials/testimonial-01/lineicon.svg"
                            alt="lineicon"
                            className=""
                          />
                          <img
                            src="assets/images/testimonials/testimonial-01/lineicon-white.svg"
                            alt="lineicon"
                            className="hidden "
                          />
                        </div> */}
                        <p
                          className="mb-11 text-base font-normal italic leading-[1.81] text-body-color  sm:text-[22px]"
                        >
                          "La tecnología de Elipson ha revolucionado la forma en que manejo mi granja. Su facilidad de uso y eficacia son incomparables."
                        </p>

                        <h4
                          className="mb-2 text-[22px] font-semibold leading-[27px] text-dark "
                        >
                          Juan García
                        </h4>
                        <p className="text-base text-body-color ">
                          Campesino y Propietario de Granja.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="mx-auto h-full min-w-[300px] xs:min-w-[368px] sm:min-w-[508px] sm:p-6 md:min-w-[630px] lg:min-w-[738px] 2xl:min-w-[910px]"
                >
                  <div className="w-full md:flex">
                    <div
                      className="relative mb-12 w-full max-w-[310px] md:mb-0 md:mr-12 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] xl:max-w-[310px] 2xl:mr-16"
                    >
                      <img
                        src="assets/images/testimonials/testimonial-01/image-02.png"
                        alt="image"
                        className="w-full rounded-lg"
                      />
                      {/* <span
                        className="absolute -left-6 -top-6 z-[-1] hidden sm:block"
                      >
                        <svg
                          width="77"
                          height="77"
                          viewBox="0 0 77 77"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="1.66343"
                            cy="74.5221"
                            r="1.66343"
                            transform="rotate(-90 1.66343 74.5221)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="1.66343"
                            cy="30.9401"
                            r="1.66343"
                            transform="rotate(-90 1.66343 30.9401)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="16.3016"
                            cy="74.5221"
                            r="1.66343"
                            transform="rotate(-90 16.3016 74.5221)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="16.3016"
                            cy="30.9401"
                            r="1.66343"
                            transform="rotate(-90 16.3016 30.9401)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="30.9398"
                            cy="74.5221"
                            r="1.66343"
                            transform="rotate(-90 30.9398 74.5221)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="30.9398"
                            cy="30.9401"
                            r="1.66343"
                            transform="rotate(-90 30.9398 30.9401)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="45.578"
                            cy="74.5221"
                            r="1.66343"
                            transform="rotate(-90 45.578 74.5221)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="45.578"
                            cy="30.9401"
                            r="1.66343"
                            transform="rotate(-90 45.578 30.9401)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="60.2162"
                            cy="74.5216"
                            r="1.66343"
                            transform="rotate(-90 60.2162 74.5216)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="74.6634"
                            cy="74.5216"
                            r="1.66343"
                            transform="rotate(-90 74.6634 74.5216)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="60.2162"
                            cy="30.9398"
                            r="1.66343"
                            transform="rotate(-90 60.2162 30.9398)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="74.6634"
                            cy="30.9398"
                            r="1.66343"
                            transform="rotate(-90 74.6634 30.9398)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="1.66343"
                            cy="59.8839"
                            r="1.66343"
                            transform="rotate(-90 1.66343 59.8839)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="1.66343"
                            cy="16.3017"
                            r="1.66343"
                            transform="rotate(-90 1.66343 16.3017)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="16.3016"
                            cy="59.8839"
                            r="1.66343"
                            transform="rotate(-90 16.3016 59.8839)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="16.3016"
                            cy="16.3017"
                            r="1.66343"
                            transform="rotate(-90 16.3016 16.3017)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="30.9398"
                            cy="59.8839"
                            r="1.66343"
                            transform="rotate(-90 30.9398 59.8839)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="30.9398"
                            cy="16.3017"
                            r="1.66343"
                            transform="rotate(-90 30.9398 16.3017)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="45.578"
                            cy="59.8839"
                            r="1.66343"
                            transform="rotate(-90 45.578 59.8839)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="45.578"
                            cy="16.3017"
                            r="1.66343"
                            transform="rotate(-90 45.578 16.3017)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="60.2162"
                            cy="59.8839"
                            r="1.66343"
                            transform="rotate(-90 60.2162 59.8839)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="74.6634"
                            cy="59.8839"
                            r="1.66343"
                            transform="rotate(-90 74.6634 59.8839)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="60.2162"
                            cy="16.3017"
                            r="1.66343"
                            transform="rotate(-90 60.2162 16.3017)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="74.6634"
                            cy="16.3017"
                            r="1.66343"
                            transform="rotate(-90 74.6634 16.3017)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="1.66343"
                            cy="45.2455"
                            r="1.66343"
                            transform="rotate(-90 1.66343 45.2455)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="1.66343"
                            cy="1.66347"
                            r="1.66343"
                            transform="rotate(-90 1.66343 1.66347)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="16.3016"
                            cy="45.2455"
                            r="1.66343"
                            transform="rotate(-90 16.3016 45.2455)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="16.3016"
                            cy="1.66347"
                            r="1.66343"
                            transform="rotate(-90 16.3016 1.66347)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="30.9398"
                            cy="45.2455"
                            r="1.66343"
                            transform="rotate(-90 30.9398 45.2455)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="30.9398"
                            cy="1.66347"
                            r="1.66343"
                            transform="rotate(-90 30.9398 1.66347)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="45.578"
                            cy="45.2455"
                            r="1.66343"
                            transform="rotate(-90 45.578 45.2455)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="45.578"
                            cy="1.66347"
                            r="1.66343"
                            transform="rotate(-90 45.578 1.66347)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="60.2162"
                            cy="45.2457"
                            r="1.66343"
                            transform="rotate(-90 60.2162 45.2457)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="74.6634"
                            cy="45.2457"
                            r="1.66343"
                            transform="rotate(-90 74.6634 45.2457)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="60.2162"
                            cy="1.66371"
                            r="1.66343"
                            transform="rotate(-90 60.2162 1.66371)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="74.6634"
                            cy="1.66371"
                            r="1.66343"
                            transform="rotate(-90 74.6634 1.66371)"
                            fill="#3758F9"
                          />
                        </svg>
                      </span>
                      <span className="absolute -bottom-6 -right-6 z-[-1]">
                        <svg
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 32C3 15.9837 15.9837 3 32 3C48.0163 2.99999 61 15.9837 61 32C61 48.0163 48.0163 61 32 61C15.9837 61 3 48.0163 3 32Z"
                            stroke="#13C296"
                            strokeWidth="6"
                          />
                        </svg>
                      </span> */}
                    </div>
                    <div className="w-full">
                      <div>
                        {/* <div className="mb-8 mt-5">
                          <img
                            src="assets/images/testimonials/testimonial-01/lineicon.svg"
                            alt="lineicon"
                            className=""
                          />
                          <img
                            src="assets/images/testimonials/testimonial-01/lineicon-white.svg"
                            alt="lineicon"
                            className="hidden "
                          />
                        </div> */}
                        <p
                          className="mb-11 text-base font-normal italic leading-[1.81] text-body-color sm:text-[22px]"
                        >
                          "Elipson ha transformado mi trabajo en la agronomía. Sus soluciones innovadoras son cruciales para el manejo sostenible y eficiente de los cultivos."
                        </p>

                        <h4
                          className="mb-2 text-[22px] font-semibold leading-[27px] text-dark "
                        >
                           Laura Martínez
                        </h4>
                        <p className="text-base text-body-color ">
                          Ingeniera Agrónoma.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="mx-auto h-full min-w-[300px] xs:min-w-[368px] sm:min-w-[508px] sm:p-6 md:min-w-[630px] lg:min-w-[738px] 2xl:min-w-[910px]"
                >
                  <div className="w-full md:flex">
                    <div
                      className="relative mb-12 w-full max-w-[310px] md:mb-0 md:mr-12 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] xl:max-w-[310px] 2xl:mr-16"
                    >
                      <img
                        src="assets/images/testimonials/testimonial-01/image-03.png"
                        alt="image"
                        className="w-full rounded-lg"
                      />
                      {/* <span
                        className="absolute -left-6 -top-6 z-[-1] hidden sm:block"
                      >
                        <svg
                          width="77"
                          height="77"
                          viewBox="0 0 77 77"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="1.66343"
                            cy="74.5221"
                            r="1.66343"
                            transform="rotate(-90 1.66343 74.5221)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="1.66343"
                            cy="30.9401"
                            r="1.66343"
                            transform="rotate(-90 1.66343 30.9401)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="16.3016"
                            cy="74.5221"
                            r="1.66343"
                            transform="rotate(-90 16.3016 74.5221)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="16.3016"
                            cy="30.9401"
                            r="1.66343"
                            transform="rotate(-90 16.3016 30.9401)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="30.9398"
                            cy="74.5221"
                            r="1.66343"
                            transform="rotate(-90 30.9398 74.5221)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="30.9398"
                            cy="30.9401"
                            r="1.66343"
                            transform="rotate(-90 30.9398 30.9401)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="45.578"
                            cy="74.5221"
                            r="1.66343"
                            transform="rotate(-90 45.578 74.5221)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="45.578"
                            cy="30.9401"
                            r="1.66343"
                            transform="rotate(-90 45.578 30.9401)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="60.2162"
                            cy="74.5216"
                            r="1.66343"
                            transform="rotate(-90 60.2162 74.5216)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="74.6634"
                            cy="74.5216"
                            r="1.66343"
                            transform="rotate(-90 74.6634 74.5216)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="60.2162"
                            cy="30.9398"
                            r="1.66343"
                            transform="rotate(-90 60.2162 30.9398)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="74.6634"
                            cy="30.9398"
                            r="1.66343"
                            transform="rotate(-90 74.6634 30.9398)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="1.66343"
                            cy="59.8839"
                            r="1.66343"
                            transform="rotate(-90 1.66343 59.8839)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="1.66343"
                            cy="16.3017"
                            r="1.66343"
                            transform="rotate(-90 1.66343 16.3017)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="16.3016"
                            cy="59.8839"
                            r="1.66343"
                            transform="rotate(-90 16.3016 59.8839)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="16.3016"
                            cy="16.3017"
                            r="1.66343"
                            transform="rotate(-90 16.3016 16.3017)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="30.9398"
                            cy="59.8839"
                            r="1.66343"
                            transform="rotate(-90 30.9398 59.8839)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="30.9398"
                            cy="16.3017"
                            r="1.66343"
                            transform="rotate(-90 30.9398 16.3017)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="45.578"
                            cy="59.8839"
                            r="1.66343"
                            transform="rotate(-90 45.578 59.8839)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="45.578"
                            cy="16.3017"
                            r="1.66343"
                            transform="rotate(-90 45.578 16.3017)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="60.2162"
                            cy="59.8839"
                            r="1.66343"
                            transform="rotate(-90 60.2162 59.8839)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="74.6634"
                            cy="59.8839"
                            r="1.66343"
                            transform="rotate(-90 74.6634 59.8839)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="60.2162"
                            cy="16.3017"
                            r="1.66343"
                            transform="rotate(-90 60.2162 16.3017)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="74.6634"
                            cy="16.3017"
                            r="1.66343"
                            transform="rotate(-90 74.6634 16.3017)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="1.66343"
                            cy="45.2455"
                            r="1.66343"
                            transform="rotate(-90 1.66343 45.2455)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="1.66343"
                            cy="1.66347"
                            r="1.66343"
                            transform="rotate(-90 1.66343 1.66347)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="16.3016"
                            cy="45.2455"
                            r="1.66343"
                            transform="rotate(-90 16.3016 45.2455)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="16.3016"
                            cy="1.66347"
                            r="1.66343"
                            transform="rotate(-90 16.3016 1.66347)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="30.9398"
                            cy="45.2455"
                            r="1.66343"
                            transform="rotate(-90 30.9398 45.2455)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="30.9398"
                            cy="1.66347"
                            r="1.66343"
                            transform="rotate(-90 30.9398 1.66347)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="45.578"
                            cy="45.2455"
                            r="1.66343"
                            transform="rotate(-90 45.578 45.2455)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="45.578"
                            cy="1.66347"
                            r="1.66343"
                            transform="rotate(-90 45.578 1.66347)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="60.2162"
                            cy="45.2457"
                            r="1.66343"
                            transform="rotate(-90 60.2162 45.2457)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="74.6634"
                            cy="45.2457"
                            r="1.66343"
                            transform="rotate(-90 74.6634 45.2457)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="60.2162"
                            cy="1.66371"
                            r="1.66343"
                            transform="rotate(-90 60.2162 1.66371)"
                            fill="#3758F9"
                          />
                          <circle
                            cx="74.6634"
                            cy="1.66371"
                            r="1.66343"
                            transform="rotate(-90 74.6634 1.66371)"
                            fill="#3758F9"
                          />
                        </svg>
                      </span>
                      <span className="absolute -bottom-6 -right-6 z-[-1]">
                        <svg
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 32C3 15.9837 15.9837 3 32 3C48.0163 2.99999 61 15.9837 61 32C61 48.0163 48.0163 61 32 61C15.9837 61 3 48.0163 3 32Z"
                            stroke="#13C296"
                            strokeWidth="6"
                          />
                        </svg>
                      </span> */}
                    </div>
                    <div className="w-full">
                      <div>
                        {/* <div className="mb-8 mt-5">
                          <img
                            src="assets/images/testimonials/testimonial-01/lineicon.svg"
                            alt="lineicon"
                            className=""
                          />
                          <img
                            src="assets/images/testimonials/testimonial-01/lineicon-white.svg"
                            alt="lineicon"
                            className="hidden "
                          />
                        </div> */}
                        <p
                          className="mb-11 text-base font-normal italic leading-[1.81] text-body-color sm:text-[22px]"
                        >
                          "Con Elipson, optimizamos nuestras operaciones de manera significativa. Sus sistemas de gestión han sido un cambio total para nuestra empresa."
                        </p>

                        <h4
                          className="mb-2 text-[22px] font-semibold leading-[27px] text-dark "
                        >
                          María Rodríguez
                        </h4>
                        <p className="text-base text-body-color ">
                          Gerente de Alimentos Naturales del Valle.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute -bottom-7 left-0 right-0 flex items-center justify-center gap-5 sm:bottom-0 lg:pl-[120px] 2xl:bottom-8 2xl:pl-[78px]"
              >
                <button
                  className="d flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke bg-white text-dark transition-all hover:border-transparent hover:drop-shadow-testimonial "
                  onClick={handlePrevClick}
                  
                >
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path
                      d="M17.5 9.5H4.15625L9.46875 4.09375C9.75 3.8125 9.75 3.375 9.46875 3.09375C9.1875 2.8125 8.75 2.8125 8.46875 3.09375L2 9.65625C1.71875 9.9375 1.71875 10.375 2 10.6562L8.46875 17.2188C8.59375 17.3438 8.78125 17.4375 8.96875 17.4375C9.15625 17.4375 9.3125 17.375 9.46875 17.25C9.75 16.9687 9.75 16.5313 9.46875 16.25L4.1875 10.9062H17.5C17.875 10.9062 18.1875 10.5937 18.1875 10.2187C18.1875 9.8125 17.875 9.5 17.5 9.5Z"
                      fill=""
                    />
                  </svg>
                </button>
                <button
                  className="d flex h-[60px] w-[60px] items-center justify-center rounded-full border border-stroke bg-white text-dark transition-all hover:border-transparent hover:drop-shadow-testimonial "
                  onClick={handleNextClick}
                >
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path
                      d="M18 9.6875L11.5312 3.125C11.25 2.84375 10.8125 2.84375 10.5312 3.125C10.25 3.40625 10.25 3.84375 10.5312 4.125L15.7812 9.46875H2.5C2.125 9.46875 1.8125 9.78125 1.8125 10.1562C1.8125 10.5312 2.125 10.875 2.5 10.875H15.8437L10.5312 16.2813C10.25 16.5625 10.25 17 10.5312 17.2813C10.6562 17.4063 10.8437 17.4688 11.0312 17.4688C11.2187 17.4688 11.4062 17.4062 11.5312 17.25L18 10.6875C18.2812 10.4062 18.2812 9.96875 18 9.6875Z"
                      fill=""
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
