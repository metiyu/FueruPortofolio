import { Heart } from "lucide-react";
import { memo, useEffect, useRef, useState } from "react";
import {
    StackedCarousel,
    ResponsiveContainer,
} from "react-stacked-center-carousel";

export const data = [
    {
        cover: "/logo/typescript-original.svg",
        title: "Interstaller",
    },
    {
        cover: "/logo/typescript-original.svg",
        title: "Interstaller",
    },
    {
        cover: "/logo/typescript-original.svg",
        title: "Interstaller",
    },
    {
        cover: "/logo/typescript-original.svg",
        title: "Interstaller",
    },
    {
        cover: "/logo/typescript-original.svg",
        title: "Interstaller",
    },
    {
        cover: "/logo/typescript-original.svg",
        title: "Interstaller",
    },
];

export default function ResponsiveCarousel() {
    const ref = useRef<StackedCarousel>(undefined);
    const [index, setIndex] = useState(0);

    function mod(a: number, b: number) {
        return ((a % b) + b) % b;
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            moveSlide();
        }, 2700);

        return () => clearInterval(intervalId);
    }, [index]);

    const moveSlide = () => {
        setIndex(mod(index + 1, data.length));
        ref.current?.goNext();
    };

    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            padding: "20px 0"
        }}>
            {/* Container to limit overall width */}
            <div style={{
                width: "100%",
                maxWidth: "20vw",  // 10–20% of large screen ≈ 200–400px
                margin: "0 auto"
            }}>
                <ResponsiveContainer
                    carouselRef={ref}
                    render={(parentWidth, carouselRef) => {
                        let currentVisibleSlide = 3; // max visible slides
                        if (parentWidth <= 500) currentVisibleSlide = 1;

                        const slideWidth = parentWidth < 480
                            ? parentWidth - 40
                            : parentWidth * 0.9;

                        return (
                            <StackedCarousel
                                ref={carouselRef}
                                slideComponent={Card}
                                slideWidth={slideWidth}
                                carouselWidth={parentWidth}
                                data={data}
                                currentVisibleSlide={currentVisibleSlide}
                                maxVisibleSlide={3}
                                useGrabCursor
                                transitionTime={2500}
                            />
                        );
                    }}
                />
            </div>
        </div>
    );
}

export const Card = memo(function (props: any) {
    const { data, dataIndex } = props;
    const { cover } = data[dataIndex];

    return (
        <div
            style={{
                width: "100%",
                height: "auto",
                aspectRatio: "3 / 3",
                userSelect: "none",
                overflow: "hidden",
                borderRadius: 6,
            }}
            className="my-slide-component"
        >
            <img
                style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: 6,
                }}
                draggable={false}
                src={cover}
                alt="card"
            />
        </div>
    );
});