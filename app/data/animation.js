 const originalAnimationTools = [
    {
      name: "Framer Motion",
      description: "A powerful animation library for React with simple and declarative syntax.",
      url: "https://www.framer.com/motion/",
      image: "/images/animations/framer-motion.png",
      tech: [
        { name: "React", icon: "/icons/react.svg" },
        { name: "JavaScript", icon: "/icons/javascript.svg" }
      ],
      installationType: "required",
    },
    {
      name: "Animate.css",
      description: "A cross-browser library of ready-to-use CSS animations.",
      url: "https://animate.style",
      image: "/images/animations/animate-css.png",
      tech: [
        { name: "CSS", icon: "/icons/css.svg" }
      ],
      installationType: "copy-paste",
    },
    {
      name: "LottieFiles",
      description: "Render Adobe After Effects animations as SVGs or JSON via Lottie.",
      url: "https://lottiefiles.com",
      image: "/images/animations/lottiefiles.png",
      tech: [
        { name: "JavaScript", icon: "/icons/javascript.svg" },
      ],
      installationType: "optional",
    },
    {
      name: "GSAP (GreenSock)",
      description: "The performance-obsessed, professional-grade JavaScript animation library.",
      url: "https://gsap.com",
      image: "/images/animations/gsap.png",
      tech: [
        { name: "JavaScript", icon: "/icons/javascript.svg" }
      ],
      installationType: "required",
    },
    {
      name: "Motion One",
      description: "A fast and powerful animation library built by the creator of Framer Motion.",
      url: "https://motion.dev",
      image: "/images/animations/motion-one.png",
      tech: [
        { name: "JavaScript", icon: "/icons/javascript.svg" }
      ],
      installationType: "required",
    },
    {
      name: "AutoAnimate",
      description: "Add smooth transitions and auto-animations to your UI with one line of code.",
      url: "https://auto-animate.formkit.com",
      image: "/images/animations/autoanimate.png",
      tech: [
        { name: "JavaScript", icon: "/icons/javascript.svg" }
      ],
      installationType: "optional",
    },
    {
      name: "CSShake",
      description: "A CSS library that lets you apply fun shaking effects to elements.",
      url: "https://elrumordelaluz.github.io/csshake/",
      image: "/images/animations/csshake.png",
      tech: [
        { name: "CSS", icon: "/icons/css.svg" }
      ],
      installationType: "copy-paste",
    },
    {
      name: "Animista",
      description: "Online CSS animation generator with tons of presets and customization.",
      url: "https://animista.net",
      image: "/images/animations/animista.png",
      tech: [
        { name: "CSS", icon: "/icons/css.svg" }
      ],
      installationType: "copy-paste",
    },
    {
      name: "Hover.css",
      description: "A collection of CSS3 powered hover effects for links, buttons, logos, and more.",
      url: "https://ianlunn.github.io/Hover/",
      image: "/images/animations/hover-css.png",
      tech: [
        { name: "CSS", icon: "/icons/css.svg" }
      ],
      installationType: "copy-paste",
    },
    {
      name: "Magic Animations",
      description: "CSS3 animations with special effects like bling, puff, vanish, and more.",
      url: "https://www.minimamente.com/project/magic/",
      image: "/images/animations/magic.png",
      tech: [
        { name: "CSS", icon: "/icons/css.svg" }
      ],
      installationType: "copy-paste",
    }
  ];
  

export const animationTools = originalAnimationTools.map(tool => ({
    ...tool,
    categoryId: "animations"
  }));