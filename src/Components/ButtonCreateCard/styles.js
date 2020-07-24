import styled from 'styled-components';

const StyledButtonCreateCard = styled.div`
        align-self: flex-end;
        background: #3ccfcf;
        border-radius: .25rem;
        color: #fff;
        cursor: pointer;
        height: auto;
        margin-top: 20px;
        width: auto;
        transition: all .12s cubic-bezier(0.47, 0, 0.75, 0.72)all .12s cubic-bezier(0.47, 0, 0.75, 0.72);

    a { 
        align-items: center;
        display: flex;
        font-weight: 700;
        font-size: 1.125rem;
        height: 70px;
        justify-content: center;
        letter-spacing: .0625rem;
        width: 260px;
    }    

    :hover {
        color: #303545;
        background: #ffcd1f;
    }
`;

export default StyledButtonCreateCard;