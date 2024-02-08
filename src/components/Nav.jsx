import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { ROUTES } from "../config";

const Nav = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center">
      <a href="">
        <NikeLogo className="h-20 w-20" />
      </a>
      <button className="p-2 focus:ring-2 focus:ring-gray-200 rounded-lg hover:bg-gray-100">
        <RxHamburgerMenu size={25} />
      </button>
      <div className="w-full">
        <ul className="bg-gray-50 text-lg border border-gray-100 rounded-lg p-4">
          {ROUTES.map((route, i) => {
            return (
              <li
                key={route}
                className={`py-2 px-3 cursor-pointer rounded ${i === 0 ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
