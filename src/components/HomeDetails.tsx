import BoostSection from "./BoostSection";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ShortenSection from "./ShortenSection";
import StatisticsSection from "./StatisticsSection";

function HomeDetails() {
  return (
    <div className="pt-20">
      <Header />
      <HeroSection />
      <main className="flex flex-col bg-[#eff1f7]">
        <ShortenSection />
        <StatisticsSection />
      </main>
      <BoostSection />
      <Footer />
    </div>
  );
}

export default HomeDetails;
