import Header from "@/components/header";
import SnowEffect from '@/components/SnowEffect';

import { LanguageProvider } from "@/context/LanguageContext"; // Import qiling
import "./globals.css";

export const metadata = {
  title: "Abdulatif Karimov",
  description: "Abdulatif Karimov portfolio",
};

export default function RootLayout({ children }) {
  return (
    <LanguageProvider> 
      <html lang="en">
      <SnowEffect />
        <body className="bg-slate-930">
          <Header />
          <hr className="opacity-10 " />
          <main>
            {children}
          </main>
        </body>
      </html>
    </LanguageProvider>
  );
}
