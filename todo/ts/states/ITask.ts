/** タスク */
export interface ITask {
    /** 完了フラグ */
    complete: boolean;
    /** 期限 */
    deadline: Date;
    /** タスクを一意に判断するID　(UUID) */
    id: string;
    /** タスクの名前 */
    todo: string;
}

/** タスク一覧 */
export interface ITaskList {
    tasks: ITask[];
}

/** タスク一覧の初期状態 */
export const initTaskList: ITaskList = {
    tasks: [],
};
