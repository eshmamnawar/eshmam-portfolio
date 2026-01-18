import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eshmam Nawar | Software Developer",
  description: "Software Development student at Swinburne University passionate about building efficient, elegant digital solutions and exploring the frontiers of AI.",
  keywords: ["Eshmam Nawar", "Software Developer", "React", "Next.js", "AI", "Web Development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

