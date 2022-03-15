import { IUserState } from "../user/state/user.reducer";

//State for the entire store of the application which contains all other feature states
export interface IState{
  //agencies: IAgencyState removed as it is lazy loaded
  //user :IUserState
}