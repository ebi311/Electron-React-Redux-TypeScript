import { Reducer } from 'redux';
import { v4 as UUID } from 'uuid';
import * as Action from '../actions/TaskActions';
import { initTaskList, ITask, ITaskList } from '../states/ITask';
import { createActionToFunctionMapper } from '../utils/ActionToFunctionMapper';

const actionToFunctions = createActionToFunctionMapper<ITaskList>();

// ローディングを表示する
actionToFunctions.addActionFunc<Action.ILoadStartAction>(
    Action.LOAD_TASKS,
    // tslint:disable-next-line:no-empty
    (state, action) => {
    },
);
// タスクの表示
actionToFunctions.addActionFunc<Action.IShowTaskAction>(
    Action.SHOW_TASKS,
    // tslint:disable-next-line:no-empty
    (state, action) => {
        state.tasks = action.tasks;
    },
);
// タスクの追加
actionToFunctions.addActionFunc<Action.IAddTaskAction, ITask[]>(
    Action.ADD_TASK,
    (state, action) => {
        const newTask: ITask = {
            complete: false,
            deadline: action.deadline,
            id: UUID(),
            todo: action.taskName,
        };
        state.tasks.push(newTask);
        return state.tasks;
    },
);
// タスクの完了状態のトグル
actionToFunctions.addActionFunc<Action.IToggleCompleteAction, ITask[]>(
    Action.TOGGLE_COMPLETE_TASK,
    (state, action) => {
        const targetTask = state.tasks.find((it) => it.id === action.taskId);
        if (!!targetTask) {
            targetTask.complete = !targetTask.complete;
        }
        return state.tasks;
    },
);
// タスクの削除
actionToFunctions.addActionFunc<Action.IDeleteAction, ITask[]>(
    Action.DELETE_TASK,
    (state, action) => {
        state.tasks = state.tasks.filter((it) => it.id !== action.taskId);
        return state.tasks;
    },
);

export const taskReducer: Reducer<ITaskList> = (state = initTaskList, action) => {
    return actionToFunctions.execute(state, action);
};
