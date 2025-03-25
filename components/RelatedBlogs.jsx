import Link from 'next/link';
import Image from 'next/image';
import { Montserrat, Numans } from 'next/font/google';
import { blogData } from '@/data/blog';

const monserrat = Montserrat({ subsets: ["latin"] });
const numans = Numans({ subsets: ["latin"], weight: ["400"] });

export default function RelatedBlogs() {
  return (
    <section className="bg-white pb-10 pt-20 lg:pb-20 lg:pt-[20px]">
      <div className="container mx-auto">

        <div className="-mx-4 flex flex-wrap">

        <div className="-mx-4 flex flex-wrap">
          {blogData.map((blog, index) => {
            return(
              <div className="w-full px-4 md:w-1/2 lg:w-1/3" key={index}>
                <div className="mb-10 w-full group">
                  <div className="mb-8 overflow-hidden rounded">
                    <Link href={`/blog/${blog.id}`}className="block">
                      <Image
                        src={blog.img}
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
                      {blog.date}
                    </span>
                    <h3>
                      <Link href="/blog/1" className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                        {blog.title}
                      </Link>
                    </h3>
                    <p className="text-base text-body-color">
                      {blog.description}
                    </p>
                  </div>
                </div>
              </div>
            )

          })}

        </div>
          
        
        </div>
      </div>
    </section>
  )
}
