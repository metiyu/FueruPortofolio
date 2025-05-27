// components/icons/IncreaseIcon.tsx
'use client'

import { forwardRef } from 'react';
import LordIconBase, { LordIconHandle } from './lord-icon-base';

type IncreaseIconProps = {
    color: string;
};

const IncreaseIcon = forwardRef<LordIconHandle, IncreaseIconProps>(({ color }, ref) => {
  return <LordIconBase ref={ref} iconName="increase" color={color}/>;
});

IncreaseIcon.displayName = 'IncreaseIcon';

export default IncreaseIcon;