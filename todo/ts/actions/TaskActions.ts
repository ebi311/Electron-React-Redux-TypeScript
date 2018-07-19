import FS from 'fs-extra';
import Redux from 'redux';
import { v4 as UUID } from 'uuid'; // -- (a)
import { ITask } from '../states/ITask';
import store from '../Store';
import AsyncAction from './AsyncAction';

/**
 * タスクのロードを開始するアクションタイプ
 */
export const LOAD_TASKS = UUID();
/**
 * タスクロードのアクション
 */
// tslint:disable-next-line:no-empty-interface
export interface ILoadStartAction extends AsyncAction { // --(c)
    // ロードを開始する
    // ロードの表示を行い、完了したらタスク一覧を表示する
    successful: () => Promise<void>;
}
/**
 * タスクの一覧を表示するアクションタイプ
 */
export const SHOW_TASKS = UUID();
/**
 * タスクの一覧を表示するアクション
 */
export interface IShowTaskAction extends Redux.Action {
    tasks: ITask[];
}
/**
 * タスクを追加するアクションタイプ
 */
export const ADD_TASK = UUID();
/**
 * タスクを追加するアクション
 */
export interface IAddTaskAction extends Redux.Action {
    taskName: string;
    deadline: Date;
}
