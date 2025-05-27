// types/global.d.ts

import { VantaEffect } from './vanta-types';

declare global {
    interface Window {
        VANTA?: {
            DOTS: (options: VantaOptions) => VantaEffect;
            GLOBE: (options: VantaOptions) => VantaEffect;
            // Add more effects as needed
        };
    }
}

export { };