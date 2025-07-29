// components/ExperienceSection.tsx

const experienceData = [
  {
    title: "Frontend Developer Intern",
    company: "DummyTech Solutions",
    period: "Jan 2023 – Aug 2023",
    description:
      "Worked with React and Tailwind to build internal dashboards and improve UX.",
  },
  {
    title: "Freelance Web Developer",
    company: "Upwork & Fiverr",
    period: "2022 – Present",
    description:
      "Built multiple websites for clients using Next.js, Supabase, and Framer Motion.",
  },
];

const educationData = [
  {
    degree: "B.Sc Computer Science",
    school: "Enugu State University of Science and Technology (ESUT)",
    period: "2020 – 2024",
    description:
      "Studied core computing concepts, software engineering, and data structures.",
  },
  {
    degree: "Full Stack Development (Self-Taught)",
    school: "Online (Udemy, Docs)",
    period: "2022 – Present",
    description:
      "Focused on React, Next.js, Node.js, MongoDB, and modern backend patterns.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-16 px-4 bg-gray-950 text-white relative z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>
        <div className="space-y-8">
          {experienceData.map((exp, i) => (
            <div key={i} className="border-l-4 border-yellow-400 pl-4">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-yellow-400">
                {exp.company} · {exp.period}
              </p>
              <p className="text-sm mt-2">{exp.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-bold my-10 text-center">Education</h2>
        <div className="space-y-8">
          {educationData.map((edu, i) => (
            <div key={i} className="border-l-4 border-blue-400 pl-4">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-blue-400">
                {edu.school} · {edu.period}
              </p>
              <p className="text-sm mt-2">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
