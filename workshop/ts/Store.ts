import {combineReducers, createStore} from 'redux';
import { UserReducer } from './reducers/UserReducer';
import IUser from './states/IUser';

/**
 * store のデータ型を定義する。（親state）
 *
 * プロパティには、管理する child_state を指定する
 */
export interface IState { // --(a)
    User: IUser;
    // state が増えたら足していく
}

// 複数の reducer を束ねる
const combinedReducer = combineReducers<IState>({ // --(b)
    User: UserReducer,
    // reducer が増えたら足していく
});

// グローバルオブジェクトとして、store を作成する。
const store = createStore(combinedReducer); // --(c)

export default store;
