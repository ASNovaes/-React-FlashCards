import React, { useContext } from 'react';
import StyledButtonCard from './styles';
import { ContextCard } from '../Context/Context.js';

export default function ButtonCard() {

    const { cards, setCards } = useContext(ContextCard);

    return (
        <StyledButtonCard>
            <a onClick={() => setCards([...cards,{ id: new Date().getTime(), question: '', definnition: '' }])}>adicionar cartão</a>
        </StyledButtonCard>
    );
}

