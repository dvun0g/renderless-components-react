import React from 'react';

import type { ITooltipStylesState } from '../../../Tooltip.typings';

interface ITooltipOverlayProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	> {
	style: ITooltipStylesState;
	isVisible: boolean;
}

type ITooltipRef = null | HTMLSpanElement;

export type { ITooltipOverlayProps, ITooltipRef };
