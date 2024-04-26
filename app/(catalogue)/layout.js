import MainLayout from "@/layouts/main/MainLayout";
import Providers from "@/components/Providers";

export const metadata = {
  title: {
    template: "%s | Impaac Foundation",
    default: "Impaac Foundation → India's Only Non-profit Crowdfunding",
  },
  description: "Impaac Foundation → India's Only Non-profit Crowdfunding",
};

export default function CatalogueLayout({ children }) {
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
