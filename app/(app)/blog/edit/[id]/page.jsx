'use client' 

import dynamic from 'next/dynamic';

import { Montserrat, Numans } from 'next/font/google'
const monserrat = Montserrat({ subsets: ["latin"] });
const numans = Numans({ subsets: ["latin"], weight: ["400"] });

const CustomEditor = dynamic( () => {
  return import( '@/components/CustomEditor' );
}, { ssr: false } );

export default function page({params}) {
  return (
    <section className="pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[510px] text-center">
              <h2
                className={`${monserrat.className} mb-3 text-3xl font-bold leading-[1.208] text-dark sm:text-4xl md:text-[40px]`}
              >
                Blog número {params.id}
              </h2>
              
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <CustomEditor />
          </div>
        </div>
      </div>
    </section>
    
  );
}
