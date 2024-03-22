import Link from 'next/link';
import Image from 'next/image';
import { Montserrat, Numans } from 'next/font/google';

const monserrat = Montserrat({ subsets: ["latin"] });
const numans = Numans({ subsets: ["latin"], weight: ["400"] });

export default function Blog() {
  return (
    <section className="bg-white pb-10 pt-20 lg:pb-20 lg:pt-[20px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className={`${numans.className} mb-2 block text-lg font-semibold text-primary`}>
                 Blogs
              </span>
              <h2
                className={`${monserrat.className} mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]`}
              >
                Nuestras Noticias Recientes 
              </h2>
              <p className="text-base text-body-color">
                Te brindamos información de calidad sobre tu industria o noticias en
                general que ayudarán a que estes a la vanguardia de la innovación y
                desarrollo.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-10 w-full group">
              <div className="mb-8 overflow-hidden rounded">
                <Link href="/blog/1" className="block">
                  <Image
                    src="/assets/images/blogs/blog-01/image-01.jpg"
                    alt="image"
                    className="w-full transition group-hover:opacity-80"
                    width={1000}
                    height={1000}
                  />
                </Link>
                
              </div>
              <div>
                <span
                  className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white"
                >
                  Dic 22, 2023
                </span>
                <h3>
                  <Link href="/blog/1" className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                    Las mejores herramientas de gestión integradas con IA
                  </Link>
                </h3>
                <p className="text-base text-body-color">
                  Descubre como mejorar la gestión de tus proyectos con 
                  herramientas de inteligencia artificial.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-10 w-full group">
              <div className="mb-8 overflow-hidden rounded">
                <Link href="/blog/1" className="block">
                  <Image
                    src="/assets/images/blogs/blog-01/image-02.jpg"
                    alt="image"
                    className="w-full transition group-hover:opacity-80"
                    width={1000}
                    height={1000}
                  />
                </Link>
                
              </div>
              <div>
                <span
                  className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white"
                >
                  Mar 15, 2023
                </span>
                <h3>
                  <Link href="/blog/1" className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                    Cómo desarrollar tu industria mediante la innovación.
                  </Link>
                  
                </h3>
                <p className="text-base text-body-color">
                  Aprende la importancia de innovar en tu industria.
                  para evolucionar y crecer de manera sostenible.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="mb-10 w-full group">
              <div className="mb-8 overflow-hidden rounded">
                <Link href="/blog/1" className="block">
                  <Image
                    src="/assets/images/blogs/blog-01/image-03.jpg"
                    alt="image"
                    className="w-full transition group-hover:opacity-80"
                    width={1000}
                    height={1000}
                  />
          
                </Link>
                
              </div>
              <div>
                <span
                  className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white"
                >
                  Jun 05, 2023
                </span>
                <h3>
                  <Link href="/blog/1" className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                    Como tener un equipo más productivo en tus proyectos.
                  </Link>
                  
                </h3>
                <p className="text-base text-body-color">
                  Explora metodologías que mejorarán la comunicación y
                  optimizan la productividad de tus proyectos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
