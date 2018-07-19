import Moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';

import { createLoadTaskAction } from '../actions/TaskActionCreators';
import { ITaskList } from '../states/ITask';
import store, { IState } from '../Store';
import { AddTask } from './AddTask';
import {
    $COLOR_FOREGROUND_REVERSE,
    $COLOR_PRIMARY_0,
    $COLOR_PRIMARY_3,
    $COLOR_SECONDARY_1_3,
    $COLOR_SECONDARY_2_0,
} from './FoundationStyles';
import { Loading } from './Loading';

//#region styled
const MainContainer = Styled.div`
    margin: 10px auto 0 auto;
    max-width: 600px;
    min-width: 300px;
    width: 80%;
`;

const Header = Styled.h1`
    background-color: ${$COLOR_PRIMARY_3};
    color: ${$COLOR_FOREGROUND_REVERSE};
    font-size: 160%;
    padding: 1em;
    text-align: center;
`;

const AddButton = Styled.button`
    border-radius: 5px;
    background-color: ${$COLOR_PRIMARY_0};
    color: ${$COLOR_FOREGROUND_REVERSE};
    width: 100%;
    padding: 1em;
`;

const TaskList = Styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1em;
`;

interface ITaskProps {
    expiration: boolean;
}

const Task = Styled.div<ITaskProps>`
    background-color: ${(p) => p.expiration ? 'inherit' : $COLOR_SECONDARY_2_0};
    align-items: center;
    border-radius: 5px;
    border: 1px solid rgb(200,200,200);
    box-shadow: 5px 5px 5px rgba(200,200,200,4);
    display: flex;
    flex-direction: row;
    margin-bottom: 1em;
    padding: 10px;
`;

const TaskCheck = Styled.div`
    color: ${$COLOR_SECONDARY_1_3};
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 150%;
    width: 2em;
`;

const TaskBody = Styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 0;
    height: 3em;
    justify-content: space-around;
`;

const TaskRemove = Styled.div`
    flex-grow: 0;
    flex-shrink: 0;
`;

const TaskName = Styled.div`
    font-size: 120%;
`;

const Deadline = Styled.div`
`;

//#endregion

class TodoList extends React.Component<ITaskList, {}> {
    public componentDidMount() {
        store.dispatch(createLoadTaskAction());
    }
    public render() {
        const { tasks } = this.props;
        const taskListElems = tasks.map((it) => {
            const deadlineString = Moment(it.deadline).format('YYYY-MM-DD hh:mm');
            return (
                <Task key={it.id} expiration={new Date() < it.deadline || it.complete}>
                    <TaskCheck>
                        {it.complete ? '✔' : null}
                    </TaskCheck>
                    <TaskBody>
                        <TaskName>{it.todo}</TaskName>
                        <Deadline>⏰{deadlineString}</Deadline>
                    </TaskBody>
                    <TaskRemove>
                        ❌
                    </TaskRemove>
                </Task>
            );
        });
        return (
            <div>
                <Header>TODO</Header>
                <MainContainer>
                    <AddButton type="button">add task</AddButton>
                    <AddTask taskName="" deadline={new Date()} />
                    <TaskList>
                        {this.props.loading ? <Loading /> : taskListElems}
                    </TaskList>
                </MainContainer>

            </div>
        );
    }
}

const mapStateToProps = (state: IState): ITaskList => {
    return state.taskList;
};

export default connect(mapStateToProps)(TodoList);
