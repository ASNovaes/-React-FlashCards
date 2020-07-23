import React from 'react';
import { StyledCardContent, StyledRichTextEditor, StyledBorder } from './styles';

export default function FormCreateCard() {

    return (
        <>
            <StyledCardContent>
                <header>
                    <span>Criar uma nova lista de estudos</span>
                    <button>Criar</button>
                </header>
                <StyledRichTextEditor>
                    <input type="text" />
                    <p>Título</p>
                </StyledRichTextEditor>

                <StyledRichTextEditor>
                    <input type="text" />
                    <p>Descrição</p>
                </StyledRichTextEditor>

            </StyledCardContent >
        </>
    )
}