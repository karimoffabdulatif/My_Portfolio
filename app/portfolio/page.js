"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import SportMarket from '../../public/Sport Market.jpg'
import Digital from '../../public/Discover.jpg'
import Admin from '../../public/AdminPanel.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import Link from "next/link";

const Portfolio = () => {
  const { language } = useLanguage();
  const [animateLinks, setAnimateLinks] = useState(false);

  const translations = {
    eng: {
      title: "My works",
      hr: "opacity-[0.09] w-[135px]"
    },
    ru: {
      title: "Мои работы",
      hr: "opacity-[0.15] w-[175px]"
    },
    uz: {
      title: "Mening ishlarim",
      hr: "opacity-[0.10] w-[219px]"
    }
  };

  const currentTranslation = translations[language] || translations.eng;

  const projects = [
    {
      title: "Sport Market",
      description: "NextJs, MUI, Tailwind",
      image: SportMarket,
      githubLink: "https://github.com/karimoffabdulatif/karimofs-exam",
      liveLink: "https://karimofs-exam.vercel.app/"
    },
    {
      title: "Digital Art",
      description: "React, Tailwind",
      image: Digital,  
      githubLink: "https://github.com/karimoffabdulatif/next_1st_project",
      liveLink: "https://next-1st-project-eta.vercel.app/"
    },
    {
      title: "Admin Panel",
      description: "ReactJS",
      image: Admin,
      githubLink: "https://github.com/karimoffabdulatif/exam_7",
      liveLink: "https://exam-7-seven.vercel.app/"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateLinks(true);
    }, 500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="container mx-auto px-4">
      <div className="w-full pt-8 pb-[40px]">
        <p className="text-3xl font-semibold text-slate-400 pb-2">
          {currentTranslation.title}
        </p>
        <hr className={currentTranslation.hr} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <div key={index} className="overflow-hidden custom-glow w-full sm:w-[350px] lg:w-[350px] mx-auto relative rounded-lg border border-gray-400 border-opacity-40 shadow-lg">
            <div className="overflow-hidden">
              <Image src={project.image} alt={project.title} className="w-full h-48 rounded-t-lg object-cover animate-fadeInAndClear"/>
            </div>
            <div className="text-center p-4">
              <h3 className="text-slate-400 text-xl font-semibold pb-2">{project.title}</h3>
              <p className="text-slate-400 font-medium">{project.description}</p>
            </div>
            <div className="flex justify-center gap-4 pb-6">
              <Link
                href={project.githubLink}
                className={`text-slate-400 w-7 h-7 ${animateLinks ? 'animate-skew-spin-once' : ''}`}
              >
                <GitHubIcon />
              </Link>

              <Link
                href={project.liveLink}
                className={`text-slate-400 w-7 h-7 ${animateLinks ? 'animate-skew-spin-once' : ''}`}
              >
                <SystemUpdateAltIcon />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
