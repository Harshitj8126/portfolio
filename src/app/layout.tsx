import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Harshit Portfolio | AI Engineer | Backend Developer",
  description:
    "Building intelligent AI applications, scalable backend systems, and immersive digital experiences. Portfolio of Harshit Jindal — AI Engineer & Backend Developer.",
  keywords: [
    "Harshit Jindal",
    "AI Engineer",
    "Backend Developer",
    "Portfolio",
    "FastAPI",
    "Python",
    "LangChain",
    "Next.js",
    "Full Stack Developer",
  ],
  authors: [{ name: "Harshit Jindal" }],
  openGraph: {
    title: "Harshit Portfolio | AI Engineer | Backend Developer",
    description:
      "Building intelligent AI applications, scalable backend systems, and immersive digital experiences.",
    type: "website",
    locale: "en_US",
    siteName: "Harshit Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshit Portfolio | AI Engineer | Backend Developer",
    description:
      "Building intelligent AI applications, scalable backend systems, and immersive digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Film Grain Overlay */}
        <div className="film-grain" aria-hidden="true" />
        {/* Vignette Overlay */}
        <div className="vignette" aria-hidden="true" />
      </body>
    </html>
  );
}
