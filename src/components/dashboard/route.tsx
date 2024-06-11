import { useContext } from "react";
import { Icon } from "../shared/icon";
import { Image } from "../shared/image";
import {
  OverlayContext,
  OverlayContextType,
} from "src/context/overlay.context";

type Route = {
  from: string;
  to: string;
};

type RouteProps = {
  route: Route;
};

export const Route: React.FC<RouteProps> = () => {
  const { setRouteOverlayOpened } = useContext(
    OverlayContext
  ) as OverlayContextType;
  return (
    <div
      className="px-7 py-6 w-full"
      onClick={(e) => {
        e.stopPropagation();
        console.log(e);
      }}
    >
      <div className="px-3 py-2 flex justify-between items-center rounded-lg">
        <div className="flex items-center">
          <Image
            type="userImage"
            alt=""
            className="w-8 h-8 mr-3 rounded-full"
          />
          <em className="font-medium not-italic inline-block mr-3 text-sm text-black">
            John Doe
          </em>
          <em className="font-medium not-italic text-sm text-dim">
            Toyota Camry
          </em>
          <div className="w-[5px] h-[5px] rounded-full bg-dim mx-1" />
          <em className="not-italic text-sm inline-block mr-3 font-medium text-[#0A572F]">
            2 seats left
          </em>
          <em className="font-medium not-italic inline-block mr-3 text-sm text-black">
            Mon, 22 Sep
          </em>
        </div>
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
            <span className="font-medium text-xs text-lightGreen">
              10:00 AM
            </span>
          </h2>
          <p className="font-medium text-xs text-black">
            Oshodi Interchange Terminal
          </p>
        </div>
        <div className="px-2 py-3 w-[180px]">
          <h2 className="mb-3 text-center">
            <span className="font-medium text-xs text-dim">Estimated time</span>
          </h2>
          <p className="font-medium text-sm  text-center text-black">4hr 15m</p>
        </div>
        <div className="px-2 py-3 w-[180px]">
          <h2 className="mb-3 text-right">
            <span className="font-medium text-xs text-dim">Arrive: </span>
            <span className="font-medium text-xs text-lightBlue">2:00PM</span>
          </h2>
          <p className="font-medium text-xs text-black text-right">
            Victoria Island
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
        <em className="not-italic font-bold text-black text-xl ml-auto block mr-6">
          $5750
        </em>
        <button className="text-white bg-[#212121] border border-black flex items-center px-3 py-2 rounded-lg">
          <Icon type="ticket" className="mr-2" />
          Buy Ticket
        </button>
      </div>
    </div>
  );
};
