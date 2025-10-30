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
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      {/* Navigation */}
      <div className="bg-card/95 backdrop-blur-sm border rounded-lg px-6 md:px-8 py-3 flex items-center justify-between gap-4 shadow-sm">
        {/* Logo */}
        <Link href={isAuthenticated ? "/feed" : "/"} className="flex-shrink-0">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">
              <span>AICreaterX</span>
            </h1>
          </div>
        </Link>

        {/* Navigation Links - Landing Page Only */}
        {path === "/" && (
          <div className="hidden lg:flex space-x-6 flex-1 justify-center">
            <Link
              href="#features"
              className="text-sm font-medium transition-colors hover:text-foreground text-muted-foreground"
            >
              Features
            </Link>
          </div>
        )}

        {/* Auth Actions */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Authenticated>
            {/* Dashboard Link on Feed Page */}
            {path === "/feed" && (
              <Link href="/dashboard">
                <Button variant="outline" size="sm">
                  <LayoutDashboard className="h-4 w-4" />
                  <span className="hidden md:inline ml-2">Dashboard</span>
                </Button>
              </Link>
            )}

            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8 rounded-lg border",
                  userButtonPopoverCard:
                    "shadow-lg bg-card border border-border rounded-lg",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </Authenticated>

          <Unauthenticated>
            <SignInButton>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </SignInButton>

            <SignUpButton>
              <Button size="sm">
                Get Started
              </Button>
            </SignUpButton>
          </Unauthenticated>
        </div>

        {isLoading && (
          <div className="fixed bottom-0 left-0 w-full z-40 flex justify-center">
            <BarLoader width={"100%"} color="#000000" height={2} />
          </div>
        )}
      </div>
    </header>
  );
}
