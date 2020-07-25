import React, { useContext } from 'react';
import { SyledContainer, StyledFlashCard, StyledControl } from './styles';
import iconArrow from '../../assets/img/icon-arrow.svg';
import { ContextCard } from '../Context/Context.js';

export default function FlashCard() {

    const { cards, setCards, listName, setListName, listsCards } = useContext(ContextCard);

    return (
        <>
            <SyledContainer>
                <StyledFlashCard><p>asdfasdf</p></StyledFlashCard>
                <StyledControl>
                    <img src={iconArrow} />
                    <span>1/{cards.length}</span>
                    <img src={iconArrow} />
                </StyledControl>
            </SyledContainer>
        </>
    )
}

