import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { Route } from "src/utils/types/api-types";

export type OverlayContextType = {
  isRouteOverlayOpened: boolean;
  overlayRoute: Route | null;
  setOverlayRoute: Dispatch<SetStateAction<Route | null>>;
  setRouteOverlayOpened: Dispatch<SetStateAction<boolean>>;
};

export const OverlayContext = createContext<OverlayContextType | null>({
  isRouteOverlayOpened: false,
  setRouteOverlayOpened: () => {},
  setOverlayRoute: () => {},
  overlayRoute: null,
});

export const OverlayContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [isRouteOverlayOpened, setRouteOverlayOpened] = useState(false);
  const [overlayRoute, setOverlayRoute] = useState<Route | null>(null);

  return (
    <OverlayContext.Provider
      value={{
        overlayRoute,
        setOverlayRoute,
        isRouteOverlayOpened,
        setRouteOverlayOpened,
      }}
    >
      {children}
    </OverlayContext.Provider>
  );
};
