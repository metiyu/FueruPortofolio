// CasesSection.tsx
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import AnimationOnScroll from './animation-on-scroll'; // Adjust path as needed

export default function CasesSection() {
    const caseStudies = [
        {
            title: 'Face Recognition Intelligence',
            description: 'Our advanced facial recognition technology delivers secure, seamless identity verification across industries. Whether securing office access or ensuring integrity in online exams, our solution reduces fraud, speeds up processes, and enhances user experience with fast, accurate biometric authentication.',
            image: 'https://learn.g2.com/hubfs/G2CM_FI454_Learn_Article_Images_%5BFacial_recognition%5D_V1a-1.png',
        },
        {
            title: 'Financial Services Transformation',
            description: 'Integrated monitoring and analytics transform financial operations into a transparent, compliant, and risk-aware ecosystem. From sales to collections, every process is optimized for efficiency—ensuring smarter decisions, smoother workflows, and sustainable growth.',
            image: 'https://www.salesforce.com/au/blog/wp-content/uploads/sites/4/2024/08/AdobeStock_585593306_e540f8.jpeg?w=892',
        },
        {
            title: 'Healthcare Analytics',
            description: 'Real-time queue monitoring and intelligent scheduling bring calm and clarity to healthcare services. Patients enjoy shorter wait times and timely notifications, while providers achieve better resource management—creating a more humane, stress-free, and efficient healthcare experience.',
            image: 'https://images.yourstory.com/cs/3/5739db30-22e7-11e9-9aaa-0334d2a19842/Health-care-feature-img11552902492870.png?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75',
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