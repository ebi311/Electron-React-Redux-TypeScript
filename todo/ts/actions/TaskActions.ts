import FS from 'fs-extra';
import Redux, { Action } from 'redux';
import { v4 as UUID } from 'uuid'; // -- (a)
import { ITask } from '../states/ITask';
import store from '../Store';
import AsyncAction from '../utils/AsyncAction';

/**
 * タスクのロードを開始するアクションタイプ
 */
export const LOAD_TASKS = UUID();
/**
 * タスクロードのアクション
 */
// tslint:disable-next-line:no-empty-interface
export interface ILoadStartAction extends AsyncAction { // --(c)
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
// tslint:disable-next-line:no-empty-interface
export interface IAddTaskAction extends AsyncAction<ITask[]> {
    deadline: Date;
    taskName: string;
}
/**
 * タスク完了のアクションタイプ
 */
export const TOGGLE_COMPLETE_TASK = UUID();

/**
 * タスク完了のアクション
 */
export interface IToggleCompleteAction extends AsyncAction<ITask[]> {
    taskId: string;
}

/**
 * タスク削除のアクションタイプ
 */
export const DELETE_TASK = UUID();

/**
 * タスク削除のアクション
 */
export interface IDeleteAction extends AsyncAction<ITask[]> {
    taskId: string;
}
