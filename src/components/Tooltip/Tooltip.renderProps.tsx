import React from 'react';

import type { ITooltipStyles } from './Tooltip.typings';
import { TOP_SPACE } from './Tooltip.constants';
import { TooltipOverlay } from './Tooltip.components/TooltipOverlay/TooltipOverlay';

type ITooltipRenderChildProps = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

interface ITooltipRenderProps {
	children: (props: ITooltipRenderChildProps) => React.ReactElement;
}

const TooltipRenderProps = function (props: ITooltipRenderProps) {
	const [isVisible, setVisible] = React.useState<boolean>(false);
	const [stylesTooltip, setStylesTooltip] =
		React.useState<ITooltipStyles>(undefined);
	const tooltipWrapperRef = React.useRef<null | HTMLButtonElement>(null);
	const tooltipRef = React.useRef<null | HTMLDivElement>(null);

	React.useLayoutEffect(() => {
		const tooltipWrapperElement = tooltipWrapperRef.current;
		const tooltipElement = tooltipRef.current;

		if (!tooltipWrapperElement || !tooltipElement) {
			return;
		}

		const tooltipRect = tooltipElement.getBoundingClientRect();
		const tooltipWrapperRect =
			tooltipWrapperElement.getBoundingClientRect();

		setStylesTooltip((prev) => ({
			...prev,
			top: tooltipWrapperRect.top - tooltipRect.height - TOP_SPACE,
			left:
				tooltipWrapperRect.left +
				tooltipWrapperRect.width / 2 -
				tooltipRect.width / 2,
		}));
	}, [isVisible]);

	if (!props.children) {
		return null;
	}

	const handleOnMouseEnter = function () {
		setVisible(true);
	};
	const handleOnMouseLeave = function () {
		setVisible(false);
	};

	return (
		<>
			{props.children({
				onMouseEnter: handleOnMouseEnter,
				onMouseLeave: handleOnMouseLeave,
				ref: tooltipWrapperRef,
			})}
			<TooltipOverlay
				isVisible={isVisible}
				style={stylesTooltip}
				ref={tooltipRef}
			/>
		</>
	);
};

export { TooltipRenderProps };
