import { Link } from "react-router-dom";

function BoostSection() {
  const isMobile = window.innerWidth < 700;
  const backgroundImg = isMobile
    ? "./bg-boost-mobile.svg"
    : "./bg-boost-desktop.svg";

  return (
    <section
      style={{
        background: `url(${backgroundImg}), linear-gradient(180deg, #3a3054, #3a3054)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex flex-col items-center gap-6 py-24"
    >
      <h2 className="mobile:text-[2.8rem] mobile:tracking-[-0.07rem] text-[4rem] font-bold leading-[4.8rem] tracking-[-0.1rem] text-white">
        Boost your links today
      </h2>
      <Link
        to="/"
        className="block rounded-[2.8rem] bg-[#2bd0d0] px-16 py-5 text-[2rem] font-bold text-white transition-all duration-300 hover:bg-[#9AE3E3]"
      >
        Get Started
      </Link>
    </section>
  );
}

export default BoostSection;
