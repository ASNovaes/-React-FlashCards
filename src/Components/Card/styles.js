import styled from 'styled-components';


const StyledQuestionCard = styled.div`
     border-radius: 3px;
     margin-top: 20px;
     width: 100%;
     
   header {
        background: #fff;
        height: 65px;
     }
`;

const StyledCardContent = styled.div`
        background: #fff;
        display: flex;
        height: auto;
        justify-content: center;
        margin-top: 2px;
        width: 100%;
`;

const StyledRichTextEditor = styled.div`
       align-items: center;
       border: none;
       width: 100%;
       min-height: 40px;
       padding: 40px;

     ::after {
        content:'';
        display: block;
        border-bottom: 0.2rem solid #303545;
        font-size: 1.125rem;
        font-weight: 400;
        padding-bottom: 0.5rem;
     }
   
     div {
        border: none;
        outline: none;
        width: 100%;         
     }      
`;
export { StyledQuestionCard, StyledCardContent, StyledRichTextEditor }
