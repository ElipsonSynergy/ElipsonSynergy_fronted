import { Montserrat } from 'next/font/google'
import Image from 'next/image';
import heroImg from '@/public/assets/images/hero/hero-image-04.png';
import alqueria from '@/public/assets/images/brands/alqueria.svg';
import uniandes from '@/public/assets/images/brands/uniandes.svg';
import google from '@/public/assets/images/brands/google.svg'
import ministerio from '@/public/assets/images/brands/ministerio.svg';
import Link from 'next/link';

const monserrat = Montserrat({ subsets: ["latin"] });

export default function Hero() {
  return (
    <>

    <div className="relative bg-white pb-[110px] pt-[120px] lg:pt-[150px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
              <h1
                className={`mb-5 text-4xl font-bold !leading-[1.208] text-dark sm:text-[42px] lg:text-[40px] xl:text-5xl ${monserrat.className}`}
              >
                La Innovación <br />
                De La Industria<br />
                Latino Americana.
              </h1>
              <p
                className="mb-8 max-w-[480px] text-base text-body-color"
              >
                Elipson existe para impulsar la innovación, desarrollo y transformación industrial latino americana a través de soluciones tecnológicas sostenibles y toma de decisiones inteligentes.
              </p>
              <ul className="flex flex-wrap items-center">
                <li>
                  <Link href="/#about"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7">
                      Descubrir
                  </Link>
                 
                </li>
                {/* <li>
                  <a
                    href=""
                    className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646] hover:text-primary"
                  >
                    <span className="mr-2">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12.6152" r="12" fill="#3758F9" />
                        <rect
                          x="7.99893"
                          y="14.979"
                          width="8.18182"
                          height="1.63636"
                          fill="white"
                        />
                        <rect
                          x="11.2717"
                          y="7.61523"
                          width="1.63636"
                          height="4.09091"
                          fill="white"
                        />
                        <path
                          d="M12.0898 14.1606L14.9241 11.0925H9.25557L12.0898 14.1606Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    Centro Elipson
                  </a>
                </li> */}
              </ul>
              <div className="clients pt-16 ">
                <h6
                  className="mb-6 flex items-center text-xs font-normal text-body-color"
                >
                  Nuestros Aliados
                  <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
                </h6>
                <div className="flex items-center gap-4 xl:gap-[50px] ">
                  {/* <a href="https://www.alqueria.com.co" className="block py-3" target='_blank'>
                    <Image 
                      src={alqueria}
                      alt="Alquería"   
                      height={35} 
                    /> 
                  </a> */}
                  <a href="https://uniandes.edu.co" className="block py-3 text-gray-600" target='_blank'> 
                    <Image 
                      src={google}
                      alt="Patner by Google"    
                      height={35}
                    /> 
                  </a>
                  {/* <a href="https://www.minagricultura.gov.co/paginas/default.aspx" className="block py-3" target='_blank'>
                    <Image 
                      src={ministerio}
                      alt="Ministerio de agricultura y desarrollo rural colombia"   
                      height={35} 
                    /> 
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden px-4 lg:block lg:w-1/12"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block pt-11 lg:pt-0">
                <Image 
                  src={heroImg}
                  alt="hero"
                  className="max-w-full lg:ml-auto"
                  
                />
              
                <span className="absolute -bottom-8 -left-8 z-[-1]">
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
