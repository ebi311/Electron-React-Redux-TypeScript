import React from 'react'; // --(a);

// 親コンポーネントから渡されるプロパティを定義する // --(b)
interface IProps {
    // ラベル文字列
    label: string;
    // テキストボックスのタイプ
    type: 'text' | `password`;
    // テキストボックスに表示する値
    value: string;
    // 値の確定時にその値を親プロパティが取得するためにコールバック関数を提供する
    onChnageText: (value: string) => void;
}

/**
 * ラベル付きのテキストボックスを提供する
 */
export class TextBox extends React.Component<IProps, {}> { // --(c)
    // DOMエレメントをレンダリングする
    public render() {
        // ラベルが設定されていない場合は、 label を出力しない
        const label = (!!this.props.label) ?
            <label>{this.props.label}</label> :
            null; // --(d)
        return (
            <span>
                {/* {} で囲むと JavaScript のコードが書ける */}
                {label /* --(e) */}
                <input name="username" type={this.props.type} value={this.props.value}
                    onChange={this.onChnageText} /> {/* --(f) */}
            </span>
        );
    }
    // 値を変更したら、store.dispatch で action を reducer に渡して、state を更新する。
    // state が更新されたら component の prop が更新され、再レンダリングされ、テキストボックスの内容が変更される。
    private onChnageText = (e: React.ChangeEvent<HTMLInputElement>) => { // --(g)
        this.props.onChnageText(e.target.value);
    }

}
