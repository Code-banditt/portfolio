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
      <div className="inset-0">
        <Navbar />
      </div>

      <section
        id="home"
        className="h-screen bg-[#111] text-white flex items-center justify-between px-8 md:px-20 relative"
      >
        {/* Sidebar Social */}
        <aside className="absolute left-4 top-1/2 -translate-y-1/2 space-y-4 text-sm tracking-widest text-gray-500 rotate-180 origin-left md:rotate-0">
          <div className="space-y-2 hidden md:block">
            <p className="rotate-90">SOCIAL MEDIA</p>
            <div className="space-y-3 ml-2">
              <a href="#">
                <i className="fab fa-twitter "> </i>
              </a>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </aside>

        {/* Left Text */}
        <div className="flex-1 z-10 ml-8">
          <span className="text-8xl sm:text-6xl font-light leading-tight">
            <h1>HELLO I&#39;M</h1>
            <span className="font-semibold text-teal-400">
              Nwodo Anthony
            </span>{" "}
            <br />
            <p className="text-sm ">
              A passionate Full Stack Developer with a focus on crafting
              seamless, high-performing web experiences. I specialize in
              building modern frontend interfaces and powerful backend APIs that
              scale. With every line of code, I aim to turn ideas into products
              that solve real-world problems with clarity and impact.
            </p>
          </span>
        </div>

        {/* Right Image */}
        <div className="flex-1 hidden ml-8 md:flex items-center">
          <div className="w-[350px] h-[600px] bg-gray-800 rounded-full overflow-hidden shadow-xl">
            {/* Replace this with actual image later */}
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
