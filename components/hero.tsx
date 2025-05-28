'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import AnimationOnScroll from "./animation-on-scroll"
import { useEffect, useRef, useState } from "react"
import { useVantaDots } from "@/hooks/use-vanta-dots"
import { DOTS } from "vanta"
import * as THREE from 'three';

export default function HeroSection() {
    const vantaRef = useRef<HTMLElement>(null);
    useVantaDots(vantaRef);

    return (
        <section ref={vantaRef} className="w-full rotate-180 py-12 md:py-48 lg:py-48 xl:py-56 bg-background-dark relative">
            <div className="rotate-180">
                {/* Subtle background accent - minimalist */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-blue-500/2 rounded-full blur-3xl"></div>
                </div>

                <div className="container px-4 md:px-6 relative">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                        {/* Left Column - Text Content */}
                        <div className="flex flex-col justify-center space-y-6">
                            {/* Main Heading */}
                            <AnimationOnScroll
                                animationType="luxury-fade"
                                intensity="medium"
                                duration={800}
                                delay={200}
                            >
                                <div className="space-y-4">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary-dark">
                                        Where Businesses Grow Smarter
                                    </h1>
                                </div>
                            </AnimationOnScroll>

                            {/* Description Paragraph */}
                            <AnimationOnScroll
                                animationType="luxury-fade"
                                intensity="medium"
                                duration={600}
                                delay={400}
                            >
                                <p className="max-w-[600px] text-secondary-dark md:text-xl/relaxed">
                                    Fueru Tech delivers cutting-edge digital transformation and AI-powered solutions that help
                                    businesses modernize, optimize, and thrive in today's technology-driven landscape.
                                </p>
                            </AnimationOnScroll>

                            {/* Button Group */}
                            <AnimationOnScroll
                                animationType="luxury-fade"
                                intensity="medium"
                                duration={500}
                                delay={600}
                            >
                                <div className="flex flex-col gap-3 p-2 min-[400px]:flex-row pt-2">
                                    <Button
                                        size="lg"
                                        className="bg-accent hover:bg-accent/90 text-primary-light transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border-0 shadow-sm"
                                    >
                                        Explore Our Solutions <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="text-primary-light bg-secondary-dark transition-all duration-300 hover:scale-[1.02] hover:shadow-md border-gray-200 hover:border-gray-300 hover:bg-secondary-dark/90"
                                    >
                                        Contact Us
                                    </Button>
                                </div>
                            </AnimationOnScroll>
                        </div>

                        {/* Right Column - Hero Image */}
                        {/* <div className="flex items-center justify-center">
                            <AnimationOnScroll
                                animationType="luxury-fade"
                                intensity="medium"
                                duration={900}
                                delay={300}
                            >
                                <div className="relative group">
                                    <Image
                                        src="/placeholder.svg?height=550&width=550"
                                        width={550}
                                        height={550}
                                        alt="Hero Image"
                                        className="rounded-lg object-cover transition-all duration-500 group-hover:scale-[1.02] shadow-lg hover:shadow-xl"
                                    />

                                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </AnimationOnScroll>
                        </div> */}
                    </div>

                    {/* Minimal floating accents - very subtle */}
                    <AnimationOnScroll
                        animationType="luxury-fade"
                        intensity="subtle"
                        duration={2000}
                        delay={1000}
                    >
                        <div className="absolute top-1/3 left-1/5 w-1 h-1 bg-primary/20 rounded-full animate-pulse"></div>
                    </AnimationOnScroll>

                    <AnimationOnScroll
                        animationType="luxury-fade"
                        intensity="subtle"
                        duration={1800}
                        delay={1200}
                    >
                        <div className="absolute bottom-1/3 right-1/5 w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"></div>
                    </AnimationOnScroll>
                </div>
            </div>
        </section>
    )
}