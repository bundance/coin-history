import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import { Grid, Row } from 'react-bootstrap';
import NavHeader from '../page-components/nav-header/nav-header.component';
import ControlPanel from '../pages/control-panel/control-panel.container';
import Settings from '../pages/settings/settings.component';
import About from '../pages/about/about.component';
import { WaitingSpinner } from '../widgets/waiting-spinner/waiting-spinner.component';


const App = ({
     showWaitingSpinner
 }) => (
    <Grid>
        <Row>
            <Router>
                <div>
                    <NavHeader />
                    <WaitingSpinner show={showWaitingSpinner} waitingText="Loading..."/>
                    <Route exact path="/" component={ControlPanel}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/about" component={About}/>
                </div>
            </Router>
        </Row>
    </Grid>
);

export default App;

