// components/carousel/Slide.tsx
import React from 'react';
import { animated, useSpring } from 'react-spring';
import { useDrag } from '@use-gesture/react';

import styled from '@emotion/styled';

const SlideContainer = styled(animated.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
`;

const SlideCard = styled.div`
  position: relative;
  width: 90%;
  max-width: 300px;
  height: auto;
  background: white;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
`;

type SlideProps = {
    content: React.ReactNode;
    offsetRadius: number;
    index: number;
    animationConfig: any;
    moveSlide: (offset: number) => void;
};

const Slide = ({ content, offsetRadius, index, animationConfig, moveSlide }: SlideProps) => {
    const offsetFromMiddle = index - offsetRadius;
    const distanceFactor = 1 - Math.abs(offsetFromMiddle) / (offsetRadius + 1);

    let translateY = 0;

    if (offsetFromMiddle > 0) {
        translateY += 50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
    } else if (offsetFromMiddle < 0) {
        translateY -= 50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
    }

    const springStyle = useSpring({
        transform: `translateY(${translateY}px) scale(${distanceFactor + 0.7})`,
        opacity: distanceFactor * 0.6 + 0.4,
        config: animationConfig,
        zIndex: Math.abs(Math.abs(offsetFromMiddle) - 10)
    });

    const bind = useDrag(({ down, delta }) => {
        const [dx, dy] = delta;

        if (down && dy > 50) {
            moveSlide(1); // Swipe down
        } else if (down && dy < -50) {
            moveSlide(-1); // Swipe up
        }
    });

    return (
        <SlideContainer {...bind()} style={springStyle}>
            <SlideCard onClick={() => moveSlide(offsetFromMiddle)}>
                {content}
            </SlideCard>
        </SlideContainer>
    );
};

export default Slide;