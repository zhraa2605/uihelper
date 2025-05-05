 const originalFontTools = [
    {
      name: "Google Fonts",
      description: "Free and open source fonts optimized for the web.",
      url: "https://fonts.google.com",
      image: "/images/fonts/google-fonts.png",
      tech: [],
      installationType: "copy-paste",
    },
    {
      name: "Fontshare",
      description: "A free fonts platform by the Indian Type Foundry.",
      url: "https://www.fontshare.com",
      image: "/images/fonts/fontshare.png",
      tech: [],
      installationType: "copy-paste",
    },
    {
      name: "Velvetyne",
      description: "Open-source fonts with experimental, artistic flair.",
      url: "https://velvetyne.fr",
      image: "/images/fonts/velvetyne.png",
      tech: [],
      installationType: "copy-paste",
    },
    {
      name: "Lost Type",
      description: "A pay-what-you-want type foundry for designers.",
      url: "https://www.losttype.com",
      image: "/images/fonts/lost-type.png",
      tech: [],
      installationType: "copy-paste",
    },
    {
      name: "DaFont",
      description: "Massive collection of free fonts for personal use.",
      url: "https://www.dafont.com",
      image: "/images/fonts/dafont.png",
      tech: [],
      installationType: "copy-paste",
    },
    {
      name: "Befonts",
      description: "Premium quality free fonts for personal and commercial use.",
      url: "https://befonts.com",
      image: "/images/fonts/befonts.png",
      tech: [],
      installationType: "copy-paste",
    },
    {
      name: "The League of Moveable Type",
      description: "Open-source fonts with personality and purpose.",
      url: "https://www.theleagueofmoveabletype.com",
      image: "/images/fonts/league.png",
      tech: [],
      installationType: "copy-paste",
    },
    {
      name: "Fontesk",
      description: "High-quality, free fonts for creative designers.",
      url: "https://fontesk.com",
      image: "/images/fonts/fontesk.png",
      tech: [],
      installationType: "copy-paste",
    },
    {
      name: "Use & Modify",
      description: "Curated open-source fonts that are easy to use and modify.",
      url: "https://usemodify.com",
      image: "/images/fonts/use-modify.png",
      tech: [],
      installationType: "copy-paste",
    }
  ];
  
export const fontTools = originalFontTools.map(tool => ({
    ...tool,
    categoryId: "fonts",
  }));