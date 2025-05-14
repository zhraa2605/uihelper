const originalColorTools = [
  {
    name: "SheCodes Color Palettes",
    description: "A collection of stylish and modern color combos—perfect for giving your design that polished vibe.",
    url: "https://www.shecodes.io/color-palettes",
    image: "/images/shecodes.png",
    installationType: "copy-paste",
    tags: ["Free", "Palette Generation", "UI Design"],
    isFree: true
  },
  {
    name: "Color Hunt",
    description: "Fresh color palettes hand-picked by designers. Great for quick inspiration or your next UI project.",
    url: "https://colorhunt.co/",
    image: "/images/colorhunt.png",
    installationType: "copy-paste",
    tags: ["Free", "Palette Generation", "UI Design"],
    isFree: true
  },
  {
    name: "UI Colors",
    description: "Helps you build color systems that actually work in real UIs. Bonus: built-in accessibility checks.",
    url: "https://uicolors.app/",
    image: "/images/uicolors.png",
    installationType: "copy-paste",
    tags: ["Free", "UI Design", "Accessibility"],
    isFree: true
  },
  {
    name: "Coolors",
    description: "One of the easiest tools to create and explore color palettes. Lock colors, tweak them, shuffle—super, create intuitive.",
    url: "https://coolors.co/",
    image: "/images/coolors.png",
    installationType: "copy-paste",
    tags: ["Free", "Palette Generation", "UI Design"],
    isFree: true
  },
  {
    name: "Khroma",
    description: "Uses AI to learn what colors you like, then generates palettes based on your style. Super personal.",
    url: "http://khroma.co/",
    image: "/images/khroma.png",
    installationType: "copy-paste",
    tags: ["Free", "Palette Generation", "UI Design"],
    isFree: true
  },
  {
    name: "CSS Gradient",
    description: "Build beautiful gradients, preview them live, and grab the CSS code in seconds. Clean and fast.",
    url: "https://cssgradient.io/",
    image: "/images/cssgradient.png",
    installationType: "copy-paste",
    tags: ["Free", "Gradient", "UI Design"],
    isFree: true
  },
  {
    name: "MyColorSpace",
    description: "Just enter a color and get instant palettes, gradients, and even matching schemes. It’s like magic.",
    url: "https://mycolor.space/",
    image: "/images/mycolorspace.png",
    installationType: "copy-paste",
    tags: ["Free", "Gradient", "Palette Generation", "UI Design"],
    isFree: true
  },
  {
    name: "Happy Hues",
    description: "Not just colors—this site shows you *how* to actually use them in UI. Super helpful for devs and designers.",
    url: "https://www.happyhues.co/",
    image: "/images/happyhues.png",
    installationType: "copy-paste",
    tags: ["Free", "UI Design"],
    isFree: true
  },
  {
    name: "Eva Colors",
    description: "Pre-built, accessible color palettes that are great for apps, design systems, and UI libraries.",
    url: "https://colors.eva.design/",
    image: "/images/evacolors.png",
    installationType: "copy-paste",
    tags: ["Free", "Palette Generation", "Accessibility", "UI Design"],
    isFree: true
  },
  {
    name: "Tailwind Color Shades Generator",
    description: "Drop in a hex color and it spits out a full Tailwind-style palette with all the shade levels. Super handy.",
    url: "https://javisperez.github.io/tailwindcolorshades/",
    image: "/images/tailwindshades.png",
    installationType: "copy-paste",
    tags: ["Free", "Palette Generation", "UI Design"],
    isFree: true
  }
];

export const colorTools = originalColorTools.map(tool => ({
  ...tool,
  categoryId: "colors"
}));
