import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
