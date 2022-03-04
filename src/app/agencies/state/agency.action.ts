import { IAgency } from './../agency-list.interface';
import { createAction, props } from "@ngrx/store";

export const AuthorToggleAction = createAction('[Agency] Toggle App Author');

export const LoadAgencies = createAction('[Agency] Load');

export const LoadAgencySuccess = createAction(
    '[Agency] Load Success',
    props<{agencies:IAgency[]}>()
    );

export const LoadagencyFailure = createAction(
    '[Agency] LoadFailure',
    props<{error:string}>()
    );

export const setCurrentAgency = createAction(
     '[Agency] Set Current Agency',
    props<{currentAgencyId: number}>()
)

export const updateAgency = createAction(
    '[Agency] Update Agency',
   props<{agency: IAgency}>()
)
export const updateAgencySuccess = createAction(
    '[Agency] Update Agency Success',
   props<{agency: IAgency}>()
)