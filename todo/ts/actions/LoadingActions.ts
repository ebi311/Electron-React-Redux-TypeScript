import Redux from 'redux';
import {v4 as UUID} from 'uuid';

export const TOGGLE_LOADING = UUID();

// tslint:disable-next-line:no-empty-interface
export interface IToggleLoadingAction extends Redux.Action {
}

export const createToggleLoadingAction: Redux.ActionCreator<IToggleLoadingAction> = () => {
    return {
        type: TOGGLE_LOADING,
    };
};
