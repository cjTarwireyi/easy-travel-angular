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