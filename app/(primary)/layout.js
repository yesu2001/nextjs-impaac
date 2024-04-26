import MainLayout from "../../layouts/main/MainLayout";
import Providers from "@/components/Providers";
import { seoPageData } from "@/_mock/seoPageData";

export const metadata = {
  title: {
    absolute: "",
    template: " %s | Impaac Foundation",
    default: seoPageData.home.title,
  },
  description: seoPageData.home.description,
};

export default function PrimaryLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
