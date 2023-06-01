import React from 'react';

type ITooltipProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>;

interface ITooltipStyles {
	top: number;
	left: number;
}

export type { ITooltipProps, ITooltipStyles };
