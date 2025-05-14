const originalAnimationTools = [
  {
    name: "Framer Motion",
    description: "Super smooth animations for React with dead-simple syntax. Great for UI transitions and micro-interactions.",
    url: "https://www.framer.com/motion/",
    image: "/images/framer-motion.png",
    tech: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" }
    ],
    installationType: "required",
    tags: ["React", "JavaScript", "Required Install", "Free"]
  },
  {
    name: "Animate.css",
    description: "Just add a class and boom—instant animations like bounce, fade, and slide. No setup, no stress.",
    url: "https://animate.style",
    image: "/images/animate-css.png",
    tech: [
      { name: "CSS", icon: "/icons/css.svg" }
    ],
    installationType: "copy-paste",
    tags: ["CSS", "Copy-Paste", "Free"]
  },
  {
    name: "LottieFiles",
    description: "Drop in beautiful, lightweight animations made in After Effects using JSON. Great for loading screens or icons.",
    url: "https://lottiefiles.com",
    image: "/images/lottie-files.png",
    tech: [
      { name: "JavaScript", icon: "/icons/javascript.svg" }
    ],
    installationType: "optional",
    tags: ["JavaScript", "Optional Install", "Free"]
  },
  {
    name: "GSAP (GreenSock)",
    description: "The beast of all JavaScript animation libraries. Pro-level power with mind-blowing performance.",
    url: "https://gsap.com",
    image: "/images/gsap.png",
    tech: [
      { name: "JavaScript", icon: "/icons/javascript.svg" }
    ],
    installationType: "required",
    tags: ["JavaScript", "Required Install", "Free"]
  },
  {
    name: "Motion One",
    description: "Built by the Framer Motion creator, it’s tiny, fast, and works with plain JavaScript. Sleek and modern.",
    url: "https://motion.dev",
    image: "/images/motion-one.png",
    tech: [
      { name: "JavaScript", icon: "/icons/javascript.svg" }
    ],
    installationType: "required",
    tags: ["JavaScript", "Required Install", "Free"]
  },
  {
    name: "AutoAnimate",
    description: "Add animations to your UI with *zero effort*. It figures out transitions for you—just one line of code.",
    url: "https://auto-animate.formkit.com",
    image: "/images/auto-animate.png",
    tech: [
      { name: "JavaScript", icon: "/icons/javascript.svg" }
    ],
    installationType: "optional",
    tags: ["JavaScript", "Optional Install", "Free"]
  },
  {
    name: "CSShake",
    description: "Need something to jiggle or shake? This fun little CSS library has your back.",
    url: "https://elrumordelaluz.github.io/csshake/",
    image: "/images/csshake.png",
    tech: [
      { name: "CSS", icon: "/icons/css.svg" }
    ],
    installationType: "copy-paste",
    tags: ["CSS", "Copy-Paste", "Free"]
  },
  {
    name: "Animista",
    description: "Play around with tons of CSS animations, customize them online, then copy the code. Easy peasy.",
    url: "https://animista.net",
    image: "/images/animista.png",
    tech: [
      { name: "CSS", icon: "/icons/css.svg" }
    ],
    installationType: "copy-paste",
    tags: ["CSS", "Copy-Paste", "Free"]
  },
  {
    name: "Hover.css",
    description: "Need a hover effect? This has a whole collection for links, buttons, and more. Just copy and go.",
    url: "https://ianlunn.github.io/Hover/",
    image: "/images/hover-css.png",
    tech: [
      { name: "CSS", icon: "/icons/css.svg" }
    ],
    installationType: "copy-paste",
    tags: ["CSS", "Copy-Paste", "Free"]
  },
  {
    name: "Magic Animations",
    description: "CSS animations with extra flair—think bling, puff, and other over-the-top effects. Fun to play with!",
    url: "https://www.minimamente.com/project/magic/",
    image: "/images/magic-animations.png",
    tech: [
      { name: "CSS", icon: "/icons/css.svg" }
    ],
    installationType: "copy-paste",
    tags: ["CSS", "Copy-Paste", "Free"]
  }
];

export const animationTools = originalAnimationTools.map(tool => ({
  ...tool,
  categoryId: "animations"
}));
