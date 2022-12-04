import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ContextProviderWrapper } from "src/context/ContextProvider";
import { ProtectedRoutes } from "@/components/ProtectedRoutes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProviderWrapper>
      <Component {...pageProps} />
    </ContextProviderWrapper>
  );
}
