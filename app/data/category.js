import { Chrome, Code, Palette, FileImage, Type, Play } from 'lucide-react';

const categories = [
  {
    id: "components",
    nameKey: "categories.components.name",
    descriptionKey: "categories.components.description",
    icon: <Code />,
  },
  {
    id: "colors",
    nameKey: "categories.colors.name",
    descriptionKey: "categories.colors.description",
    icon: <Palette />,
  },
  {
    id: "fonts",
    nameKey: "categories.fonts.name",
    descriptionKey: "categories.fonts.description",
    icon: <Type />,
  },
  {
    id: "icons",
    nameKey: "categories.icons.name",
    descriptionKey: "categories.icons.description",
    icon: <FileImage />,
  },
  {
    id: "animations",
    nameKey: "categories.animations.name",
    descriptionKey: "categories.animations.description",
    icon: <Play />,
  },
  {
    id: "logos",
    nameKey: "categories.logos.name",
    descriptionKey: "categories.logos.description",
    icon: <Chrome />,
  },
];

export default categories;
