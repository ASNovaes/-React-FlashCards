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
                    <input type="text" placeholder="Digite um título, como Biologia - Capítulo 22: evolução"/>
                    <p>Título</p>
                </StyledRichTextEditor>

                <StyledRichTextEditor>
                    <input type="text" placeholder="Adicione uma descrição..."/>
                    <p>Descrição</p>
                </StyledRichTextEditor>

            </StyledCardContent >
        </>
    )
}