import React from 'react';
import IUser from '../states/IUser';
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
        // action や store ができてから書く
    }
}
