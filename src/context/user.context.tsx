import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { User } from "src/utils/types/api-types";

export type UserContextType = {
  user: User | null;
  verificationEmail: string;
  isLoggedIn: boolean;
  ticketId: string;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setVerificationEmail: React.Dispatch<React.SetStateAction<string>>;
  setTicketId: React.Dispatch<React.SetStateAction<string>>;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  isLoggedIn: false,
  verificationEmail: "",
  ticketId: "",
  setUser: () => {},
  setVerificationEmail: () => {},
  setTicketId: () => {},
});

export const UserContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [verificationEmail, setVerificationEmail] = useState("");
  const [ticketId, setTicketId] = useState("");

  useEffect(() => {
    console.log(verificationEmail);
  }, [verificationEmail]);

  return (
    <UserContext.Provider
      value={{
        user,
        verificationEmail,
        ticketId,
        setTicketId,
        setVerificationEmail,
        isLoggedIn: !!user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
