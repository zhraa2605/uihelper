const originalColorTools = [
    {
      name: "SheCodes Color Palettes",
      description: "A curated collection of elegant and modern color palettes by SheCodes.",
      url: "https://www.shecodes.io/color-palettes",
      image: "/images/shecodes.png",
      installationType: "copy-paste",
      tags: ["Free"],
      isFree: true
    },
    {
      name: "Color Hunt",
      description: "A daily collection of trendy color palettes hand-picked by designers.",
      url: "https://colorhunt.co/",
      image: "/images/colorhunt.png",
      installationType: "copy-paste",
      isFree: true
    },
    {
      name: "UI Colors",
      description: "UI-focused palette builder that helps you generate accessible color systems.",
      url: "https://uicolors.app/",
      image: "/images/uicolors.png",
      installationType: "copy-paste",
      
      isFree: true
    },
    {
      name: "Coolors",
      description: "One of the most powerful and popular palette generators out there.",
      url: "https://coolors.co/",
      image: "/images/coolors.png",
      installationType: "copy-paste",
      isFree: true
    },
    {
      name: "Khroma",
      description: "An AI-based color tool that learns your taste to generate palettes.",
      url: "http://khroma.co/",
      image: "/images/khroma.png",
      installationType: "copy-paste",
      isFree: true
    },
    {
      name: "CSS Gradient",
      description: "A free tool for creating beautiful gradients and exporting the CSS.",
      url: "https://cssgradient.io/",
      image: "/images/cssgradient.png",
      installationType: "copy-paste",
      isFree: true
    },
    {
      name: "MyColorSpace",
      description: "Generate matching color palettes, gradients, and CSS with ease.",
      url: "https://mycolor.space/",
      image: "/images/mycolorspace.png",
      installationType: "copy-paste",
      isFree: true
    },
    {
      name: "Happy Hues",
      description: "A color palette resource that shows color use in real UI examples.",
      url: "https://www.happyhues.co/",
      image: "/images/happyhues.png",
      installationType: "copy-paste",
      isFree: true
    },
    {
      name: "Eva Colors",
      description: "A set of semantic, accessible color palettes for design systems.",
      url: "https://colors.eva.design/",
      image: "/images/evacolors.png",
      installationType: "copy-paste",
      isFree: true
    },
    {
      name: "Tailwind Color Shades Generator",
      description: "Generate full Tailwind-like color scales from a single hex code.",
      url: "https://javisperez.github.io/tailwindcolorshades/",
      image: "/images/tailwindshades.png",
      installationType: "copy-paste",
      isFree: true
    }
  ];
  
  export const colorTools = originalColorTools.map(tool => ({
    ...tool,
    categoryId: "colors"
  }));
  