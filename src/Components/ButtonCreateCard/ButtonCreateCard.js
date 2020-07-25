import React, { useContext } from 'react';
import StyledButtonCreateCard from './styles';
import { ContextCard } from '../Context/Context.js';
import { Link } from 'react-router-dom';

export default function ButtonCreateCard() {

    const { listsCards } = useContext(ContextCard);

    return (
        <StyledButtonCreateCard>
            <Link to="/FlashCards" onClick={()=> console.log(listsCards)}>Concluído</Link>
        </StyledButtonCreateCard >
    );
}

