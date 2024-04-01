import { Montserrat } from 'next/font/google';
import Link from 'next/link';

const monserrat = Montserrat({ subsets: ["latin"] });


export default function page() {
  return (
    <>
    <div className="relative z-10 overflow-hidden pt-[120px] pb-[60px] md:pt-[130px] lg:pt-[160px]">
        <div
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-stroke/0 via-stroke to-stroke/0">
        </div>
        <div className="container">
        <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4">
            <div className="text-center">
                <h1 className={`${monserrat.className} mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] md:leading-[1.2]`}>
                Nuestras Políticas</h1>
                <p className="mb-5 text-base text-body-color">
                Descubre nuestras políticas y enfoques estratégicos sobre la industria colombiana
                </p>

                <ul className="flex items-center justify-center gap-[10px]">
                <li>
                    <Link href="/" className="flex items-center gap-[10px] text-base font-medium text-dark"> 
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link href="/politics" className="flex items-center gap-[10px] text-base font-medium text-body-color"> 
                    <span className="text-body-color"> / </span>
                        Políticas
                    </Link>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    </div> 
    
    
    <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
      <div className="container">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            
            <div className="flex flex-wrap -mx-4 justify-center">
              <div className="w-full px-4 lg:w-8/12">
                <div>
                  <h2
                    className={`${monserrat.className} wow fadeInUp mb-8 text-2xl font-bold text-dark sm:text-3xl md:text-[35px] md:leading-[1.28]`}
                  >
                    Facing a challenge is kind of a turn-on for an easy rider
                  </h2>
                  <p
                    className="mb-6 text-base wow fadeInUp text-body-color"
                    
                  >
                    There&apos;s a time and place for everything… including asking
                    for reviews. For instance: you should not asking for a
                    review on your checkout page. The sole purpose of this page
                    is to guide your customer to complete their purchase, and
                    this means that the page should be as minimalist and
                    pared-down possible. You don&apos;t want to have any unnecessary
                    elements or Call To Actions.
                  </p>
                  <p
                    className="mb-8 text-base wow fadeInUp text-body-color"
                    
                  >
                    There&apos;s a time and place for everything… including asking
                    for reviews. For instance: you should not asking for a
                    review on your checkout page. The sole purpose of this page
                    is to guide your customer to complete their purchase, and
                    this means that the page should be as minimalist and
                    pared-down possible. You don&apos;t want to have any unnecessary
                    elements or Call To Actions.
                  </p>
                  <h3
                    className="wow fadeInUp mb-6 text-2xl font-bold text-dark sm:text-[28px] sm:leading-[40px]"
                    
                  >
                    Sea no quidam vulputate
                  </h3>
                  <p
                    className="mb-10 text-base wow fadeInUp text-body-color"
                    
                  >
                    At quo cetero fastidii. Usu ex ornatus corpora sententiae,
                    vocibus deleniti ut nec. Ut enim eripuit eligendi est, in
                    iracundia signiferumque quo. Sed virtute suavitate
                    suscipiantur ea, dolor this can eloquentiam ei pro. Suas
                    adversarium interpretaris eu sit, eum viris impedit ne.
                    Erant appareat corrumpit ei vel.
                  </p>
                  <div
                    className="wow fadeInUp relative z-10 mb-10 overflow-hidden rounded-[5px] bg-primary/5 px-6 py-8 text-center sm:p-10 md:px-[60px]"
                  >
                    <div className="mx-auto max-w-[530px]">
                      <span className="mb-[14px] flex justify-center text-primary">
                        <svg
                          width="46"
                          height="46"
                          viewBox="0 0 46 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-current"
                        >
                          <path
                            d="M13.7995 35.5781C12.937 35.5781 12.1464 35.075 11.8589 34.2844L9.48702 28.5344C6.82765 28.1031 4.45577 26.7375 2.9464 24.6531C1.36515 22.5687 0.862021 19.9812 1.5089 17.4656C2.51515 13.3687 6.75577 10.2781 11.4276 10.35C14.7339 10.4219 17.4651 11.7875 19.262 14.2312C20.987 16.675 21.4183 19.9812 20.412 23C19.4776 25.7312 18.2558 28.4625 17.1058 31.1219C16.6745 32.2 16.1714 33.2781 15.7401 34.2844C15.4526 35.075 14.662 35.5781 13.7995 35.5781ZM11.2839 13.5844C8.1214 13.5844 5.2464 15.5969 4.59952 18.2562C4.24015 19.8375 4.52765 21.4187 5.5339 22.7125C6.6839 24.2937 8.62452 25.3 10.7089 25.4437L11.7151 25.5156L13.7995 30.5469C13.8714 30.3312 14.0151 30.0437 14.087 29.8281C15.237 27.2406 16.387 24.5812 17.2495 21.9219C17.9683 19.9094 17.6808 17.6812 16.5308 16.1C15.3808 14.5187 13.5839 13.6562 11.3558 13.5844C11.3558 13.5844 11.3558 13.5844 11.2839 13.5844Z"
                          />
                          <path
                            d="M37.5905 35.65C36.728 35.65 35.9374 35.1469 35.6499 34.3563L33.278 28.6063C30.6187 28.175 28.2468 26.8094 26.7374 24.725C25.1562 22.6406 24.653 20.0531 25.2999 17.5375C26.3062 13.4406 30.5468 10.35 35.2187 10.4219C38.5249 10.4938 41.2562 11.8594 42.9812 14.3031C44.7062 16.7469 45.1374 20.0531 44.1312 23.0719C43.1968 25.8031 41.9749 28.5344 40.8249 31.1938C40.3937 32.2719 39.8905 33.35 39.4593 34.3563C39.2437 35.1469 38.453 35.65 37.5905 35.65ZM35.0749 13.5844C31.9124 13.5844 29.0374 15.5969 28.3905 18.2563C28.0312 19.8375 28.3187 21.4188 29.3249 22.7844C30.4749 24.3656 32.4155 25.3719 34.4999 25.5156L35.5062 25.5875L37.5905 30.6188C37.6624 30.4031 37.8062 30.1156 37.878 29.9C39.028 27.3125 40.178 24.6531 41.0405 21.9938C41.7593 19.9813 41.4718 17.7531 40.3218 16.1C39.1718 14.5188 37.3749 13.6563 35.1468 13.5844C35.1468 13.5844 35.1468 13.5844 35.0749 13.5844Z"
                          />
                        </svg>
                      </span>
                      <p
                        className="mb-[18px] text-base italic leading-[28px] text-dark"
                      >
                        A spring of truth shall flow from it: like a new star it
                        shall scatter the darkness of ignorance, and cause a
                        light heretofore unknown to shine amongst men.
                      </p>
                      <span
                        className="text-xs italic text-body-color"
                      >
                        “Andrio Domeco”
                      </span>
                    </div>
                    <div>
                      <span className="absolute top-0 left-0">
                        <svg
                          width="103"
                          height="109"
                          viewBox="0 0 103 109"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <ellipse
                            cx="0.483916"
                            cy="3.5"
                            rx="102.075"
                            ry="105.5"
                            transform="rotate(180 0.483916 3.5)"
                            fill="url(#paint0_linear_2014_9016)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_2014_9016"
                              x1="-101.591"
                              y1="-50.4346"
                              x2="49.1618"
                              y2="-49.6518"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#3056D3" stopOpacity="0.15" />
                              <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                      <span className="absolute bottom-0 right-0">
                        <svg
                          width="102"
                          height="106"
                          viewBox="0 0 102 106"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <ellipse
                            cx="102.484"
                            cy="105.5"
                            rx="102.075"
                            ry="105.5"
                            fill="url(#paint0_linear_2014_9017)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_2014_9017"
                              x1="0.409163"
                              y1="51.5654"
                              x2="151.162"
                              y2="52.3482"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#3056D3" stopOpacity="0.15" />
                              <stop
                                offset="1"
                                stopColor="white"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </div>

                  <h3
                    className="wow fadeInUp mb-6 text-2xl font-semibold text-dark sm:text-[28px] sm:leading-[40px]"
                    
                  >
                    What is it with your ideas?
                  </h3>

                  <p
                    className="mb-6 text-base wow fadeInUp text-body-color"
                    
                  >
                    At quo cetero fastidii. Usu ex ornatus corpora sententiae,
                    vocibus deleniti ut nec. Ut enim eripuit eligendi est, in
                    iracundia signiferumque quo. Sed virtute suavitate
                    suscipiantur ea, dolor this can eloquentiam ei pro. Suas
                    adversarium interpretaris eu sit, eum viris impedit ne.
                    Erant appareat corrumpit ei vel.
                  </p>
                  <p
                    className="mb-10 text-base wow fadeInUp text-body-color"
                    
                  >
                    At quo cetero fastidii. Usu ex ornatus corpora sententiae,
                    vocibus deleniti ut nec. Ut enim eripuit eligendi est, in
                    iracundia signiferumque quo. Sed virtute suavitate
                    suscipiantur ea, dolor this can eloquentiam ei pro. Suas
                    adversarium interpretaris eu sit, eum viris impedit ne.
                    Erant appareat corrumpit ei vel.
                  </p>

                  <div className="flex flex-wrap items-center mb-12 -mx-4">
                    <div className="w-full px-4 md:w-1/2">
                      <div
                        className="flex flex-wrap items-center gap-3 mb-8 wow fadeInUp md:mb-0"
                        
                      >
                        <a
                          href=""
                          className="block rounded-md bg-primary/[0.08] px-[14px] py-[5px] text-base text-dark hover:bg-primary hover:text-white"
                        >
                          Design
                        </a>
                        <a
                          href=""
                          className="block rounded-md bg-primary/[0.08] px-[14px] py-[5px] text-base text-dark hover:bg-primary hover:text-white"
                        >
                          Development
                        </a>
                        <a
                          href=""
                          className="block rounded-md bg-primary/[0.08] px-[14px] py-[5px] text-base text-dark hover:bg-primary hover:text-white"
                        >
                          Info
                        </a>
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div
                        className="flex items-center wow fadeInUp md:justify-end"
                        
                      >
                        <span
                          className="mr-5 text-sm font-medium text-body-color"
                        >
                          Share This Post
                        </span>
                        <div className="flex items-center gap-[10px]">
                          <a href="">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                                fill="#1877F2"
                              />
                              <path
                                d="M17 15.5399V12.7518C17 11.6726 17.8954 10.7976 19 10.7976H21V7.86631L18.285 7.67682C15.9695 7.51522 14 9.30709 14 11.5753V15.5399H11V18.4712H14V24.3334H17V18.4712H20L21 15.5399H17Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                          <a href="">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                                fill="#55ACEE"
                              />
                              <path
                                d="M24.2945 11.375C24.4059 11.2451 24.2607 11.0755 24.0958 11.1362C23.728 11.2719 23.3918 11.3614 22.8947 11.4166C23.5062 11.0761 23.7906 10.5895 24.0219 9.99339C24.0777 9.84961 23.9094 9.71915 23.7645 9.78783C23.1759 10.0669 22.5408 10.274 21.873 10.3963C21.2129 9.7421 20.272 9.33331 19.2312 9.33331C17.2325 9.33331 15.6117 10.8406 15.6117 12.6993C15.6117 12.9632 15.6441 13.2202 15.7051 13.4663C12.832 13.3324 10.2702 12.1034 8.49031 10.2188C8.36832 10.0897 8.14696 10.1068 8.071 10.2643C7.86837 10.6846 7.7554 11.1509 7.7554 11.6418C7.7554 12.8093 8.39417 13.8395 9.36518 14.4431C8.92981 14.4301 8.51344 14.3452 8.12974 14.2013C7.94292 14.1312 7.72877 14.2543 7.75387 14.4427C7.94657 15.8893 9.11775 17.0827 10.6295 17.3647C10.3259 17.442 10.0061 17.483 9.67537 17.483C9.59517 17.483 9.51567 17.4805 9.43688 17.4756C9.23641 17.4632 9.07347 17.6426 9.15942 17.8141C9.72652 18.946 10.951 19.7361 12.376 19.7607C11.1374 20.6637 9.57687 21.2017 7.88109 21.2017C7.672 21.2017 7.5823 21.4706 7.7678 21.5617C9.20049 22.266 10.832 22.6666 12.5656 22.6666C19.2231 22.6666 22.8631 17.5377 22.8631 13.0896C22.8631 12.944 22.8594 12.7984 22.8528 12.6542C23.3932 12.2911 23.8789 11.8595 24.2945 11.375Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                          <a href="">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                                fill="#007AB9"
                              />
                              <path
                                d="M11.7836 10.1666C11.7833 10.8452 11.3716 11.4559 10.7426 11.7106C10.1137 11.9654 9.39306 11.8134 8.92059 11.3263C8.44811 10.8392 8.31813 10.1143 8.59192 9.49341C8.86572 8.87251 9.48862 8.4796 10.1669 8.49996C11.0678 8.527 11.784 9.26533 11.7836 10.1666ZM11.8336 13.0666H8.50024V23.4999H11.8336V13.0666ZM17.1003 13.0666H13.7836V23.4999H17.0669V18.0249C17.0669 14.9749 21.0419 14.6916 21.0419 18.0249V23.4999H24.3336V16.8916C24.3336 11.75 18.4503 11.9416 17.0669 14.4666L17.1003 13.0666Z"
                                fill="white"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        
      </div>
    </section>

    </>
  )
}
