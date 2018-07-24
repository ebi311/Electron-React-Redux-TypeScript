import 'moment/locale/ja';
import 'react-datepicker/dist/react-datepicker.css';

import Moment from 'moment';
import React from 'react';
import DatePicker from 'react-datepicker';
import Styled from 'styled-components';
import { v4 as UUID } from 'uuid';

import { createAddTaskAction } from '../actions/TaskActionCreators';
import store from '../Store';
import { $COLOR_SECONDARY_1_3 } from './FoundationStyles';

interface IProps {
    taskName: string;
    deadline: Date;
}

// tslint:disable-next-line:no-empty-interface
interface IState extends IProps {
}

//#region styled
const Container = Styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    margin: 1em 0;
    width: 100%;
`;

const TextBox = Styled.input`
    box-sizing: border-box;
    width: 100%;
`;

const TaskNameBox = Styled.p`
    flex-grow: 1;
`;

const DeadlineBox = Styled.p`
`;

const AddButton = Styled.button`
    background-color: ${$COLOR_SECONDARY_1_3};
    border-radius: 50%;
    color: white;
    display: block;
    font-size: 150%;
    height: 40px;
    padding: 0;
    width: 40px;
`;

//#endregion

export class AddTask extends React.Component<IProps, IState> {
    public componentWillMount() {
        this.setState({
            deadline: this.props.deadline,
            taskName: this.props.taskName,
        });
    }
    public render() {
        const date = Moment(this.state.deadline);
        date.locale('ja');
        const taskNameId = UUID();
        const deadlineId = UUID();
        return (
            <Container>
                <TaskNameBox>
                    <label htmlFor={taskNameId}>task name</label>
                    <TextBox id={taskNameId} type="text" value={this.state.taskName}
                        onChange={this.onChangeTaskName} />
                </TaskNameBox>
                <DeadlineBox>
                    <label htmlFor={deadlineId}>dead line</label>
                    <DatePicker selected={date} showTimeSelect={true}
                        dateFormat="YYYY-MM-DD HH:mm" onChange={this.onChangeDeadline} />
                </DeadlineBox>
                <AddButton onClick={this.onClickAdd}>+</AddButton>
            </Container>
        );
    }
    /**
     * タスク名を変更すると、ローカルステートを変更する
     */
    private onChangeTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            taskName: e.target.value,
        });
    }
    /**
     * 期限を変更すると、ローカルステートを変更する
     */
    private onChangeDeadline = (date: Moment.Moment) => {
        this.setState({
            deadline: date.toDate(),
        });
    }
    /**
     * 追加ボタンを押すと、タスク一覧にタスクを追加する
     */
    private onClickAdd = (e: React.MouseEvent) => {
        store.dispatch(createAddTaskAction(this.state.taskName, this.state.deadline));
        const m = Moment(new Date()).add(1, 'days');
        this.setState({
            deadline: m.toDate(),
            taskName: '',
        });
    }
}
