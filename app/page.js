"use client";

import React, { useState } from "react";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  features,
  platformTabs,
} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Data arrays
  const navigationItems = [
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground/40 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground"></span>
                </span>
                <span>Professional Content Platform</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="block mb-2">Your Professional</span>
                <span className="block mb-2">Content Hub</span>
                <span className="block text-muted-foreground">Create, Connect, Grow</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Share your expertise, build your professional network, and grow your influence.
                A modern platform for professionals to create impactful content and meaningful connections.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 items-center lg:items-start pt-2">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <span className="flex items-center gap-2">
                      Start Creating Free
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Button>
                </Link>
                <Link href="/feed">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    Explore Content
                  </Button>
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[
                      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
                      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
                      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
                    ].map((src, i) => (
                      <div key={i} className="relative w-8 h-8 rounded-full ring-2 ring-background">
                        <Image
                          src={src}
                          alt={`Creator ${i + 1}`}
                          fill
                          className="rounded-full object-cover"
                          sizes="32px"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">10,000+</p>
                    <p className="text-muted-foreground text-xs">Professionals</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-foreground/80 text-foreground/80"
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground font-medium">4.9/5 Rating</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden border shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop"
                  alt="Professional workspace with laptop and minimal design"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section
        id="features"
        className="py-16 px-4 sm:px-6 bg-muted/30"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools for professional content creation and networking
            </p>
          </div>

          {/* Features Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover-lift"
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4"
                  >
                    <feature.icon className="w-6 h-6" />
                  </div>
                  
                  {/* Content */}
                  <CardTitle className="text-xl mb-3">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Showcase */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How it works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Three powerful pillars to build your professional presence and influence.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/3">
              <div className="space-y-2">
                {platformTabs.map((tab, index) => (
                  <Button
                    key={index}
                    variant={activeTab === index ? "secondary" : "ghost"}
                    onClick={() => setActiveTab(index)}
                    className="w-full justify-start h-auto p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          activeTab === index
                            ? "bg-foreground text-background"
                            : "bg-muted"
                        }`}
                      >
                        <tab.icon className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold text-base">{tab.title}</h3>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            <div className="lg:w-2/3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    {platformTabs[activeTab].title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {platformTabs[activeTab].description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {platformTabs[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-foreground/60 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 bg-muted/30 border-y">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to build your professional presence?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are building their brand, sharing expertise,
            and growing their influence on our platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="w-full sm:w-auto"
              >
                Start Your Journey
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/feed">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Explore the Feed
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AICreaterX. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
