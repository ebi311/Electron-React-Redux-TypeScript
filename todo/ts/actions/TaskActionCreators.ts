import FS from 'fs-extra';

import { ITask } from '../states/ITask';
import store from '../Store';
import { createToggleLoadingAction } from './LoadingActions';
import * as Actions from './TaskActions';

const dataFilePath = './tododata.json';
/**
 * ローディング画面を表示するアクション
 *
 * @returns ローディング表示アクション
 */
export const createLoadTaskAction = (): Actions.ILoadStartAction => {
    return {
        successful: () => {
            return new Promise((resolve, reject) => {
                resolve();
            }).then(() => {
                store.dispatch(createToggleLoadingAction());
                return FS.readFile(dataFilePath, 'utf-8');
            }).then((data) => {
                const taskList = JSON.parse(data, (key, value) => {
                    if (key === 'deadline') {
                        return new Date(value);
                    } else {
                        return value;
                    }
                }) as ITask[];
                // ローディングを確認するために、意図的に時間を遅らせる
                setTimeout(() => {
                    store.dispatch(createShowTaskAction(taskList));
                    store.dispatch(createToggleLoadingAction());
                }, 1000);
            });
        },
        type: Actions.LOAD_TASKS,
    };
};
/**
 * タスクの一覧を表示するアクション・クリエイター
 *
 * @param tasks タスク一覧
 * @returns タスク一覧表示アクション
 */
export const createShowTaskAction = (tasks: ITask[]): Actions.IShowTaskAction => {
    return {
        tasks,
        type: Actions.SHOW_TASKS,
    };
};
/**
 * タスクの追加 アクション・クリエイター
 * @param taskName タスクの名前
 * @param deadline タスクの期限
 */
export const createAddTaskAction = (taskName: string, deadline: Date): Actions.IAddTaskAction => {
    return {
        deadline,
        successful: (todoList) => {
            return new Promise((resolve, reject) => {
                resolve();
            }).then(() => {
                store.dispatch(createToggleLoadingAction());
                return FS.writeJSON(dataFilePath, todoList);
            }).then(() => {
                setTimeout(() => {
                    store.dispatch(createShowTaskAction(todoList));
                    store.dispatch(createToggleLoadingAction());
                }, 1000);
            });
        },
        taskName,
        type: Actions.ADD_TASK,
    };
};
/**
 * タスクの完了状態を切り替えアクション・クリエイター
 * @param taskId タスクID
 */
export const createToggleCompleteAction = (taskId: string): Actions.IToggleCompleteAction => {
    return {
        successful: (todoList) => {
            return new Promise((resolve, reject) => {
                resolve();
            }).then(() => {
                store.dispatch(createToggleLoadingAction());
                return FS.writeJSON(dataFilePath, todoList);
            }).then(() => {
                setTimeout(() => {
                    store.dispatch(createShowTaskAction(todoList));
                    store.dispatch(createToggleLoadingAction());
                }, 1000);
            });
        },
        taskId,
        type: Actions.TOGGLE_COMPLETE_TASK,
    };
};

export const createDeleteTaskAction = (taskId: string): Actions.IDeleteAction => {
    return {
        successful: (todoList) => {
            return new Promise((resolve, reject) => {
                resolve();
            }).then(() => {
                store.dispatch(createToggleLoadingAction());
                return FS.writeJSON(dataFilePath, todoList);
            }).then(() => {
                setTimeout(() => {
                    store.dispatch(createShowTaskAction(todoList));
                    store.dispatch(createToggleLoadingAction());
                }, (1000));
            });
        },
        taskId,
        type: Actions.DELETE_TASK,
    };
};
