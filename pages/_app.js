import React from "react";
import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "@/utils/theme";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import Layout from "@/layouts/Layout";
import { useRouter } from "next/router";
import { ProSidebarProvider } from "react-pro-sidebar";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
  ...appProps
}) {
  const [theme, colorMode] = useMode();
  const getLayout = Component.getLayout || ((page) => page);
  const router = useRouter();
  const LayoutComponent = router.pathname.startsWith(`/auth`)
    ? React.Fragment
    : Layout;
  return getLayout(
    <CacheProvider value={emotionCache}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <ProSidebarProvider>
            <LayoutComponent>
              <Component {...pageProps} />
            </LayoutComponent>
          </ProSidebarProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
}

export default MyApp;
