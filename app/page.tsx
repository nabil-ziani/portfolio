import Header from "@/components/sections/header"
import HeroSection from "@/components/sections/hero"
import ProjectsSection from "@/components/sections/projects"
import TapeSection from "@/components/sections/tape"
import TestimonialsSection from "@/components/sections/testimonials"

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
    </div>
  )
}
