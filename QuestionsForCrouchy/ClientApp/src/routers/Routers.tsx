import React, { useState, useEffect} from 'react'
import { Router, Switch } from 'react-router-dom';
import { IAuthenticatedProps } from '../App';
import { LandingPage } from '../components/LandingPage';
import { QuestionsBoard } from '../components/QuestionsBoard';
import history from '../history/history';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


const Routers = (props: IAuthenticatedProps) => {
    const [authenticated, setAuthentication] = useState<boolean>(props.authenticated);
    useEffect(() => {
        setAuthentication(props.authenticated)
    }, [props.authenticated])


    return (
        <Router history={history}>
            <Switch>
                <PrivateRoute authenticated={authenticated} exact path={'/QuestionsBoard'} component={ QuestionsBoard }/>
                <PublicRoute exact component={LandingPage}/>
            </Switch>
        </Router>
    )
};

export { Routers };
