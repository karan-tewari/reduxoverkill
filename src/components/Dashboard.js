import React from 'react';
import {Route} from 'react-router-dom';
import FourOhFour from './FourOhFour';

const Dashboard = () => {
    return(
        <div>
            <h1>This is Dashboard component</h1>
            <Route path="/404" component={FourOhFour} />
        </div>
    )
}

export default Dashboard;