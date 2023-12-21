import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spotify",
  description: "Listen to music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-zinc-800 scrollbar-track-zinc-900 h-32 bg-zinc-900 text-zinc-50">
        {children}
      </body>
    </html>
  );
}
