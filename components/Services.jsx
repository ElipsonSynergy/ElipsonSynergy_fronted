import { Montserrat, Numans } from 'next/font/google';

const monserrat = Montserrat({ subsets: ["latin"] });
const numans = Numans({ subsets: ["latin"], weight: ["400"] });

export default function Services() {
  return (
    <section className="pb-12 pt-10 lg:pb-[90px] lg:pt-[20px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className={`${numans.className} mb-2 block text-lg font-semibold text-primary`}>
                Nuestros Servicios
              </span>
              <h2
                className={`${monserrat.className} mb-3 text-3xl font-bold leading-[1.2] text-dark sm:text-4xl md:text-[40px]`}
              >
                Lo Que Ofrecemos
              </h2>
              <p className="text-base text-body-color">
                Contamos con una amplia gama de servicios y soluciones que impactan
                en la innovación y desarrollo de diversos sectores de la industria Latino Americana.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10"
            >
              <div
                className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary"
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.0375 1.2374C11.8125 -0.393851 2.92503 5.7374 1.29378 14.9624C0.450029 19.4061 1.46253 23.9624 4.05003 27.6749C6.63753 31.4436 10.5188 33.9186 14.9625 34.7624C15.975 34.9311 16.9875 35.0436 18 35.0436C26.0438 35.0436 33.2438 29.2499 34.7625 21.0374C36.3938 11.8124 30.2625 2.9249 21.0375 1.2374ZM32.2313 20.5874C32.175 21.0374 32.0625 21.4874 31.95 21.8811L19.2375 17.0999V3.5999C19.6875 3.65615 20.1375 3.7124 20.5313 3.76865C28.4063 5.1749 33.6375 12.7124 32.2313 20.5874ZM16.7063 3.5999V16.7624H3.60003C3.65628 16.3124 3.71253 15.8624 3.76878 15.4124C4.95003 8.83115 10.4063 4.10615 16.7063 3.5999ZM15.4125 32.2311C11.5875 31.5561 8.32503 29.4186 6.13128 26.2124C4.66878 24.1311 3.82503 21.7124 3.60003 19.2374H17.775L31.05 24.2436C28.2938 29.9811 21.9375 33.4686 15.4125 32.2311Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h4
                className="mb-[14px] text-2xl font-semibold text-dark"
              >
                Estrategias Comerciales
              </h4>
              <p className="text-body-color dark:text-dark-6">
                Transformamos ideas en resultados tangibles mediante estrategias 
                comerciales innovadoras que impulsan el crecimiento de tu empresa.
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10"
            >
              <div
                className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="36"
                  height="36" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>

                
              </div>
              <h4
                className="mb-[14px] text-2xl font-semibold text-dark"
              >
                Soluciones Software 
              </h4>
              <p className="text-body-color dark:text-dark-6">
                Desarrollamos soluciones software personalizadas que potencian 
                la eficiencia operativa y mejoran la experiencia de los usuarios.
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10"
            >
              <div
                className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary"
              >

                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none"  
                  strokeWidth={1.5} 
                  stroke="white" 
                  width="42"
                  height="42"
                  viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
                </svg>

              </div>
              <h4
                className="mb-[14px] text-2xl font-semibold text-dark"
              >
                Hardware Personalizado 
              </h4>
              <p className="text-body-color dark:text-dark-6">
                Diseñamos hardware a medida para satisfacer las necesidades
                específicas de tu industria, garantizando un rendimiento óptimo.
              
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10"
            >
              <div
                className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary"
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.2625 10.6312C27.1688 7.36875 22.8375 5.34375 18 5.34375C8.60626 5.34375 1.01251 12.9937 1.01251 22.3875C1.01251 25.0312 1.63126 27.6187 2.75626 29.925C2.92501 30.2625 3.20626 30.4875 3.54376 30.6C3.65626 30.6 3.71251 30.6562 3.82501 30.6562C3.82501 30.6562 3.82501 30.6562 3.88126 30.6562C3.88126 30.6562 3.88126 30.6562 3.93751 30.6562C3.99376 30.6562 4.05001 30.6562 4.10626 30.6562C4.21876 30.6562 4.38751 30.6 4.50001 30.5437L6.80626 29.4187C7.42501 29.1375 7.70626 28.35 7.36876 27.7312C7.03126 27.1125 6.30001 26.8312 5.68126 27.1687L4.55626 27.7312C3.88126 26.1 3.60001 24.3562 3.54376 22.5562H5.90626C6.58126 22.5562 7.20001 21.9937 7.20001 21.2625C7.20001 20.5312 6.63751 19.9687 5.90626 19.9687H3.71251C4.10626 17.4937 5.17501 15.2437 6.69376 13.3875L8.71876 15.4125C8.94376 15.6375 9.28126 15.8062 9.61876 15.8062C9.95626 15.8062 10.2938 15.6937 10.5188 15.4125C11.025 14.9062 11.025 14.1187 10.5188 13.6125L8.43751 11.5312C10.6875 9.5625 13.5563 8.2125 16.7625 7.9875V11.4187C16.7625 12.0937 17.325 12.7125 18.0563 12.7125C18.7313 12.7125 19.35 12.15 19.35 11.4187V7.9875C22.5 8.26875 25.425 9.5625 27.675 11.5312L26.1 13.1062C25.5938 13.6125 25.5938 14.4 26.1 14.9062C26.325 15.1312 26.6625 15.3 27 15.3C27.3375 15.3 27.675 15.1875 27.9 14.9062L29.4188 13.3875C30.9375 15.2437 31.95 17.4937 32.4 19.9687H30.2063C29.5313 19.9687 28.9125 20.5312 28.9125 21.2625C28.9125 21.9937 29.475 22.5562 30.2063 22.5562H32.5688C32.5688 24.3562 32.2313 26.1 31.5563 27.7875L30.4313 27.225C29.8125 26.8875 29.025 27.1687 28.7438 27.7875C28.4625 28.4062 28.6875 29.1937 29.3063 29.475L31.6125 30.6C31.7813 30.7125 32.0063 30.7125 32.175 30.7125C32.175 30.7125 32.175 30.7125 32.2313 30.7125C32.2313 30.7125 32.2313 30.7125 32.2875 30.7125C32.7375 30.7125 33.1875 30.4312 33.4125 30.0375C34.5938 27.7312 35.1563 25.0875 35.1563 22.5C35.0438 17.8312 33.1875 13.6687 30.2625 10.6312Z"
                    fill="white"
                  />
                  <path
                    d="M21.4313 19.3499L17.6625 22.1624C16.9875 22.2749 16.3688 22.6687 15.975 23.2312C15.9188 23.3437 15.8625 23.3999 15.8063 23.5124L15.6938 23.6249H15.75C15.1313 24.8062 15.4688 26.2687 16.5938 27.1124C17.7188 27.8999 19.2375 27.7874 20.1375 26.8312H20.1938L20.25 26.7187C20.3063 26.6624 20.4188 26.5499 20.475 26.4374C20.925 25.8749 21.0375 25.1437 20.9813 24.4687L22.4438 19.9687C22.6125 19.4624 21.9375 19.0124 21.4313 19.3499Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h4
                className="mb-[14px] text-2xl font-semibold text-dark"
              >
                Sistemas De Gestión
              </h4>
              <p className="text-body-color">
                Implementamos sistemas de gestión integrales que simplifican 
                tus operaciones y facilitan la toma de decisiones informadas.
  
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10"
            >
              <div
                className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary"
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.0937 21.8251L29.6437 21.6001L30.2062 21.2626C31.3312 20.5876 31.95 19.4063 31.95 18.0563C31.95 16.7626 31.2187 15.5813 30.0937 14.9063L28.9125 14.2313L30.2062 13.4438C31.3312 12.7688 31.95 11.5876 31.95 10.2376C31.95 8.94385 31.2187 7.7626 30.0937 7.14385L19.9125 1.4626C18.7875 0.843848 17.3812 0.843848 16.3125 1.4626L5.84999 7.5376C4.72499 8.2126 4.04999 9.39385 4.04999 10.6876C4.04999 11.9813 4.72499 13.2188 5.84999 13.8376L7.08749 14.5688L5.84999 15.3001C4.72499 15.9751 4.04999 17.1563 4.04999 18.4501C4.04999 19.7438 4.72499 20.9813 5.84999 21.6001L6.35624 21.8813L5.84999 22.1626C4.72499 22.8376 3.99374 24.0188 3.99374 25.3126C3.99374 26.6626 4.66874 27.8438 5.79374 28.4626L16.1437 34.4813C16.7062 34.8188 17.325 34.9876 18 34.9876C18.675 34.9876 19.35 34.8188 19.9125 34.4251L30.2625 28.1251C31.3875 27.4501 32.0062 26.2688 32.0062 24.9188C31.95 23.6251 31.275 22.4438 30.0937 21.8251ZM6.52499 10.6876C6.52499 10.5188 6.58124 10.0126 7.08749 9.73135L17.55 3.65635C17.8875 3.43135 18.3375 3.43135 18.675 3.65635L28.9125 9.3376C29.4187 9.61885 29.475 10.1251 29.475 10.2938C29.475 10.4626 29.4187 10.9688 28.9125 11.3063L18.6187 17.6626C18.2812 17.8876 17.8312 17.8876 17.4375 17.6626L7.08749 11.6438C6.58124 11.3626 6.52499 10.8563 6.52499 10.6876ZM7.08749 17.4938L9.56249 16.0313L16.1437 19.8563C16.7062 20.1938 17.325 20.3626 18 20.3626C18.675 20.3626 19.35 20.1938 19.9125 19.8001L26.4375 15.8063L28.8562 17.1563C29.3625 17.4376 29.4187 17.9438 29.4187 18.1126C29.4187 18.2813 29.3625 18.7876 28.8562 19.1251L18.6187 25.4251C18.2812 25.6501 17.8312 25.6501 17.4375 25.4251L7.08749 19.4063C6.58124 19.1251 6.52499 18.6188 6.52499 18.4501C6.52499 18.2813 6.58124 17.7751 7.08749 17.4938ZM28.9125 25.9876L18.6187 32.3438C18.2812 32.5688 17.8312 32.5688 17.4375 32.3438L7.08749 26.3251C6.58124 26.0438 6.52499 25.5376 6.52499 25.3688C6.52499 25.2001 6.58124 24.6938 7.08749 24.4126L8.83124 23.4001L16.2 27.6751C16.7625 28.0126 17.3812 28.1813 18.0562 28.1813C18.7312 28.1813 19.4062 28.0126 19.9687 27.6188L27.225 23.1751L28.9125 24.0751C29.4187 24.3563 29.475 24.8626 29.475 25.0313C29.475 25.2001 29.4187 25.7063 28.9125 25.9876Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h4
                className="mb-[14px] text-2xl font-semibold text-dark"
              >
                Consultoría & Soporte 
              </h4>
              <p className="text-body-color">
                Ofrecemos asesoramiento experto y soporte continuo para optimizar 
                tus procesos, asegurando el máximo rendimiento de tus operaciones.
               
              </p>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
              className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10"
            >
              <div
                className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary"
              >

                <svg xmlns="http://www.w3.org/2000/svg" fill="none"  width="36"
                  height="36" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                </svg>

              </div>
              <h4
                className="mb-[14px] text-2xl font-semibold text-dark"
              >
                Desarrollo & Crecimiento
              </h4>
              <p className="text-body-color">
                Impulsamos tu presencia en el mercado mediante estrategias 
                tecnologicas para desarrollar la industria, generando un crecimiento sostenible y significativo.
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
