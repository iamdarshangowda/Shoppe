import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ContextProviderWrapper } from "src/context/ContextProvider";
import { ThemeProvider } from "@mui/material";
import theme from "src/styles/theme";
import { Layout } from "@/components/layouts/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProviderWrapper>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ContextProviderWrapper>
  );
}
