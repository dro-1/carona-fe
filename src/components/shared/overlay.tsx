import { PropsWithChildren, useContext } from "react";
import {
  OverlayContext,
  OverlayContextType,
} from "src/context/overlay.context";
import { useLockScroll } from "src/utils/hooks";
import { twMerge } from "tailwind-merge";

export const Overlay: React.FC<PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => {
  const { isRouteOverlayOpened, setRouteOverlayOpened } = useContext(
    OverlayContext
  ) as OverlayContextType;

  useLockScroll(true);

  const handleClose = () => {
    if (isRouteOverlayOpened) setRouteOverlayOpened(false);
  };

  return (
    <div
      className={twMerge(
        "bg-[#080202]/[.40] h-screen w-screen flex justify-center items-center fixed top-0 left-0 z-40",
        className
      )}
      onClick={handleClose}
    >
      <div className="max-h-[80vh] z-10 overlayContainer w-[90%] max-w-[800px] overflow-y-auto rounded-2xl bg-white">
        {children}
      </div>
    </div>
  );
};
