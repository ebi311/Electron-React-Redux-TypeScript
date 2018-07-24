import { combineReducers, createStore } from 'redux';

import { loadingReducer } from './reducers/LoadingReducer';
import { taskReducer } from './reducers/TaskReducer';
import { ILoading } from './states/ILoading';
import { ITaskList } from './states/ITask';

/**
 * store のデータ型を定義する。（親state）
 *
 * プロパティには、管理する child_state を指定する
 */
export interface IState { // --(a)
    loading: ILoading;
    taskList: ITaskList;
    // state が増えたら足していく
}

// 複数の reducer を束ねる
const combinedReducer = combineReducers<IState>({ // --(b)
    loading: loadingReducer,
    taskList: taskReducer,
    // reducer が増えたら足していく
});

// グローバルオブジェクトとして、store を作成する。
const store = createStore(combinedReducer); // --(c)

export default store;
