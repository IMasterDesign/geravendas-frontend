import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background: #FFD255;
  border-bottom: 5px solid #293253;

  display: flex;
`

export const LeftSide = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  padding: 10px;

  img {
    max-height: 64px;
  } 
`

export const RightSide = styled.div`
  width: 90%;
  padding-right: 10px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
      cursor: pointer;
      
      background: none;
      border: none;
      outline: unset;
    }

    a, button {
    color: #FFF;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    margin: 0 10px;  

    &:hover{
      color: #293253;
    } 

    img {
      width: 28px;
      height: 30px;
    }

    span {
      background: #FFF;
      color: #293253;
      padding: 3px 7px;
      border-radius: 50%;
      position: relative;
      top: -20px;
      right: 10px;
    }

    &:hover {
      opacity: .75;
    }
  }

  .dividir::after{
    content: "|";
    margin: 0 10px;
    color: #FFF;
  }

  button {
    font-size: 16px;
    outline: unset;
  }
`