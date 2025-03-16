import { Montserrat, Numans } from 'next/font/google'
import Image from 'next/image';


import {teamData} from "@/data/team"

const monserrat = Montserrat({ subsets: ["latin"] });
const numans = Numans({ subsets: ["latin"], weight: ["400"] });

export default function Team() {
  return (
    <section className="pb-10 pt-20 lg:pb-20 lg:pt-[20px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className={`${numans.className} mb-2 block text-lg font-semibold text-primary`}>
                Equipo
              </span>
              <h2
                className={`${monserrat.className} mb-3 text-3xl font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px]`}
              >
                Nuestro Fantástico Equipo
              </h2>
              <p className="text-base text-body-color">
                Detrás de un gran desarrollo siempre hay personas con iniciativa
                que buscan generar un gran impacto en la sociedad.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          
          {teamData.map((team, index) => {
            return(
              <div className="w-full px-4 md:w-1/2 xl:w-1/4" key={index}>
                <div className="mx-auto mb-10 w-full max-w-[370px]">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image 
                      src={team.image}
                      alt="image"
                      className="w-full "
                      width={1000}  
                      height={1000}       
                    />
                    
                    <div className="absolute bottom-5 left-0 w-full text-center">
                      <div
                        className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5"
                      >
                        <h3
                          className="text-base font-semibold text-dark"
                        >
                          {team.name}
                        </h3>
                        <p className="text-xs text-body-color">
                            {team.role}
                        </p>
                        <div>
                          <span className="absolute bottom-0 left-0">
                            <svg
                              width="61"
                              height="30"
                              viewBox="0 0 61 30"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="16"
                                cy="45"
                                r="45"
                                fill="#13C296"
                                fillOpacity="0.11"
                              />
                            </svg>
                          </span>
                          <span className="absolute right-0 top-0">
                            <svg
                              width="20"
                              height="25"
                              viewBox="0 0 20 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="0.706257"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 0.706257 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 6.39669 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 12.0881 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="24.3533"
                                r="0.646687"
                                transform="rotate(-90 17.7785 24.3533)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 0.706257 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 6.39669 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 12.0881 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="18.6624"
                                r="0.646687"
                                transform="rotate(-90 17.7785 18.6624)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 0.706257 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 6.39669 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 12.0881 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="12.9717"
                                r="0.646687"
                                transform="rotate(-90 17.7785 12.9717)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 0.706257 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 6.39669 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 12.0881 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="7.28077"
                                r="0.646687"
                                transform="rotate(-90 17.7785 7.28077)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="0.706257"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 0.706257 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="6.39669"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 6.39669 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="12.0881"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 12.0881 1.58989)"
                                fill="#3056D3"
                              />
                              <circle
                                cx="17.7785"
                                cy="1.58989"
                                r="0.646687"
                                transform="rotate(-90 17.7785 1.58989)"
                                fill="#3056D3"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      
          
        </div>
      </div>
    </section>
  )
}
