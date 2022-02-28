import { createAction, createReducer ,on} from "@ngrx/store";

export const agencyReducer = createReducer(
    {showCopyRightsInfo:true},
    on(createAction('[Agency] Toggle App Author'), state => {
        return{
            ...state,
            showCopyRightsInfo: !state.showCopyRightsInfo
        }       
    })
)