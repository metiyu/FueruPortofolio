import { Brain, Database, Code, ArrowRight } from "lucide-react"
import Link from "next/link"
import AnimationOnScroll from "./animation-on-scroll"
import VerticalSlider from "./vertical-slider"

export default function TechnologySection() {
    return (
        <section
            id="technology-stack"
            className="w-full bg-background-dark relative"
            aria-labelledby="tech-stack-heading"
        >
            {/* Subtle background accent */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-primary/2 rounded-full blur-3xl"></div>
            </div>

            <div className="container px-4 md:px-6 relative">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
                    {/* Left Vertical Slider */}
                    <VerticalSlider rotated={false} />

                    {/* Main Content */}
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-4">
                            {/* Main Heading */}
                            <AnimationOnScroll
                                animationType="luxury-fade"
                                intensity="medium"
                                duration={3000}
                                delay={200}
                            >
                                <h2
                                    id="tech-stack-heading"
                                    className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-dark pb-1"
                                >
                                    Built With Industry-Leading Technologies
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
                                    We hand-pick the most powerful, modern tools to ensure performance, scalability, and long-term success for your digital products.
                                </p>
                            </AnimationOnScroll>
                        </div>
                    </div>

                    {/* Right Vertical Slider */}
                    <div className="rotate-180">
                        <VerticalSlider rotated={true} />
                    </div>
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