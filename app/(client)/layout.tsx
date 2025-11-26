import Header from "@/components/layouts/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "%s - ShopCartBD Online Store",
    template: "ShopCartBD Online Store",
  },
  description: "ShopCartBD is your one-stop online store for all your shopping needs. Discover a wide range of products at unbeatable prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}
