'use client'

import { Code, Heart, Infinity, Zap } from "lucide-react"
import AnimationOnScroll from "./animation-on-scroll"
import HeartIcon from "./icons/heart-icon"
import { useRef } from "react";
import IncreaseIcon from "./icons/increase-icon";
import BoltIcon from "./icons/bolt-icon";

export default function AboutSection() {
    const heartRef = useRef<any>(null);
    const boltRef = useRef<any>(null);
    const increaseRef = useRef<any>(null);

    return (
        <AnimationOnScroll
            classNameInView="opacity-100 translate-y-0 duration-700"
            classNameNotInView="opacity-0 translate-y-10"
        >
            <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background relative">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <AnimationOnScroll
                                classNameInView="opacity-100 translate-y-0 duration-500"
                                classNameNotInView="opacity-0 translate-y-6"
                                delay={200}
                            >
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">About Us</div>
                            </AnimationOnScroll>

                            <AnimationOnScroll
                                classNameInView="opacity-100 translate-y-0 duration-700"
                                classNameNotInView="opacity-0 translate-y-10"
                                delay={300}
                            >
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary pb-1">
                                    Transforming Businesses Through Technology
                                </h2>
                            </AnimationOnScroll>

                            <AnimationOnScroll
                                classNameInView="opacity-100 translate-y-0 duration-500"
                                classNameNotInView="opacity-0 translate-y-6"
                                delay={400}
                            >
                                <p className="max-w-[900px] text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    At Fueru Tech, we believe in the power of technology to transform businesses. Our team of experts
                                    specializes in digital transformation and AI-powered solutions that help businesses modernize their
                                    operations, optimize their processes, and achieve sustainable growth.
                                </p>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                        <AnimationOnScroll
                            animationType="luxury-fade"
                            intensity="medium"
                            duration={3000}
                            delay={600}
                        >
                            <div className="m-2 group relative overflow-hidden rounded-lg border-4 bg-background shadow-sm transition-all duration-1000 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1" onMouseEnter={() => boltRef.current?.playFromBeginning()}>
                                <div className="p-6 items-center flex flex-col">
                                    <div className="rounded-full bg-primary/10 mb-4 p-3 transition-transform duration-1000 group-hover:scale-110">
                                        <BoltIcon ref={boltRef} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-primary">Pioneering Excellence</h3>
                                    <p className="text-secondary mb-4 text-center">
                                        We stay one step ahead by embracing innovation and evolving with technology
                                    </p>
                                </div>
                                {/* Subtle hover accent */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                            </div>
                        </AnimationOnScroll>

                        <AnimationOnScroll
                            animationType="luxury-fade"
                            intensity="medium"
                            duration={3000}
                            delay={600}
                        >
                            <div
                                className="m-2 group relative overflow-hidden rounded-lg border-4 bg-background shadow-sm transition-all duration-1000 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1"
                                onMouseEnter={() => heartRef.current?.playFromBeginning()}
                            >
                                <div className="p-6 items-center flex flex-col">
                                    <div className="rounded-full bg-primary/10 mb-4 p-3 transition-transform duration-1000 group-hover:scale-110">
                                        <HeartIcon ref={heartRef} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-primary">Beyond Service</h3>
                                    <p className="text-secondary mb-4 text-center">
                                        We treat clients as family, providing exceptional care and genuine partnership
                                    </p>
                                </div>
                                {/* Hover accent */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                            </div>
                        </AnimationOnScroll>

                        <AnimationOnScroll
                            animationType="luxury-fade"
                            intensity="medium"
                            duration={3000}
                            delay={600}
                        >
                            <div className="m-2 group relative overflow-hidden rounded-lg border-4 bg-background shadow-sm transition-all duration-1000 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1" onMouseEnter={() => increaseRef.current?.playFromBeginning()}>
                                <div className="p-6 items-center flex flex-col">
                                    <div className="rounded-full bg-primary/10 mb-4 p-3 transition-transform duration-1000 group-hover:scale-110">
                                        <IncreaseIcon ref={increaseRef} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-primary">Limitless Growth</h3>
                                    <p className="text-secondary mb-4 text-center">
                                        We remove barriers and expand possibilities through digital innovation
                                    </p>
                                </div>
                                {/* Subtle hover accent */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </div>
            </section>
        </AnimationOnScroll>
    )
}