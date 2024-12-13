import { Link } from "react-router-dom";
import logo from "src/assets/svg/logo.svg";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const quickLinks = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/driver",
    text: "Driver",
  },
  {
    url: "/blog",
    text: "Blog",
  },
];
const supportLinks = [
  {
    url: "/support",
    text: "Customer Support",
  },
  {
    url: "/disclaimer",
    text: "Disclaimer",
  },
  {
    url: "/faq",
    text: "FAQ",
  },
  {
    url: "/contact",
    text: "Contact",
  },
];

export const Footer = () => {
  return (
    <>
      <footer className="mt-8 bg-primary-20 px-6 py-12 rounded-3xl">
        <div className="max-w-[1000px] mx-auto">
          <img src={logo} className="w-[200px] mb-4" />
          <p>Your one stop solution to your transportation needs.</p>
          <div className="sm:flex sm:my-4 sm:justify-between">
            <div className="mt-6 mb-8 sm:my-0">
              <h2 className="text-xl">Quick Links</h2>
              <ul>
                {quickLinks.map((quickLink, idx) => (
                  <li key={idx} className="my-4">
                    <Link to={quickLink.url}>{quickLink.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-8 sm:my-0">
              <h2 className="text-xl">Support</h2>
              <ul>
                {supportLinks.map((supportLink, idx) => (
                  <li key={idx} className="my-4">
                    <Link to={supportLink.url}>{supportLink.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl mb-4">Contact Us</h2>
              <div className="flex items-center">
                <FaPhone className="mr-2" />
                <em className="not-italic">+234 703 700 5640</em>
              </div>
              <a className="flex items-center" href="mailto:support@carona.com">
                <MdEmail className="mr-2" />
                <em className="not-italic">support@carona.com</em>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <p className="text-center text-primary-30 my-2">
        {" "}
        &copy;2023 . Carona Carpooling Company
      </p>
    </>
  );
};
