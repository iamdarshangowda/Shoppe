import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../pages/firebase";

interface contextProviderProp {
  children: any;
}

interface context {
  GlobalDetails: any;
}

interface UserDataProp {
  email: string;
  password: string;
}

import {
  initialState as globalDetailsInitialState,
  reducer as globalDetails,
} from "./reducers/globalDetails";

const Context = createContext<context | null>(null);
const ContextProvider = Context.Provider;

export const ContextProviderWrapper: React.FunctionComponent<
  contextProviderProp
> = ({ children }) => {
  const [user, setUser] = useState<any>("");

  const [globalDetailsData, globalDetailsDispatch] = useReducer(
    globalDetails,
    globalDetailsInitialState
  );

  const SignUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LogIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>
      setUser(currentUser)
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const store: any = {
    GlobalDetails: {
      state: globalDetailsData,
      dispatch: globalDetailsDispatch,
    },
  };
  return <ContextProvider value={store}>{children}</ContextProvider>;
};

export const useUserAuth = () => {
  return useContext(Context);
};
