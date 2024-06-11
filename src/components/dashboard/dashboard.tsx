import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Icon, IconType } from "../shared/icon";
import clsx from "clsx";
import { Image } from "../shared/image";
import { Overlay } from "../shared/overlay";
import { useContext, useEffect } from "react";
import {
  OverlayContext,
  OverlayContextType,
} from "src/context/overlay.context";
import { Route } from "./route";
import { UserContext, UserContextType } from "src/context/user.context";

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
    link: "/dashboard/carona-go",
  },
  {
    text: "Carona Share",
    inactiveIcon: "share",
    activeIcon: "shareActive",
    link: "/dashboard/carona-share",
  },
  {
    text: "Payments",
    inactiveIcon: "debitCard",
    activeIcon: "debitCardActive",
    link: "/dashboard/payments",
  },
  {
    text: "Transactions",
    inactiveIcon: "clock",
    activeIcon: "clockActive",
    link: "/dashboard/transactions",
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
  const { isRouteOverlayOpened } = useContext(
    OverlayContext
  ) as OverlayContextType;
  const { user } = useContext(UserContext) as UserContextType;
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !localStorage.getItem("accessToken")) navigate("/login");
  }, [user]);

  return (
    <div
      className="flex dashboard w-screen"
      style={{
        fontFamily: "Inter",
      }}
    >
      {isRouteOverlayOpened && (
        <Overlay>
          <Route route={{ from: "Oshodi", to: "VI" }} />
        </Overlay>
      )}

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
      <Outlet />
    </div>
  );
};
