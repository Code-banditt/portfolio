import Image from "next/image";
import Navbar from "./components/header";
import image1 from "/public/img/portfolio.png";
import Skills from "./components/Skills";
import HonorableMentions from "./components/honorableMention";
import Projects from "./components/project";
import ContactSection from "./components/contact";
import Footer from "./components/footer";
import ExperienceSection from "./components/Education";
import CertificatesSection from "./components/certificate";

export default function HeroDark() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen bg-[#111] text-white flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 sm:px-12 md:px-20 py-10"
      >
        {/* Sidebar Social (hidden on mobile) */}
        <aside className="hidden md:flex flex-col items-center gap-4 absolute left-6 top-1/2 -translate-y-1/2 text-gray-500">
          <div className="flex flex-col gap-3 text-lg">
            <a href="#" className="hover:text-teal-400 transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-teal-400 transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </aside>

        {/* Left Text */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
            HELLO I&#39;M <br />
            <span className="font-semibold text-teal-400">Nwodo Anthony</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
            A passionate Full Stack Developer with a focus on crafting seamless,
            high-performing web experiences. I specialize in building modern
            frontend interfaces and powerful backend APIs that scale. With every
            line of code, I aim to turn ideas into products that solve
            real-world problems with clarity and impact.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-[220px] sm:w-[300px] md:w-[380px] h-[300px] sm:h-[450px] md:h-[550px] bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              height={500}
              width={500}
              src={image1}
              alt="Profile"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <Skills />
      <HonorableMentions />
      <Projects id="projects" />
      <ExperienceSection />
      <CertificatesSection id="certificates" />
      <ContactSection id="contact" />
      <Footer />
    </>
  );
}
