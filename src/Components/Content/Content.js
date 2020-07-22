import React from 'react';
import Card from '../Card/Card';
import ButtonCard from '../ButtonCard/ButtonCard';
import ButtonCreateCard from '../ButtonCreateCard/ButtonCreateCard';
import StyledContent from './styles';

export default function Content() {
    return (
        <>
            <StyledContent>
                <Card />
                <Card />
                <Card />
                <ButtonCard />
                <ButtonCreateCard />
            </StyledContent>

        </>
    );
}


