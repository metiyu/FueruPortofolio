// types/vanta-types.ts

export type VantaEffect = {
    destroy: () => void;
    update?: () => void;
};

export type VantaOptions = {
    el: HTMLElement | string;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number;
    color2?: number;
    backgroundColor?: number;
    spacing?: number;
    showLines?: boolean;
    size?: number;
};