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
  /*background: ${props => props.current ? '#FFD255' : '#293253'};*/
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    width: 100%;
    height: 90px;
    background: #707070;
    

    margin: 30px 0 0 0;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;

    img {
      max-width: 32px;
      margin-left: 15px;

      align-self: flex-flex-start;
    }

    span {
        font-size: 16px;
        color: #fff;
        margin-right: 15px;

        align-self: flex-end;
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

export const Select = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  select {
    font-size: 16px;
    
    padding: 15px;

    border: none;
    border-bottom: 1px solid #707070;

    outline: none;

    &::focus {
      border-bottom: 1px solid #293253;
    }
    
    &::nth-child(2) {
      width: 100%;
      height: 240px !important;
      min-height: 240px !important;
    }
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