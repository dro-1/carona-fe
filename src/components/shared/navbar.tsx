import { Link } from "react-router-dom";
import logo from "src/assets/svg/logo.svg";
import menu from "src/assets/svg/menu.svg";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";
import { useState } from "react";

const navbarLinks = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/driver",
    title: "Driver",
  },
  {
    url: "/blog",
    title: "Blog",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <nav className=" flex justify-between items-center w-full p-8 pb-16 max-w-[1000px] mx-auto">
        <img src={logo} className="w-[150px]" />
        <div className="hidden md:block space-x-4">
          {navbarLinks.map((navbarLink) => (
            <Link to={navbarLink.url}>{navbarLink.title}</Link>
          ))}
          <Link
            className="bg-[#319A64] border-[#319A64] border-2 p-4 rounded-xl text-white"
            to="/contact"
          >
            Contact us
          </Link>
        </div>
        <img
          onClick={() => setIsOpen(true)}
          src={menu}
          className="w-[40px] md:hidden"
        />
      </nav>
      <div
        className={clsx(
          "sidebar absolute top-0 left-0 bg-white h-screen w-full z-10 p-6 transition duration-500",
          !isOpen && "-translate-x-[100%]",
          isOpen && "translate-x-0"
        )}
      >
        <IoMdClose
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-6 text-4xl"
        />
        <img src={logo} className="w-[200px] mt-4" />

        <ul className="mt-8">
          {navbarLinks.map((navbarLink, idx) => (
            <li key={idx} className="my-4">
              <Link to={navbarLink.url}>{navbarLink.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
