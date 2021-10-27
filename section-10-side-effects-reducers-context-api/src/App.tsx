import React, { useContext } from "react";
import { MainHeader } from "./components/MainHeader/MainHeader";
import { Login } from "./components/Login/Login";
import { Home } from "./components/Home/Home";
import { AuthContext } from "./context/AuthContext";

export const App: React.FC = () => {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <MainHeader />
      <main>
        {!authCtx.isLoggedIn && <Login />}
        {authCtx.isLoggedIn && <Home />}
      </main>
    </>
  );
};
