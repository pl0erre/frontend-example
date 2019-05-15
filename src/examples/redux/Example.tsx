import React from 'react';
import MatchList from './components/MatchList';
import {Provider} from 'react-redux';
import store from './store';

interface Props {}

const App: React.FC<Props> = () => (
    <Provider store={store}>
        <MatchList />
    </Provider>
);

export default App;
