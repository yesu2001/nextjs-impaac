"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AuthProvider } from "@/contexts/FirebaseContext";
import { CollapseDrawerProvider } from "@/contexts/CollapseDrawerContext";
import { MotionLazyContainer } from "@/components/animate";
import ThemeProvider from "@/theme";
import NotistackProvider from "@/components/NotistackProvider";
import { ProgressBarStyle } from "./ProgressBar";
import { ChartStyle } from "./chart";
import ScrollToTop from "./ScrollToTop";

export default function Providers({ children }) {
  return (
    <AppRouterCacheProvider>
      <AuthProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CollapseDrawerProvider>
            <MotionLazyContainer>
              <ThemeProvider>
                <NotistackProvider>
                  <ProgressBarStyle />
                  <ChartStyle />
                  <ScrollToTop />
                  {children}
                </NotistackProvider>
              </ThemeProvider>
            </MotionLazyContainer>
          </CollapseDrawerProvider>
        </LocalizationProvider>
      </AuthProvider>
    </AppRouterCacheProvider>
  );
}
