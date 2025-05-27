// components/icons/HeartIcon.tsx
'use client'

import { forwardRef } from 'react';
import LordIconBase, { LordIconHandle } from './lord-icon-base';

const HeartIcon = forwardRef<LordIconHandle>((props, ref) => {
    return <LordIconBase ref={ref} iconName="heart" />;
});

HeartIcon.displayName = 'HeartIcon';

export default HeartIcon;