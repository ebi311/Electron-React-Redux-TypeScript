import React from 'react';
import { connect } from 'react-redux';
import { createChangeUserNameAction } from '../actions/UserEvents';
import IUser from '../states/IUser';
import store, { IState } from '../Store';
import { TextBox } from './TextBox';

/**
 * ユーザー名を入力して表示する
 */
class UserForm extends React.Component<IUser, {}> { // --(a)
    public render() {
        return (
            <div>
                <p>
                    <TextBox label="ユーザー名" type="text" value={this.props.name}
                        onChnageText={this.onChangeText} /> {/* --(b) */}
                </p>
                <p>名前: {this.props.name}</p>
            </div>
        );
    }

    private onChangeText = (value: string) => { // --(c)
        store.dispatch(createChangeUserNameAction(value));
    }
}

const mapStateToProps = (state: IState): IUser => {
    return state.User;
};
export default connect(mapStateToProps)(UserForm);
