import styled from "styled-components";

const SyledContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto;
  width: 50vw;
`;

const StyledFlashCard = styled.div`
  background: transparent;
  cursor: pointer;
  height: 50vh;
  perspective: 1000px;
  padding: 5px;
  width: 40vw;

  :hover > div {
    transform: rotateY(180deg);
  }

  p {
    color: #303545;
    font-size: 30px;
  }
`;

const StyledCardInner = styled.div`
  height: 100%;
  position: relative;
  text-align: center;
  transition: all 1s cubic-bezier(0.47, 0, 0.745, 0.715);
  transform-style: preserve-3d;
  width: 100%;

div {
    align-items: center;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background: #fff;
    box-shadow: 0px 2px 7px #ddd;
    display: flex;
    height: 100%;
    justify-content: center;
    position: absolute;
    width: 100%; 
  }
`;

const StyledCardFront = styled.div``;

const StyledCardBack = styled.div`
  transform: rotateY(180deg);
`;

const StyledControl = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 100%;

  img {
    cursor: pointer;
    margin: 100px;
    transform: rotate(-90deg);
    width: 20px;
  }

  img:nth-child(1) {
    transform: rotate(90deg);
  }
`;

const StyledCard = styled.section`
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    margin: 50px auto;
    width: 90vw;
    height: auto;
  
    > div {
      position: relative;
      align-items: center;
      border-radius: 1px;
      box-shadow: 0px 2px 5px 1px #ccc;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 3px;
      padding: 5px;
      min-width: 300px;
      height: 100px;

      div {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
      }

      a {
        position: absolute;
 
        display: block;
        margin: 5px;
        top: 0;
        right: 0; 
        border-radius: 5px;
        width: 30px;
        height: 30px;

        img {
          width: 100%;
        }
   
        p {
          font-size: 10px;
          margin: 0;
          padding: 5px;
          font-weight: bold;
        }
      }
    
    h1,h2 {
      margin: 0;
      padding: 0;
      letter-spacing: 0.09em;
      line-height: 1.5em;
      word-spacing: 1px;
    }
    
    h1 {
      color: rgb(66, 87, 178);
      font-size: 15px;
    }

    h2 {
      color: red;
      font-size: 12px;
    }
`;

export {
  SyledContainer,
  StyledFlashCard,
  StyledControl,
  StyledCardInner,
  StyledCardFront,
  StyledCardBack,
  StyledCard,
};
