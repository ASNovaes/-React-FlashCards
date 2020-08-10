import styled from "styled-components";

const StyledButtonCreateCard = styled.div`
  align-self: flex-end;
  cursor: pointer;
  height: auto;
  margin: 20px 0 20px;
  width: auto;
  transition: all 0.12s cubic-bezier(0.47, 0, 0.75, 0.72);

  a {
    align-items: center;
    background: #3ccfcf;
    border-radius: 0.25rem;
    color: #fff;
    display: flex;
    font-weight: 700;
    font-size: 1.125rem;
    height: 70px;
    justify-content: center;
    letter-spacing: 0.0625rem;
    text-decoration: none;
    width: 260px;
  }

  a:hover {
    color: #303545;
    background: #ffcd1f;
  }
`;

export default StyledButtonCreateCard;
