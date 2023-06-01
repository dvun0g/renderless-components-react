import React from 'react';

import type { ITooltipProps, ITooltipStyles } from './Tooltip.typings';
import { TOP_SPACE, INITIAL_TOOLTIP_STYLES } from './Tooltip.constants';
import { TooltipOverlay } from './Tooltip.components/TooltipOverlay/TooltipOverlay';

const Tooltip = function (props: ITooltipProps) {
	const [isActive, setActive] = React.useState<boolean>(false);
	const [stylesTooltip, setStylesTooltip] = React.useState<ITooltipStyles>(
		INITIAL_TOOLTIP_STYLES
	);
	const tooltipWrapperRef = React.useRef<null | HTMLDivElement>(null);
	const tooltipRef = React.useRef<null | HTMLSpanElement>(null);

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
	}, [isActive]);

	if (!props.children) {
		return null;
	}

	const handleOnMouseEnter = function () {
		setActive(true);
	};
	const handleOnMouseLeave = function () {
		setActive(false);
	};

	return (
		<div
			ref={tooltipWrapperRef}
			className={props.className}
			onMouseEnter={handleOnMouseEnter}
			onMouseLeave={handleOnMouseLeave}
		>
			<TooltipOverlay
				isActive={isActive}
				style={stylesTooltip}
				ref={tooltipRef}
			/>
			{props.children}
		</div>
	);
};

export { Tooltip };
