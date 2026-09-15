import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eshmam Nawar | Software Developer",
  description:
    "Project Manager & Technical Lead at Limitless Technologies Inc., a US fintech startup. Computer Science graduate from Swinburne University of Technology, working at the intersection of product, business, and technology.",
  keywords: [
    "Eshmam Nawar",
    "Project Manager",
    "Technical Project Management",
    "Technical Lead",
    "Fintech",
    "Software Developer",
    "React",
    "Next.js",
    "AI",
    "Web Development",
  ],
};

// Runs before first paint so the saved theme is applied without a flash
// of the wrong palette.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
