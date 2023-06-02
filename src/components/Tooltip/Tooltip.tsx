import React from 'react';

import type { ITooltipProps, ITooltipStylesState } from './Tooltip.typings';
import { TOP_SPACE } from './Tooltip.constants';
import { TooltipOverlay } from './Tooltip.components/TooltipOverlay/TooltipOverlay';

const Tooltip = function (props: ITooltipProps) {
	const [isVisible, setVisible] = React.useState<boolean>(false);
	const [stylesTooltip, setStylesTooltip] =
		React.useState<ITooltipStylesState>(undefined);
	const tooltipWrapperRef = React.useRef<null | HTMLDivElement>(null);
	const tooltipRef = React.useRef<null | HTMLSpanElement>(null);

	React.useLayoutEffect(() => {
		const tooltipWrapperElement = tooltipWrapperRef.current;
		const tooltipElement = tooltipRef.current;

		const areNotExistsElements = !tooltipWrapperElement || !tooltipElement;
		if (areNotExistsElements) {
			return;
		}

		const tooltipRect = tooltipElement.getBoundingClientRect();
		const tooltipWrapperRect =
			tooltipWrapperElement.getBoundingClientRect();

		const newStylesTooltip = {
			...stylesTooltip,
			top: tooltipWrapperRect.top - tooltipRect.height - TOP_SPACE,
			left:
				tooltipWrapperRect.left +
				tooltipWrapperRect.width / 2 -
				tooltipRect.width / 2,
		};
		setStylesTooltip(newStylesTooltip);
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
		<div
			ref={tooltipWrapperRef}
			className={props.className}
			onMouseEnter={handleOnMouseEnter}
			onMouseLeave={handleOnMouseLeave}
		>
			<TooltipOverlay
				isVisible={isVisible}
				style={stylesTooltip}
				ref={tooltipRef}
			/>
			{props.children}
		</div>
	);
};

export { Tooltip };
