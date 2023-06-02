import React from 'react';

type ITooltipProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>;

interface ITooltipStylesObject {
	top: number;
	left: number;
}

type ITooltipStyles = ITooltipStylesObject | undefined;

export type { ITooltipProps, ITooltipStyles };
