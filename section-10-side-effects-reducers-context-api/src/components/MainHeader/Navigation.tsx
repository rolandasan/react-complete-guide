import React, { FormEvent, PropsWithChildren } from "react";
import { AuthContext } from "../../context/AuthContext";

import classes from "./Navigation.module.css";

type NavigationProps = PropsWithChildren<{
  // isLoggedIn: boolean;
  onLogout: (event: FormEvent) => void;
}>;

export const Navigation: React.FC<NavigationProps> = (props) => {
  return (
    <AuthContext.Consumer>
      {(authCtx) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {authCtx.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {authCtx.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {authCtx.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};
