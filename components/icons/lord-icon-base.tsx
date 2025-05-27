// components/LordIconBase.tsx
'use client'

import { forwardRef, useRef, useEffect, useState } from 'react';
import { Player } from '@lordicon/react';

export type LordIconHandle = {
    playFromBeginning: () => void;
};

type LordIconProps = {
    iconName: string; // e.g. "heart", "bolt"
    size?: number;
};

const LordIconBase = forwardRef<LordIconHandle, LordIconProps>(({ iconName, size = 32 }, ref) => {
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
            />
        </div>
    );
});

LordIconBase.displayName = 'LordIconBase';

export default LordIconBase;