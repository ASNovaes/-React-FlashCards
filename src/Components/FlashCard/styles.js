import styled from 'styled-components';

const SyledContainer = styled.section`
     border-radius: 5px;
     display: flex;
     flex-direction: column;
     height: auto;
     margin: 100px auto;
     width: 564px; 
`;

const StyledFlashCard = styled.div`
     align-items: center;  
     background: #fff; 
     box-shadow: 0px 2px 7px #ddd;
     cursor: pointer;
     display: flex;
     justify-content: center;
     height: 341px;
     padding: 5px;

     p {
        color: #303545;
        font-size: 30px;
     }
`;

const StyledControl = styled.div`
     align-items: center;
     display: flex;
     height: 50px;
     justify-content: center;
     width: 100%;

     img {
         cursor: pointer;
         margin: 100px;
         transform: rotate(-90deg);
         width: 20px;  
     }

     img:nth-child(1){
         transform: rotate(90deg);
     }
`;

export { SyledContainer, StyledFlashCard, StyledControl };