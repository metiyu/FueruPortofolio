// components/icons/BoltIcon.tsx
'use client'

import { forwardRef } from 'react';
import LordIconBase, { LordIconHandle } from './lord-icon-base';

const BoltIcon = forwardRef<LordIconHandle>((props, ref) => {
    return <LordIconBase ref={ref} iconName="bolt" />;
});

BoltIcon.displayName = 'BoltIcon';

export default BoltIcon;