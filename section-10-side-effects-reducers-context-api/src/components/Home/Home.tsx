import React from "react";

import { Card } from "../UI/Card/Card";
import classes from "./Home.module.css";

export const Home: React.FC = () => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
    </Card>
  );
};
