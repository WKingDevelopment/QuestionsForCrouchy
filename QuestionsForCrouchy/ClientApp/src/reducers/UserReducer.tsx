import { User } from "../clientModels/User"
import { InitialUserType } from "../contexts/UserContext"

const userReducer = (state:InitialUserType, action:IUserAction): InitialUserType => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        case 'STATE':
            console.log(state)
        }
        return state
}
type IUserAction = {
    type: string,
    user: User | undefined
}

const userReducerTypes = {
    set:"SET_USER"
}

export { userReducer, userReducerTypes } 