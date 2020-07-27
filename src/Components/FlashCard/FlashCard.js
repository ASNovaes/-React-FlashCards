import React, { useContext } from "react";
import {
  SyledContainer,
  StyledFlashCard,
  StyledControl,
  StyledCardInner,
  StyledCardFront,
  StyledCardBack,
} from "./styles";
import iconArrow from "../../assets/img/icon-arrow.svg";
import { ContextCard } from "../Context/Context.js";

export default function FlashCard() {
  const { cards, setCards, listName, setListName, listsCards } = useContext(
    ContextCard
  );

  return (
    <>
      <SyledContainer>
        <StyledFlashCard>
          <StyledCardInner>
            <StyledCardFront>
              <p>Termo</p>
            </StyledCardFront>
            <StyledCardBack>
              <p>Definição</p>
            </StyledCardBack>
          </StyledCardInner>
        </StyledFlashCard>

        <StyledControl>
          <img src={iconArrow} />
          <span>1/{cards.length}</span>
          <img src={iconArrow} />
        </StyledControl>
      </SyledContainer>
    </>
  );
}
