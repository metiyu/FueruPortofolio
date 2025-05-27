// CasesSection.tsx
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import AnimationOnScroll from './animation-on-scroll'; // Adjust path as needed

export default function CasesSection() {
    const caseStudies = [
        {
            title: 'Manufacturing Automation',
            description: 'How we helped a manufacturing company increase efficiency by 40% through AI-powered automation.',
            image: '/placeholder.svg?height=300&width=400',
        },
        {
            title: 'Financial Services Transformation',
            description: 'Transforming a traditional financial institution with digital solutions that improved customer satisfaction by 65%.',
            image: '/placeholder.svg?height=300&width=400',
        },
        {
            title: 'Healthcare Analytics',
            description: 'Implementing predictive analytics for a healthcare provider that led to 30% reduction in operational costs.',
            image: '/placeholder.svg?height=300&width=400',
        },
    ];

    return (
        <section id="case-studies" className="w-full py-12 md:py-18 lg:py-24 bg-background-light">
            <div className="container px-4 md:px-6">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg px-3 py-1 text-sm text-secondary-light md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Case Studies
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-light">Success Stories</h2>
                        <p className="max-w-[900px] text-secondary-light md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            See how we've helped businesses across industries achieve their goals through technology.
                        </p>
                    </div>
                </div>

                {/* Grid of Cards */}
                <div className="grid grid-cols-1 gap-2 pt-12 md:grid-cols-2 lg:grid-cols-3">
                    {caseStudies.map((study, index) => (
                        <AnimationOnScroll
                            key={index}
                            animationType="luxury-fade"
                            intensity="medium"
                            duration={3000}
                            delay={300 * index} // Staggered animation
                        >
                            <div className="m-6 group relative overflow-hidden rounded-lg border shadow-sm transition-all duration-1000 hover:shadow-shown hover:scale-[1.02] hover:-translate-y-1">
                                <Image
                                    src={study.image}
                                    width={400}
                                    height={300}
                                    alt={`Case Study ${index + 1}`}
                                    className="object-cover w-full h-48"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-primary-light">{study.title}</h3>
                                    <p className="text-secondary-light mt-2">
                                        {study.description}
                                    </p>
                                    {/* Optional Read More Button */}
                                    {/* <Link href="#" className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                    Read case study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link> */}
                                </div>
                            </div>
                        </AnimationOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}