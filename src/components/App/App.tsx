import { Tooltip, TooltipReactClone, TooltipRenderProps } from '../Tooltip';

import styles from './App.module.scss';

const App = function () {
	return (
		<div className={styles.wrapper}>
			<Tooltip>
				<button>Default</button>
			</Tooltip>
			<TooltipReactClone>
				<button>React.cloneElement</button>
			</TooltipReactClone>
			<TooltipRenderProps>
				{(props) => <button {...props}>RenderProps</button>}
			</TooltipRenderProps>
		</div>
	);
};

export { App };
