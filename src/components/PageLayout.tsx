import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen" dir="rtl">
      <Navbar />
      <main className="pt-[52px]">{children}</main>
      <Footer />
    </div>
  );
}
