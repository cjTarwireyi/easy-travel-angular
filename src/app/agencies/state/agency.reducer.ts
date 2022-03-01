import { createAction, createFeatureSelector, createReducer ,createSelector,on} from "@ngrx/store";
import * as AppState from '../../state/app.state';

export interface IState extends AppState.IState{
    agencies: IAgencyState
}

export interface IAgencyState{
    showCopyRightsInfo: boolean
}

const initialState: IAgencyState = {
    showCopyRightsInfo: true
}

const getAgencyFeatureSelector = createFeatureSelector<IAgencyState>("agencies");

export const getShowCopyRightsInfo = createSelector(
    getAgencyFeatureSelector,
    state => state.showCopyRightsInfo
);

export const agencyReducer = createReducer<IAgencyState>(
    initialState,
    on(createAction('[Agency] Toggle App Author'), (state):IAgencyState => {
        return{
            ...state,
            showCopyRightsInfo: !state.showCopyRightsInfo
        }       
    })
)