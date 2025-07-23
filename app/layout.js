import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: 'Elipson Synergy ',
  description: 'Elipson existe para impulsar la innovación, desarrollo y transformación industrial colombiana a través de soluciones tecnológicas sostenibles y toma de decisiones inteligentes.',
  keywords: 'innovación, tecnología, desarrollo, sostenibilidad, agricultura, automatización'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={nunito.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
