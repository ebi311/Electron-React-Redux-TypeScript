import FS from 'fs-extra';
import Redux from 'redux';
import { ITask } from '../states/ITask';
import store from '../Store';
import * as Actions from './TaskActions';

/**
 * ユーザー名変更アクション・クリエイター
 *
 * @returns ユーザー名変更アクション
 */
export const createLoadTaskAction: Redux.ActionCreator<Actions.ILoadStartAction> = () => {

    return {
        successful: () => {
            return FS.readFile('./tododata.json', 'utf-8')
            .then((data) => {
                const taskList = JSON.parse(data, (key, value) => {
                    if (key === 'deadline') {
                        return new Date(value);
                    } else {
                        return value;
                    }
                }) as {tasks: ITask[]};
                // ローディングを確認するために、意図的に時間を遅らせる
                setTimeout(() => {
                    store.dispatch(createShowTaskAction(taskList.tasks));
                }, 3000);
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
export const createShowTaskAction: Redux.ActionCreator<Actions.IShowTaskAction> = (tasks: ITask[]) => {
    return {
        tasks,
        type: Actions.SHOW_TASKS,
    };
};

export const createAddTaskAction: Redux.ActionCreator<Actions.IAddTaskAction> = (taskName: string, deadline: Date) => {
    return {
        deadline,
        taskName,
        type: Actions.ADD_TASK,
    };
};
