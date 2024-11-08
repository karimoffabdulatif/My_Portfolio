"use client";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DownloadIcon from "@mui/icons-material/Download";
import { useLanguage } from "../../context/LanguageContext"; // to'g'ri yo'lni qo'llang

export default function About() {
  const { language } = useLanguage(); // tilni oling
  const translations = {
    en: {
      title: "About me",
      profession: "Frontend Developer",
      introduction: `Hello, my name is Abdulatif and I am a Frontend developer with a
      strong educational background in Software Engineering. I have
      completed the Frontend React JS developer course at Najot Ta'lim
      learning center and obtained a certification. Additionally, I am
      currently pursuing a Bachelor's degree in Software Engineering at TUIT
      (Tashkent University of Information Technologies), where my GPA
      exceeds 3.63 out of 5. My language proficiency includes English (B2
      level), Russian (A1 level), and Uzbek (Native). I am eager to apply my
      knowledge and skills as a Frontend developer to contribute effectively
      to your team.`,
      birthday: "Birthday: 16 September 2002",
      phone: "Phone: +998 94 001 76 53",
      degree: "Degree: Bachelor (currently)",
      freelance: "Freelance: Available",
      location: "Location: Tashkent, Uzbekistan",
      age: "Age: 22",
      email: "Email: kabdulatif328@gmail.com",
      skillsTitle: "Skills",
      skillsSubtitle: "Frontend",
      downloadResume: "Download Resume",
      certificate: "Certificate",
      certificateDescription:
        "I successfully completed my studies at Najot Ta'lim learning center with excellence, which further increased my interest in FrontEnd development. I had no prior knowledge about the field of FrontEnd development. Seeing the talent and abilities of the students at Najot Ta'lim boosted my confidence, and I decided to master this field and pursue my future career in this direction. My studies at Najot Ta'lim lasted from October 15, 2023, to May 20, 2024.",
      downloadCertificate: "Download Certificate",
    },

    ru: {
      title: "Об обо мне",
      profession: "Frontend разработчик",
      introduction: `Здравствуйте, меня зовут Абдулатиф, и я Frontend разработчик с
      сильной образовательной базой в области программной инженерии. Я
      завершил курс Frontend разработчика React JS в учебном центре Najot Ta'lim
      и получил сертификат. Кроме того, я в настоящее время получаю степень бакалавра
      в области программной инженерии в ТUIT (Ташкентском университете информационных технологий),
      где мой средний балл превышает 3.63 из 5. Мои языковые навыки включают английский (уровень B2),
      русский (уровень A1) и узбекский (родной). Я стремлюсь применить свои
      знания и навыки в качестве Frontend разработчика, чтобы эффективно
      внести вклад в вашу команду.`,
      birthday: "Дата рождения: 16 сентября 2002",
      phone: "Телефон: +998 94 001 76 53",
      degree: "Степень: Бакалавр (в настоящее время)",
      freelance: "Фриланс: Доступен",
      location: "Местоположение: Ташкент, Узбекистан",
      age: "Возраст: 22",
      email: "Электронная почта: kabdulatif328@gmail.com",
      skillsTitle: "Навыки",
      skillsSubtitle: "Frontend",
      downloadResume: "Скачать резюме",
      certificate: "Сертификат",
      certificateDescription:
        "Я успешно завершил обучение в учебном центре Najot Ta'lim с отличием, что еще больше увеличило мой интерес к FrontEnd разработке. У меня не было предварительных знаний в области FrontEnd разработки. Видя талант и способности студентов в Najot Ta'lim, я набрался уверенности и решил овладеть этой областью и продолжить свою карьеру в этом направлении. Мое обучение в Najot Ta'lim продолжалось с 15 октября 2023 года по 20 мая 2024 года.",
      downloadCertificate: "Скачать сертификат",
    },

    uz: {
      title: "Men haqimda",
      profession: "Frontend Dasturchi",
      introduction: `Salom, mening ismim Abdulatif, men Frontend dasturchiman,
      dasturiy muhandislik sohasida kuchli ta'limga egaman. Men
      Najot Ta'lim o'quv markazida Frontend React JS dasturlash kursini
      tugatdim va sertifikat oldim. Bundan tashqari, men hozirda TATUda
      (Toshkent Axborot Texnologiyalari Universiteti) Dasturiy injiniring
      bo'yicha bakalavr darajasida o'qimoqdaman, bu yerda mening GPA monitoring bahoyim
      5 dan 3.63 dan oshadi. Mening til ko'nikmalarim inglizcha (B2
      daraja), ruscha (A1 daraja) va o'zbekcha (ona tili) ni o'z ichiga oladi.
      Men Frontend dasturchi sifatida bilimlarim va ko'nikmalarimni qo'llab-quvvatlashga
      intilaman va sizning jamoangizga samarali hissa qo'shishga tayyorman.`,
      birthday: "Tug'ilgan kun: 16 sentyabr 2002",
      phone: "Telefon: +998 94 001 76 53",
      degree: "Daraja: Bakalavr (hozirda)",
      freelance: "Freelance: Mavjud",
      location: "Joylashuv: Toshkent, O'zbekiston",
      age: "Yosh: 22",
      email: "Email: kabdulatif328@gmail.com",
      skillsTitle: "Ko'nikmalar",
      skillsSubtitle: "Frontend",
      downloadResume: "Rezyume yuklab olish",
      certificate: "Sertifikat",
      certificateDescription:
        "Men Najot Ta'lim o'quv markazida a'lo baho bilan o'qishni tugatganman, bu esa FrontEndga bo'lgan qiziqishimni yanada oshirdi. Men FrontEnd sohasida bilimlarim umuman yo'q edi. Najot Ta'limdagi talabalar talanti va qobiliyatlarini ko'rish, menga ishonch berdi va men ushbu sohada o'z bilimimni oshirib, kelajakdagi kasbimni shu yo'nalishda davom ettirishga qaror qildim. Mening Najot Ta'limdagi o'qishim 2023-yil 15-oktabrdan 2024-yil 20-maygacha davom etgan.",
      downloadCertificate: "Sertifikatni yuklab olish",
    },
  };

  const skills = [
    "HTML",
    "Tailwind CSS",
    "Bootstrap",
    "JavaScript",
    "React JS",
    "Redux/Redux Toolkit",
    "Zustand",
    "Axios",
    "RestAPI",
    "Formik",
    "SEO (Search Engine Optimization)",
    "CSS (SASS/SCSS)",
    "Material UI",
    "Shadcn UI",
    "TypeScript",
    "Next JS",
    "RTK Query",
    "Tanstack Query",
    "Git/Github/GitLab",
    "React-hook-form",
    "Firebase",
    "React-i18next",
  ];

  const handleDownload = () => {
    window.location.href = "/Resume Karimoff_AK.pdf";
  };

  const handleSertificate = () => {
    window.location.href = "/Sertificate.pdf";
  };

  return (
    <section className="container mx-auto px-4">
      <div className="w-full pt-8">
        <p className="text-3xl font-semibold text-slate-400 pb-2">
          {translations[language].title}
        </p>
        <hr className="opacity-[0.09] w-[140px]" />
      </div>

      <div className="pt-6">
        <p className="text-slate-400 text-2xl font-semibold pb-2">
          I am a{" "}
          <span className="text-sky-600">
            {translations[language].profession}
          </span>
        </p>
        <p className="text-slate-400 text-base font-medium">
          {translations[language].introduction}
        </p>
      </div>

      <div className="Data pt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <ArrowForwardIosIcon className="text-slate-400 text-lg" />
            <p className="text-slate-400 text-base font-medium pl-2">
              {translations[language].birthday}
            </p>
          </div>

          <div className="flex items-center">
            <ArrowForwardIosIcon className="text-slate-400 text-lg" />
            <p className="text-slate-400 text-base font-medium pl-2">
              {translations[language].phone}
            </p>
          </div>

          <div className="flex items-center">
            <ArrowForwardIosIcon className="text-slate-400 text-lg" />
            <p className="text-slate-400 text-base font-medium pl-2">
              {translations[language].degree}
            </p>
          </div>

          <div className="flex items-center">
            <ArrowForwardIosIcon className="text-slate-400 text-lg" />
            <p className="text-slate-400 text-base font-medium pl-2">
              {translations[language].freelance}
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <ArrowForwardIosIcon className="text-slate-400 text-lg" />
            <p className="text-slate-400 text-base font-medium pl-2">
              {translations[language].location}
            </p>
          </div>

          <div className="flex items-center">
            <ArrowForwardIosIcon className="text-slate-400 text-lg" />
            <p className="text-slate-400 text-base font-medium pl-2">
              {translations[language].age}
            </p>
          </div>

          <div className="flex items-center">
            <ArrowForwardIosIcon className="text-slate-400 text-lg" />
            <p className="text-slate-400 text-base font-medium pl-2">
              {translations[language].email}
            </p>
          </div>
        </div>
      </div>

      <div className="pt-12">
        <div className="w-full pt-6">
          <p className="text-3xl font-semibold text-slate-400 pb-2">
            {translations[language].skillsTitle}
          </p>
          <hr className="opacity-[0.09] w-[70px]" />
        </div>
      </div>

      <div className="pt-5">
        <p className="text-slate-400 text-xl font-bold pb-2">
          {translations[language].skillsSubtitle}
        </p>
      </div>

      <div className="Data2 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 w-full pb-10">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col">
            <div className="flex items-center justify-between py-2">
              <p className="text-slate-400 text-lg font-medium">{skill}</p>
              <CheckCircleOutlineIcon className="text-slate-400 text-lg" />
            </div>
            <hr className="border-t-4 border-gray-700" />
          </div>
        ))}
      </div>

      <div className="pb-12 flex justify-center md:justify-start">
        <a
          onClick={handleDownload}
          className="hover:bg-gray-800 active:bg-gray-600 py-2 px-6 text-lg bg-slate-700 rounded-[5px] text-white font-semibold animate-pulse"
        >
          {translations[language].downloadResume}
          <DownloadIcon className="ml-2" />
        </a>
      </div>

      <div className="w-full pt-6">
        <p className="text-3xl font-semibold text-slate-400 pb-2">
          {translations[language].certificate}
        </p>
        <hr className="opacity-[0.09] w-[140px]" />
      </div>

      <div className="pt-6 pb-8">
        <p className="text-slate-400 text-base font-medium">
          {translations[language].certificateDescription}
        </p>
      </div>

      <div className="pb-12 flex justify-center md:justify-start">
        <a
          onClick={handleSertificate}
          className="hover:bg-gray-800 active:bg-gray-600 py-2 px-6 text-lg bg-slate-700 rounded-[5px] text-white font-semibold animate-pulse"
        >
          {translations[language].downloadCertificate}
          <DownloadIcon className="ml-2" />
        </a>
      </div>
    </section>
  );
}
