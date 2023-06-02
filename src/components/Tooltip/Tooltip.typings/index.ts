import React from 'react';

type ITooltipProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>;

interface ITooltipReactCloneProps extends ITooltipProps {
	children: React.ReactElement;
}

interface ITooltipRenderProps {
	children: (
		props: React.DetailedHTMLProps<
			React.ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		>
	) => React.ReactElement;
}

interface ITooltipStyles {
	top: number;
	left: number;
}

type ITooltipStylesState = ITooltipStyles | undefined;

export type {
	ITooltipProps,
	ITooltipReactCloneProps,
	ITooltipRenderProps,
	ITooltipStylesState,
};
