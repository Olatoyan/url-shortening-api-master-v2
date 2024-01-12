import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="laptop:px-20 tablet:grid-cols-1 mobile:pt-16 mobile:px-8 grid grid-cols-2 items-center gap-16 px-[10rem] pb-64 pt-48">
      <div className="tablet:row-start-2 tablet:text-center tablet:items-center flex flex-col items-start">
        <h1 className="desktop:text-[6rem] mobile:text-[4.2rem] mobile:leading-[4.8rem] mobile:tracking-[-0.105rem] text-[8rem] font-bold leading-[9rem] tracking-[-0.2rem] text-[#34313d]">
          More than just <br /> shorter links
        </h1>
        <p className="mobile:text-[1.8rem] mobile:leading-[3rem] mobile:tracking-[0.0123rem] pb-[3.8rem] text-[2.2rem] font-medium leading-[3.6rem] tracking-[0.015rem] text-[#939aa8]">
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
