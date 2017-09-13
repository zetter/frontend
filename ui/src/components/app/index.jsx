// @flow
/* eslint-env browser */
import { Component } from 'preact';
import { StyletronProvider } from 'styletron-preact';
import StyletronClient from 'styletron-client';

import Body from 'components/body';

// this should be managed by a route somehow
import Application from 'views/404';

class App extends Component {
    componentDidMount() {
        if (navigator && navigator.serviceWorker) {
            console.log('*** init service worker ***');
            // navigator.serviceWorker.register('/service-worker.js');
        }
    }

    render() {
        const props = window.guardian;

        return <StyletronProvider
            styletron={
                new StyletronClient(
                    document.getElementsByClassName('_styletron_hydrate_')
                )
            }>
            <Body {...props}>
                <Application {...props} />
            </Body>
        </StyletronProvider>;
    }
};

export default App;