"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { useStoreUser } from "@/hooks/use-store-user";
import { BarLoader } from "react-spinners";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LayoutDashboard } from "lucide-react";
import { Authenticated, Unauthenticated } from "convex/react";

export default function Header() {
  const { isLoading, isAuthenticated } = useStoreUser();
  const path = usePathname();
  const router = useRouter();

  // Redirect authenticated users from landing page to feed
  useEffect(() => {
    if (!isLoading && isAuthenticated && path === "/") {
      router.push("/feed");
    }
  }, [isLoading, isAuthenticated, path, router]);

  // Hide header on dashboard and public profile/post pages
  if (path.includes("/dashboard")) {
    return null;
  }

  // Hide header on public profile and post pages (but not on feed)
  if (path !== "/" && path !== "/feed" && path.split("/").length >= 2) {
    return null;
  }

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      {/* Glassmorphism Navigation */}
      <div className="card-glass-strong rounded-2xl px-6 md:px-8 py-4 flex items-center justify-between gap-4 shadow-2xl">
        {/* Logo */}
        <Link href={isAuthenticated ? "/feed" : "/"} className="flex-shrink-0 group">
          <div className="transition-transform duration-300 group-hover:scale-105">
            <h1 className="text-2xl sm:text-3xl font-black">
              <span className="gradient-text-primary">AICreaterX</span>
            </h1>
          </div>
        </Link>

        {/* Navigation Links - Landing Page Only */}
        {path === "/" && (
          <div className="hidden lg:flex space-x-8 flex-1 justify-center">
            <Link
              href="#features"
              className="text-white font-semibold transition-all duration-300 hover:text-violet-300 relative group"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-fuchsia-400 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="#testimonials"
              className="text-white font-semibold transition-all duration-300 hover:text-violet-300 relative group"
            >
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-fuchsia-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
        )}

        {/* Auth Actions */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Authenticated>
            {/* Dashboard Link on Feed Page */}
            {path === "/feed" && (
              <Link href="/dashboard">
                <Button className="hidden sm:flex bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-all duration-300"  size="sm">
                  <LayoutDashboard className="h-4 w-4" />
                  <span className="hidden md:inline ml-2">Dashboard</span>
                </Button>
              </Link>
            )}

            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 rounded-xl border-2 border-white/30 shadow-lg hover:border-violet-400 transition-all",
                  userButtonPopoverCard:
                    "shadow-2xl backdrop-blur-xl bg-slate-900/95 border border-white/20 rounded-2xl",
                  userPreviewMainIdentifier: "font-bold text-white",
                  userButtonPopoverActionButton: "hover:bg-white/10",
                },
              }}
              afterSignOutUrl="/"
            />
          </Authenticated>

          <Unauthenticated>
            <SignInButton>
              <Button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-all duration-300" size="sm">
                Sign In
              </Button>
            </SignInButton>

            <SignUpButton>
              <Button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5" size="sm">
                Get Started
              </Button>
            </SignUpButton>
          </Unauthenticated>
        </div>

        {isLoading && (
          <div className="fixed bottom-0 left-0 w-full z-40 flex justify-center">
            <BarLoader width={"100%"} color="#A78BFA" height={3} />
          </div>
        )}
      </div>
    </header>
  );
}
