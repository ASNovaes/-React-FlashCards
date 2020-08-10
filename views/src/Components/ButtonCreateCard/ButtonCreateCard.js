import React, { useContext } from "react";
import StyledButtonCreateCard from "./styles";
import { ContextCard } from "../Context/Context.js";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ButtonCreateCard() {
  const { cards, setCards, listName, setListName } = useContext(ContextCard);

  const teste = () => {
    console.log(listName)
    axios
      .post("http://localhost:8080/addflashtopic/", {
        CODTOPIC: listName.codTopic,
        CARDTITLE: listName.listTitle,
        CARDDESCRIPTION: listName.listDescription,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    cards.map((card, i) => {
      axios
        .post("http://localhost:8080/addflashcard/", {
          QUESTION: card.question,
          DEFINITION: card.definition,
          FK_COD_FLASHCARDTOPIC: listName.codTopic,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    })

    setCards([]);
  };

  return (
    <StyledButtonCreateCard>
      <Link to="/FlashCards" onClick={() => teste()}>
        Concluído
      </Link>
    </StyledButtonCreateCard>
  );
}
