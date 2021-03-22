import React, { useState } from 'react'
import { Route, RouteProps } from 'react-router-dom';


function PublicRoute({ component: Component, ...rest }: RouteProps) {

    if (!Component) return null;
    return (
        <Route
            {...rest}
            render={(props) => {
                return (
                    <div>
                        <Component {...props}/>
                    </div>
                )
            }
            }
        />
    );
}


export { PublicRoute }