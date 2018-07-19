import React from 'react';
import Styled from 'styled-components';

//#region styled
const Container = Styled.div`
  display: flex;
  flex-direction: row;
  height: 20px;
  justify-content: space-around;
  margin: auto;
  width: 100px;
`;

const Circle = Styled.div`
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-name: ani1;
    background-color: #999;
    border-radius: 50%;
    height: 10px;
    left: 10px;
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

export class Loading extends React.Component {
    public render() {
        return (
            <Container>
                <C1 /><C2 /><C3 />
            </Container>
        );
    }
}
