import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Hero from "@/components/Hero";

export default function Home() {

  return (
  <>
    <Hero/>
    <Services/>
    <About/>
    {/* <Testimonials/> */}
    <Team/>
    <Blog/>
    <Contact/>
  </>
  )
}
