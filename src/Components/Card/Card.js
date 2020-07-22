import React from 'react';
import { StyledQuestionCard, StyledCardContent, StyledRichTextEditor } from './styles';


export default function Card() {
    return (
        <>
            <StyledQuestionCard>
                <header></header>
                <StyledCardContent>
                    <StyledRichTextEditor>
                        <div contentEditable='true'></div>
                    </StyledRichTextEditor>
                    <StyledRichTextEditor>
                        <div contentEditable='true'></div>
                    </StyledRichTextEditor>
                </StyledCardContent>
            </StyledQuestionCard>
        </>
    );
}