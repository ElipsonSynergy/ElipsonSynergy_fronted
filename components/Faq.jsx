"use client"

import { useState } from "react"
import { Montserrat, Numans } from 'next/font/google'

const monserrat = Montserrat({ subsets: ["latin"] });
const numans = Numans({ subsets: ["latin"], weight: ["400"] });


export default function Faq() {

    const [openFaq1, setOpenFaq1] = useState(false);
    const [openFaq2, setOpenFaq2] = useState(false);
    const [openFaq3, setOpenFaq3] = useState(false);
    const [openFaq4, setOpenFaq4] = useState(false);
    const [openFaq5, setOpenFaq5] = useState(false);
    const [openFaq6, setOpenFaq6] = useState(false);

  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 lg:pb-[90px] lg:pt-[20px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className={`${numans.className} mb-2 block text-lg font-semibold text-primary`}>
                FAQ
              </span>
              <h2
                className={`${monserrat.className} mb-4 text-3xl font-bold text-dark sm:text-[40px]/[48px]`}
              >
                ¿Tienes Dudas? Mira Esto
              </h2>
              <p className="text-base text-body-color">
                Algunas de las preguntas frecuentes de nuestra comunidas, pueden
                ayudarte a aclarar algunas de las dudas que tengas, sin embargo, nunca
                dudes en contactarnos.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] sm:p-8 lg:px-6 xl:px-8"
            >
              <button
                className="faq-btn flex w-full text-left"
                onClick={() => setOpenFaq1(!openFaq1)}
              >
                <div
                  className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary"
                >
                  <svg
                    className={`${openFaq1 ? 'rotate-180': ''}`}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4
                    className="mt-1 text-lg font-semibold text-dark"
                  >
                    How long we deliver your first blog post?
                  </h4>
                </div>
              </button>
              <div  className="faq-content pl-[62px]">
                <p
                className={`py-3 text-base leading-relaxed text-body-color ${openFaq1 ? 'block': 'hidden'}`}
                >
                  It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research & creation of your monthly
                  content marketing strategy that we do before writing your
                  first blog post, Ipsum available .
                </p>
              </div>
            </div>
            <div
              className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] sm:p-8 lg:px-6 xl:px-8"
            >
              <button
                className="faq-btn flex w-full text-left"
                onClick={() => setOpenFaq2(!openFaq2)}
              >
                <div
                  className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary"
                >
                  <svg
                    className={`${openFaq2 ? 'rotate-180': ''}`}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4
                    className="mt-1 text-lg font-semibold text-dark"
                  >
                    How long we deliver your first blog post?
                  </h4>
                </div>
              </button>
              <div className="faq-content pl-[62px]">
                <p
                    className={`py-3 text-base leading-relaxed text-body-color ${openFaq2 ? 'block': 'hidden'}`}
                >
                  It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research & creation of your monthly
                  content marketing strategy that we do before writing your
                  first blog post, Ipsum available .
                </p>
              </div>
            </div>
            <div
              className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] sm:p-8 lg:px-6 xl:px-8"
            >
              <button
                className="faq-btn flex w-full text-left"
                onClick={() => setOpenFaq3(!openFaq3)}
              >
                <div
                  className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary"
                >
                  <svg
                    className={`${openFaq3 ? 'rotate-180': ''}`}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4
                    className="mt-1 text-lg font-semibold text-dark"
                  >
                    How long we deliver your first blog post?
                  </h4>
                </div>
              </button>
              <div className="faq-content pl-[62px]">
                <p
                    className={`py-3 text-base leading-relaxed text-body-color ${openFaq3 ? 'block': 'hidden'}`}
                >
                  It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research & creation of your monthly
                  content marketing strategy that we do before writing your
                  first blog post, Ipsum available .
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] sm:p-8 lg:px-6 xl:px-8"
            >
              <button
                className="faq-btn flex w-full text-left"
                onClick={() => setOpenFaq4(!openFaq4)}
              >
                <div
                  className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary"
                >
                  <svg
                    className={`${openFaq4 ? 'rotate-180': ''}`}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4
                    className="mt-1 text-lg font-semibold text-dark"
                  >
                    How long we deliver your first blog post?
                  </h4>
                </div>
              </button>
              <div  className="faq-content pl-[62px]">
                <p
                    className={`py-3 text-base leading-relaxed text-body-color ${openFaq4 ? 'block': 'hidden'}`}
                >
                  It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research & creation of your monthly
                  content marketing strategy that we do before writing your
                  first blog post, Ipsum available .
                </p>
              </div>
            </div>
            <div
              className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] sm:p-8 lg:px-6 xl:px-8"
            >
              <button
                className="faq-btn flex w-full text-left"
                onClick={() => setOpenFaq5(!openFaq5)}
              >
                <div
                  className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary"
                >
                  <svg
                    className={`${openFaq5 ? 'rotate-180': ''}`}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4
                    className="mt-1 text-lg font-semibold text-dark"
                  >
                    How long we deliver your first blog post?
                  </h4>
                </div>
              </button>
              <div className="faq-content pl-[62px]">
                <p
                    className={`py-3 text-base leading-relaxed text-body-color ${openFaq5 ? 'block': 'hidden'}`}
                >
                  It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research & creation of your monthly
                  content marketing strategy that we do before writing your
                  first blog post, Ipsum available .
                </p>
              </div>
            </div>
            <div
              className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] sm:p-8 lg:px-6 xl:px-8"
            >
              <button
                className="faq-btn flex w-full text-left"
                onClick={() => setOpenFaq6(!openFaq6)}
              >
                <div
                  className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary"
                >
                  <svg
                    className={`${openFaq6 ? 'rotate-180': ''}`}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4
                    className="mt-1 text-lg font-semibold text-dark"
                  >
                    How long we deliver your first blog post?
                  </h4>
                </div>
              </button>
              <div className="faq-content pl-[62px]">
                <p
                 className={`py-3 text-base leading-relaxed text-body-color ${openFaq6 ? 'block': 'hidden'}`}
                >
                  It takes 2-3 weeks to get your first blog post ready. That
                  includes the in-depth research & creation of your monthly
                  content marketing strategy that we do before writing your
                  first blog post, Ipsum available .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}
