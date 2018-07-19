import Clone from 'clone';
import { Action } from 'redux';
import AsyncAction from '../actions/AsyncAction';

class ActionToFunctionMapper<S> {
    private actionFuncs: { [type: string]: (state: S, action: any) => void } = {};
    public addActionFunc = <A extends Action>(type: string, fnc: (state: S, action: A) => void) => {
        this.actionFuncs[type] = fnc;
    }
    public execute = <A extends Action>(state: S, action: A) => {
        let newState = state;
        const actionFnc = this.actionFuncs[action.type];
        if (!!actionFnc) {
            newState = Clone(state);
            actionFnc(newState, action);
        }
        return newState;
    }
}

export const createActionToFunctionMapper = <S>() => {
    return new ActionToFunctionMapper<S>();
};
