const originalComponentLibraries = [
  {
    name: "Shadcn UI",
    description: "A collection of pre-built, themeable React + Tailwind components — super easy to customize and fits perfectly with modern stacks.",
    url: "https://ui.shadcn.com/",
    image: "https://ui.shadcn.com/og.jpg",
    tech: [
      { name: 'Next.js', icon: '/icons/next.svg' },
      { name: "React", icon: "/icons/react.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" }
    ],
    installationType: "required",
    isFree: true,
    tags: ["Next.js", "React", "Tailwind CSS", "Required Install", "Free"]
  },
  {
    name: "Material UI",
    description: "A set of polished React components that follow Google's Material Design — great for dashboards or clean UIs.",
    url: "https://mui.com/",
    image: "/images/mui.png",
    tech: [
      { name: "React", icon: "/icons/react.svg" }
    ],
    installationType: "required",
    isFree: true,
    tags: ["React", "Required Install", "Free"]
  },
  {
    name: "Preline UI",
    description: "A growing library of Tailwind components — plug-and-play pieces to help you ship faster without starting from scratch.",
    url: "https://preline.co/",
    image: "/images/preline.png",
    tech: [
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" }
    ],
    installationType: "optional",
    isFree: true,
    tags: ["Tailwind CSS", "Optional Install", "Free"]
  },
  {
    name: "HyperUI",
    description: "Free, ready-made Tailwind components — just copy, paste, and get on with your life.",
    url: "https://hyperui.dev/",
    image: "/images/hyper.png",
    tech: [
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" }
    ],
    installationType: "copy-paste",
    isFree: true,
    tags: ["Tailwind CSS", "Copy-Paste", "Free"]
  },
  {
    name: "Uiverse",
    description: "A community-driven collection of fun and creative components — mostly buttons, cards, and effects made with CSS or Tailwind.",
    url: "https://uiverse.io/",
    image: "/images/universe.png",
    tech: [
      { name: "CSS", icon: "/icons/css.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" }
    ],
    installationType: "copy-paste",
    isFree: true,
    tags: ["CSS", "Tailwind CSS", "Copy-Paste", "Free"]
  },
  {
    name: "Magic UI",
    description: "Flashy and animated React + Tailwind components — perfect if you want your UI to actually impress people.",
    url: "https://magicui.design/",
    image: "/images/magic.png",
    tech: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
      { name: "Framer Motion", icon: "/icons/framer-motion.svg" }
    ],
    installationType: "required",
    isFree: true,
    tags: ["React", "Tailwind CSS", "Framer Motion", "Required Install", "Free"]
  },
  {
    name: "Aceternity UI",
    description: "Modern, stylish React + Tailwind components that stand out. Packed with eye-catching designs.",
    url: "https://ui.aceternity.com/",
    image: "/images/ascternity.png",
    tech: [
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
      { name: "React", icon: "/icons/react.svg" }
    ],
    installationType: "required",
    isFree: false,
    tags: ["Tailwind CSS", "React", "Required Install", "Paid"]
  },
  {
    name: "Easy Frontend",
    description: "Like a playground of HTML/CSS/JS code snippets with real-world use cases — awesome for learning or building fast.",
    url: "https://easyfrontend.com/",
    image: "/images/easy.png",
    tech: [
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" }
    ],
    installationType: "copy-paste",
    isFree: true,
    tags: ["HTML", "CSS", "JavaScript", "Copy-Paste", "Free"]
  },
  {
    name: "DaisyUI",
    description: "Adds styled components to Tailwind with themes built-in — no more manual class juggling for buttons and inputs.",
    url: "https://daisyui.com/",
    image: "/images/daisy.png",
    tech: [
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" }
    ],
    installationType: "required",
    isFree: true,
    tags: ["Tailwind CSS", "Required Install", "Free"]
  },
  {
    name: "Tailwind UI",
    description: "Premium components made by the Tailwind team. Super polished, but comes with a price tag.",
    url: "https://tailwindui.com/",
    image: "/images/tailwindui.png",
    tech: [
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" }
    ],
    installationType: "required",
    isFree: false,
    tags: ["Tailwind CSS", "Required Install", "Paid"]
  },
  {
    name: "Flowbite",
    description: "Tailwind components with a focus on accessibility and dark mode. Bonus: they come with matching Figma files.",
    url: "https://flowbite.com/",
    image: "/images/flowbite.png",
    tech: [
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" }
    ],
    installationType: "optional",
    isFree: true,
    tags: ["Tailwind CSS", "Optional Install", "Free"]
  },
  {
    name: "Headless UI",
    description: "Unstyled but super accessible UI components — great if you want full control over styling using Tailwind.",
    url: "https://headlessui.com/",
    image: "/images/headless.png",
    tech: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "Vue", icon: "/icons/vue.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" }
    ],
    installationType: "required",
    isFree: true,
    tags: ["React", "Vue", "Tailwind CSS", "Required Install", "Free"]
  }
];

export const componentLibraries = originalComponentLibraries.map(lib => ({
  ...lib,
  categoryId: "components"
}));
