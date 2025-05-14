
import ToolsPageLayout from "@/app/components/ToolPageLayout";
import ToolFilterWrapper from "@/app/components/ToolFilterWrapper";
import { componentLibraries } from "@/app/data/components";
import { colorTools } from "@/app/data/colors"; 
import { fontTools } from "@/app/data/fonts"; 
import { iconTools } from "@/app/data/icons";
import { animationTools } from "@/app/data/animation"; 
import { logoMakers } from "@/app/data/logos";

const categoryMap = {
  components: { data: componentLibraries, title: "UI Libraries", subtitle: "Choose a library to get started" },
  colors: { data: colorTools, title: "Color Tools & Palettes", subtitle: "Explore beautiful palettes and gradient generators" },
  fonts: { data: fontTools, title: "Fonts", subtitle: "Typography that actually makes your site look designed" },
  icons: { data: iconTools, title: "Icons", subtitle: "Crisp little visuals that say more than a paragraph" },
  animations: { data: animationTools, title: "Animation Libraries", subtitle: "Bring your UI to life with these animation tools" },
  logos: { data: logoMakers, title: "Logo Makers", subtitle: "Need a logo but not a designer? These tools got your back." },
};

export async function generateMetadata({ params }) {
  const { categoryId } = params;
  const category = categoryMap[categoryId];

  if (!category) {
    return { title: "Unknown Category - Kitstack", description: `No metadata available for category: ${categoryId}` };
  }

  return {
    title: `${category.title} - Kitstack`,
    description: category.subtitle,
    openGraph: {
      title: `${category.title} | Kitstack`,
      description: category.subtitle,
      url: `https://Kitstack.dev/tools/${categoryId}`,
      siteName: "Kitstack",
      images: [{ url: `/og/${categoryId}.png`, width: 1200, height: 630, alt: `${category.title} Tools` }],
      locale: "en_US",
      type: "website",
    },
  };
}

const ToolsPage = ({ params }) => {
  const { categoryId } = params;
  const category = categoryMap[categoryId];
  const { data, title, subtitle } = category;

  return (
    <ToolsPageLayout title={title} subtitle={subtitle}>
        <ToolFilterWrapper tools={data} />
    </ToolsPageLayout>
  );
};

export default ToolsPage;