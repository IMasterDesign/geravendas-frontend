import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  height: 200px;

  /**SHADOW-SILVER*/
  -webkit-box-shadow: 0px 0px 20px 0px rgba(112,112,112,.25);
  -moz-box-shadow: 0px 0px 20px 0px rgba(112,112,112,.25);
  box-shadow: 0px 0px 20px 0px rgba(112,112,112,.25);

  /**SHADOW-BLUE*/
  /*
  -webkit-box-shadow: 0px 0px 20px 0px rgba(41,50,83,.25);
  -moz-box-shadow: 0px 0px 20px 0px rgba(41,50,83,.25);
  box-shadow: 0px 0px 20px 0px rgba(41,50,83,.25);
  */

  border-radius: 10px;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 20px;
  transition: all 0.3s ease;
  opacity: ${props => props.done ? .75 : 1};

  &:hover{
    opacity: .75;
    
    -webkit-box-shadow: 0px 0px 20px 0px rgba(41,50,83,.5);
    -moz-box-shadow: 0px 0px 20px 0px rgba(41,50,83,.5);
    box-shadow: 0px 0px 20px 0px rgba(41,50,83,.5);
  }
`

export const TopCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-top: 20px;
  font-size: 14px;

  img {
    max-height: 64px;
  }
`

export const BottomCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  padding-bottom: 20px;

  strong {
    font-size: 12px;
    color: #293253;
    font-weight: bold;
  }

  span {
    color: #707070;
  }

`