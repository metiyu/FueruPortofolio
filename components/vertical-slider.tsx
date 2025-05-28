// components/VerticalSlider.tsx

import React, { useRef, useEffect } from 'react';
import styles from './vertical-slider.module.css';

const logos = [
    { name: "CSS", src: "/logo/css3-original.svg" },
    { name: "Django", src: "/logo/django-plain.svg" },
    { name: "Express", src: "/logo/express-original.svg" },
    { name: "Firebase", src: "/logo/firebase-original-wordmark.svg" },
    { name: "HTML", src: "/logo/html5-original.svg" },
    { name: "Java", src: "/logo/java-original.svg" },
    { name: "JavaScript", src: "/logo/javascript-original.svg" },
    { name: "MongoDB", src: "/logo/mongodb-original-wordmark.svg" },
    { name: "MySQL", src: "/logo/mysql-original-wordmark.svg" },
    { name: "NestJS", src: "/logo/nestjs-original.svg" },
    { name: "Next.js", src: "/logo/nextjs-original.svg" },
    { name: "Node.js", src: "/logo/nodejs-original-wordmark.svg" },
    { name: "PostgreSQL", src: "/logo/postgresql-original.svg" },
    { name: "Python", src: "/logo/python-original.svg" },
    { name: "React", src: "/logo/react-original.svg" },
    { name: "Redis", src: "/logo/redis-original.svg" },
    { name: "Tailwind CSS", src: "/logo/tailwindcss-original-wordmark.svg" },
    { name: "TypeScript", src: "/logo/typescript-original.svg" },
    { name: "CSS", src: "/logo/css3-original.svg" },
    { name: "Django", src: "/logo/django-plain.svg" },
    { name: "Express", src: "/logo/express-original.svg" },
    { name: "Firebase", src: "/logo/firebase-original-wordmark.svg" },
    { name: "HTML", src: "/logo/html5-original.svg" },
    { name: "Java", src: "/logo/java-original.svg" },
    { name: "JavaScript", src: "/logo/javascript-original.svg" },
    { name: "MongoDB", src: "/logo/mongodb-original-wordmark.svg" },
    { name: "MySQL", src: "/logo/mysql-original-wordmark.svg" },
    { name: "NestJS", src: "/logo/nestjs-original.svg" },
    { name: "Next.js", src: "/logo/nextjs-original.svg" },
    { name: "Node.js", src: "/logo/nodejs-original-wordmark.svg" },
    { name: "PostgreSQL", src: "/logo/postgresql-original.svg" },
    { name: "Python", src: "/logo/python-original.svg" },
    { name: "React", src: "/logo/react-original.svg" },
    { name: "Redis", src: "/logo/redis-original.svg" },
    { name: "Tailwind CSS", src: "/logo/tailwindcss-original-wordmark.svg" },
    { name: "TypeScript", src: "/logo/typescript-original.svg" },
    { name: "CSS", src: "/logo/css3-original.svg" },
    { name: "Django", src: "/logo/django-plain.svg" },
    { name: "Express", src: "/logo/express-original.svg" },
    { name: "Firebase", src: "/logo/firebase-original-wordmark.svg" },
    { name: "HTML", src: "/logo/html5-original.svg" },
    { name: "Java", src: "/logo/java-original.svg" },
    { name: "JavaScript", src: "/logo/javascript-original.svg" },
    { name: "MongoDB", src: "/logo/mongodb-original-wordmark.svg" },
    { name: "MySQL", src: "/logo/mysql-original-wordmark.svg" },
    { name: "NestJS", src: "/logo/nestjs-original.svg" },
    { name: "Next.js", src: "/logo/nextjs-original.svg" },
    { name: "Node.js", src: "/logo/nodejs-original-wordmark.svg" },
    { name: "PostgreSQL", src: "/logo/postgresql-original.svg" },
    { name: "Python", src: "/logo/python-original.svg" },
    { name: "React", src: "/logo/react-original.svg" },
    { name: "Redis", src: "/logo/redis-original.svg" },
    { name: "Tailwind CSS", src: "/logo/tailwindcss-original-wordmark.svg" },
    { name: "TypeScript", src: "/logo/typescript-original.svg" },
];

const duplicatedLogos = [...logos, ...logos];

const VerticalSlider = ({ rotated }: { rotated: boolean }) => {
    const sliderTrackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const track = sliderTrackRef.current;
        if (!track) return;

        let animationId: number;
        let startTime = performance.now();
        let pausedPosition = 0;
        let isPaused = false;
        const duration = 45000; // 20 seconds

        const animate = (currentTime: number) => {
            if (!isPaused) {
                const elapsed = currentTime - startTime;
                let currentPosition = (elapsed / duration) * 50; // 50% movement over duration

                // Reset when reaching 50% (one full cycle)
                if (currentPosition >= 50) {
                    currentPosition = currentPosition - 50;
                    startTime = currentTime;
                }

                track.style.transform = `translateY(-${currentPosition}%)`;
                pausedPosition = currentPosition; // Always track current position
            }

            animationId = requestAnimationFrame(animate);
        };

        const handleMouseEnter = () => {
            if (isPaused) return;

            isPaused = true;

            // Add smooth deceleration transition
            track.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        };

        const handleMouseLeave = () => {
            if (!isPaused) return;

            // Remove transition immediately to prevent conflicts
            track.style.transition = '';

            // Calculate new start time to continue from current paused position
            const positionRatio = pausedPosition / 50;
            startTime = performance.now() - (positionRatio * duration);

            isPaused = false;
        };

        // Start animation
        animationId = requestAnimationFrame(animate);

        // Add event listeners to all icons
        const icons = track.querySelectorAll(`.${styles.icon}`);
        icons.forEach(icon => {
            icon.addEventListener('mouseenter', handleMouseEnter);
            icon.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            cancelAnimationFrame(animationId);
            icons.forEach(icon => {
                icon.removeEventListener('mouseenter', handleMouseEnter);
                icon.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, [logos.length]);

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.sliderTrack} ref={sliderTrackRef}>
                {[...logos, ...logos].map((logo, index) => (
                    <div className={rotated ? "rotate-180" : ""} key={index}>
                        <div className={styles.icon} key={index}>
                            {/* <p>{index}</p> */}
                            <img src={logo.src} alt={logo.name} loading="lazy" />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default VerticalSlider;