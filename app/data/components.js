const originalComponentLibraries = [
    {
      name: "Shadcn UI",
      description: "Beautiful, customizable components you can easily tweak to match your style.",
      url: "https://ui.shadcn.com/",
      image: "https://ui.shadcn.com/og.jpg",
      tech: [
        { name: 'Next.js', icon: '/icons/next.svg' },
        { name: "React", icon: "/icons/react.svg" },
        { name: "Tailwind CSS", icon: "/icons/tailwind.svg" }
      ],
      installationType: "required",
      isFree: true
    },
    {
      name: "Material UI",
      description: "Ready-to-use React components with Google's clean, modern design style.",
      url: "https://mui.com/",
      image: "/images/mui.png",
      tech: [
        { name: "React", icon: "/icons/react.svg" }
      ],
      installationType: "required",
      isFree: true
    },
    {
      name: "Preline UI",
      description: "Free Tailwind components that make building websites super quick.",
      url: "https://preline.co/",
      image: "/images/preline.png",
      tech: [
        { name: "Tailwind CSS", icon: "/icons/tailwind.svg" }
      ],
      installationType: "optional",
      isFree: true
    },
    {
      name: "HyperUI",
      description: "Ready-to-grab Tailwind snippets - just copy, paste, and you're done!",
      url: "https://hyperui.dev/",
      image: "/images/hyper.png",
      tech: [
        { name: "Tailwind CSS", icon: "/icons/tailwind.svg" }
      ],
      installationType: "copy-paste",
      isFree: true
    },
    {
      name: "Uiverse",
      description: "Grab cool buttons, cards, and more made by other developers using CSS or Tailwind.",
      url: "https://uiverse.io/",
      image: "/images/universe.png",
      tech: [
        { name: "CSS", icon: "/icons/css.svg" },
        { name: "Tailwind CSS", icon: "/icons/tailwind.svg" }
      ],
      installationType: "copy-paste",
      isFree: true
    },
    {
      name: "Magic UI",
      description: "React components with eye-catching animations that make your site pop.",
      url: "https://magicui.design/",
      image: "/images/magic.png",
      tech: [
        { name: "React", icon: "/icons/react.svg" },
        { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
        { name: "Framer Motion", icon: "/icons/framer-motion.svg" }
      ],
      installationType: "required",
      isFree: true
    },
    {
      name: "Aceternity UI",
      description: "Fancy components that'll make your website stand out from the crowd.",
      url: "https://ui.aceternity.com/",
      image: "/images/ascternity.png",
      tech: [
        { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
        { name: "React", icon: "/icons/react.svg" }
      ],
      installationType: "required",
      isFree: false
    },
    {
      name: "Easy Frontend",
      description: "Learn by example with tons of real-world code snippets and tutorials.",
      url: "https://easyfrontend.com/",
      image: "/images/easy.png",
      tech: [
        { name: "HTML", icon: "/icons/html.svg" },
        { name: "CSS", icon: "/icons/css.svg" },
        { name: "JavaScript", icon: "/icons/javascript.svg" }
      ],
      installationType: "copy-paste",
      isFree: true
    },
    {
      name: "DaisyUI",
      description: "Tailwind plugin that gives you ready-made components so you can build faster.",
      url: "https://daisyui.com/",
      image: "/images/daisy.png",
      tech: [
        { name: "Tailwind CSS", icon: "/icons/tailwind.svg" }
      ],
      installationType: "required",
      isFree: true
    },
    {
      name: "Tailwind UI",
      description: "Premium, polished components made by the Tailwind team themselves.",
      url: "https://tailwindui.com/",
      image: "/images/tailwindui.png",
      tech: [
        { name: "Tailwind CSS", icon: "/icons/tailwind.svg" }
      ],
      installationType: "required",
      isFree: false
    },
    {
      name: "Flowbite",
      description: "Tailwind components that work great in dark mode and come with Figma designs.",
      url: "https://flowbite.com/",
      image: "/images/flowbite.png",
      tech: [
        { name: "Tailwind CSS", icon: "/icons/tailwind.svg" }
      ],
      installationType: "optional",
      isFree: true
    },
    {
      name: "Headless UI",
      description: "Bare-bones but accessible components you can style exactly how you want.",
      url: "https://headlessui.com/",
      image: "/images/headless.png",
      tech: [
        { name: "React", icon: "/icons/react.svg" },
        { name: "Vue", icon: "/icons/vue.svg" },
        { name: "Tailwind CSS", icon: "/icons/tailwind.svg" }
      ],
      installationType: "required",
      isFree: true
    }
  ];
  
  export const componentLibraries = originalComponentLibraries.map(lib => ({
    ...lib,
    categoryId: "components"
  }));
  