import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRedirect, useRouterHistory} from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import LoginView from "./views/login";
import NotFoundView from "./views/404";
import CardsView from "./views/cards";

import "./style.less";

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        (
            <Router history={useRouterHistory(createHashHistory)({queryKey: false})}>
                <Route path="/" component={({children}) => children}>
                    <IndexRedirect to="/login" />
                    <Route path="/login" component={LoginView}/>
                    <Route path="/cards" component={CardsView}/>
                    <Route path="*" component={NotFoundView}/>
                </Route>
            </Router>
        ),
        document.getElementsByTagName("body")[0]
    );
});