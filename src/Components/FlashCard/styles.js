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
  transition: transform 0.8s;
  transform-style: preserve-3d;
  width: 100%;

  div {
    align-items: center;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
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

export {
  SyledContainer,
  StyledFlashCard,
  StyledControl,
  StyledCardInner,
  StyledCardFront,
  StyledCardBack,
};
