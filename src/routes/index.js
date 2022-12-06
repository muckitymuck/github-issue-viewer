import React from 'react';
import { Switch, Route } from 'react-router-dom';

import IssuePage from './IssuePage';
import NotFoundPage from './NotFoundPage';

const Routes = () => (
    <Switch>
        <Route path="/:owner/issues/:number" exact component={IssuePage} />
        <Route component={NotFoundPage} />
    </Switch>
);

Routes.propTypes = {};

export default Routes;