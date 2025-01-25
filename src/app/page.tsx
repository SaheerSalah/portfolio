import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="container overflow-x-hidden font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
