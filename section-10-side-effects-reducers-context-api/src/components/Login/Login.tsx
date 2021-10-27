import React, {
  ChangeEvent,
  FormEvent,
  PropsWithChildren,
  useEffect,
  useReducer,
  useState,
} from "react";

import { Card } from "../UI/Card/Card";
import classes from "./Login.module.css";
import { Button } from "../UI/Button/Button";

type LoginProps = PropsWithChildren<{
  onLogin: (user: string, pass: string) => void;
}>;

type reducerState = {
  value: string;
  isValid: boolean;
};

type reducerAction =
  | { type: "user-input"; value: string }
  | { type: "validate-input" };

const emailReducer = (
  state: reducerState,
  action: reducerAction
): reducerState => {
  if (action.type === "user-input") {
    return { value: action.value, isValid: action.value.includes("@") };
  }
  if (action.type === "validate-input") {
    return {
      value: state.value as string,
      isValid: state.value.includes("@"),
    };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (
  state: reducerState,
  action: reducerAction
): reducerState => {
  if (action.type === "user-input") {
    return { value: action.value, isValid: action.value.length > 6 };
  }
  if (action.type === "validate-input") {
    return {
      value: state.value as string,
      isValid: state.value.length > 6,
    };
  }
  return { value: "", isValid: false };
};

export const Login: React.FC<LoginProps> = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: true,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: true,
  });

  const { isValid: isEmailValid } = emailState;
  const { isValid: isPasswordValid } = passwordState;

  useEffect(() => {
    const inputDebounce = setTimeout(() => {
      console.log("Validating form");
      setFormIsValid(isEmailValid && isPasswordValid);
    }, 500);
    return () => {
      clearTimeout(inputDebounce);
    };
  }, [isEmailValid, isPasswordValid]);

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchEmail({ type: "user-input", value: event.target.value });
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchPassword({ type: "user-input", value: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "validate-input" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "validate-input" });
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};
