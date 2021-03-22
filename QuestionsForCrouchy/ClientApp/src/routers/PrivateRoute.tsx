import React, { useEffect } from 'react'
import { useState } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { IAuthenticatedProps } from '../App';


function PrivateRoute({ component: Component, ...rest }: ISignedInRouteProps) {
    const [authenticated, setAuthenticated] = useState<boolean>(rest.authenticated)
    useEffect(() => {
        setAuthenticated(rest.authenticated)
    },[rest.authenticated])

    if (!Component) return null;
    if (authenticated) {
        return (
            <Route
                {...rest}
                render={(props) => {
                    return (
                        <div>
                            <Component {...props} />
                        </div>
                    )
                }
                }
            />
        );
    } else {
        return <Redirect to="/" />
    }
}

export interface ISignedInRouteProps extends IAuthenticatedProps,RouteProps {
}

export { PrivateRoute }