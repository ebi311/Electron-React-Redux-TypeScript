export interface ITask {
    id: string;
    complete: boolean;
    deadline: Date;
    todo: string;
}

export interface ITaskList {
    tasks: ITask[];
}

export const initTaskList: ITaskList = {
    tasks: [],
};
