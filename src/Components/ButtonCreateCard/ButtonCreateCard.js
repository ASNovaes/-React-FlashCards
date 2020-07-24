import React, { useContext } from 'react';
import StyledButtonCreateCard from './styles';
import { ContextCard } from '../Context/Context.js';

export default function ButtonCreateCard() {

    const { cards, setCards } = useContext(ContextCard);
    
     

    return (
        <StyledButtonCreateCard>
            <a onClick={() => console.log(cards)}>Concluído</a>
        </StyledButtonCreateCard >
    );
}

