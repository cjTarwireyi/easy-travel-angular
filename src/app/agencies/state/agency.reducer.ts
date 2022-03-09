import { createFeatureSelector, createReducer ,createSelector,on} from "@ngrx/store";
import * as AppState from '../../state/app.state';//* imports all exported members of app state
import * as AgencyAction from "./agency.action";// * imports all exported members of agency.action
import { IAgency } from "../agency-list.interface";

export interface IState extends AppState.IState{//extending the global state here to include agency feature state, since this feature state is lazy loaded
    agencies: IAgencyState
}
//State interface to enforce strong typing
export interface IAgencyState{
    currentAgencyId: number|null,
    showCopyRightsInfo: boolean;
    agencies: IAgency[];
}

//Initial state defined as constant to make sure it is never changed
const initialState: IAgencyState = {
    currentAgencyId:  null,
    showCopyRightsInfo: true,
    agencies:[]
}

//*************************************************************************************************
//Selectors are used top read data from the store
//*************************************************************************************************

//creating a feature selector returns a feature slice of state, we are not exporting it so that it is used only within this file
const getAgencyFeatureSelector = createFeatureSelector<IAgencyState>("agencies");

//selector for currentAgencyID
export const getCurrentAgencyId = createSelector (
    getAgencyFeatureSelector,
    state => state.currentAgencyId
    );

//selector for current agency
    export const getCurrentAgency = createSelector (
        getAgencyFeatureSelector,
        getCurrentAgencyId,
        (state , currentAgencyId) => {
            if(currentAgencyId === 0){
                return {
                    id:0,
                    agencyNaame:''
                }
            }else{
             return currentAgencyId ? state.agencies.find(a => a.id === currentAgencyId) : null;
            }
        }
        );
//selector for showCopyRightsInfo toggle
export const getShowCopyRightsInfo = createSelector(
    getAgencyFeatureSelector,
    state => state.showCopyRightsInfo
);

//selector for get all agencies
export const getAgencies = createSelector(
    getAgencyFeatureSelector,
    state => state.agencies
  );


//*************************************************************************************************
//Reducers are used to process actions, They listen to actions dispatched by the user usin on function
//*************************************************************************************************
  
//Reducer for agency state
export const agencyReducer = createReducer<IAgencyState>(
    initialState,
    on(AgencyAction.ShowCopyRightsAction, (state):IAgencyState => {//watches for the ShowCopyRightsAction
        return{
            ...state,
            showCopyRightsInfo: !state.showCopyRightsInfo
        }       
    }),
    on(AgencyAction.LoadAgencySuccess, (state, action): IAgencyState => {// watches for LoadAgencySuccess action
        return{
            ...state,
            agencies: action.agencies
        }
    }),
    on(AgencyAction.updateAgencySuccess, (state, action): IAgencyState => {
        const updatedAgencies = state.agencies.map(
          item => action.agency.id === item.id ? action.agency : item);
        return {
          ...state,
          agencies: updatedAgencies,
          currentAgencyId: action.agency.id
        };
      }),
)