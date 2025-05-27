// components/icons/HeartIcon.tsx
'use client'

import { forwardRef } from 'react';
import LordIconBase, { LordIconHandle } from './lord-icon-base';

type HeartIconProps = {
    color: string;
};

const HeartIcon = forwardRef<LordIconHandle, HeartIconProps>(({ color }, ref) => {
    return <LordIconBase ref={ref} iconName="heart" color={color}/>;
});

HeartIcon.displayName = 'HeartIcon';

export default HeartIcon;