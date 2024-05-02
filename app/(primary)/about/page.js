import About from "@/pages/About";

export const metadata = {
  title: "About Us",
  images: [
    {
      url: "/sections/about/AboutImages/AboutBanner.jpg",
      width: 1200,
      height: 630,
    },
  ],
};

export default function page() {
  return (
    <>
      <About />
    </>
  );
}
