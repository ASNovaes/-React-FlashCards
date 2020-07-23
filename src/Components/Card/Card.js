import React, { useState } from 'react';
import { StyledContainer } from './styles';
import { useDrop } from 'react-dnd';
import update from 'immutability-helper';
import { CardDrag } from '../CardDrag/CardDrag';
import { ItemTypes } from '../ItemTypes/ItemTypes';

const ITEMS = [
    {
        id: 1,
        question: '',
        answer: '',
    },
    {
        id: 2,
        question: '',
        answer: ''
    },
    {
        id: 3,
        question: '',
        answer: ''
    }
];

export default function Card() {
    const [cards, setCards] = useState(ITEMS);

    const moveCard = (id, atIndex) => {
        const { card, index } = findCard(id)
        setCards(
            update(cards, {
                $splice: [
                    [index, 1],
                    [atIndex, 0, card],
                ],
            }),
        )
    }

    const findCard = (id) => {
        const card = cards.filter((c) => `${c.id}` === id)[0];
        return {
            card,
            index: cards.indexOf(card),
        }
    }

    const [, drop] = useDrop({ accept: ItemTypes.CARD });

    return (
        <>
            <StyledContainer ref={drop}>
                {cards.map((card, i) => (
                    <CardDrag
                        key={card.id}
                        id={`${card.id}`}
                        question={card.question}
                        answer={card.answer}
                        moveCard={moveCard}
                        findCard={findCard}
                        index={i}
                    />
                ))}
            </StyledContainer>
        </>
    );
}