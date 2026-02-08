import { Hero } from "@/components/landing/hero"
import { Categories } from "@/components/landing/categories"
import { Services } from "@/components/landing/services"
import { About } from "@/components/landing/about"
import { Contact } from "@/components/landing/contact"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Categories />
      <Services />
      <About />
      <Contact />
    </div>
  );
}
