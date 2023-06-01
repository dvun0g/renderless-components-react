import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ITooltipProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {}

interface ITooltipPosition {
	top: number;
	left: number;
}

export type { ITooltipProps, ITooltipPosition };
