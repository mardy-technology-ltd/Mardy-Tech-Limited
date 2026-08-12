import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { FloatingWidgets } from "@/components/navigation/floating-widgets";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mardy Tech Limited — Enterprise Software & Frontend Architecture",
  description: "Official web platform for Mardy Tech Limited featuring Next.js 14+ App Router, HSL design tokens, zero-FOUC theme engine, and 3D Canvas motion UI.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/20 selection:text-primary transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            {children}
            <FloatingWidgets />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
