import { Reducer } from 'redux';
import * as Action from '../actions/TaskActions';
import { initTaskList, ITaskList } from '../states/ITask';
import { createActionToFunctionMapper } from './ActionToFunctionMapper';

const actionToFunctions = createActionToFunctionMapper<ITaskList>();

// ローディングを表示する
actionToFunctions.addActionFunc<Action.ILoadStartAction>(
    Action.LOAD_TASKS,
    (state, action) => {
        state.loading = true;
        action.successful();
    },
);
// タスクの表示
actionToFunctions.addActionFunc<Action.IShowTaskAction>(
    Action.SHOW_TASKS,
    (state, action) => {
        state.loading = false;
        state.tasks = action.tasks;
    },
);

actionToFunctions.addActionFunc<Action.IAddTaskAction>(
    Action.ADD_TASK,
    (state, action) => {
        state.loading = true;

    },
);

export const taskReducer: Reducer<ITaskList> = (state = initTaskList, action) => {
    return actionToFunctions.execute(state, action);
};
