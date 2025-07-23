"use client"

import { Montserrat, Numans } from 'next/font/google'

const monserrat = Montserrat({ subsets: ["latin"] });
const numans = Numans({ subsets: ["latin"], weight: ["400"] });


export default function Modal({modalOpen, data, close}) {

  return (
    <section>

      <div
        className={`fixed z-50 left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-dark/90 px-4 py-5 ${modalOpen ? 'show' : 'hidden'}` }
      >
        <div className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]">
          <h3
            className={`${monserrat.className} pb-[18px] text-xl font-semibold text-dark dark:text-white sm:text-2xl`}  
          >
            {data.response}
          </h3>
          <span
            className="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary"
          ></span>
          <p
            className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6"
          >
            {data.message}
          </p>
          <div className="-mx-3 flex flex-wrap justify-center">
            <div className="w-1/2 px-3">
              <button
                className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:text-white"
                onClick={close}
              >
                Cerrar
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
