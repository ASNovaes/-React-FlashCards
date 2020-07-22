import styled from 'styled-components';

const StyledButtonCreateCard = styled.div`
        align-items: center;
        align-self: flex-end;
        background: #3ccfcf;
        border-radius: .25rem;
        color: #fff;
        cursor: pointer;
        display: flex;
        height: 70px;
        justify-content: center;
        margin-top: 20px;
        width: 260px;
        transition: all .12s cubic-bezier(0.47, 0, 0.75, 0.72)all .12s cubic-bezier(0.47, 0, 0.75, 0.72);

    a { 
        font-weight: 700;
        font-size: 1.125rem;
        letter-spacing: .0625rem;
    }    

    :hover {
        color: #303545;
        background: #ffcd1f;
    }
`;

export default StyledButtonCreateCard;