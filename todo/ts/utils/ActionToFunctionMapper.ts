import Clone from 'clone';
import { Action } from 'redux';
import AsyncAction from './AsyncAction';

class ActionToFunctionMapper<S> {
    private actionFuncs: { [type: string]: (state: S, action: any) => any } = {};
    public addActionFunc =
        <A extends Action | AsyncAction<L>, L = void>(type: string, fnc: (state: S, action: A) => L) => {
            this.actionFuncs[type] = fnc;
        }
    public execute = <A extends Action | AsyncAction>(state: S, action: A) => {
        let newState = state;
        const actionFnc = this.actionFuncs[action.type];
        if (!!actionFnc) {
            newState = Clone(state);
            const args = actionFnc(newState, action);
            if (!!(action as AsyncAction).successful) {
                (action as AsyncAction).successful(args);
            }
        }
        return newState;
    }
}

export const createActionToFunctionMapper = <S>() => {
    return new ActionToFunctionMapper<S>();
};
