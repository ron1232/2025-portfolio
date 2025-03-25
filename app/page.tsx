import Resume from "@/components/Resume";
import HireMe from "@/components/HireMe";
import Portfolio from "@/components/Portfolio";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <Resume />
      <Portfolio />
      <HireMe />
    </main>
  );
}
