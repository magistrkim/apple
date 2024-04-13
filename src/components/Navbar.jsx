import { navLists } from "../constants";
import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <a
          className="cursor-pointer"
          href="https://github.com/magistrkim"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          {" "}
          <img src={appleImg} alt="apple icon" width={14} height={18} />
        </a>

        <ul className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((item) => (
            <li
              key={item}
              className="px-5 text-sm text-gray cursor-pointer hover:text-white transition-all"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex max-sm:justify-end gap-7 items-baseline max-sm:flex-1">
          <img src={searchImg} alt="search icon" width={18} height={18} />
          <img src={bagImg} alt="bag icon" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
