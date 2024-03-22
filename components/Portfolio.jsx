"use client"

import { useState } from "react"
import { Montserrat, Numans } from 'next/font/google'

const monserrat = Montserrat({ subsets: ["latin"] });
const numans = Numans({ subsets: ["latin"], weight: ["400"] });

export default function Portfolio() {

    const [showCards, setshowCards] = useState('all');
    const activeclassNamees = 'bg-primary text-white';
    const inactiveclassNamees = 'text-body-color hover:bg-primary hover:text-white';
    

  return (
    <section className="pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className={`${numans.className} mb-2 block text-lg font-semibold text-primary`}>
                Proyectos
              </span>
              <h2
                className={`${monserrat.className} mb-3 text-3xl font-bold leading-[1.208] text-dark sm:text-4xl md:text-[40px]`}
              >
                Nuestros Desarrollos Recientes
              </h2>
              <p className="text-base text-body-color">
                En elipson nos mantenemos activos desarrollando proyectos de alto impacto, 
                que ayuden a innovar y desarrollar diversos sectores de la industria Colombiana.

              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <ul className="mb-12 flex flex-wrap justify-center space-x-1">
              <li className="mb-1">
                <button
                  className={`inline-block rounded-lg px-5 py-2 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCards == 'all' ? activeclassNamees : inactiveclassNamees }`}
                  onClick={ () => setshowCards('all')}
                
                >
                  Todos los proyectos
                </button>
              </li>
              <li className="mb-1">
                <button
                    onClick={ () => setshowCards( 'branding')}
                    className={`inline-block rounded-lg px-5 py-2 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCards == 'branding' ? activeclassNamees : inactiveclassNamees}`}
                >
                  Agricultura
                </button>
              </li>
              <li className="mb-1">
                <button
                    onClick={ () => setshowCards( 'design')}
                    className={`inline-block rounded-lg px-5 py-2 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCards == 'design' ? activeclassNamees : inactiveclassNamees}`}
                >
                  Diseño
                </button>
              </li>
              <li className="mb-1">
                <button
                    onClick={ () => setshowCards( 'marketing')}
                    className={`inline-block rounded-lg px-5 py-2 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCards == 'marketing' ? activeclassNamees : inactiveclassNamees}`}
                >
                  Marketing
                </button>
              </li>
              <li className="mb-1">
                <button
                    onClick={ () => setshowCards( 'development')}
                    className={`inline-block rounded-lg px-5 py-2 text-center text-base font-semibold transition md:py-3 lg:px-8 ${showCards == 'development' ? activeclassNamees : inactiveclassNamees}`}
                >
                  Sofware
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div
            className={`${showCards == 'all' || showCards == 'branding' ? 'block' : 'hidden'} w-full px-4 md:w-1/2 xl:w-1/3`}
          >
            <div className="relative mb-12">
              <div className="overflow-hidden rounded-[10px]">
                <img
                  src="assets/images/portfolio/portfolio-01/image-01.jpg"
                  alt="portfolio"
                  className="w-full"
                />
              </div>
              <div
                className="relative z-10 mx-7 -mt-20 rounded-lg bg-white px-3 py-[34px] text-center shadow-portfolio"
              >
                <span className="mb-2 block text-sm font-medium text-primary">
                  Branding
                </span>
                <h3 className="mb-5 text-xl font-bold text-dark">
                  Branding Design
                </h3>
                <a
                  href=""
                  className="inline-block rounded-md border border-stroke px-7 py-[10px] text-sm font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div
            className={`${showCards == 'all' || showCards == 'marketing' ? 'block' : 'hidden'} w-full px-4 md:w-1/2 xl:w-1/3`}
          >
            <div className="relative mb-12">
              <div className="overflow-hidden rounded-[10px]">
                <img
                  src="assets/images/portfolio/portfolio-01/image-02.jpg"
                  alt="portfolio"
                  className="w-full"
                />
              </div>
              <div
                className="relative z-10 mx-7 -mt-20 rounded-lg bg-white px-3 py-[34px] text-center shadow-portfolio"
              >
                <span className="mb-2 block text-sm font-medium text-primary">
                  Marketing
                </span>
                <h3 className="mb-5 text-xl font-bold text-dark">
                  Best Marketing tips
                </h3>
                <a
                  href=""
                  className="inline-block rounded-md border border-stroke px-7 py-[10px] text-sm font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div
            className={`${showCards == 'all' || showCards == 'development' ? 'block' : 'hidden'} w-full px-4 md:w-1/2 xl:w-1/3`}
          >
            <div className="relative mb-12">
              <div className="overflow-hidden rounded-[10px]">
                <img
                  src="assets/images/portfolio/portfolio-01/image-03.jpg"
                  alt="portfolio"
                  className="w-full"
                />
              </div>
              <div
                className="relative z-10 mx-7 -mt-20 rounded-lg bg-white px-3 py-[34px] text-center shadow-portfolio"
              >
                <span className="mb-2 block text-sm font-medium text-primary">
                  Development
                </span>
                <h3 className="mb-5 text-xl font-bold text-dark">
                  Web Design Trend
                </h3>
                <a
                  href=""
                  className="inline-block rounded-md border border-stroke px-7 py-[10px] text-sm font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className={`${showCards == 'all' || showCards == 'design' ? 'block' : 'hidden'} w-full px-4 md:w-1/2 xl:w-1/3`}>
            <div className="relative mb-12">
              <div className="overflow-hidden rounded-[10px]">
                <img
                  src="assets/images/portfolio/portfolio-01/image-04.jpg"
                  alt="portfolio"
                  className="w-full"
                />
              </div>
              <div
                className="relative z-10 mx-7 -mt-20 rounded-lg bg-white px-3 py-[34px] text-center shadow-portfolio"
              >
                <span className="mb-2 block text-sm font-medium text-primary">
                  Design
                </span>
                <h3 className="mb-5 text-xl font-bold text-dark">
                  Business Card Design
                </h3>
                <a
                  href=""
                  className="inline-block rounded-md border border-stroke px-7 py-[10px] text-sm font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div
            className={`${showCards == 'all' || showCards == 'marketing' ? 'block' : 'hidden'} w-full px-4 md:w-1/2 xl:w-1/3`}
          >
            <div className="relative mb-12">
              <div className="overflow-hidden rounded-[10px]">
                <img
                  src="assets/images/portfolio/portfolio-01/image-05.jpg"
                  alt="portfolio"
                  className="w-full"
                />
              </div>
              <div
                className="relative z-10 mx-7 -mt-20 rounded-lg bg-white px-3 py-[34px] text-center shadow-portfolio"
              >
                <span className="mb-2 block text-sm font-medium text-primary">
                  Marketing
                </span>
                <h3 className="mb-5 text-xl font-bold text-dark">
                  Digital marketing
                </h3>
                <a
                  href=""
                  className="inline-block rounded-md border border-stroke px-7 py-[10px] text-sm font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div
            className={`${showCards == 'all' || showCards == 'branding' ? 'block' : 'hidden'} w-full px-4 md:w-1/2 xl:w-1/3`} 
          >
            <div className="relative mb-12">
              <div className="overflow-hidden rounded-[10px]">
                <img
                  src="assets/images/portfolio/portfolio-01/image-06.jpg"
                  alt="portfolio"
                  className="w-full"
                />
              </div>
              <div
                className="relative z-10 mx-7 -mt-20 rounded-lg bg-white px-3 py-[34px] text-center shadow-portfolio"
              >
                <span className="mb-2 block text-sm font-medium text-primary">
                  Branding
                </span>
                <h3 className="mb-5 text-xl font-bold text-dark">
                  Creative Agency
                </h3>
                <a
                  href=""
                  className="inline-block rounded-md border border-stroke px-7 py-[10px] text-sm font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
