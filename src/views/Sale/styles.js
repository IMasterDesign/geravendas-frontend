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
  
  img {
    height: 64px;
    margin: 30px 0px 0 0;
  }
`

export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;

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
    
    &::nth-child(2) {
      width: 100%;
      height: 240px !important;
      min-height: 240px !important;
    }
  }

  input.cssTextArea,
  .MuiOutlinedInput-input.cssTextArea,
  input..MuiOutlinedInput-input.cssTextArea {
    width: 100%;
    height: 240px !important;
    min-height: 240px !important;
  }  

  .MuiOutlinedInput-root {
      width: 100% !important;
  }

  img {
    width: 32px;
    height: 32px;
    position: relative;
    left: 92.5%;
    bottom: 42.5px;
    background: #fff;
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
    
    width: 100%;
    height: 240px !important;
    min-height: 240px !important;
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
    font-weight: bold;
    color: #20295F;
    border: none;
    background: none;
    font-size: 18px;
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
  margin-top: 20px;

  button {
    width: 100%;
    cursor: pointer;

    font-size: 14px;
    font-weight: 700;

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