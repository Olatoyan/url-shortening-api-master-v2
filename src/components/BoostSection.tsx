import { Link } from "react-router-dom";

function BoostSection() {
  return (
    <section className="flex flex-col items-center gap-12 bg-[#3a3054] py-24">
      <h2 className="text-[4rem] font-bold leading-[4.8rem] tracking-[-0.1rem] text-white">
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
