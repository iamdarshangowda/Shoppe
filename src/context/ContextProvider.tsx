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
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../pages/firebase";
import { cartReducer } from "./reducers/cartReducer";

interface contextProviderProp {
  children: any;
}

interface context {
  GlobalDetails: any;
  SignUp: any;
  LogIn: any;
  LogOut: any;
  user: any;
  googleSignIn: any;
  forgotPassword: any;
}

interface UserDataProp {
  email: string;
  password: string;
}

export const Context = createContext<context | null>(null);
const ContextProvider = Context.Provider;

export const ContextProviderWrapper: React.FunctionComponent<
  contextProviderProp
> = ({ children }) => {
  const [user, setUser] = useState<any>("");
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: [],
  });

  const SignUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LogIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LogOut = () => {
    return signOut(auth);
  };

  const googleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  };

  const forgotPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
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
    SignUp,
    LogIn,
    LogOut,
    user,
    googleSignIn,
    forgotPassword,
    cartState,
    cartDispatch,
  };
  return <ContextProvider value={store}>{children}</ContextProvider>;
};

export const useContextDetails = () => {
  return useContext(Context);
};
