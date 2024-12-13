import { useContext, useState } from "react";
import { CustomInput } from "../shared/input";
import {
  OverlayContext,
  OverlayContextType,
} from "src/context/overlay.context";
import { useMutation } from "@tanstack/react-query";
import { createCaronaShareTrip } from "src/api/api";
import toast from "react-hot-toast";
import { Loader } from "../shared/loader";
import { isAxiosError } from "axios";

export const NewCaronaShareOverlay: React.FC = () => {
  const { setIsNewCaronaShareOverlayOpened } = useContext(
    OverlayContext
  ) as OverlayContextType;

  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");

  const { isPending: isTripCreating, mutate: mCreateCaronaShareTrip } =
    useMutation({
      mutationFn: () => createCaronaShareTrip(departure, arrival),
      onSuccess: (data) => {
        console.log(data);
        toast.success("Carona Share Trip created successfully");
        setIsNewCaronaShareOverlayOpened(false);
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
    <div
      className="px-7 py-6 w-full"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <h2 className="font-semibold text-xl text-center mb-4">
        Create New Carona Share Trip
      </h2>
      <div className="space-y-4">
        <CustomInput
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
          label="Departure"
          placeholder="Ikeja"
        />
        <CustomInput
          value={arrival}
          onChange={(e) => setArrival(e.target.value)}
          label="Arrival"
          placeholder="Ibadan"
        />
      </div>
      <button
        className="bg-[#319A64] text-white px-2 py-3 text-center w-full rounded-lg mt-6"
        disabled={isTripCreating}
        onClick={() => mCreateCaronaShareTrip()}
      >
        {isTripCreating ? <Loader className="mx-auto" /> : "Create Trip"}
      </button>
    </div>
  );
};
