import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { MotionLazyContainer } from "@/components/animate";
import NotistackProvider from "@/components/NotistackProvider";
import { CollapseDrawerProvider } from "@/contexts/CollapseDrawerContext";
import { AuthProvider } from "@/contexts/FirebaseContext";
import ThemeProvider from "@/theme";
import { seoPageData } from "@/_mock/seoPageData";

export const metadata = {
  title: {
    absolute: "",
    template: " %s | Impaac Foundation",
    default: seoPageData.home.title,
  },
  description: "Impaac Foundation → India's Only Non-profit Crowdfunding",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <AuthProvider>
            <CollapseDrawerProvider>
              <MotionLazyContainer>
                <ThemeProvider>
                  <NotistackProvider>{children}</NotistackProvider>
                </ThemeProvider>
              </MotionLazyContainer>
            </CollapseDrawerProvider>
          </AuthProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
