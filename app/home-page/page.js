"use client";
import { motion } from "framer-motion";
import MyPhoto from "../../public/ak_3.jpg";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext"; 

const Home = () => {
  const { language } = useLanguage(); 


  const textContent = {
    uz: {
      hello: "Salom, mening ismim",
      moreAboutMe: "Men haqimda ko'proq",
      description: "Men professional veb dasturchiman. Men saytning FrontEnd qismini yaratishim mumkin. Agar siz qiziqsangiz, tugmani bosing.",
      developer: "Men Frontend dasturchisiman",
    },
    ru: {
      hello: "Здравствуйте, меня зовут",
      moreAboutMe: "Больше обо мне",
      description: "Я профессиональный веб-разработчик. Я могу создать фронтенд-часть сайта. Если вам интересно, нажмите на кнопку.",
      developer: "Я Frontend разработчик",
    },
    en: {
      hello: "Hello, my name is",
      moreAboutMe: "More about me",
      description: "I am a professional web developer. I can create FrontEnd part of a website. If you interested click the button.",
      developer: "I am a Frontend developer",
    },
  };

  return (
    <div className="container mx-auto sm:px-6 md:px-0">
      <section>
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="flex justify-center lg:hidden pt-[30px] sm:pt-[50px] mt-[45px]">
            <Image
              src={MyPhoto}
              alt="Avatar"
              className="w-[250px] h-[250px] rounded-full"
              width={250}
              height={250}
            />
          </div>

          <div className="text-center lg:text-left mt-12 lg:mt-0 lg:ml-8 md:pt-[150px]">
            <p className="text-slate-400 text-xl sm:text-lg lg:text-2xl font-medium">
              {textContent[language].hello}
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-white text-[25px] sm:text-[40px] lg:text-[33px] font-semibold"
            >
              Karimov Abdulatif
            </motion.div>

            <h1 className="text-slate-400 text-[25px] sm:text-[35px] lg:text-[45px] font-bold mt-3">
              {textContent[language].developer}
            </h1>

            <p className="text-slate-400 lg:w-[700px] font-thin lg:text-[20px] mt-4 px-4 lg:px-0">
              {textContent[language].description}
            </p>

            <div className="mt-6 pb-[20px]">
              <Link href="/about">
                <button className="px-8 py-2 text-[16px] lg:text-[18px] font-medium text-white bg-slate-700 opacity-80 rounded-md animate-pulse">
                  {textContent[language].moreAboutMe}
                </button>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block lg:pt-[100px] lg:pl-12">
            <Image
              src={MyPhoto}
              alt="Avatar"
              className="w-[400px] h-[410px] rounded-full hover:shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-shadow duration-100"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
