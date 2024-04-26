import DashboardLayout from "@/layouts/dashboard";
import Providers from "@/components/Providers";
import { seoPageData } from "@/_mock/seoPageData";

export const metadata = {
  title: {
    absolute: "",
    template: "%s | Impaac Foundation",
    default: seoPageData.home.title,
  },
};

export default function CustomLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <DashboardLayout>{children}</DashboardLayout>
        </Providers>
      </body>
    </html>
  );
}
