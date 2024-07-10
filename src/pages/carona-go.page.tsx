import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { useState } from "react";
import { getAllRoutes, getNotifications } from "src/api/api";
import { RouteCard } from "src/components/dashboard/route-card";
import { Icon } from "src/components/shared/icon";
import { Loader } from "src/components/shared/loader";
import { QueryKeys } from "src/utils/query-keys";
import { Route, RouteType } from "src/utils/types/api-types";

export const CaronaGoPage = () => {
  const { isPending: areRoutesPending, data: routeData } = useQuery({
    queryKey: [QueryKeys.allRoutes],
    queryFn: () => getAllRoutes(),
  });

  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);

  const {
    isPending: isNotificationsLoading,
    data: notificationData,
    error: notificationsError,
  } = useQuery({
    queryKey: [QueryKeys.getNotifications],
    queryFn: () => getNotifications(),
    enabled: isNotificationEnabled,
  });

  const routes = routeData?.data.data;
  const notifications: [] = notificationData?.data.data;

  const notifs = [
    "Your ride just got accepted.",
    "Your ride just got accepted.",
    "Your ride just got accepted.",
    "Your ride just got accepted.",
  ];

  return (
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
        <div className="flex justify-center items-center space-x-6 relative">
          <Icon
            type="notification"
            className="w-6 h-6 cursor-pointer"
            onClick={() => {
              setIsNotificationEnabled(
                (isNotificationEnabled) => !isNotificationEnabled
              );
            }}
          />
          {!!isNotificationEnabled && (
            <div className="absolute top-12 -left-6 border border-[#ccc] rounded-lg w-[450px] h-[250px] overflow-y-auto p-4 bg-white">
              <h2 className="text-lg font-medium mb-4">Notifications</h2>
              {/* <button
                className="absolute right-4 top-4"
                onClick={() => {
                  setIsNotificationEnabled(false);
                }}
              >
                <MdCancel className="w-6 h-6 text-red-500" />
              </button> */}
              {isNotificationsLoading ? (
                <Loader className="w-6 h-6 mx-auto my-6" />
              ) : notificationsError ? (
                <p className="text-center">
                  An error occurred. Please try again
                </p>
              ) : (
                notifications.map(
                  (notification: { message: string }, idx: number) => (
                    <p
                      key={idx}
                      className={clsx(
                        "py-3 border-[#ccc]",
                        idx != 0 && notifications.length > 1 && "border-t",
                        idx != notifs.length - 1 &&
                          notifications.length > 1 &&
                          "border-b"
                      )}
                    >
                      {notification.message}
                    </p>
                  )
                )
              )}
            </div>
          )}

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
          {/* <button className="bg-primary-30 border border-lightGreen flex justify-center items-center px-4 py-[10px] w-[140px] rounded-lg">
            <Icon type="add" className="mr-2" />
            <em className="not-italic font-medium text-sm text-white">
              New Trip
            </em>
          </button> */}
        </div>
      </header>
      <section className="px-5 mt-5 mb-10 space-y-6">
        {areRoutesPending && <Loader className="w-8 h-8 mx-auto my-8" />}
        {routes &&
          routes.map((route: Route, idx: number) => (
            <RouteCard type={RouteType.go} key={idx} route={route} />
          ))}
      </section>
    </div>
  );
};
