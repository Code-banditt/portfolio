// components/CertificatesSection.tsx

"use client";

import Image from "next/image";
import image1 from "/public/img/react.jpg";
import image2 from "/public/img/nodejs.jpg";
import image3 from "/public/img/html.jpg";

const certificates = [
  {
    title: "Modern React, Next.js and Redux",
    platform: "Udemy",
    date: "Jan 2025",
    image: image1,
  },
  {
    title: "Node.js: The Complete Guide",
    platform: "Udemy",
    date: "June 2025",
    image: image2,
  },
  {
    title: "Mastering JavaScript",
    platform: "Udemy",
    date: "April 2024",
    image: "/certs/js.png",
  },

  {
    title: "HTML/CSS",
    platform: "Udemy",
    date: "jan 2024",
    image: image3,
  },
];

export default function CertificatesSection({ id }) {
  return (
    <section id={id} className="bg-[#111] text-white py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold mb-10">🎓 Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/40 transition duration-300"
          >
            <Image
              height={500}
              width={500}
              src={cert.image}
              alt={cert.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.platform}</p>
              <p className="text-xs text-gray-500">{cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
