export interface ITask {
    id: string;
    complete: boolean;
    deadline: Date;
    todo: string;
}

export interface ITaskList {
    loading: boolean;
    tasks: ITask[];
}

export const initTaskList: ITaskList = {
    loading: false,
    tasks: [],
};
