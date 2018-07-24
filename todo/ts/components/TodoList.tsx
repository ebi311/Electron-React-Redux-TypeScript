import Moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';

import { createLoadTaskAction } from '../actions/TaskActionCreators';
import { ITaskList } from '../states/ITask';
import store, { IState } from '../Store';
import { AddTask } from './AddTask';
import { $COLOR_FOREGROUND_REVERSE, $COLOR_PRIMARY_0, $COLOR_PRIMARY_3 } from './FoundationStyles';
import TaskRow from './TaskRow';

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

//#endregion

class TodoList extends React.Component<ITaskList, {}> {
    public componentDidMount() {
        store.dispatch(createLoadTaskAction());
    }
    public render() {
        const { tasks } = this.props;
        const taskListElems = tasks
            .sort((a, b) => {
                return (a.deadline < b.deadline) ? -1
                    : (a.deadline === b.deadline) ? 0 : 1;
            })
            .map((it) => {
            return (
                <TaskRow key={it.id} {...it} />
            );
        });
        return (
            <div>
                <Header>TODO</Header>
                <MainContainer>
                    <AddTask taskName="" deadline={Moment().add(1 , 'days').toDate()} />
                    <TaskList>
                        {taskListElems}
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
