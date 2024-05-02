import MainLayout from "@/layouts/main/MainLayout";
import Providers from "@/components/Providers";
import { seoPageData } from "@/_mock/seoPageData";
import { SocialLink } from "@/_mock/socialLink";

export const metadata = {
  title: {
    template: "%s | Impaac Foundation",
    default: "Impaac Foundation → India's Only Non-profit Crowdfunding",
  },
  description: seoPageData.home.description,
  openGraph: {
    locale: "en_US",
    type: "article",
    site_name: "Impaac Foundation",
    description: seoPageData.home.description,
    articlePublisher: SocialLink.facebookLink,
  },
  twitter: {
    card: "summary",
    site: "@impaacidea",
    title: "Impaac Foundation",
    description: seoPageData.home.description,
    creator: "@impaacidea",
  },
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
