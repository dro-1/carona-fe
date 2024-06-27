import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Icon, IconType as LocalIconType } from "../shared/icon";
import clsx from "clsx";
import { Image } from "../shared/image";
import { Overlay } from "../shared/overlay";
import { useContext, useEffect } from "react";
import {
  OverlayContext,
  OverlayContextType,
} from "src/context/overlay.context";
import { RouteOverlay } from "./route-overlay";
import { QueryKeys } from "src/utils/query-keys";
import { getUser } from "src/api/api";
import { IoIosLogOut } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../shared/loader";
// import { useQuery } from "@tanstack/react-query";
// import { QueryKeys } from "src/utils/query-keys";
// import { getUser } from "src/api/api";
// import { Loader } from "../shared/loader";

type UrlLink = {
  inactiveIcon: LocalIconType;
  activeIcon: LocalIconType;
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
    text: "Trips",
    inactiveIcon: "trip",
    activeIcon: "tripActive",
    link: "/dashboard/trips",
  },
  {
    text: "Payments",
    inactiveIcon: "debitCard",
    activeIcon: "debitCardActive",
    link: "/dashboard/payments",
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
  const navigate = useNavigate();

  const { isPending: isUserDataPending, data: userData } = useQuery({
    queryKey: [QueryKeys.getUser],
    queryFn: () => getUser(),
  });

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) navigate("/login");
  }, []);

  const user = userData?.data.data.user;
  console.log(user);

  return (
    <div
      className="flex dashboard w-screen"
      style={{
        fontFamily: "Inter",
      }}
    >
      {isRouteOverlayOpened && (
        <Overlay>
          <RouteOverlay />
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

          {isUserDataPending ? (
            <Loader className="mx-auto my-4" />
          ) : (
            <>
              <button
                className={clsx(
                  "flex items-center px-2 py-[10px] rounded-lg hover:bg-sidebarBg"
                )}
                onClick={() => {
                  localStorage.removeItem("accessToken");
                  navigate("/login");
                }}
              >
                <div className="flex justify-between items-center w-full">
                  <div>
                    <IoIosLogOut className="inline-block w-6 h-6 mr-2" />
                    <em
                      className={clsx(
                        "not-italic inline-block text-sm font-normal text-dim"
                      )}
                    >
                      Log Out
                    </em>
                  </div>
                </div>
              </button>
              <div className="border-t border-[#EAECF0] flex items-center">
                <Image
                  type="user"
                  alt=""
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div className="flex flex-col justify-center py-7">
                  <em className="not-italic font-semibold text-sm block mb-2 text-dark">
                    {user?.firstName} {user?.lastName}
                  </em>
                  <em className="not-italic font-medium text-xs text-dim">
                    {user?.email}
                  </em>
                </div>
                <div className="grow" />
                <Icon type="greaterThan" />
              </div>
            </>
          )}
        </nav>
      </aside>
      <div className="h-screen overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};
