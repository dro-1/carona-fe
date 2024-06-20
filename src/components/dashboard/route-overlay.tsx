import { useContext } from "react";
import { Icon } from "../shared/icon";
import { Image } from "../shared/image";
import {
  OverlayContext,
  OverlayContextType,
} from "src/context/overlay.context";
import { useMutation } from "@tanstack/react-query";
import { getRouteInfo } from "src/api/api";
import { MutationKeys } from "src/utils/mutation-keys";
import { Loader } from "../shared/loader";

export const RouteOverlay: React.FC = () => {
  const { setRouteOverlayOpened, overlayRoute } = useContext(
    OverlayContext
  ) as OverlayContextType;

  const {
    isPending: isRouteInfoPending,
    data: routeInfoData,
    mutate,
  } = useMutation({
    mutationKey: [MutationKeys.getRouteInfo],
    mutationFn: (routeId: string) => getRouteInfo(routeId),
    onSuccess: console.log,
    onError: (e) => console.log(e.message),
  });

  const routeInfo = routeInfoData?.data.data;
  console.log({ routeInfo });

  return (
    <div
      className="px-7 py-6 w-full"
      onClick={(e) => {
        e.stopPropagation();
        console.log(e);
      }}
    >
      <div className="px-3 py-2 flex justify-between items-center rounded-lg">
        {routeInfoData && (
          <div className="flex items-center">
            <Image
              type="userImage"
              alt=""
              className="w-8 h-8 mr-3 rounded-full"
            />
            <em className="font-medium not-italic inline-block mr-3 text-sm text-black">
              John Doe
            </em>
            <em className="font-medium not-italic text-sm text-dim mr-3">
              {routeInfo.vehicle.model}
            </em>
            <em className="font-medium not-italic inline-block mr-3 text-sm text-black">
              {routeInfo.vehicle.plateNumber}
            </em>
            <div className="w-[5px] h-[5px] rounded-full bg-dim mx-1" />
            <em className="not-italic text-sm inline-block mr-3 font-medium text-[#0A572F]">
              {routeInfo.vehicle.availableSeats} seat(s) left
            </em>
          </div>
        )}

        <div className="grow" />
        <button
          className="border rounded-md p-2"
          onClick={() => setRouteOverlayOpened(false)}
        >
          <Icon type="cancel" onClick={() => setRouteOverlayOpened(false)} />
        </button>
      </div>
      <Image className="w-full mt-4 mb-6" type="map" alt="" />
      <div className="mt-2 flex justify-between items-start">
        <div className="px-2 py-3 w-[180px]">
          <h2 className="mb-3">
            <span className="font-medium text-xs text-dim">Depart: </span>
            {routeInfoData && (
              <span className="font-medium text-xs text-lightGreen">
                {routeInfo.trip.departureTime}
              </span>
            )}
          </h2>
          <p className="font-medium text-xs text-black">
            {overlayRoute?.start}
          </p>
        </div>
        <div className="px-2 py-3 w-[180px]">
          <h2 className="mb-3 text-center">
            <span className="font-medium text-xs text-dim">Estimated time</span>
          </h2>
          <p className="font-medium text-sm  text-center text-black">
            {overlayRoute?.estimatedTravelTime}
          </p>
        </div>
        <div className="px-2 py-3 w-[180px]">
          <h2 className="mb-3 text-right">
            <span className="font-medium text-xs text-dim">Arrive: </span>
            {routeInfoData && (
              <span className="font-medium text-xs text-lightBlue">
                {" "}
                {routeInfo.trip.arrivalTime}
              </span>
            )}
          </h2>
          <p className="font-medium text-xs text-black text-right">
            {overlayRoute?.end}
          </p>
        </div>
      </div>
      <div className="bg-[#F2F4F7] flex items-center px-3 py-4 border-l-[3px] border-black rounded-md">
        <Icon type="info" className="mr-2" />
        <p className="text-xs font-medium text-[#667085]">
          Due to heavy downpour, there is traffic congestion on this route. You
          will get to your destination 15 - 20 mins later than specified.
        </p>
      </div>
      <div className="flex items-center my-4">
        <button
          className="text-white ml-auto bg-[#212121] border border-black flex items-center px-3 py-2 rounded-lg"
          onClick={() => !routeInfoData && mutate(overlayRoute?._id ?? "")}
          disabled={isRouteInfoPending}
        >
          {isRouteInfoPending ? (
            <Loader className="mx-auto" />
          ) : (
            <>
              {" "}
              <Icon type="ticket" className="mr-2" />
              {routeInfoData ? "Buy Ticket" : "Get Ticket Price"}
            </>
          )}
        </button>
        {routeInfoData && (
          <em className="not-italic font-bold text-black text-xl ml-2 block mr-6">
            {routeInfo.trip.price}
          </em>
        )}
      </div>
    </div>
  );
};
