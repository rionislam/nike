import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full max-lg:fixed max-lg:bg-white">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="max-lg:z-20">
          <img src={headerLogo} alt="Logo" width="130" height="29" />
        </a>
        <ul
          id="menu"
          className="flex-1 flex justify-center items-center gap-16 max-lg:flex-col max-lg:fixed max-lg:z-10 max-lg:bg-white max-lg:w-screen max-lg:h-full max-lg:top-1/2 max-lg:translate-y-[-50%] max-lg:-left-full transition-left duration-500"
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div
          className="hidden max-lg:block max-lg:z-10"
          id="menuBtn"
          // onclick="toggleMenu(this)"
        >
          <img
            src={hamburger}
            alt="Hamburger"
            height="25"
            width="25"
            className="transition-all duration-500"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
