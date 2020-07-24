import React from 'react';
import { SyledContainer, StyledFlashCard, StyledControl } from './styles';
import iconArrow from '../../assets/img/icon-arrow.svg';

export default function FlashCard() {
    return (
        <>
            <SyledContainer>
                <StyledFlashCard><p>Biologia!!!</p></StyledFlashCard>
                <StyledControl>
                    <img src={iconArrow} />
                     <span>1/2</span>
                    <img src={iconArrow} />
                </StyledControl>
            </SyledContainer>
        </>
    )
}