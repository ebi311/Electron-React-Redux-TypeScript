import Redux from 'redux';

export default interface IAsyncAction<T = void> extends Redux.Action {
    successful: (args: T) => Promise<void> | void;
    failed?: (args: T) => Promise<void>;
    completed?: (args: T) => Promise<void>;
}
