import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from '../ItemTypes/ItemTypes';
import { StyledQuestionCard, StyledCardContent, StyledRichTextEditor, StyledBorder, StyledHeaderCard } from './styles';

export const CardDrag = ({ id, index, question, answer, moveCard, findCard }) => {
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
    },
  })

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    canDrop: () => false,
    hover({ id: draggedId }) {
      if (draggedId !== id) {
        const { index: overIndex } = findCard(id)
        moveCard(draggedId, overIndex)
      }
    },
  })

  return (
    <StyledQuestionCard ref={(node) => drag(drop(node))}>
      <StyledHeaderCard>
        <p>{index + 1}</p>
        <i class='far'>&#xf2ed;</i>

      </StyledHeaderCard>
      <StyledCardContent>
        <StyledRichTextEditor>
          <div contentEditable='true'>{question}</div>
          <StyledBorder></StyledBorder>
          <p>Termo</p>
        </StyledRichTextEditor>
        <StyledRichTextEditor>
          <div contentEditable='true'>{answer}</div>
          <StyledBorder></StyledBorder>
          <p>Definicão</p>
        </StyledRichTextEditor>
      </StyledCardContent>
    </StyledQuestionCard>
  );
}
