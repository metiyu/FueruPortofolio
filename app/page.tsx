import AboutSection from "@/components/about"
import HeroSection from "@/components/hero"
import ServicesSection from "@/components/services"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Brain, Code, Database, Globe, Heart, Infinity, Layers, MessageSquare, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Layers className="h-6 w-6 text-primary" />
                        <span className="text-xl font-bold">Fueru Tech</span>
                    </div>
                    <nav className="hidden md:flex gap-6">
                        <Link href="#" className="text-sm font-medium hover:text-primary">
                            Home
                        </Link>
                        <Link href="#about" className="text-sm font-medium hover:text-primary">
                            About
                        </Link>
                        <Link href="#services" className="text-sm font-medium hover:text-primary">
                            Services
                        </Link>
                        <Link href="#case-studies" className="text-sm font-medium hover:text-primary">
                            Case Studies
                        </Link>
                        <Link href="#contact" className="text-sm font-medium hover:text-primary">
                            Contact
                        </Link>
                    </nav>
                    <Button>Get Started</Button>
                </div>
            </header>
            <main className="flex-1">
                <HeroSection></HeroSection>
                <AboutSection></AboutSection>
                <ServicesSection></ServicesSection>
                <section id="case-studies" className="w-full py-12 md:py-24 lg:py-32 bg-white">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Case Studies</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Success Stories</h2>
                                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    See how we've helped businesses across industries achieve their goals through technology.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8 pt-12 md:grid-cols-2 lg:grid-cols-3">
                            <div className="group relative overflow-hidden rounded-lg border shadow-sm">
                                <Image
                                    src="/placeholder.svg?height=300&width=400"
                                    width={400}
                                    height={300}
                                    alt="Case Study 1"
                                    className="object-cover w-full h-48"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold">Manufacturing Automation</h3>
                                    <p className="text-gray-500 mt-2">
                                        How we helped a manufacturing company increase efficiency by 40% through AI-powered automation.
                                    </p>
                                    <Link href="#" className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                                        Read case study <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                            <div className="group relative overflow-hidden rounded-lg border shadow-sm">
                                <Image
                                    src="/placeholder.svg?height=300&width=400"
                                    width={400}
                                    height={300}
                                    alt="Case Study 2"
                                    className="object-cover w-full h-48"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold">Financial Services Transformation</h3>
                                    <p className="text-gray-500 mt-2">
                                        Transforming a traditional financial institution with digital solutions that improved customer
                                        satisfaction by 65%.
                                    </p>
                                    <Link href="#" className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                                        Read case study <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                            <div className="group relative overflow-hidden rounded-lg border shadow-sm">
                                <Image
                                    src="/placeholder.svg?height=300&width=400"
                                    width={400}
                                    height={300}
                                    alt="Case Study 3"
                                    className="object-cover w-full h-48"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold">Healthcare Analytics</h3>
                                    <p className="text-gray-500 mt-2">
                                        Implementing predictive analytics for a healthcare provider that led to 30% reduction in operational
                                        costs.
                                    </p>
                                    <Link href="#" className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                                        Read case study <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Contact Us</div>
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                                        Let's Grow Your Business Together
                                    </h2>
                                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Ready to transform your business with technology? Get in touch with our team of experts today.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                                        Schedule a Consultation
                                    </Button>
                                </div>
                                <div className="space-y-2 pt-4">
                                    <div className="flex items-center gap-2">
                                        <MessageSquare className="h-5 w-5 text-primary" />
                                        <span className="text-gray-500">info@fuerutech.com</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Globe className="h-5 w-5 text-primary" />
                                        <span className="text-gray-500">www.fuerutech.com</span>
                                    </div>
                                </div>
                            </div>
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
                                                <label
                                                    htmlFor="first-name"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    First name
                                                </label>
                                                <input
                                                    id="first-name"
                                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                    placeholder="Enter your first name"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="last-name"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Last name
                                                </label>
                                                <input
                                                    id="last-name"
                                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                    placeholder="Enter your last name"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="email"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="message"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                placeholder="Enter your message"
                                            ></textarea>
                                        </div>
                                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                                            Send Message
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="w-full border-t bg-white py-6">
                <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
                    <div className="flex items-center gap-2">
                        <Layers className="h-6 w-6 text-primary" />
                        <span className="text-lg font-bold">Fueru Tech</span>
                    </div>
                    <p className="text-center text-sm text-gray-500 md:text-left">
                        © {new Date().getFullYear()} Fueru Tech. All rights reserved. Where Businesses Grow Smarter.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-gray-500 hover:text-primary">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-primary">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-primary">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-primary">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub</span>
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
