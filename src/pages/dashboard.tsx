import { clsx } from "clsx";
import { NavLink } from "react-router-dom";
import { RouteCard } from "src/components/dashboard/route-card";
import { Icon, IconType } from "src/components/shared/icon";
import { Image } from "src/components/shared/image";

type UrlLink = {
  inactiveIcon: IconType;
  activeIcon: IconType;
  text: string;
  link: string;
};

const mainLinks: UrlLink[] = [
  {
    text: "Carona Go",
    inactiveIcon: "go",
    activeIcon: "goActive",
    link: "/carona-go",
  },
  {
    text: "Carona Share",
    inactiveIcon: "share",
    activeIcon: "shareActive",
    link: "/carona-share",
  },
  {
    text: "Payments",
    inactiveIcon: "debitCard",
    activeIcon: "debitCardActive",
    link: "/payments",
  },
  {
    text: "Transactions",
    inactiveIcon: "clock",
    activeIcon: "clockActive",
    link: "/transactions",
  },
];

const otherLinks: UrlLink[] = [
  {
    text: "Settings",
    inactiveIcon: "settings",
    activeIcon: "settingsActive",
    link: "/settings",
  },
  {
    text: "Support",
    inactiveIcon: "headphones",
    activeIcon: "headphonesActive",
    link: "/support",
  },
];

export const Dashboard = () => {
  return (
    <div
      className="flex dashboard w-screen"
      style={{
        fontFamily: "Inter",
      }}
    >
      <aside>
        <nav className="p-5 pb-0 min-h-[100vh] w-[280px] overflow-y-auto flex flex-col border-r border-border">
          <header className="pb-5 border-b border-[#EAECF0]">
            <Icon type="logo2" className="w-[100px] mb-2" />
            <em className="not-italic block text-[12px] leading-[14.5px] text-dim">
              Transportation & Ease
            </em>
          </header>
          <section className="py-6 border-b border-[#EAECF0]">
            <em className="not-italic uppercase text-dim mb-2">main</em>
            <ul className="list-none">
              {mainLinks.map((mainLink, idx) => (
                <li key={idx}>
                  <NavLink
                    className={({ isActive }) =>
                      clsx(
                        "flex items-center px-2 py-[10px] rounded-lg hover:bg-sidebarBg",
                        isActive && "bg-sidebarBg"
                      )
                    }
                    to={mainLink.link}
                  >
                    {({ isActive }) => (
                      <div className="flex justify-between items-center w-full">
                        <div>
                          <Icon
                            type={
                              isActive
                                ? mainLink.activeIcon
                                : mainLink.inactiveIcon
                            }
                            className="inline-block w-4 h-4 mr-2"
                          />
                          <em
                            className={clsx(
                              "not-italic inline-block text-sm",
                              isActive && "font-medium text-dark",
                              !isActive && "font-normal text-dim"
                            )}
                          >
                            {mainLink.text}
                          </em>
                        </div>
                        {isActive && <Icon type="greaterThan" />}
                      </div>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </section>
          <section className="py-6 border-b border-[#EAECF0]">
            <em className="not-italic uppercase text-dim mb-2">other</em>
            <ul className="list-none">
              {otherLinks.map((otherLink, idx) => (
                <li key={idx}>
                  <NavLink
                    className={({ isActive }) =>
                      clsx(
                        "flex items-center px-2 py-[10px] rounded-lg hover:bg-sidebarBg",
                        isActive && "bg-sidebarBg"
                      )
                    }
                    to={otherLink.link}
                  >
                    {({ isActive }) => (
                      <div className="flex justify-between items-center w-full">
                        <div>
                          <Icon
                            type={
                              isActive
                                ? otherLink.activeIcon
                                : otherLink.inactiveIcon
                            }
                            className="inline-block w-4 h-4 mr-2"
                          />
                          <em
                            className={clsx(
                              "not-italic inline-block text-sm",
                              isActive && "font-medium text-dark",
                              !isActive && "font-normal text-dim"
                            )}
                          >
                            {otherLink.text}
                          </em>
                        </div>
                        {isActive && <Icon type="greaterThan" />}
                      </div>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </section>
          <div className="grow" />
          <div className="border-t border-[#EAECF0] flex items-center">
            <Image
              type="userImage"
              alt=""
              className="w-10 h-10 rounded-full mr-3"
            />
            <div className="flex flex-col justify-center py-7">
              <em className="not-italic font-semibold text-sm block mb-2 text-dark">
                Jenny Wilson
              </em>
              <em className="not-italic font-medium text-xs text-dim">
                jennywilson@gmail.com
              </em>
            </div>
            <div className="grow" />
            <Icon type="greaterThan" />
          </div>
        </nav>
      </aside>
      <div className="grow">
        <header className="flex p-6 justify-between items-center w-full">
          <div className="flex flex-col">
            <em className="not-italic font-semibold text-xl text-dark">
              Carona Go
            </em>
            <em className="not-italic font-medium text-xs text-dim">
              Book a ride on our buses for one of our routes.
            </em>
          </div>
          <div className="flex justify-center items-center space-x-6">
            <Icon type="notification" className="w-6 h-6" />
            <Icon type="help" className="w-6 h-6" />
            <div className="flex bg-white shadow-dishCard px-4 py-[10px] items-center rounded-lg w-[200px] border border-border">
              <Icon type="search" className="w-4 h-4 mr-2" />
              <input
                placeholder="Search menu"
                className="grow w-full outline-none"
              />
            </div>
            <button className="w-[130px] rounded-lg border-border border flex justify-center items-center px-4 py-[10px]">
              <Icon type="filter" className="mr-2" />
              <em className="not-italic font-medium text-sm text-black">
                Filter
              </em>
            </button>
            <button className="bg-primary-30 border border-lightGreen flex justify-center items-center px-4 py-[10px] w-[140px] rounded-lg">
              <Icon type="add" className="mr-2" />
              <em className="not-italic font-medium text-sm text-white">
                New Trip
              </em>
            </button>
          </div>
        </header>
        <section className="px-5 mt-5 mb-10 space-y-6">
          <RouteCard />
          <RouteCard />
        </section>
      </div>
    </div>
  );
};
