// @flow
/* eslint-env browser */
import { render } from 'preact';
import App from 'components/app';

const container: ?Element = document.body;

const renderApp = () => {
    if (container) {
        render(
            <App />,
            container.parentElement,
            container
        );
    }
};

if (module.hot) {
    // chillout flow
    // $FlowFixMe
    module.hot.accept();

    // $FlowFixMe
    require('preact/devtools'); // eslint-disable-line
}

renderApp();
