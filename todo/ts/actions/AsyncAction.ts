import Redux from 'Redux';

export default interface IAsyncAction<T = void> extends Redux.Action {
    successful?: (args?: T) => Promise<T>;
    failed?: (args?: T) => Promise<T>;
    completed?: (args?: T) => Promise<T>;
}
