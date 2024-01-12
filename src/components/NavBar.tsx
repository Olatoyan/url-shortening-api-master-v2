import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NavBar() {
  const isMobile = window.innerWidth < 900;
  return (
    <motion.nav
      className="tablet:absolute tablet:flex-col tablet:bg-[#3a3054] tablet:rounded-2xl tablet:top-[5rem] tablet:w-[85vw] tablet:left-1/2 tablet:-translate-x-1/2 tablet:py-16 flex w-full justify-between"
      initial={{ opacity: 0, scale: 0, translateX: isMobile ? "-50%" : 0 }}
      animate={{
        opacity: 1,
        scale: [0, 1.2, 1],
        translateX: isMobile ? "-50%" : 0,
      }}
      transition={{ duration: 0.5, type: "spring" }}
      exit={{ opacity: 0, scale: 0, translateX: isMobile ? "-50%" : 0 }}
    >
      <ul className="tablet:flex-col tablet:pb-12 tablet:border-b tablet:border-[#9e9aab] tablet:border-opacity-25 flex items-center gap-12">
        <li className="tablet:text-white tablet:hover:text-white text-[1.5rem] font-bold text-[#9e9aab] transition-all duration-300 hover:text-[#34313d]">
          <Link to={"/"}>Features</Link>
        </li>
        <li className="tablet:text-white tablet:hover:text-white text-[1.5rem] font-bold text-[#9e9aab] transition-all duration-300 hover:text-[#34313d]">
          <Link to={"/"}>Pricing</Link>
        </li>
        <li className="tablet:text-white tablet:hover:text-white text-[1.5rem] font-bold text-[#9e9aab] transition-all duration-300 hover:text-[#34313d]">
          <Link to={"/"}>Resources</Link>
        </li>
      </ul>

      <div className="tablet:flex-col tablet:gap-6 tablet:pt-12 flex items-center gap-16">
        <p className="tablet:text-white tablet:hover:text-white text-[1.5rem] font-bold text-[#9e9aab]">
          <Link to={"/"}>Login</Link>
        </p>
        <p className="rounded-[2.8rem] bg-[#2bd0d0] px-8 py-3 text-[1.5rem] font-bold text-white transition-all duration-300 hover:bg-[#9AE3E3]">
          <Link to={"/"}>Sign Up</Link>
        </p>
      </div>
    </motion.nav>
  );
}

export default NavBar;
