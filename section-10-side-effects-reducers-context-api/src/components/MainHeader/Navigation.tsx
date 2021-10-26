import React, { FormEvent, PropsWithChildren } from "react";

import classes from "./Navigation.module.css";

type NavigationProps = PropsWithChildren<{
  isLoggedIn: boolean;
  onLogout: (event: FormEvent) => void;
}>;

export const Navigation: React.FC<NavigationProps> = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};
