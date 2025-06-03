import { Montserrat, Numans } from 'next/font/google'
import {projectsData} from "@/data/portfolio";
import {categoriesData} from "@/data/categories"
import Link from 'next/link';
import Image from "next/image";


const monserrat = Montserrat({ subsets: ["latin"] });
const numans = Numans({ subsets: ["latin"], weight: ["400"] });

async function getProject(id) {
  const projects = [...projectsData];
  const project = projects[parseInt(id) - 1]; 
  
  return project;
  
}

export default async function Page({ params }) {

    const { id } = await params

    const project =  await  getProject(id);

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
                        {project.title}</h1>
                        <p className="mb-5 text-base text-body-color">
                        Descubre la innovación de la industria colombiana
                        </p>

                        <ul className="flex items-center justify-center gap-[10px]">
                        <li>
                            <Link href="/products" className="flex items-center gap-[10px] text-base font-medium text-dark"> 
                                Proyectos
                            </Link>
                        </li>
                        <li>
                            <Link href={`/products/${project.id}`} className="flex items-center gap-[10px] text-base font-medium text-body-color"> 
                            <span className="text-body-color"> / </span>
                                {project.title}
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div> 
            
            
            <section className="overflow-hidden bg-white pb-12 pt-20 lg:pb-[90px] lg:pt-[10px]" id={`${project.title}`}>
                  <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap items-center justify-between">
                      <div className="w-full px-4 lg:w-6/12">
                        <div className="-mx-3 flex items-center sm:-mx-4">
                          <div className="w-full px-3 sm:px-4 xl:w-1/2">
                            <div className="py-3 sm:py-4">
                              <Image 
                                  src={project.img1}
                                  alt="Elipson"    
                                  className="w-full rounded-2xl"
                                  width={1000}
                                  height={1000}
                              /> 
                            
                            </div>
                            <div className="py-3 sm:py-4">
                              <Image 
                                  src={project.img2}
                                  alt="Elipson"    
                                  className="w-full rounded-2xl"
                                  width={1000}
                                  height={1000}
                              /> 
                              
                            </div>
                          </div>
                          <div className="w-full px-3 sm:px-4 xl:w-1/2">
                            <div className="relative z-10 my-4">
                              <Image 
                                  src={project.img3}
                                  alt="Elipson"    
                                  className="w-full rounded-2xl"
                                  width={1000}
                                  height={1000}
                              /> 
                              
                              <span className="absolute -bottom-7 -right-7 z-[-1]">
                                <svg
                                  width="134"
                                  height="106"
                                  viewBox="0 0 134 106"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="1.66667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 104)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="16.3333"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 104)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="31"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 31 104)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="45.6667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 104)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="60.3334"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 60.3334 104)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="88.6667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 104)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="117.667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 104)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="74.6667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 104)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="103"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 103 104)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="132"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 132 104)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="1.66667"
                                    cy="89.3333"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 89.3333)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="16.3333"
                                    cy="89.3333"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 89.3333)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="31"
                                    cy="89.3333"
                                    r="1.66667"
                                    transform="rotate(-90 31 89.3333)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="45.6667"
                                    cy="89.3333"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 89.3333)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="60.3333"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 89.3338)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="88.6667"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 89.3338)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="117.667"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 89.3338)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="74.6667"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 89.3338)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="103"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 103 89.3338)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="132"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 132 89.3338)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="1.66667"
                                    cy="74.6673"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 74.6673)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="1.66667"
                                    cy="31.0003"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 31.0003)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="16.3333"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 74.6668)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="16.3333"
                                    cy="31.0003"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 31.0003)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="31"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 31 74.6668)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="31"
                                    cy="31.0003"
                                    r="1.66667"
                                    transform="rotate(-90 31 31.0003)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="45.6667"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 74.6668)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="45.6667"
                                    cy="31.0003"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 31.0003)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="60.3333"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 74.6668)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="60.3333"
                                    cy="30.9998"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 30.9998)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="88.6667"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 74.6668)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="88.6667"
                                    cy="30.9998"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 30.9998)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="117.667"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 74.6668)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="117.667"
                                    cy="30.9998"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 30.9998)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="74.6667"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 74.6668)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="74.6667"
                                    cy="30.9998"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 30.9998)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="103"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 103 74.6668)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="103"
                                    cy="30.9998"
                                    r="1.66667"
                                    transform="rotate(-90 103 30.9998)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="132"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 132 74.6668)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="132"
                                    cy="30.9998"
                                    r="1.66667"
                                    transform="rotate(-90 132 30.9998)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="1.66667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 60.0003)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="1.66667"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 16.3333)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="16.3333"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 60.0003)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="16.3333"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 16.3333)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="31"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 31 60.0003)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="31"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 31 16.3333)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="45.6667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 60.0003)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="45.6667"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 16.3333)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="60.3333"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 60.0003)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="60.3333"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 16.3333)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="88.6667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 60.0003)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="88.6667"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 16.3333)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="117.667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 60.0003)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="117.667"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 16.3333)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="74.6667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 60.0003)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="74.6667"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 16.3333)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="103"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 103 60.0003)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="103"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 103 16.3333)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="132"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 132 60.0003)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="132"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 132 16.3333)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="1.66667"
                                    cy="45.3333"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 45.3333)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="1.66667"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 1.66683)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="16.3333"
                                    cy="45.3333"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 45.3333)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="16.3333"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 1.66683)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="31"
                                    cy="45.3333"
                                    r="1.66667"
                                    transform="rotate(-90 31 45.3333)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="31"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 31 1.66683)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="45.6667"
                                    cy="45.3333"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 45.3333)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="45.6667"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 1.66683)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="60.3333"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 45.3338)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="60.3333"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 1.66683)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="88.6667"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 45.3338)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="88.6667"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 1.66683)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="117.667"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 45.3338)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="117.667"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 1.66683)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="74.6667"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 45.3338)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="74.6667"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 1.66683)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="103"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 103 45.3338)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="103"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 103 1.66683)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="132"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 132 45.3338)"
                                    fill="#3056D3"
                                  />
                                  <circle
                                    cx="132"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 132 1.66683)"
                                    fill="#3056D3"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                        <div className="mt-10 lg:mt-0">
                          <span className={`${numans.className} mb-4 block text-lg font-semibold text-primary`}>
                            {project.category}
                          </span>
                          <h2
                            className={`${monserrat.className} mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px]`}
                          >
                            {project.title}
                          </h2>
                          <p className="mb-5 text-base text-body-color">
                            {project.description}
                          </p>
                          <p className="mb-8 text-base text-body-color">
                            En Elipson, seguimos desarrollando soluciones tecnológicas que transforman el sector agroindustrial. Este es solo uno de nuestros productos innovadores: tenemos mucho más por descubrir.
                          </p>
                          <Link
                          href="/products"
                          className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-opacity-90">
                            Otros Proyectos
                          </Link>
            
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

        </>
    )
}
