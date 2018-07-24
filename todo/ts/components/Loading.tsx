import React from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';

import { IState } from '../Store';

//#region styled
const Container = Styled.div`
    align-items: center;
    background-color: rgba(200,200,200,.5);
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: center;
    left: 0;
    margin: auto;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 100;
`;

const Circle = Styled.div`
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-name: ani1;
    background-color: #333;
    border-radius: 50%;
    height: 10px;
    left: 10px;
    margin: 0 5px;
    position: relative;
    top: 10px;
    width: 10px;
    @keyframes ani1 {
        0% {
            opacity: 0.8;
        }
        50% {
            opacity: 0.0;
        }
        100% {
            opacity: 0.8;
        }
    }
`;

const C1 = Circle.extend`
    animation-delay: 0s;
`;

const C2 = Circle.extend`
    animation-delay: 0.2s;
`;

const C3 = Circle.extend`
    animation-delay: 0.4s;
`;
//#endregion

interface IProps {
    shown: boolean;
}

class Loading extends React.Component<IProps, {}> {
    public render() {
        if (!this.props.shown) { return null; }
        return (
            <Container>
                <C1 /><C2 /><C3 />
            </Container>
        );
    }
}

const mapStateToProps = (state: IState): IProps => {
    return {
        shown: state.loading.shown,
    };
};

export default connect(mapStateToProps)(Loading);
