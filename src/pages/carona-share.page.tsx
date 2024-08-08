// import { RouteCard } from "src/components/dashboard/route-card";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { getCaronaShareTrips } from "src/api/api";
import { RouteCard } from "src/components/dashboard/route-card";
import { Icon } from "src/components/shared/icon";
import { Loader } from "src/components/shared/loader";
import {
  OverlayContext,
  OverlayContextType,
} from "src/context/overlay.context";
import { QueryKeys } from "src/utils/query-keys";
import { CaronaShareRoute, RouteType } from "src/utils/types/api-types";

export const CaronaSharePage = () => {
  const { isPending: areRoutesPending, data: routeData } = useQuery({
    queryKey: [QueryKeys.getCaronaShareTrips],
    queryFn: () => getCaronaShareTrips(),
  });

  const { setIsNewCaronaShareOverlayOpened } = useContext(
    OverlayContext
  ) as OverlayContextType;

  const routes = routeData?.data.data;

  return (
    <div className="grow">
      <header className="flex p-6 justify-between items-center w-full">
        <div className="flex flex-col">
          <em className="not-italic font-semibold text-xl text-dark">
            Carona Share
          </em>
          <em className="not-italic font-medium text-xs text-dim">
            Book a carpooling ride with another vetted driver.
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
          {/* <button className="w-[130px] rounded-lg border-border border flex justify-center items-center px-4 py-[10px]">
            <Icon type="filter" className="mr-2" />
            <em className="not-italic font-medium text-sm text-black">
              Filter
            </em>
          </button> */}
          <button
            className="bg-primary-30 border-lightGreen flex justify-center items-center px-4 py-[10px] w-[250px] rounded-lg"
            onClick={() => setIsNewCaronaShareOverlayOpened(true)}
          >
            <Icon type="add" className="mr-2" />
            <em className="not-italic font-medium text-sm text-white">
              New Carona Share Trip
            </em>
          </button>
        </div>
      </header>
      <section className="px-5 mt-5 mb-10 space-y-6">
        {areRoutesPending && <Loader className="w-8 h-8 mx-auto my-8" />}
        {routes &&
          routes.map((route: CaronaShareRoute, idx: number) => (
            <RouteCard type={RouteType.share} key={idx} route={route} />
          ))}
      </section>
    </div>
  );
};
