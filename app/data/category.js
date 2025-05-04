import { Chrome, Code, Palette, FileImage, Type, Play } from 'lucide-react';

export const categories =  [
  {
    id: "components",
    name: "UI Components",
    description: "Pre-built components so you can stop reinventing buttons and go live faster.",
    icon: <Code />,
  },
  {
    id: "colors",
    name: "Colors & Palettes",
    description: "Make your UI pop with gradients, palettes, and shades you didn’t know you needed.",
    icon: <Palette />,
  },
  {
    id: "fonts",
    name: "Fonts",
    description: "Typography that actually makes your site look designed — not just 'default Roboto'.",
    icon: <Type />,
  },
  {
    id: "icons",
    name: "Icons",
    description: "Crisp little visuals that say more than a paragraph ever could.",
    icon: <FileImage />,
  },
  {
    id: "animations",
    name: "Animation Tools",
    description: "Make your site feel alive (without frying your CPU). Scroll, bounce, zoom — all here.",
    icon: <Play />,
  },
  {
    id: "logos",
    name: "Logo Makers",
    description: "Need a logo but not a designer? These tools got your back. Look official in 5 mins.",
    icon: <Chrome />,
  },
];
