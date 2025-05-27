// components/icons/IncreaseIcon.tsx
'use client'

import { forwardRef } from 'react';
import LordIconBase, { LordIconHandle } from './lord-icon-base';

const IncreaseIcon = forwardRef<LordIconHandle>((props, ref) => {
  return <LordIconBase ref={ref} iconName="increase" />;
});

IncreaseIcon.displayName = 'IncreaseIcon';

export default IncreaseIcon;