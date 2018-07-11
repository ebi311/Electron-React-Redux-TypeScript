import Clone from 'clone';
import Redux from 'redux';

import { CHANGE_USER_NAME, IChangeUserNameAction } from '../actions/UserEvents';
import IUser, { initUser } from '../states/IUser';

export const UserReducer: Redux.Reducer<IUser> = (childState = initUser, action) => { // --(a)
    let newChildState: IUser = childState; // --(b)
    switch (action.type) {
        case CHANGE_USER_NAME: // --(c)
            {
                newChildState = Clone(childState); // --(d)
                newChildState.name = (action as IChangeUserNameAction).name; // --(e)
            }
            break;
    }
    return newChildState;
};
