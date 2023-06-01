import ReactDOM from 'react-dom';

import type { IPortalProps } from './Portal.typings';

import { portalRoot } from './Portal.constants';

const Portal = function (props: IPortalProps) {
	return ReactDOM.createPortal(props.children, portalRoot as HTMLElement);
};

export { Portal };
