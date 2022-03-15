import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store"
import * as UserAction from "./user.action";
import * as AppState from '../../state/app.state';//* imports all exported members of app state


export interface IState extends AppState.IState{//extending the global state here to include agency feature state, since this feature state is lazy loaded
    user: IUserState
}
const getUserFeatureSelector = createFeatureSelector<IUserState>("user");
//State interface to enforce strong typing
export interface IUserState{
    loggedInUserName: string
}

//Initial state defined as constant to make sure it is never changed
const initialState: IUserState = {
    loggedInUserName:  "",
}

//Reducer for user state
export const userReducer = createReducer<IUserState>(
    initialState,
    on(UserAction.loggedInUser, (state,action):IUserState => {//watches for the ShowCopyRightsAction
        return{
            ...state,
            loggedInUserName: action.username
        }       
    }),   
   
)

//selector for currentAgencyID
export const getLoggedInUserSelector= createSelector (
    getUserFeatureSelector,
    state => state.loggedInUserName
    );