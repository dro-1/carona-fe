// import { RouteCard } from "src/components/dashboard/route-card";
import { useMutation, useQuery } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  getUser,
  registerCaronaShareHost,
  registerCaronaShareRider,
} from "src/api/api";
import { Icon } from "src/components/shared/icon";
import { CustomInput } from "src/components/shared/input";
import { Loader } from "src/components/shared/loader";
import { QueryKeys } from "src/utils/query-keys";
import {
  RegisterCaronaShareHostType,
  RegisterCaronaShareRiderType,
} from "src/utils/types/api-types";

export const ProfilePage = () => {
  const { isPending: isUserDataPending, data: userData } = useQuery({
    queryKey: [QueryKeys.getUser],
    queryFn: () => getUser(),
  });

  const [hostNIN, setHostNIN] = useState("");
  const [riderNIN, setRiderNIN] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleColour, setVehicleColor] = useState("");
  const [vehiclePlateNumber, setVehiclePlateNumber] = useState("");

  const {
    isPending: isHostRegistrationOngoing,
    mutate: mRegisterCaronaShareHost,
  } = useMutation({
    mutationFn: (data: RegisterCaronaShareHostType) =>
      registerCaronaShareHost(data),
    onSuccess: (data) => {
      console.log(data);
      toast.success("You've successfully registered as a Carona Share Host");
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

  const {
    isPending: isRiderRegistrationOngoing,
    mutate: mRegisterCaronaShareRider,
  } = useMutation({
    mutationFn: (data: RegisterCaronaShareRiderType) =>
      registerCaronaShareRider(data),
    onSuccess: (data) => {
      console.log(data);
      toast.success("You've successfully registered as a Carona Share Rider");
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

  const user = userData?.data.data.user;
  console.log(user);

  return (
    <div className="grow">
      <header className="flex p-6 justify-between items-center w-full">
        <div className="flex flex-col">
          <em className="not-italic font-semibold text-xl text-dark">
            Profile
          </em>
          <em className="not-italic font-medium text-xs text-dim">
            Update your information.
          </em>
        </div>
        <div className="flex justify-center items-center space-x-6">
          <Icon type="notification" className="w-6 h-6" />
          <Icon type="help" className="w-6 h-6" />
        </div>
      </header>
      {isUserDataPending ? (
        <Loader className="mx-auto" />
      ) : (
        <section className="px-5 mt-5 mb-10 space-y-6">
          {user && (
            <div>
              <h2 className="font-semibold text-xl mb-4">Information</h2>
              <p className="text-sm">
                Name: {user.firstName + " " + user.lastName}
              </p>
              <p className="text-sm">Email: {user.email}</p>
            </div>
          )}
          <div>
            <h2 className="font-semibold text-xl mb-4">
              Register as a Carona Share Host
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
              <CustomInput
                value={hostNIN}
                onChange={(e) => setHostNIN(e.target.value)}
                placeholder="1029"
                label="NIN"
              />
              <CustomInput
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                placeholder="Toyota"
                label="Vehicle Type"
              />
              <CustomInput
                value={vehicleModel}
                onChange={(e) => setVehicleModel(e.target.value)}
                placeholder="Corolla"
                label="Vehicle Model"
              />
              <CustomInput
                value={vehicleColour}
                onChange={(e) => setVehicleColor(e.target.value)}
                placeholder="Blue"
                label="Vehicle Color"
              />
              <CustomInput
                value={vehiclePlateNumber}
                onChange={(e) => setVehiclePlateNumber(e.target.value)}
                placeholder="EKY-56794"
                label="Vehicle Plate No."
              />
            </div>
            <button
              className="bg-[#319A64] text-white px-2 py-3 text-center w-full rounded-lg mt-6"
              disabled={isHostRegistrationOngoing}
              onClick={() =>
                mRegisterCaronaShareHost({
                  NIN: hostNIN,
                  vehicleColour,
                  vehicleModel,
                  vehiclePlateNumber,
                  vehicleType,
                })
              }
            >
              {isHostRegistrationOngoing ? (
                <Loader className="mx-auto" />
              ) : (
                "Register"
              )}
            </button>
          </div>
          <div>
            <h2 className="font-semibold text-xl mb-4">
              Register as a Carona Share Rider
            </h2>
            <div className="">
              <CustomInput
                value={riderNIN}
                onChange={(e) => setRiderNIN(e.target.value)}
                placeholder="1029"
                label="NIN"
              />
            </div>
            <button
              className="bg-[#319A64] text-white px-2 py-3 text-center w-full rounded-lg mt-6"
              disabled={isRiderRegistrationOngoing}
              onClick={() =>
                mRegisterCaronaShareRider({
                  NIN: riderNIN,
                })
              }
            >
              {isRiderRegistrationOngoing ? (
                <Loader className="mx-auto" />
              ) : (
                "Register"
              )}
            </button>
          </div>
        </section>
      )}
    </div>
  );
};
