import Image from "next/image";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Services from "@/Components/Services";
import Portfolio from "@/Components/Portfolio";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";

export default function Home() {
   return (
    <div> 
     <Hero />
     <About />
     <Services />
     <Portfolio />
     <Contact />
     <Footer />
    </div>
  )
}
