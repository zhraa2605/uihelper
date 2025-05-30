const originallogoMakers = [
  {
    name: "Logo.com",
    description:
      "Create logos instantly with our AI-powered logo maker.",
    url: "https://logo.com/dashboard/wix/landing",
    image: "/images/logo_com.png", 
    tech: [{ name: "Web App", icon: "/icons/web.svg" }],
    installationType: "copy-paste",
    tags: ["Free"]
  },
  {
    name: "Hatchful by Shopify",
    description:
      "A free logo maker from Shopify with tons of industry-specific templates.",
    url: "https://hatchful.shopify.com",
    image: "/images/hatchful.png",
    tech: [{ name: "Web App", icon: "/icons/web.svg" }],
    installationType: "copy-paste",
    tags: ["Free"]
  },
  {
    name: "Namecheap Logo Maker",
    description:
      "Free logo maker with simple UI and vector downloads. No signup required.",
    url: "https://www.namecheap.com/logo-maker/",
    image: "/images/namecheap.png",
    tech: [
      { name: "SVG", icon: "/icons/svg.svg" },
      { name: "Web App", icon: "/icons/web.svg" },
    ],
    installationType: "copy-paste",
    tags: ["Free"]
  },
  {
    name: "Canva Logo Maker",
    description:
      "Part of Canva’s design suite — create logos with templates and free icons.",
    url: "https://www.canva.com/logo-maker/",
    image: "/images/canva.png",
    tech: [{ name: "Web App", icon: "/icons/web.svg" }],
    installationType: "optional",
    tags: ["Free", "Premium Features"]
  },
  {
    name: "DesignEvo",
    description:
      "Online logo creator with 10,000+ templates and vector support. Free with attribution.",
    url: "https://www.designevo.com",
    image: "/images/designevo.png",
    tech: [
      { name: "Web App", icon: "/icons/web.svg" },
      { name: "SVG", icon: "/icons/svg.svg" },
    ],
    installationType: "copy-paste",
    tags: ["Free", "Attribution Required"]
  },
  {
    name: "Ucraft Logo Maker",
    description:
      "Simple, free logo creator with shapes, icons, and text tools. Free SVG download.",
    url: "https://www.ucraft.com/free-logo-maker",
    image: "/images/ucraft.png",
    tech: [
      { name: "SVG", icon: "/icons/svg.svg" },
      { name: "Web App", icon: "/icons/web.svg" },
    ],
    installationType: "copy-paste",
    tags: ["Free"]
  },
  {
    name: "Zyro Logo Maker",
    description:
      "Free logo maker with a minimal interface and vector download support.",
    url: "https://zyro.com/tools/logo-maker",
    image: "/images/zyro.png",
    tech: [{ name: "Web App", icon: "/icons/web.svg" }],
    installationType: "copy-paste",
    tags: ["Free"]
  },
];

export const logoMakers = [
  ...originallogoMakers.map((tool) => ({
    ...tool,
    categoryId: "logos",
  })),
];
