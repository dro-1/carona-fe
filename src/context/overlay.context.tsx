import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { CaronaShareRoute, Route } from "src/utils/types/api-types";

export type OverlayContextType = {
  isRouteOverlayOpened: boolean;
  isNewCaronaShareOverlayOpened: boolean;
  overlayRoute: Route | CaronaShareRoute | null;
  setIsNewCaronaShareOverlayOpened: Dispatch<SetStateAction<boolean>>;
  setOverlayRoute: Dispatch<SetStateAction<Route | CaronaShareRoute | null>>;
  setRouteOverlayOpened: Dispatch<SetStateAction<boolean>>;
};

export const OverlayContext = createContext<OverlayContextType | null>({
  isRouteOverlayOpened: false,
  isNewCaronaShareOverlayOpened: false,
  setRouteOverlayOpened: () => {},
  setIsNewCaronaShareOverlayOpened: () => {},
  setOverlayRoute: () => {},
  overlayRoute: null,
});

export const OverlayContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [isRouteOverlayOpened, setRouteOverlayOpened] = useState(false);
  const [isNewCaronaShareOverlayOpened, setIsNewCaronaShareOverlayOpened] =
    useState(false);
  const [overlayRoute, setOverlayRoute] = useState<
    Route | CaronaShareRoute | null
  >(null);

  return (
    <OverlayContext.Provider
      value={{
        overlayRoute,
        isNewCaronaShareOverlayOpened,
        setOverlayRoute,
        setIsNewCaronaShareOverlayOpened,
        isRouteOverlayOpened,
        setRouteOverlayOpened,
      }}
    >
      {children}
    </OverlayContext.Provider>
  );
};
