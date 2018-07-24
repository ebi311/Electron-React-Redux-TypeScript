import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import Loading from './components/Loading';
import TodoList from './components/TodoList';
import Store from './Store';

const container = document.getElementById('contents');

ReactDom.render(
    <div>
        <Provider store={Store}>
            <Loading />
        </Provider>
        <Provider store={Store}>
            <TodoList />
        </Provider>
    </div>,
    container,
);
