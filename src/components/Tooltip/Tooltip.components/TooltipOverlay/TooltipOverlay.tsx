import React from 'react';

import { Portal } from '../../../Portal/Portal';

import type {
	ITooltipOverlayProps,
	ITooltipRef,
} from './TooltipOverlay.typings';

import styles from './TooltipOverlay.module.scss';

const TooltipOverlay = React.forwardRef<ITooltipRef, ITooltipOverlayProps>(
	function ({ isVisible, ...props }, ref) {
		if (!isVisible) {
			return null;
		}

		return (
			<Portal>
				<span ref={ref} className={styles.tooltip} {...props}>
					Tooltip
				</span>
			</Portal>
		);
	}
);

export { TooltipOverlay };
