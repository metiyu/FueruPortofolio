// components/icons/BoltIcon.tsx
'use client'

import { forwardRef } from 'react';
import LordIconBase, { LordIconHandle } from './lord-icon-base';

type BoltIconProps = {
    color: string;
};

const BoltIcon = forwardRef<LordIconHandle, BoltIconProps>(({ color }, ref) => {
    return <LordIconBase ref={ref} iconName="bolt" color={color} />;
});

BoltIcon.displayName = 'BoltIcon';

export default BoltIcon;