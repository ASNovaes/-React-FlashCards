import React from "react";
import Card from "../Card/Card";
import ButtonCard from "../ButtonCard/ButtonCard";
import ButtonCreateCard from "../ButtonCreateCard/ButtonCreateCard";
import StyledContent from "./styles";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import FormCreateCard from "../FormCreateCard/FormCreateCard";

export default function Content() {
  return (
    <>
      <StyledContent>
        <FormCreateCard />
        <DndProvider backend={HTML5Backend}>
          <Card />
        </DndProvider>
        <ButtonCard />
        <ButtonCreateCard />
      </StyledContent>
    </>
  );
}
