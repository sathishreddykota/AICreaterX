import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import { ConvexClientProvider } from "@/components/convex-client-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AICreaterX - Professional Content Platform",
  description: "Build your professional brand, share expertise, and grow your network. A modern platform for professionals to create impactful content and meaningful connections.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>{/* <link rel="icon" href="/logo-text.png" sizes="any" /> */}</head>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider
            appearance={{
              baseTheme: shadesOfPurple,
            }}
          >
            <ConvexClientProvider>
              <Header />
              <main className="bg-background min-h-screen overflow-x-hidden">
                <Toaster richColors />

                {children}
              </main>
            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
