import React from 'react';

import type { ITooltipStyles } from '../../../Tooltip.typings';

interface ITooltipOverlayProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	> {
	style: ITooltipStyles;
    isActive: boolean;
}

export type { ITooltipOverlayProps };
