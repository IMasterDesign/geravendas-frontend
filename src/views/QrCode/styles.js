import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LeftCard = styled.div`
  h1 {
    font-weight: 400;
    color: #293253;

    text-align: center;

    span {
      font-style: italic;
      font-weight: bold;
    }
  }

  ul {
    display: flex;

    li {
      width:33.33333%;
    }
    
    p {
      margin: 0;
      padding: 0;
      color: #707070;
    }
  }
`

export const RightCard = styled.div`
  width: 100%;
`

export const QrCodeArea = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`

export const ValidationCode = styled.div`
  margin: 30px 60px;

  display: flex;
  flex-direction: column;

  span {
    font-size: 14px;
    font-weight: 400;

    text-align: center;
    text-transform: uppercase;
  }

  input {
    font-size: 48px;
    font-weight: bold;
    text-align: center;
    padding:  10px 15px;
    
    border: 1px solid #707070;
    outline: unset;

    &:hover {
      border: 1px solid #ffd255;
    }
  }

  button {
    cursor: pointer;

    font-size: 14px;
    font-weight: 400;

    color: #fff;
    background: #293253;

    margin: 10px 0 60px;
    padding: 20px;

    border-radius: 30px;
    border: none;
    outline: unset;

    &:hover {
      background: #ffd255;
    }
  }
`