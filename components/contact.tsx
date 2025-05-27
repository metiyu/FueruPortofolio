// ContactSection.tsx
import { Button } from "@/components/ui/button";
import { Globe, MessageSquare, Send } from "lucide-react";
import AnimationOnScroll from "./animation-on-scroll";

export default function ContactSection() {
    return (
        <section id="contact" className="w-full py-12 md:py-16 lg:py-18 bg-background-dark">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    {/* Left Column - Text + CTA */}
                    <div className="flex flex-col justify-center space-y-4">
                        {/* Animated Header */}
                        <AnimationOnScroll animationType="luxury-fade" intensity="medium" duration={1000} delay={200}>
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg py-1 text-sm text-secondary-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Contact Us
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-dark">
                                    Let's Grow Your Business Together
                                </h2>
                                <p className="max-w-[600px] text-secondary-dark md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Ready to transform your business with technology? Get in touch with our team of experts today.
                                </p>
                            </div>
                        </AnimationOnScroll>

                        {/* Animated Button */}
                        <AnimationOnScroll animationType="luxury-fade" intensity="medium" duration={1000} delay={400}>
                            <div>
                                <Button
                                    size="lg"
                                    className="bg-accent hover:bg-accent/90 text-primary-light transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border-0 shadow-sm"
                                >
                                    Schedule a Consultation <Send className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </AnimationOnScroll>

                        {/* Animated Contact Info */}
                        <AnimationOnScroll animationType="luxury-fade" intensity="medium" duration={1000} delay={600}>
                            <div className="space-y-2 pt-4">
                                <div className="flex items-center gap-2">
                                    <MessageSquare className="h-5 w-5 text-primary-dark" />
                                    <span className="text-secondary-dark">inquiry@fuerutech.com</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Globe className="h-5 w-5 text-primary-dark" />
                                    <span className="text-secondary-dark">www.fuerutech.com</span>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>

                    {/* Right Column - Form (Optional Animation) */}
                    {/* Uncomment this when form is ready */}
                    {/* 
                    <AnimationOnScroll animationType="luxury-fade" intensity="medium" duration={1000} delay={800}>
                        <div className="flex items-center justify-center">
                            <div className="w-full max-w-md space-y-4 rounded-lg border bg-white p-6 shadow-sm">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">Send us a message</h3>
                                    <p className="text-sm text-gray-500">
                                        Fill out the form below and we'll get back to you as soon as possible.
                                    </p>
                                </div>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="first-name" className="text-sm font-medium">
                                                First name
                                            </label>
                                            <input
                                                id="first-name"
                                                placeholder="Enter your first name"
                                                className="flex h-10 w-full rounded-md border border-input bg-background-dark px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="last-name" className="text-sm font-medium">
                                                Last name
                                            </label>
                                            <input
                                                id="last-name"
                                                placeholder="Enter your last name"
                                                className="flex h-10 w-full rounded-md border border-input bg-background-dark px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            className="flex h-10 w-full rounded-md border border-input bg-background-dark px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            placeholder="Enter your message"
                                            className="flex min-h-[100px] w-full rounded-md border border-input bg-background-dark px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2"
                                        ></textarea>
                                    </div>
                                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </AnimationOnScroll> */}

                </div>
            </div>
        </section>
    );
}