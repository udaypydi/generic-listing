import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import RoutesManager from 'src/routes';

const Index = () => (
    <RecoilRoot>
        <RoutesManager />
    </RecoilRoot>
)
ReactDOM.render(<Index />, document.getElementById('root'));
