import React from "react";

const HomePage = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "HTML & CSS",
    "Python",
    "C++",
    "Java",
    "Git",
  ];

  const experiences = [
    {
      title: "Placeholder",
      company: "Placeholder*",
      period: "2023 — 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
    },
    {
      title: "Placeholder",
      company: "Placeholder*",
      period: "2022 — 2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      technologies: ["JavaScript", "Python", "C++", "Rust"],
    },
  ];

  return (
    <div className="bg-zinc-900 w-full">
      {/* Main container with padding to account for sidebar */}
      <div className="pl-32 pr-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Grid layout - 2 columns on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Main Content - Sticky */}
            <div className="lg:sticky lg:top-16 lg:self-start space-y-12">
              {/* Header Section */}
              <div className="space-y-6">
                <h1 className="text-6xl font-bold text-slate-50">
                  Yashvasin Sana
                </h1>
                <h2 className="text-2xl text-slate-300 font-light">
                  Computer Science Student
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                  Aspiring developer, musician, writer, and photographer.
                </p>
              </div>

              {/* Navigation Sections */}
              <nav className="space-y-6">
                <div className="group">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-px bg-slate-600 group-hover:bg-slate-300 transition-colors duration-300"></div>
                    <span className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 font-medium tracking-widest text-sm">
                      ABOUT
                    </span>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-px bg-slate-300"></div>
                    <span className="text-slate-300 font-medium tracking-widest text-sm">
                      EXPERIENCE
                    </span>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-px bg-slate-600 group-hover:bg-slate-300 transition-colors duration-300"></div>
                    <span className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 font-medium tracking-widest text-sm">
                      PROJECTS
                    </span>
                  </div>
                </div>
              </nav>

              {/* Skills Section */}
              <div className="space-y-4">
                <h3 className="text-slate-300 font-medium">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-teal-900/20 text-teal-300 rounded-full text-sm border border-teal-900/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Experience Details */}
            <div className="space-y-12 pt-24">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="group hover:bg-slate-800/20 p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  {/* Period */}
                  <p className="text-slate-500 text-sm font-medium mb-2 tracking-wide">
                    {exp.period}
                  </p>

                  {/* Title and Company */}
                  <h3 className="text-slate-200 font-semibold text-lg mb-1 group-hover:text-teal-300 transition-colors">
                    {exp.title} • {exp.company}
                    <span className="inline-block ml-2 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-teal-900/20 text-teal-300 rounded-full text-xs border border-teal-900/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
