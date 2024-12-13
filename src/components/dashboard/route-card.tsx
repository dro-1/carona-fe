import { CaronaShareRoute, Route, RouteType } from "src/utils/types/api-types";
import { Icon } from "../shared/icon";
import { useContext } from "react";
import {
  OverlayContext,
  OverlayContextType,
} from "src/context/overlay.context";
import clsx from "clsx";
import { isRoute } from "src/utils/utils";
import { useMutation } from "@tanstack/react-query";
import { joinCaronaShareRide } from "src/api/api";
import toast from "react-hot-toast";
import { isAxiosError } from "axios";
import { Loader } from "../shared/loader";

export const RouteCard: React.FC<{
  route: Route | CaronaShareRoute;
  type: RouteType;
}> = ({ route, type }) => {
  const { setRouteOverlayOpened, setOverlayRoute } = useContext(
    OverlayContext
  ) as OverlayContextType;

  const { isPending: isJoiningTrip, mutate: mJoinCaronaShareTrip } =
    useMutation({
      mutationFn: (tripId: string) => joinCaronaShareRide(tripId),
      onSuccess: (data) => {
        console.log(data);
        toast.success(data.data.message);
      },
      onError: (err) => {
        if (isAxiosError(err)) {
          console.log(err);
          if (err.response?.status == 502) {
            toast.error(
              "This user has not registered for Carona Share as a Host"
            );
          }
        }
      },
    });

  return (
    <div className="border border-border rounded-lg px-4 py-5">
      <div className="flex w-full justify-between">
        {/* vehicle details */}
        {type == RouteType.share && (
          <div className="w-[48%]">
            <div className="border-b border-border py-[12px] flex items-center">
              <div className="p-2 border border-dim shadow-vehicleIcon mr-3 rounded-lg">
                <Icon type="carDark" />
              </div>
              <h2 className="font-semibold text-base text-black">
                Vehicle Details
              </h2>
            </div>
            <div className="mt-2 flex space-x-5 justify-between">
              <div className="px-2 py-3">
                <h3 className="font-medium text-xs text-dim text-center mb-3">
                  Type
                </h3>
                <em className="not-italic text-black font-semibold text-sm block text-center">
                  SUV
                </em>
              </div>
              <div className="px-2 py-3">
                <h3 className="font-medium text-xs text-dim text-center mb-3">
                  Model
                </h3>
                <em className="not-italic text-black font-semibold text-sm block text-center">
                  Toyota Camry
                </em>
              </div>
              <div className="px-2 py-3">
                <h3 className="font-medium text-xs text-dim text-center mb-3">
                  Colour
                </h3>
                <em className="not-italic text-black font-semibold text-sm block text-center">
                  Red
                </em>
              </div>
              <div className="px-2 py-3">
                <h3 className="font-medium text-xs text-dim text-center mb-3">
                  License Plates
                </h3>
                <em className="not-italic text-black font-semibold text-sm block text-center">
                  XMV9DA
                </em>
              </div>
              <div className="px-2 py-3">
                <h3 className="font-medium text-xs text-dim text-center mb-3">
                  Available Seats
                </h3>
                <em className="not-italic text-black font-semibold text-sm block text-center">
                  2
                </em>
              </div>
            </div>
          </div>
        )}

        {/* trip details */}
        <div
          className={clsx(
            type == RouteType.go && "w-full",
            type == RouteType.share && "w-[48%]"
          )}
        >
          <div className="border-b border-border py-[12px] flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 border border-dim shadow-vehicleIcon mr-3 rounded-lg w-[30px]">
                <Icon type="locationPin" />
              </div>
              <h2 className="font-semibold text-base text-black">
                Route Details
              </h2>
            </div>
            <div className="flex items-center">
              <Icon type="calendarEmpty" className="mr-1" />
              <em className="not-italic font-medium text-xs text-black">
                22 Sep, 2024
              </em>
            </div>
            <button
              className="flex items-center font-medium text-sm text-black"
              onClick={() => {
                setOverlayRoute(route);
                setRouteOverlayOpened(true);
              }}
            >
              <span className="mr-2">See Route</span>
              <Icon type="greaterThan" />
            </button>
          </div>
          <div className="mt-2 flex space-x-5 justify-between items-center">
            <div className="px-2 py-3 w-[200px]">
              <h2 className="mb-3">
                <span className="font-medium text-xs text-dim">Depart: </span>
                <span className="font-medium text-xs text-lightGreen">
                  {!isRoute(route) && route.departureTime}
                </span>
              </h2>
              <p className="font-medium text-xs text-black">{route.start}</p>
            </div>
            <div className="w-[200px]">
              <h2 className="font-medium text-xs text-dim mb-3 text-center">
                Estimated time
              </h2>
              <em className="not-italic block text-center text-sm text-black font-medium">
                {route.estimatedTravelTime}
              </em>
            </div>
            <div className="px-2 py-3 w-[200px] text-right">
              <h2 className="mb-3 text-right">
                <span className="font-medium text-xs text-dim">Arrive: </span>
                <span className="font-medium text-xs text-lightBlue">
                  {!isRoute(route) && route.arrivalTime}
                </span>
              </h2>
              <p className="font-medium text-xs text-black inline-block">
                {route.end}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* driver */}
      {!isRoute(route) && (
        <div className="mt-4 px-3 py-2 flex justify-end items-center bg-[#F5F6F7] border border-border rounded-lg">
          <div className="flex items-center">
            <em className="not-italic font-bold text-black text-xl block mr-6">
              {!isRoute(route) && route.price}
            </em>
            <button
              className="text-white bg-[#212121] border border-black flex items-center px-3 py-2 rounded-lg"
              disabled={isJoiningTrip}
              onClick={() => mJoinCaronaShareTrip(route._id)}
            >
              <Icon type="ticket" className="mr-2" />
              {isJoiningTrip ? (
                <Loader className="mx-auto" />
              ) : (
                "Request to Join Ride"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
