import React, { PropsWithChildren } from "react";

import { Card } from "../UI/Card/Card";
import classes from "./Home.module.css";

type HomeProps = PropsWithChildren<{ onLogout: () => void }>;

export const Home: React.FC<HomeProps> = () => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
    </Card>
  );
};
