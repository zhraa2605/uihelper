import LibraryCard from "@/app/components/ToolCard";
import { componentLibraries } from "@/app/data/components";
import { colorTools } from "@/app/data/colors"; // You must export this from your file
import { fontTools} from "@/app/data/fonts"; // You must export this from your file
import { iconTools } from "@/app/data/icons";
import { animationTools } from "@/app/data/animation"; // You must export this from your file
import { logoMakers } from "@/app/data/logos";
const categoryMap = {

  components: {
    data: componentLibraries,
    title: "UI Libraries",
    subtitle: "Choose a library to get started",
  },
  colors: {
    data: colorTools,
    title: "Color Tools & Palettes",
    subtitle: "Explore beautiful palettes and gradient generators",
  },
  fonts: {
    data: fontTools,
    title: "Fonts",
    subtitle: "Typography that actually makes your site look designed — not just 'default Roboto'.",
  },
  icons: {
    data: iconTools,
    title: "Icons",
    subtitle: "Crisp little visuals that say more than a paragraph ever could.",
  },
  animations: {
    data: animationTools,
    title: "Animation Libraries",
    subtitle: "Bring your UI to life with these animation tools",
  },
  logos: {
    data: logoMakers,
    title: "Logo Makers",
    subtitle: "Need a logo but not a designer? These tools got your back. Look official in 5 mins.",
  },
};

const ToolsPage = async ({ params }) => {
  const { categoryId } = params;
  const category = categoryMap[categoryId];
  console.log("Current categoryId:", categoryId);

  if (!category) {
    return (
      <div className="text-center mt-20 text-gray-600 text-xl">
        🚫 Unknown category: <strong>{categoryId}</strong>
      </div>
    );
  }

  const { data, title, subtitle } = category;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center leading-snug tracking-wider">
        Explore <span className="text-color-4">{title}</span>
      </h1>
      <p className="text-gray-600 mb-8 text-center text-lg">{subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.length > 0 ? (
          data.map((library) => (
            <LibraryCard
              key={library.name}
              name={library.name}
              description={library.description}
              url={library.url}
              image={library.image}
              tech={library.tech}
              installationType={library.installationType}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No tools found for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default ToolsPage;
