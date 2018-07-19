import 'moment/locale/ja';
import 'react-datepicker/dist/react-datepicker.css';

import Moment from 'moment';
import React from 'react';
import DatePicker from 'react-datepicker';
import Styled from 'styled-components';
import { v4 as UUID } from 'uuid';

import { $COLOR_SECONDARY_1_1 } from './FoundationStyles';

interface IProps {
    taskName: string;
    deadline: Date;
}

// tslint:disable-next-line:no-empty-interface
interface IState extends IProps {
}

//#region styled
const Container = Styled.div`
    margin: 1em 0;
    width: 100%;
`;

const TextBox = Styled.input`
    border-radius: 3px;
    font-size: 120%;
    width: 100%;
`;

const P = Styled.p`
    margin-bottom: 1em;
`;

const ActionRow = P.extend`
    display: inline-flex;
    justify-content: space-around;
    width: 100%;
`;

const AddButton = Styled.button`
    background-color: ${$COLOR_SECONDARY_1_1};
    display: block;
    width: 60%;
`;

const CancelButton = Styled.button`
    display: block;
    width: 30%;
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
                <P>
                    <label htmlFor={taskNameId}>task name</label>
                    <TextBox id={taskNameId} type="text" value={this.state.taskName}
                        onChange={this.onChangeTaskName} />
                </P>
                <P>
                    <label htmlFor={deadlineId}>dead line</label>
                    <DatePicker selected={date} showTimeSelect={true}
                        dateFormat="YYYY-MM-DD HH:mm" onChange={this.onChangeDeadline} />
                </P>
                <ActionRow>
                    <CancelButton>cancel</CancelButton>
                    <AddButton onClick={this.onClickAdd}>save</AddButton>
                </ActionRow>
            </Container>
        );
    }
    private onChangeTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            taskName: e.target.value,
        });
    }
    private onChangeDeadline = (date: Moment.Moment) => {
        this.setState({
            deadline: date.toDate(),
        });
    }
    private onClickAdd = (e: React.MouseEvent) => {
        //
    }
}
