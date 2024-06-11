import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

export type OverlayContextType = {
  isRouteOverlayOpened: boolean;
  setRouteOverlayOpened: Dispatch<SetStateAction<boolean>>;
};

export const OverlayContext = createContext<OverlayContextType | null>({
  isRouteOverlayOpened: false,
  setRouteOverlayOpened: () => {},
});

export const OverlayContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [isRouteOverlayOpened, setRouteOverlayOpened] = useState(false);

  return (
    <OverlayContext.Provider
      value={{
        isRouteOverlayOpened,
        setRouteOverlayOpened,
      }}
    >
      {children}
    </OverlayContext.Provider>
  );
};
