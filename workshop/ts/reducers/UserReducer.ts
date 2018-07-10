import clone from 'clone';
import Redux from 'redux';

import { CHANGE_USER_NAME, IChangeUserNameAction } from '../actions/UserEvents';
import IUser, { initUser } from '../states/IUser';

export const UserReducer: Redux.Reducer<IUser> = (state = initUser, action) => { // --(a)
    let newState: IUser = state; // --(b)
    switch (action.type) {
        case CHANGE_USER_NAME: // --(c)
            {
                newState = clone(state); // --(d)
                newState.name = (action as IChangeUserNameAction).name; // --(e)
                break;
            }
    }
    return newState; // --(f)
};
