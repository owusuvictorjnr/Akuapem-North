"use client";

import Footer from "@/components/Footer";
import TopNavbar from "@/components/TopNavbar";

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <TopNavbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
