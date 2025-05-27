"use client"

import { InView } from "react-intersection-observer"
import React, { useState, useEffect } from "react"

type AnimationType =
    | "luxury-fade"
    | "tech-glitch"
    | "premium-slide"
    | "holographic"
    | "matrix-reveal"
    | "cyber-emerge"
    | "quantum-phase"

type AnimationOnScrollProps = {
    children: React.ReactNode
    classNameInView?: string
    classNameNotInView?: string
    delay?: number
    animationType?: AnimationType
    intensity?: "subtle" | "medium" | "intense"
    duration?: number
}

export default function AnimationOnScroll({
    children,
    classNameInView = "",
    classNameNotInView = "",
    delay = 0,
    animationType = "luxury-fade",
    intensity = "medium",
    duration = 3000,
}: AnimationOnScrollProps) {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const getAnimationStyles = (inView: boolean, animationType: AnimationType) => {
        const baseTransition = `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`
        const intensityMultiplier = intensity === "subtle" ? 0.5 : intensity === "intense" ? 1.5 : 1

        const animations = {
            "luxury-fade": {
                opacity: inView ? 1 : 0,
                transform: inView
                    ? "translateY(0) scale(1)"
                    : `translateY(${40 * intensityMultiplier}px) scale(0.95)`,
                filter: inView
                    ? "blur(0px) brightness(1)"
                    : "blur(2px) brightness(0.8)",
                transition: baseTransition,
            },
            "tech-glitch": {
                opacity: inView ? 1 : 0,
                transform: inView
                    ? "translateX(0) skew(0deg)"
                    : `translateX(${-30 * intensityMultiplier}px) skew(${2 * intensityMultiplier}deg)`,
                filter: inView
                    ? "hue-rotate(0deg) saturate(1)"
                    : `hue-rotate(${45 * intensityMultiplier}deg) saturate(1.5)`,
                textShadow: inView
                    ? "none"
                    : `${2 * intensityMultiplier}px 0 #00ff88, ${-2 * intensityMultiplier}px 0 #ff0088`,
                transition: `${baseTransition}, text-shadow ${duration}ms ease-out`,
            },
            "premium-slide": {
                opacity: inView ? 1 : 0,
                transform: inView
                    ? "translateX(0) rotateY(0deg)"
                    : `translateX(${-100 * intensityMultiplier}px) rotateY(${15 * intensityMultiplier}deg)`,
                // boxShadow: inView
                //     ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                //     : "none",
                // borderRadius: inView ? "0px" : `${8 * intensityMultiplier}px`,
                transition: baseTransition,
            },
            "holographic": {
                opacity: inView ? 1 : 0,
                transform: inView
                    ? "perspective(1000px) rotateX(0deg) translateZ(0)"
                    : `perspective(1000px) rotateX(${30 * intensityMultiplier}deg) translateZ(${-50 * intensityMultiplier}px)`,
                background: inView
                    ? "linear-gradient(45deg, transparent, rgba(255,255,255,0.05), transparent)"
                    : "none",
                backdropFilter: inView ? "blur(10px)" : "none",
                border: inView
                    ? "1px solid rgba(255,255,255,0.1)"
                    : "none",
                transition: baseTransition,
            },
            "matrix-reveal": {
                opacity: inView ? 1 : 0,
                transform: inView
                    ? "matrix(1, 0, 0, 1, 0, 0)"
                    : `matrix(0.8, ${0.2 * intensityMultiplier}, 0, 0.8, ${50 * intensityMultiplier}, ${30 * intensityMultiplier})`,
                clipPath: inView
                    ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                    : "polygon(0 0, 0 0, 0 100%, 0 100%)",
                filter: inView
                    ? "none"
                    : `contrast(${1.5 * intensityMultiplier}) brightness(${0.7 * intensityMultiplier})`,
                transition: `${baseTransition}, clip-path ${duration * 1.2}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
            },
            "cyber-emerge": {
                opacity: inView ? 1 : 0,
                transform: inView
                    ? "scale(1) rotateZ(0deg)"
                    : `scale(${0.7 * intensityMultiplier}) rotateZ(${-5 * intensityMultiplier}deg)`,
                filter: inView
                    ? "drop-shadow(0 0 0 transparent)"
                    : `drop-shadow(0 0 ${20 * intensityMultiplier}px #00ffff) drop-shadow(0 0 ${40 * intensityMultiplier}px #ff00ff)`,
                boxShadow: inView
                    ? "0 0 50px rgba(0, 255, 255, 0.3), inset 0 0 50px rgba(255, 0, 255, 0.1)"
                    : "none",
                transition: baseTransition,
            },
            "quantum-phase": {
                opacity: inView ? 1 : 0,
                transform: inView
                    ? "translateZ(0) rotateY(0deg) rotateX(0deg)"
                    : `translateZ(${-200 * intensityMultiplier}px) rotateY(${45 * intensityMultiplier}deg) rotateX(${15 * intensityMultiplier}deg)`,
                filter: inView
                    ? "blur(0px) hue-rotate(0deg)"
                    : `blur(${3 * intensityMultiplier}px) hue-rotate(${90 * intensityMultiplier}deg)`,
                background: inView
                    ? "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.02) 100%)"
                    : "linear-gradient(135deg, rgba(0,255,255,0.1) 0%, rgba(255,0,255,0.1) 100%)",
                backdropFilter: "blur(20px) saturate(180%)",
                border: "1px solid rgba(255, 255, 255, 0.125)",
                transition: `${baseTransition}, background ${duration * 0.8}ms ease-out`,
            },
        }

        return animations[animationType]
    }

    if (!isClient) {
        return <div className={classNameNotInView}>{children}</div>
    }

    return (
        <InView threshold={0.1} triggerOnce={false}>
            {({ inView, ref }) => (
                <div
                    ref={ref}
                    className={`${inView ? classNameInView : classNameNotInView} relative overflow-hidden`}
                    style={{
                        transitionDelay: `${delay}ms`,
                        ...getAnimationStyles(inView, animationType),
                        // Add premium visual enhancements
                        willChange: "transform, opacity, filter",
                        backfaceVisibility: "hidden",
                        transformStyle: "preserve-3d",
                    }}
                >
                    {/* Optional premium overlay effects */}
                    {animationType === "holographic" && inView && (
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)",
                                animation: "shimmer 3s ease-in-out infinite",
                            }}
                        />
                    )}

                    {animationType === "cyber-emerge" && inView && (
                        <div
                            className="absolute inset-0 pointer-events-none border"
                            style={{
                                borderImage: "linear-gradient(45deg, #00ffff, #ff00ff, #ffff00, #00ffff) 1",
                                animation: "cyberpulse 2s ease-in-out infinite alternate",
                            }}
                        />
                    )}

                    {children}
                </div>
            )}
        </InView>
    )
}

// Add these keyframes to your global CSS or Tailwind config
/*
@keyframes shimmer {
    0%, 100% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
}

@keyframes cyberpulse {
    0% { 
        box-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff;
        filter: brightness(1);
    }
    100% { 
        box-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff;
        filter: brightness(1.2);
    }
}
*/