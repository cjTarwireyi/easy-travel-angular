import { createAction, props } from "@ngrx/store";

export const loggedInUser = createAction(
    '[User] Logged In user',
    props<{username: string}>());