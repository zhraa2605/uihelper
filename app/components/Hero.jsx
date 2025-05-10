import React from "react";
import { InteractiveGridPattern } from "./SVGComponent";

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden  transition-colors duration-300">
      {/* Background SVG inside and behind */}
      <div className="absolute inset-0 z-0">
        <InteractiveGridPattern />
      </div>
      

      
      {/* Foreground content */}
      <div className="container relative z-10 mx-auto text-center px-4 md:px-8 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
        <div className="max-w-3xl mx-auto">
          <p className="text-md md:text-xl text-gray-600 dark:text-gray-100 leading-snug tracking-wide font-extralight">
            Design smarter, not harder.
          </p>
          <h1 className="text-3xl md:text-6xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-purple-400 via-purple-600 to-purple-900 dark:bg-gradient-to-bl dark:from-purple-100 dark:to-purple-200  mb-3 leading-snug tracking-wide">
            UI Helper — UI Help for Non-Designers
          </h1>
          <p className="text-md md:text-lg lg:text-xl text-gray-600 dark:text-gray-100 mb-8 leading-snug tracking-wide font-extralight">
            Because not every frontend dev is a pixel-perfect designer. <br className="hidden md:block" />
            Here's your cheat sheet to look like one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;


// 'use client';

// import { changeLanguage } from '@/app/lib/changeLanguage';
// import { useTranslation } from 'react-i18next';

// export default function LanguageSwitcher() {
//   const { i18n } = useTranslation();

//   return (
//     <div>
//       <h2>Language Switcher</h2>
//       <h1>{i18n.t('welcome')}</h1>
//       <button onClick={() => changeLanguage('en')} disabled={i18n.language === 'en'}>
//         English
//       </button>
//       <button onClick={() => changeLanguage('ar')} disabled={i18n.language === 'ar'}>
//         عربي
//       </button>
//     </div>
//   );
// }

