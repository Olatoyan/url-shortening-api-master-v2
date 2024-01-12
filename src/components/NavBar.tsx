import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex w-full justify-between">
      <ul className="flex items-center gap-12">
        <li className="text-[1.5rem] font-bold text-[#9e9aab]">
          <Link to={"/"}>Features</Link>{" "}
        </li>
        <li className="text-[1.5rem] font-bold text-[#9e9aab]">
          <Link to={"/"}>Pricing</Link>{" "}
        </li>
        <li className="text-[1.5rem] font-bold text-[#9e9aab]">
          <Link to={"/"}>Resources</Link>{" "}
        </li>
      </ul>

      <div className="flex items-center gap-16">
        <p className="text-[1.5rem] font-bold text-[#9e9aab]">
          <Link to={"/"}>Login</Link>{" "}
        </p>
        <p className="rounded-[2.8rem] bg-[#2bd0d0] px-8 py-3 text-[1.5rem] font-bold text-white">
          <Link to={"/"}>Sign Up</Link>
        </p>
      </div>
    </nav>
  );
}

export default NavBar;
