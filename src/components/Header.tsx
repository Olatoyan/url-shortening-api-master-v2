import Logo from "./Logo";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="flex items-center gap-20 px-[16rem]">
      <Logo color="#34313D" />
      <NavBar />
    </header>
  );
}

export default Header;
