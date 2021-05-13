import styled from 'styled-components';

export const Container = styled.div`
    width: 210px;
    height: 90px;
    background: ${props => props.current ? '#FFD255' : '#293253'};
    padding: 0 10px;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;

    img {
        width: 24px;
        height: 24px;
    }

    span {
        font-size: 16px;
        color: #fff;

        align-self: flex-end;
    }

    &:hover {
        background: #FFD255;
    }
`