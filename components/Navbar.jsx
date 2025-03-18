'use client'

import Link from "next/link";
import Image from 'next/image';
import logo from '@/public/assets/images/logo/logo.svg';
import { useState } from "react";
import { Montserrat } from 'next/font/google';

const monserrat = Montserrat({ subsets: ["latin"] });

export default function Navbar() {

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <header  className="absolute left-0 top-0 z-50 w-full">
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link href="/" className="block w-full py-5">
                <Image 
                  src={logo}
                  alt="logo"
                  className="block w-full"
                  width={1000}  
                  height={600} 
                
                />
            </Link>

          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                id="navbarToggler"
                className={`absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${navbarOpen ? 'navbarTogglerActive' : ''}`}
              >
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"
                ></span>
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"
                ></span>
                <span
                  className="relative my-[6px] block h-[2px] w-[30px] bg-body-color"
                ></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow transition-all lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none xl:ml-11 ${navbarOpen ? '' : 'hidden'}`}
              >
                <ul className="block lg:flex">
                  <li>
                    <Link href="/" className={`${monserrat.className} flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-10 lg:inline-flex`}>
                      Inicio
                    </Link>
                
                  </li>
                  <li>
                    <Link href="/products" className={`${monserrat.className} flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-10 lg:inline-flex`}>
                      Productos
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className={`${monserrat.className} flex py-2 text-base font-medium text-dark hover:text-primary lg:ml-10 lg:inline-flex`}>
                      Blog
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <Link href="/login" className={`${monserrat.className} px-7 py-3 text-base font-medium text-dark hover:text-primary`}>
                Ingresar
              </Link>
              
              <Link href="/signup" className={`${monserrat.className} rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-blue-dark capitalize flex items-center`}>
                Registrarse
              </Link>
            
            </div> */}
          </div>
        </div>
      </div>
    </header>
  )
}
