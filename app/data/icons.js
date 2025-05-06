 const originalIconTools = [
    {
      name: "Lucide",
      description: "Beautiful & consistent open-source icon set, forked from Feather Icons.",
      url: "https://lucide.dev",
      image: "/images/lucide.png",
      tech: [],
      installationType: "copy-paste",
      
    },
    {
      name: "Heroicons",
      description: "Hand-crafted SVG icons by the makers of Tailwind CSS.",
      url: "https://heroicons.com",
      image: "/images/heroicons.png",
      tech: [],
      installationType: "copy-paste",
     
    },
    {
      name: "Phosphor Icons",
      description: "Flexible icon family for interfaces, diagrams, and more.",
      url: "https://phosphoricons.com",
      image: "/images/phosphor.png",
      tech: [],
      installationType: "copy-paste",
     
    },
    {
      name: "Feather Icons",
      description: "Simply beautiful open-source icons.",
      url: "https://feathericons.com",
      image: "/images/feather.png",
      tech: [],
      installationType: "copy-paste",
     
    },
    {
      name: "Remix Icon",
      description: "A set of open-source neutral-style system icons.",
      url: "https://remixicon.com",
      image: "/images/remix.png",
      tech: [],
      installationType: "copy-paste",
     
    },
    {
      name: "Tabler Icons",
      description: "Premium-quality open-source icons for web interfaces.",
      url: "https://tabler.io/icons",
      image: "/images/tabler.png",
      tech: [],
      installationType: "copy-paste",
    
    },
    {
      name: "Iconoir",
      description: "One of the biggest open-source icon libraries with a clean design.",
      url: "https://iconoir.com",
      image: "/images/iconoir.png",
      tech: [],
      installationType: "copy-paste",
     
    },
    {
      name: "Iconify",
      description: "Unified framework for over 100 icon sets, including Material, FontAwesome, etc.",
      url: "https://iconify.design",
      image: "/images/iconify.png",
      tech: [],
      installationType: "copy-paste",
      
    },
    {
      name: "FontAwesome",
      description: "The web’s most popular icon set and toolkit.",
      url: "https://fontawesome.com",
      image: "/images/fontawesome.png",
      tech: [],
      installationType: "optional",
     
    },
    {
      name: "Simple Icons",
      description: "Free SVG icons for popular brands.",
      url: "https://simpleicons.org",
      image: "/images/simple.png",
      tech: [],
      installationType: "copy-paste",
    }
  ];
  
export const iconTools = originalIconTools.map((tool) => ({
    ...tool,
    categoryId: "Icons",
    }));
