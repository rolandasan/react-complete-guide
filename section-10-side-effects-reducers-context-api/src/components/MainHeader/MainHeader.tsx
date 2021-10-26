import React, { FormEvent, PropsWithChildren } from "react";

import { Navigation } from "./Navigation";
import classes from "./MainHeader.module.css";

type MainHeaderProps = PropsWithChildren<{
  isAuthenticated: boolean;
  onLogout: (event: FormEvent) => void;
}>;

export const MainHeader: React.FC<MainHeaderProps> = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
};
