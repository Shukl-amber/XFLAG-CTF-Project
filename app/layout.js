import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "CTF Platform",
  description: "Capture the Flag Challenge Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen relative">
        {/* Background Image with Blur */}
        <div
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/images/bg.webp)",
            filter: "blur(8px)",
            opacity: "0.3",
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
