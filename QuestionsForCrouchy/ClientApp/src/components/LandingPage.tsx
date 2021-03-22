import React, { useContext, useEffect, useReducer, useState } from 'react'
import { Redirect } from 'react-router';
import { User } from '../clientModels/User';
import { UserContext } from '../contexts/UserContext';
import { isEmptyOrSpace, validateUser } from '../functions/validation_Functions';
import history from '../history/history';
import { userReducerTypes } from '../reducers/UserReducer';

const LandingPage = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>(' ');
    const {user, userDispatch} = useContext(UserContext)

    const onSignIn = () => {
      const userError:string = validateUser(name,email);

      if (isEmptyOrSpace(userError)) {
        userDispatch({user:new User(name,email), type: userReducerTypes.set})
      } else {
        setError(userError);
      }
    }
    if (user.user == undefined) {
      return(
        <div className='h h-centre'>
          <div className='width-40'>
          <div className='h h-centre'>
            <h4 className='top-margin-s'>Welcome to Questions For Crouchy!</h4>
          </div>
            <div className='h h-centre'>
            <div className='v width-40'>
            <div className='top-margin-xs'>{error}</div>
            <input className='top-margin-xs'
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input className='top-margin-xs'
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className='top-margin-xs' onClick={onSignIn}>Sign in</button>
          </div>
          
          </div>
          </div>
        </div>
    )
    } else {
      return <Redirect to="/QuestionsBoard" />
    }
    
}

export { LandingPage };

