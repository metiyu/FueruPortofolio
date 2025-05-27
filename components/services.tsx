import { Brain, Database, Code, ArrowRight } from "lucide-react"
import Link from "next/link"
import AnimationOnScroll from "./animation-on-scroll"

export default function ServicesSection() {
    return (
        <section id="services" className="w-full py-12 md:py-18 lg:py-24 bg-background-dark relative">
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
                            <div className="inline-block rounded-lg px-3 text-sm text-secondary-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Our Services</div>
                        </AnimationOnScroll>

                        {/* Main Heading */}
                        <AnimationOnScroll
                            animationType="luxury-fade"
                            intensity="medium"
                            duration={3000}
                            delay={200}
                        >
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-dark pb-1">
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
                            <p className="max-w-[900px] text-secondary-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                We offer a wide range of services designed to help businesses leverage technology for growth and
                                efficiency.
                            </p>
                        </AnimationOnScroll>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 gap-6 pt-20 md:grid-cols-2 lg:grid-cols-3">
                    <AnimationOnScroll
                        animationType="luxury-fade"
                        intensity="medium"
                        duration={3000}
                        delay={600}
                    >
                        <div className="m-2 group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all duration-1000 ease-in-outhover:shadow-pressed hover:shadow-pressed hover:scale-[0.99] hover:translate-y-0">
                            <div className="p-6 flex flex-col">
                                {/* Icon container with hover animation */}
                                <div className="rounded-full mb-4 p-3 bg-primary/10 text-primary transition-transform duration-700 group-hover:scale-90 group-hover:-translate-x-4">
                                    <Brain className="h-10 w-10 text-primary-dark" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-2 text-primary-dark">
                                    AI-Powered Solutions
                                </h3>

                                {/* Description */}
                                <p className="text-secondary-dark mb-4">
                                    Leverage the power of artificial intelligence to automate processes, gain insights, and make data-driven decisions.
                                </p>
                            </div>

                            {/* Subtle hover accent (glow overlay) */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                    </AnimationOnScroll>

                    <AnimationOnScroll
                        animationType="luxury-fade"
                        intensity="medium"
                        duration={3000}
                        delay={600}
                    >
                        <div className="m-2 group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all duration-1000 ease-in-outhover:shadow-pressed hover:shadow-pressed hover:scale-[0.99] hover:translate-y-0">
                            <div className="p-6 flex flex-col">
                                {/* Icon container with hover animation */}
                                <div className="rounded-full mb-4 p-3 bg-primary/10 text-primary transition-transform duration-700 group-hover:scale-90 group-hover:-translate-x-4">
                                    <Database className="h-10 w-10 text-primary-dark" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-2 text-primary-dark">
                                    Digital Transformation
                                </h3>

                                {/* Description */}
                                <p className="text-secondary-dark mb-4">
                                    Transform your business with digital technologies to improve efficiency, enhance customer experience, and drive growth.
                                </p>
                            </div>

                            {/* Subtle hover accent (glow overlay) */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/2 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        </div>
                    </AnimationOnScroll>

                    <AnimationOnScroll
                        animationType="luxury-fade"
                        intensity="medium"
                        duration={3000}
                        delay={600}
                    >
                        <div className="m-2 group relative overflow-hidden rounded-lg bg-background shadow-sm transition-all duration-1000 ease-in-outhover:shadow-pressed hover:shadow-pressed hover:scale-[0.99] hover:translate-y-0">
                            <div className="p-6 flex flex-col">
                                {/* Icon container with hover animation */}
                                <div className="rounded-full mb-4 p-3 bg-primary/10 text-primary transition-transform duration-700 group-hover:scale-90 group-hover:-translate-x-4">
                                    <Code className="h-10 w-10 text-primary-dark" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-2 text-primary-dark">
                                    Custom Software Development
                                </h3>

                                {/* Description */}
                                <p className="text-secondary-dark mb-4">
                                    Build tailored software solutions that address your specific business needs and challenges.
                                </p>
                            </div>

                            {/* Subtle hover accent (glow overlay) */}
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