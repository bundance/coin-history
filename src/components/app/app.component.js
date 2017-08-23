import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import NavHeader from '../page-components/nav-header/nav-header.component';
import ControlPanel from '../pages/control-panel/control-panel.container';
import Settings from '../pages/settings/settings.component';
import About from '../pages/about/about.component';

const App = () => (
    <Router>
        <div>
            <NavHeader />

            <Route exact path="/" component={ControlPanel}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/about" component={About}/>
        </div>
    </Router>
);

export default App;

