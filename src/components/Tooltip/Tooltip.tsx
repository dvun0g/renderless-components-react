import React from 'react';

import { Portal } from '../Portal/Portal';

import type { ITooltipProps, ITooltipPosition } from './Tooltip.typings';
import { TOP_SPACE, initialTooltipPosition } from './Tooltip.constants';

const Tooltip = function (props: ITooltipProps) {
	const [isActive, setActive] = React.useState<boolean>(false);
	const [positionTooltip, setPositionTooltip] =
		React.useState<ITooltipPosition>(initialTooltipPosition);
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

		setPositionTooltip({
			top: tooltipWrapperRect.top - tooltipRect.height - TOP_SPACE,
			left:
				tooltipWrapperRect.left +
				tooltipWrapperRect.width / 2 -
				tooltipRect.width / 2,
		});
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
			{isActive ? (
				<Portal>
					<span
						ref={tooltipRef}
						className="tooltip"
						style={{
							top: positionTooltip.top,
							left: positionTooltip.left,
						}}
					>
						Tooltip
					</span>
				</Portal>
			) : null}
			{props.children}
		</div>
	);
};

export { Tooltip };
