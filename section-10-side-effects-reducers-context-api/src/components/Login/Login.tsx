import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { Card } from "../UI/Card/Card";
import classes from "./Login.module.css";
import { Button } from "../UI/Button/Button";
import { AuthContext } from "../../context/AuthContext";
import { Input } from "../UI/Input/Input";

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
      isValid: state.value.trim().includes("@"),
    };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (
  state: reducerState,
  action: reducerAction
): reducerState => {
  if (action.type === "user-input") {
    return { value: action.value, isValid: action.value.trim().length > 6 };
  }
  if (action.type === "validate-input") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }
  return { value: "", isValid: false };
};

export const Login: React.FC = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
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
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  const authCtx = useContext(AuthContext);
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          type="email"
          label="E-mail"
          value={emailState.value}
          isValid={emailState.isValid}
          onChangeHandler={emailChangeHandler}
          onBlurHandler={validateEmailHandler}
        />
        <Input
          id="password"
          type="password"
          label="Password"
          value={passwordState.value}
          isValid={passwordState.isValid}
          onChangeHandler={passwordChangeHandler}
          onBlurHandler={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};
