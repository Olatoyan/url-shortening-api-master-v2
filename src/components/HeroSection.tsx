import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="grid grid-cols-2 items-center gap-16 px-[16rem] pb-64 pt-48">
      <div className="flex flex-col items-start">
        <h1 className="text-[8rem] font-bold leading-[9rem] tracking-[-0.2rem] text-[#34313d]">
          More than just <br /> shorter links
        </h1>
        <p className="pb-[3.8rem] text-[2.2rem] font-medium leading-[3.6rem] tracking-[0.015rem] text-[#939aa8]">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>

        <Link
          to={"/"}
          className="block rounded-[2.8rem] bg-[#2bd0d0] px-16 py-5 text-[2rem] font-bold text-white transition-all duration-300 hover:bg-[#9AE3E3]"
        >
          Get started
        </Link>
      </div>
      <div>
        <img src="./illustration-working.svg" alt="illustration" />
      </div>
    </section>
  );
}

export default HeroSection;
