'use client'

import VerticalCarousel from "./carousel/vertical-carousel";

const slides = [
    {
        key: 0,
        content: (
            <img
                style={{ width: "100%", height: "auto" }}
                src="https://f.hubspotusercontent00.net/hubfs/8852505/1.png"
                alt="card"
            />
        )
    },
    {
        key: 1,
        content: (
            <img
                style={{ width: "100%", height: "auto" }}
                src="https://f.hubspotusercontent00.net/hubfs/8852505/2.png"
                alt="card"
            />
        )
    },
    {
        key: 2,
        content: (
            <img
                style={{ width: "100%", height: "auto" }}
                src="https://f.hubspotusercontent00.net/hubfs/8852505/3.png"
                alt="card"
            />
        )
    },
    {
        key: 3,
        content: (
            <img
                style={{ width: "100%", height: "auto" }}
                src="https://f.hubspotusercontent00.net/hubfs/8852505/4.png"
                alt="card"
            />
        )
    },
    {
        key: 4,
        content: (
            <img
                style={{ width: "100%", height: "auto" }}
                src="https://f.hubspotusercontent00.net/hubfs/8852505/5.png"
                alt="card"
            />
        )
    },
    {
        key: 5,
        content: (
            <img
                style={{ width: "100%", height: "auto" }}
                src="https://f.hubspotusercontent00.net/hubfs/8852505/6.png"
                alt="card"
            />
        )
    },
    {
        key: 6,
        content: (
            <img
                style={{ width: "100%", height: "auto" }}
                src="https://f.hubspotusercontent00.net/hubfs/8852505/7.png"
                alt="card"
            />
        )
    },
    {
        key: 7,
        content: (
            <img
                style={{ width: "100%", height: "auto" }}
                src="https://f.hubspotusercontent00.net/hubfs/8852505/1.png"
                alt="card"
            />
        )
    },
    {
        key: 8,
        content: (
            <img
                style={{ width: "100%", height: "auto" }}
                src="https://f.hubspotusercontent00.net/hubfs/8852505/4.png"
                alt="card"
            />
        )
    }
];

export default function CarouselComponent() {
    return (
        <div className="flex flex-col min-h-screen bg-background-light">
            <VerticalCarousel
                slides={slides}
                offsetRadius={4}
                showNavigation={false}
            />
        </div>
    );
}