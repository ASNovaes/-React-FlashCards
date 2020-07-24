import React, { useContext, useCallback } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../ItemTypes/ItemTypes';
import { StyledQuestionCard, StyledCardContent, StyledRichTextEditor, StyledInnerText, StyledHeaderCard } from './styles';
import { ContextCard } from '../Context/Context.js';

export const CardDrag = ({ id, index, question, answer, moveCard, findCard }) => {

  const { cards, setCards } = useContext(ContextCard);

  const originalIndex = findCard(id).index
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, originalIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (dropResult, monitor) => {
      const { id: droppedId, originalIndex } = monitor.getItem()
      const didDrop = monitor.didDrop()
      if (!didDrop) {
        moveCard(droppedId, originalIndex)
      }
    }
  });

  const [_, drop] = useDrop({
    accept: ItemTypes.CARD,
    canDrop: () => false,
    hover({ id: draggedId }) {
      if (draggedId !== id) {
        const { index: overIndex } = findCard(id);
        moveCard(draggedId, overIndex);
      }
    }
  });

  let border;
  if (isDragging == 1) {
    border = "2px dashed rgb(66,87,178)";
  }

  const deleteCard = useCallback((index) => {
    let upCards = cards.filter((card) => {
      return card.id !== cards[index].id;
    });

    setCards(upCards);
  });

  return (
    <StyledQuestionCard ref={(node) => drag(drop(node))} style={{ border }}>
      <StyledHeaderCard>
        <p>{index + 1}</p>
        <i class='far' onClick={() => deleteCard(index)}>&#xf2ed;</i>
      </StyledHeaderCard>
      <StyledCardContent>
        <StyledRichTextEditor>
          <StyledInnerText>
            <div contentEditable='true'>{question}</div>
          </StyledInnerText>
          <p>Termo</p>
        </StyledRichTextEditor>
        <StyledRichTextEditor>
          <StyledInnerText>
            <div contentEditable='true'>{answer}</div>
          </StyledInnerText>
          <p>Definicão</p>
        </StyledRichTextEditor>
      </StyledCardContent>
    </StyledQuestionCard>
  );
}
