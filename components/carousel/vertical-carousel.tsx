// components/carousel/VerticalCarousel.tsx
'use client'

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Slide from './slide';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 80vh; /* Adjust as needed */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

function mod(a: number, b: number) {
    return ((a % b) + b) % b;
}

const VerticalCarousel: React.FC<{
    slides: { key: number; content: React.ReactNode }[];
    goToSlide?: number;
    showNavigation?: boolean;
    offsetRadius?: number;
    animationConfig?: any;
}> = ({
    slides,
    offsetRadius = 2,
    showNavigation = false,
    animationConfig = { tension: 120, friction: 14 },
}) => {
        const [index, setIndex] = useState(0);
        const clampedOffsetRadius = Math.min(
            offsetRadius,
            Math.floor((slides.length - 1) / 2)
        );

        // Debounce interval (5 seconds per slide)
        useEffect(() => {
            const intervalId = setInterval(() => {
                moveSlide(1); // Move to next slide
            }, 5000);

            return () => clearInterval(intervalId);
        }, [index]);

        const getPresentableSlides = () => {
            let presentableSlides = [];

            for (let i = -clampedOffsetRadius; i <= clampedOffsetRadius; i++) {
                presentableSlides.push(slides[mod(index + i, slides.length)]);
            }

            return presentableSlides;
        };

        const moveSlide = (direction: number) => {
            // Prevent rapid clicks by debouncing
            setTimeoutId.current = setTimeout(() => {
                setIndex(mod(index + direction, slides.length));
            }, 200); // Debounce time (200ms)
        };

        const setTimeoutId = React.useRef<NodeJS.Timeout | null>(null);

        useEffect(() => {
            const handleKeyDown = (event: KeyboardEvent) => {
                if (event.key === 'ArrowUp') {
                    moveSlide(-1);
                }
                if (event.key === 'ArrowDown') {
                    moveSlide(1);
                }
            };

            window.addEventListener('keydown', handleKeyDown);

            return () => {
                window.removeEventListener('keydown', handleKeyDown);
            };
        }, [index]);

        return (
            <React.Fragment>
                <Wrapper>
                    {getPresentableSlides().map((slide, presentableIndex) => (
                        <Slide
                            key={slide?.key}
                            content={slide?.content}
                            moveSlide={moveSlide}
                            offsetRadius={clampedOffsetRadius}
                            index={presentableIndex}
                            animationConfig={animationConfig}
                        />
                    ))}
                </Wrapper>

                {showNavigation && (
                    <div className="flex justify-center mt-4">
                        <button onClick={() => moveSlide(-1)}>↑</button>
                        <button onClick={() => moveSlide(1)}>↓</button>
                    </div>
                )}
            </React.Fragment>
        );
    };

export default VerticalCarousel;