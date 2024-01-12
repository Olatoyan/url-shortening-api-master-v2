import { useState } from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { IoClose, IoMenu } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const isMobile = window.innerWidth < 900;
  function handleNavClick() {
    setIsNavOpen((isNav) => !isNav);
  }

  return (
    <header className="tablet:relative tablet:justify-between tablet:px-20 mobile:px-8 flex items-center gap-20 px-[10rem]">
      <Logo color="#34313D" />

      <AnimatePresence>{isNavOpen && <NavBar />}</AnimatePresence>
      <AnimatePresence>{!isMobile && <NavBar />}</AnimatePresence>

      <motion.button
        className="tablet:block hidden"
        onClick={handleNavClick}
        initial={{ rotate: 0 }}
        animate={{ rotate: isNavOpen ? 0 : 180 }}
        transition={{ duration: 0.3, type: "spring" }}
      >
        <IoMenu size={30} className={`${isNavOpen ? "hidden" : "block"}`} />

        <IoClose size={30} className={`${isNavOpen ? "block" : "hidden"}`} />
      </motion.button>
    </header>
  );
}

export default Header;
