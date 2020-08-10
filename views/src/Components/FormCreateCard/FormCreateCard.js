import React, { useContext } from "react";
import {
  StyledCardContent,
  StyledRichTextEditor,
  StyledBorder,
} from "./styles";
import { ContextCard } from "../Context/Context.js";

export default function FormCreateCard() {
  const { listName, setListName } = useContext(ContextCard);

  const setListValues = (e) => {
    const { value, name } = e.target;

    setListName({ ...listName, [name]: value });
  };

  return (
    <>
      <StyledCardContent>
        <header>
          <span>Criar uma nova lista de estudos</span>
          <button>Criar</button>
        </header>
        <StyledRichTextEditor>
          <input
            type="text"
            name="listTitle"
            placeholder="Digite um título, como Biologia - Capítulo 22: evolução"
            value={listName.listTitle}
            onChange={(e) => setListValues(e)}
          />
          <p>Título</p>
        </StyledRichTextEditor>

        <StyledRichTextEditor>
          <input
            type="text"
            name="listDescription"
            placeholder="Adicione uma descrição..."
            value={listName.listDescription}
            onChange={(e) => setListValues(e)}
          />
          <p>Descrição</p>
        </StyledRichTextEditor>
      </StyledCardContent>
    </>
  );
}
