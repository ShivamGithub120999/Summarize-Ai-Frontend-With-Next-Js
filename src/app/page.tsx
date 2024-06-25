import { getHomePageData } from "@/data/loaders";
import { HeroSection } from "@/components/custom/HeroSection";
import { FeatureSection } from "@/components/custom/FeaturesSection";

function blockRenderer(block: any) {
  switch (block.__component) {
    case "layout.hero-section":
      return <HeroSection key={block.id} data={block} />;
    case "layout.features-section":
      return <FeatureSection key={block.id} data={block} />;
    default:
      return null;
  }
}


export default async function Home() {
  const strapiData = await getHomePageData();
  // const { blocks } = strapiData;
  // console.log(strapiData);

  // const { title, description } = strapiData;
  // return (
  //   <main className="container mx-auto py-6">
  //      <HeroSection data={blocks[0]} />
  //      <FeatureSection data={blocks[1]} />
  //   </main>
  const { blocks } = strapiData;
  if (!blocks) return <p>No sections found</p>;

  return <main>{blocks.map(blockRenderer)}</main>;
}
