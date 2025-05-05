const originallogoMakers = [
    {
      name: "Hatchful by Shopify",
      description: "A free logo maker from Shopify with tons of industry-specific templates.",
      url: "https://hatchful.shopify.com",
      image: "/images/logo-makers/hatchful.png",
      tech: [
        { name: "Web App", icon: "/icons/web.svg" }
      ],
      installationType: "copy-paste",
    },
    {
      name: "Namecheap Logo Maker",
      description: "Free logo maker with simple UI and vector downloads. No signup required.",
      url: "https://www.namecheap.com/logo-maker/",
      image: "/images/logo-makers/namecheap.png",
      tech: [
        { name: "SVG", icon: "/icons/svg.svg" },
        { name: "Web App", icon: "/icons/web.svg" }
      ],
      installationType: "copy-paste",
    },
    {
      name: "Canva Logo Maker",
      description: "Part of Canva’s design suite — create logos with templates and free icons.",
      url: "https://www.canva.com/logo-maker/",
      image: "/images/logo-makers/canva.png",
      tech: [
        { name: "Web App", icon: "/icons/web.svg" },
      ],
      installationType: "optional",
    },
    {
      name: "DesignEvo",
      description: "Online logo creator with 10,000+ templates and vector support. Free with attribution.",
      url: "https://www.designevo.com",
      image: "/images/logo-makers/designevo.png",
      tech: [
        { name: "Web App", icon: "/icons/web.svg" },
        { name: "SVG", icon: "/icons/svg.svg" }
      ],
      installationType: "copy-paste",
    },
    {
      name: "Ucraft Logo Maker",
      description: "Simple, free logo creator with shapes, icons, and text tools. Free SVG download.",
      url: "https://www.ucraft.com/free-logo-maker",
      image: "/images/logo-makers/ucraft.png",
      tech: [
        { name: "SVG", icon: "/icons/svg.svg" },
        { name: "Web App", icon: "/icons/web.svg" }
      ],
      installationType: "copy-paste",
    },
    {
      name: "Zyro Logo Maker",
      description: "Free logo maker with a minimal interface and vector download support.",
      url: "https://zyro.com/tools/logo-maker",
      image: "/images/logo-makers/zyro.png",
      tech: [
        { name: "Web App", icon: "/icons/web.svg" }
      ],
      installationType: "copy-paste",
    }
  ];
  

  export const logoMakers = [
    ...originallogoMakers.map((tool) => ({
      ...tool,
        categoryId: "logos",
    })),
  ];
