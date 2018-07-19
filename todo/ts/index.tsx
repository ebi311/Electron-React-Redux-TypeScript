import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import TodoList from './components/TodoList';
import Store from './Store';

const container = document.getElementById('contents');

ReactDom.render(
    <Provider store={Store}>
        <TodoList />
    </Provider>,
    container,
);
