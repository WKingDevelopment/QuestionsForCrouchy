import React, { useEffect, useReducer, useState } from 'react';
import { InitialUserType, UserContext } from './contexts/UserContext';
import { userReducer } from './reducers/UserReducer';
import { Routers } from './routers/Routers';
import './styling/styles.scss'

const App = () => {
  const initUser: InitialUserType = { user: undefined };
  const [user, userDispatch] = useReducer(userReducer, initUser)

  useEffect(() => {
  },[user])
    return (
      <UserContext.Provider value={{user,userDispatch}}>
        <Routers authenticated={user.user != undefined}/>
      </UserContext.Provider>
    );
}

export interface IAuthenticatedProps {
  authenticated:boolean
}

export { App }

