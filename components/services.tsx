import { Brain, Database, Code, ArrowRight } from "lucide-react"
import Link from "next/link"
import AnimationOnScroll from "./animation-on-scroll"

export default function ServicesSection() {
    return (
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-background relative">
            {/* Subtle background accent */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-primary/2 rounded-full blur-3xl"></div>
            </div>

            <div className="container px-4 md:px-6 relative">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-4">
                        {/* Service Badge */}
                        <AnimationOnScroll
                            animationType="luxury-fade"
                            intensity="medium"
                            duration={3000}
                            delay={100}
                        >
                            <div className="inline-block rounded-lg bg-button px-3 py-1 text-sm text-primary">
                                Our Services
                            </div>
                        </AnimationOnScroll>

                        {/* Main Heading */}
                        <AnimationOnScroll
                            animationType="luxury-fade"
                            intensity="medium"
                            duration={3000}
                            delay={200}
                        >
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary pb-1">
                                Comprehensive Technology Solutions
                            </h2>
                        </AnimationOnScroll>

                        {/* Description */}
                        <AnimationOnScroll
                            animationType="luxury-fade"
                            intensity="medium"
                            duration={3000}
                            delay={300}
                        >
                            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                We offer a wide range of services designed to help businesses leverage technology for growth and
                                efficiency.
                            </p>
                        </AnimationOnScroll>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 gap-6 pt-20 md:grid-cols-2 lg:grid-cols-3">
                    {/* AI-Powered Solutions */}
                    <AnimationOnScroll
                        animationType="luxury-fade"
                        intensity="medium"
                        duration={3000}
                        delay={400}
                    >
                        <div className="m-2 group relative rounded-lg border-4 bg-background shadow-sm transition-all duration-1000 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1">
                            <div className="p-6">
                                <div className="mb-4 transition-transform duration-1000 group-hover:scale-110 group-hover:translate-x-4">
                                    <Brain className="h-10 w-10 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-primary">AI-Powered Solutions</h3>
                                <p className="text-gray-500 mb-4">
                                    Leverage the power of artificial intelligence to automate processes, gain insights, and make
                                    data-driven decisions.
                                </p>
                            </div>
                            {/* Subtle hover accent */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                    </AnimationOnScroll>

                    {/* Digital Transformation */}
                    <AnimationOnScroll
                        animationType="luxury-fade"
                        intensity="medium"
                        duration={3000}
                        delay={500}
                    >
                        <div className="m-2 group relative overflow-hidden rounded-lg border-4 bg-background shadow-sm transition-all duration-1000 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1">
                            <div className="p-6">
                                <div className="mb-4 transition-transform duration-1000 group-hover:scale-110 group-hover:translate-x-4">
                                    <Database className="h-10 w-10 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-primary">Digital Transformation</h3>
                                <p className="text-gray-500 mb-4">
                                    Transform your business with digital technologies to improve efficiency, enhance customer
                                    experience, and drive growth.
                                </p>
                            </div>
                            {/* Subtle hover accent */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                    </AnimationOnScroll>

                    {/* Custom Software Development */}
                    <AnimationOnScroll
                        animationType="luxury-fade"
                        intensity="medium"
                        duration={3000}
                        delay={600}
                    >
                        <div className="m-2 group relative overflow-hidden rounded-lg border-4 bg-background shadow-sm transition-all duration-1000 hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1">
                            <div className="p-6">
                                <div className="mb-4 transition-transform duration-1000 group-hover:scale-110 group-hover:translate-x-4">
                                    <Code className="h-10 w-10 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-primary">Custom Software Development</h3>
                                <p className="text-gray-500 mb-4">
                                    Build tailored software solutions that address your specific business needs and challenges.
                                </p>
                            </div>
                            {/* Subtle hover accent */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                    </AnimationOnScroll>
                </div>

                {/* Minimal floating accent */}
                <AnimationOnScroll
                    animationType="luxury-fade"
                    intensity="subtle"
                    duration={2000}
                    delay={1000}
                >
                    <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-primary/15 rounded-full animate-pulse"></div>
                </AnimationOnScroll>
            </div>
        </section>
    )
}