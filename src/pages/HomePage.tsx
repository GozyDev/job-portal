import { ExploreByCategory } from "@/components/HeroCategory";
import HiringBanner from "@/components/HiringBanner";
import { FeaturedJobs } from "@/components/HomeFeatured";
import Hero from "@/components/HomeHero";

const HomePage = () => {
  return (
    <div>
      <Hero></Hero>
      <ExploreByCategory></ExploreByCategory>
      <FeaturedJobs />

      <HiringBanner></HiringBanner>
    </div>
  );
};

export default HomePage;
