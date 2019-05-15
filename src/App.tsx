import * as React from 'react';
import './App.css';
import {Router, Link, RouteComponentProps} from '@reach/router';

import ReduxExample from './examples/redux/Example';
import ContextExample from './examples/context/Example';

const MainRoute: React.FC<RouteComponentProps> = ({children}) => (
    <div>
        <header>
            <h1 style={{textTransform: 'uppercase'}}>agido frontend example</h1>
            <ul style={{listStyleType: 'none', display: 'flex', justifyContent: 'space-evenly'}}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="redux-example">Redux Example</Link>
                </li>
                <li>
                    <Link to="context-example">Context Example</Link>
                </li>
            </ul>
        </header>
        <hr />
        {children}
    </div>
);

const Home: React.FC<RouteComponentProps> = () => <div>Home</div>;

const ReduxExampleRoute: React.FC<RouteComponentProps> = () => <ReduxExample />;
const ContextExampleRoute: React.FC<RouteComponentProps> = () => <ContextExample />;

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <MainRoute path="/">
                    <Home path="/" />
                    <ReduxExampleRoute path="redux-example" />
                    <ContextExampleRoute path="context-example" />
                </MainRoute>
            </Router>
        </div>
    );
};

export default App;
