import { createFeatureSelector, createReducer ,createSelector,on} from "@ngrx/store";
import * as AppState from '../../state/app.state';
import * as AgencyAction from "./agency.action";
import { IAgency } from "../agency-list.interface";

export interface IState extends AppState.IState{
    agencies: IAgencyState
}

export interface IAgencyState{
    showCopyRightsInfo: boolean;
    agencies: IAgency[];
}

const initialState: IAgencyState = {
    showCopyRightsInfo: true,
    agencies:[]
}

const getAgencyFeatureSelector = createFeatureSelector<IAgencyState>("agencies");



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
    })
)