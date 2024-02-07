import logo from "./../assets/svg/logo.svg";
import menu from "./../assets/svg/menu.svg";

export const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center w-full p-8 pb-16">
      <img src={logo} className="w-[150px]" />
      <img src={menu} className="w-[40px]" />
    </nav>
  );
};
