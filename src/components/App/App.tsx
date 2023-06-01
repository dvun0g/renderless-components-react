import { Tooltip } from '../Tooltip/Tooltip';

import styles from './App.module.scss';

const App = function () {
	return (
		<div className={styles.wrapper}>
			<Tooltip>
				<button>Button 1</button>
			</Tooltip>
		</div>
	);
};

export { App };
