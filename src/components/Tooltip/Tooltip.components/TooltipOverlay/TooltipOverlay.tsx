import React from 'react';

import { Portal } from '../../../Portal/Portal';

import type { ITooltipOverlayProps } from './TooltipOverlay.typings';

import styles from './TooltipOverlay.module.scss';

const TooltipOverlay = React.forwardRef<
	null | HTMLSpanElement,
	ITooltipOverlayProps
>(function ({ isVisible, ...restProps }, ref) {
	if (!isVisible) {
		return null;
	}

	return (
		<Portal>
			<span ref={ref} className={styles.tooltip} {...restProps}>
				Tooltip
			</span>
		</Portal>
	);
});

export { TooltipOverlay };
