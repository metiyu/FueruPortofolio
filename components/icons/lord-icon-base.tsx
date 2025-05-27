// components/LordIconBase.tsx
'use client'

import { forwardRef, useRef, useEffect, useState } from 'react';
import { Player } from '@lordicon/react';
import { cp } from 'fs';

export type LordIconHandle = {
    playFromBeginning: () => void;
};

type LordIconProps = {
    iconName: string; // e.g. "heart", "bolt"
    size?: number;
    color: string;
};

const LordIconBase = forwardRef<LordIconHandle, LordIconProps>(({ iconName, size = 48, color }, ref) => {
    const playerRef = useRef<any>(null);
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetch(`/icons/${iconName}.json`)
            .then(res => res.json())
            .then(json => setData(json));
    }, [iconName]);

    useEffect(() => {
        if (ref && typeof ref === 'object' && 'current' in ref) {
            // @ts-ignore
            ref.current = {
                playFromBeginning: () => {
                    if (playerRef.current) {
                        playerRef.current.playFromBeginning();
                    }
                },
            };
        }
    }, [ref]);

    return (
        <div>
            <Player
                ref={playerRef}
                icon={data}
                size={size}
                colors={color}
            />
        </div>
    );
});

LordIconBase.displayName = 'LordIconBase';

export default LordIconBase;