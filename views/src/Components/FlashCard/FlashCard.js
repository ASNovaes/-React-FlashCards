import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import {
  SyledContainer,
  StyledFlashCard,
  StyledControl,
  StyledCardInner,
  StyledCardFront,
  StyledCardBack,
  StyledCard,
} from "./styles";
import iconArrow from "../../assets/img/icon-arrow.svg";
import { ContextCard } from "../Context/Context.js";
import imgBtnDelete from '../../assets/img/btn-delete.svg';

export default function FlashCard() {
  const { listName, setListName } = useContext(ContextCard);
  const [codsTopic, setCodTopic] = useState("");
  const [cards, setCards] = useState([]);
  const [posCurrent, setPosCurrent] = useState(0);
  const [flashCurrent, setFlashCurrent] = useState({});
  const [flashTopic, setFlashTopic] = useState([]);

  useEffect(() => {
    if (listName.listTitle !== "") {
      setCodTopic(listName.codTopic);
      setListName("");
    } else if (codsTopic === "") {
      return;
    }

    axios
      .get(`http://localhost:8080/${codsTopic}`)
      .then(function (response) {
        setCards(response.data);

        if (response.data.length !== 0) {
          setFlashCurrent(response.data[0]);
        }
      })
      .catch((error) => console.log("erro"));
  }, [codsTopic]);

  const controlFlash = (controller) => {
    if (controller === "next") {
      if (posCurrent >= cards.length - 1) {
        return;
      } else {
        setPosCurrent(posCurrent + 1);
      }
    }

    if (controller === "prev") {
      if (posCurrent <= 0) {
        return;
      } else {
        setPosCurrent(posCurrent - 1);
      }
    }
  };

  useEffect(() => {
    if (cards.length) {
      setFlashCurrent(cards[posCurrent]);
    }
  }, [posCurrent]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/flashtopic`)
      .then(function (response) {
        setFlashTopic(response.data);
      })
      .catch((error) => console.log("erro"));
  }, []);

  const deleteFlashCard = (cod) => {
    axios
      .delete(`http://localhost:8080/${cod}`)
      .then(function (response) {
        console.log("Excluido com sucesso!");
      })
      .catch((error) => console.log("erro"));
  };

  return (
    <>
      {cards.length > 0 && (
        <SyledContainer>
          <h1>{flashCurrent.CARDTITLE}</h1>
          <StyledFlashCard>
            <StyledCardInner>
              <StyledCardFront>
                <p>{flashCurrent.QUESTION}</p>
              </StyledCardFront>
              <StyledCardBack>
                <p>{flashCurrent.DEFINITION}</p>
              </StyledCardBack>
            </StyledCardInner>
          </StyledFlashCard>

          <StyledControl>
            <img src={iconArrow} onClick={() => controlFlash("prev")} />
            <span>
              {posCurrent + 1}/{cards.length}
            </span>
            <img src={iconArrow} onClick={() => controlFlash("next")} />
          </StyledControl>
        </SyledContainer>
      )}

      <StyledCard>
        {flashTopic.map((el, i) => {
          return (
            <div key={i}>
              <a onClick={() => deleteFlashCard(el.CODTOPIC)}><img src={imgBtnDelete} /></a>
              <div onClick={() => {
                setCodTopic(el.CODTOPIC);
                setPosCurrent(0)
              }
              }>
                <h1>Tópico: {el.CARDTITLE}</h1>
                <h2>Descrição: {el.CARDDESCRIPTION}</h2>
              </div>
            </div>
          );
        })}
      </StyledCard>
    </>
  );
}
