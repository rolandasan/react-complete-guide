import React, { PropsWithChildren, useEffect, useState } from "react";

interface ContextState {
  isLoggedIn: boolean;
  onLogin: (email: string, pass: string) => void;
  onLogout: () => void;
}

const AuthContext = React.createContext<ContextState>({
  isLoggedIn: false,
  onLogin: (_email: string, _pass: string) => {},
  onLogout: () => {},
});

export const AuthContextProvider: PropsWithChildren<any> = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (_email: string, _pass: string) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
