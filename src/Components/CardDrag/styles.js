import styled from 'styled-components';

const StyledQuestionCard = styled.div`
     border-radius: 3px;
     margin-top: 20px;
`;

const StyledHeaderCard = styled.header` 
        align-items: center;
        background: #fff;
        border-radius: .25rem .25rem 0 0;
        display: flex;
        height: 65px;
        justify-content: space-between;

     p {
         color: #939bb4;
         cursor: text;
         font-size: 1rem;
         font-weight: 600;
         margin: 0;
         padding-left: 30px;
     }

     i {
        color: #939bb4;
        font-size: 20px;
        padding-right: 30px;
     }

     i:hover {
        color: #ffcd1f;
        cursor: pointer;
     }
`;

const StyledCardContent = styled.div`
        background: #fff;
        border-radius: 0 0 .25rem .25rem;
        display: flex;
        height: auto;
        justify-content: center;
        margin-top: 2px;     
`;

const StyledRichTextEditor = styled.div`
       align-items: center;
       width: 100%;
       min-height: 50px;
       padding: 40px 30px 10px;

     div {
        cursor: text;
        outline: none;
        width: 100%;     
     }   

     p {
        color: #939bb4;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: .0625rem;
        margin-top: 10px;
        padding: 0;
        padding-bottom: 0.5rem;
        text-transform: uppercase;
        cursor: text;
     }     
`;

const StyledInnerText = styled.div`
     :first-child > div{ 
      box-shadow: 0 .125rem 0 0 #303545;
      cursor: text;
      font-size: 1.125rem;
      font-weight: 400;
      padding-bottom: 0.5rem;
      transition: all .12s cubic-bezier(.47,0,.745,.715);
     }

     :first-child > div:focus{
      box-shadow: 0 .275rem 0 0 #ffcd1f;
     }
`;


export { StyledQuestionCard, StyledCardContent, StyledRichTextEditor, StyledInnerText, StyledHeaderCard }
