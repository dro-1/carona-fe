import { Route } from "src/utils/types";
import { Icon } from "../shared/icon";
import { Image } from "../shared/image";

export const RouteCard: React.FC<{ route?: Route }> = () => {
  return (
    <div className="border border-border rounded-lg px-4 py-5">
      <div className="flex w-full justify-between">
        {/* vehicle details */}
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
        {/* trip details */}
        <div className="w-[48%]">
          <div className="border-b border-border py-[12px] flex items-center justify-between">
            <div className="flex items-center">
              <div className="p-2 border border-dim shadow-vehicleIcon mr-3 rounded-lg w-[30px]">
                <Icon type="locationPin" />
              </div>
              <h2 className="font-semibold text-base text-black">
                Trip Details
              </h2>
            </div>
            <div className="flex items-center">
              <Icon type="calendarEmpty" className="mr-1" />
              <em className="not-italic font-medium text-xs text-black">
                22 Sep, 2024
              </em>
            </div>
            <button className="flex items-center font-medium text-sm text-black">
              <span className="mr-2">See Route</span>
              <Icon type="greaterThan" />
            </button>
          </div>
          <div className="mt-2 flex space-x-5 justify-between items-center">
            <div className="px-2 py-3">
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
            <div>
              <h2 className="font-medium text-xs text-dim mb-3">
                Estimated time
              </h2>
              <em className="not-italic block text-center text-sm text-black font-medium">
                4hr 15m
              </em>
            </div>
            <div className="px-2 py-3">
              <h2 className="mb-3">
                <span className="font-medium text-xs text-dim">Arrive: </span>
                <span className="font-medium text-xs text-lightBlue">
                  2:00PM
                </span>
              </h2>
              <p className="font-medium text-xs text-black">Victoria Island</p>
            </div>
          </div>
        </div>
      </div>
      {/* driver */}
      <div className="mt-4 px-3 py-2 flex justify-between items-center bg-[#F5F6F7] border border-border rounded-lg">
        <div className="flex">
          <Image
            type="userImage"
            alt=""
            className="w-8 h-8 mr-3 rounded-full"
          />
          <p className="flex items-center">
            <span className="font-medium text-sm text-black">John Doe</span>
            <div className="w-[8px] h-[8px] rounded-full bg-dim mx-1" />
            <span className="font-medium text-xs text-dim">Driver</span>
          </p>
        </div>
        <div className="flex items-center">
          <em className="not-italic font-bold text-black text-xl block mr-6">
            $5750
          </em>
          <button className="text-white bg-[#212121] border border-black flex items-center px-3 py-2 rounded-lg">
            <Icon type="ticket" className="mr-2" />
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
};
