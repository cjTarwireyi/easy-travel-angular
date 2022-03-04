import { createFeatureSelector, createReducer ,createSelector,on} from "@ngrx/store";
import * as AppState from '../../state/app.state';
import * as AgencyAction from "./agency.action";
import { IAgency } from "../agency-list.interface";
import { normalizePassiveListenerOptions } from "@angular/cdk/platform";

export interface IState extends AppState.IState{
    agencies: IAgencyState
}

export interface IAgencyState{
    currentAgencyId: number|null,
    showCopyRightsInfo: boolean;
    agencies: IAgency[];
}

const initialState: IAgencyState = {
    currentAgencyId:  null,
    showCopyRightsInfo: true,
    agencies:[]
}

const getAgencyFeatureSelector = createFeatureSelector<IAgencyState>("agencies");

export const getCurrentAgencyId = createSelector (
    getAgencyFeatureSelector,
    state => state.currentAgencyId
    );

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

export const getShowCopyRightsInfo = createSelector(
    getAgencyFeatureSelector,
    state => state.showCopyRightsInfo
);

export const getAgencies = createSelector(
    getAgencyFeatureSelector,
    state => state.agencies
  );

export const agencyReducer = createReducer<IAgencyState>(
    initialState,
    on(AgencyAction.AuthorToggleAction, (state):IAgencyState => {
        return{
            ...state,
            showCopyRightsInfo: !state.showCopyRightsInfo
        }       
    }),
    on(AgencyAction.LoadAgencySuccess, (state, action): IAgencyState => {
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