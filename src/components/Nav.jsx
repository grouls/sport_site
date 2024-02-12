import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { ROUTES } from "../config";
import { useState } from "react";
import PropTypes from "prop-types";

const Nav = ({ onClickShoppingBtn }) => {
  const [isMobileMenuShow, setIsMobileMenuShown] = useState(false);
  return (
    <nav className="flex flex-wrap justify-between items-center z-10 relative ">
      <a href="">
        <NikeLogo className="h-20 w-20" />
      </a>
      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShow)}
        className="btn-press-anim p-2 focus:ring-2 focus:ring-gray-200 rounded-lg hover:bg-gray-100 lg:hidden"
      >
        <RxHamburgerMenu size={25} />
      </button>
      <div
        className={`${!isMobileMenuShow && "hidden"} w-full lg:w-auto lg:block`}
      >
        <ul className="flex flex-col lg:flex-row bg-gray-50 text-lg border border-gray-100 rounded-lg p-4 lg:bg-transparent lg:border-none lg:space-x-8">
          {ROUTES.map((route, i) => {
            return (
              <li
                key={route}
                className={`py-2 px-3 cursor-pointer rounded ${i === 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-100"} ${(i === 3 || i === 4) && "lg:text-white lg:hover:text-blue-500 lg:hover:bg-transparent"}`}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="fixed left-4 bottom-4 lg:static lg:mr-8">
        <div
          className="btn-press-anim flex-center h-12 w-12 rounded-full bg-white shadow-md cursor-pointer"
          onClick={onClickShoppingBtn}
        >
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  onClickShoppingBtn: PropTypes.func,
};

export default Nav;
