import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Form = styled.div`
  width: 50%;
  margin-bottom: 70px;
`

export const TypeIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .inative {
    opacity: .25;
  }

  button {
    border: none;
    background: none;
    outline: unset;
  }
  
  img {
    height: 64px;
    margin: 30px 10px;
    cursor: pointer;
    opacity: .75;

    &:hover {
      opacity: 1;
    }
  }
`

export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 30px 0 60px 0;

  span {
    color: #707070;
    margin: 5px 0;
  }

  input {
    font-size: 16px;
    
    padding: 15px;

    border: none;
    border-bottom: 1px solid #707070;

    outline: none;

    &::focus {
      border-bottom: 1px solid #293253;
    }
  }  

  div {
    width: 100%;

    img {
      width: 32px;
      height: 32px;
      position: relative;
      left: 92.5%;
      bottom: 42.5px;
      background: #fff;
    }
  }
`

export const TextArea = styled.div`
  width: 100%;
  display: flex;
  margin: 20px 0;
  
  flex-direction: column;

  span {
    color: #707070;
    margin: 5px 0;
  }

  textarea {
    font-size: 16px;
    border: 1px solid #293253;
  }
`

export const Options = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    color: red;
    border: none;
    background: none;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      opacity: .75;
    }
  }

  div {
    display: flex;
    align-items: center;
    color: #293253;
    font-weight: bold;
    font-size: 18px;
  }
`

export const Save = styled.div`
  width: 100%;
  margin-top: 30px;

  button {
    width: 100%;
    cursor: pointer;

    font-size: 18px;
    font-weight: 700;

    color: #fff;
    background: #293253;

    margin: 10px 0 20px;
    padding: 10px;

    border-radius: 40px;
    border: none;
    outline: unset;

    &:hover {
      background: #ffd255;
    }
  }
`