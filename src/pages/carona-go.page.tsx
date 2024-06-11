import { useQuery } from "@tanstack/react-query";
import { getAllRoutes } from "src/api/api";
import { RouteCard } from "src/components/dashboard/route-card";
import { Icon } from "src/components/shared/icon";
import { Loader } from "src/components/shared/loader";
import { QueryKeys } from "src/utils/query-keys";

export const CaronaGoPage = () => {
  const { isPending: areRoutesPending } = useQuery({
    queryKey: [QueryKeys.allRoutes],
    queryFn: () => getAllRoutes(),
  });

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
        {areRoutesPending ? (
          <Loader className="w-8 h-8 mx-auto my-8" />
        ) : (
          <>
            <RouteCard />
            <RouteCard />
          </>
        )}
      </section>
    </div>
  );
};
