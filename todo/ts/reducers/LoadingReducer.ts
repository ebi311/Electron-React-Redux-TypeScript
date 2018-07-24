import Redux from 'redux';

import { IToggleLoadingAction, TOGGLE_LOADING } from '../actions/LoadingActions';
import { ILoading, initLoading } from '../states/ILoading';
import { createActionToFunctionMapper } from '../utils/ActionToFunctionMapper';

const actionToFunc = createActionToFunctionMapper<ILoading>();

actionToFunc.addActionFunc<IToggleLoadingAction>(
    TOGGLE_LOADING,
    (state, action) => {
        state.shown = !state.shown;
    },
);

export const loadingReducer: Redux.Reducer<ILoading> = (state = initLoading, action) => {
    return actionToFunc.execute(state, action);
};
