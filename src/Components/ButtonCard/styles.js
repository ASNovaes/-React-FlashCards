import styled from "styled-components";

const StyledButtonCard = styled.div`
  align-items: center;
  background: #fff;
  border-radius: 0.25rem;
  display: flex;
  height: 120px;
  justify-content: center;
  margin-top: 20px;

  a {
    border-bottom: 0.3125rem solid #3ccfcf;
    color: #303545;
    cursor: pointer;
    font-size: 0.9375rem;
    font-weight: 700;
    padding: 0 0 0.75rem;
    letter-spacing: 0.075rem;
    text-transform: uppercase;
    transition: all 0.12s cubic-bezier(0.47, 0, 0.745, 0.715);
  }

  a:hover {
    border-bottom-color: #ffcd1f;
    color: #ffcd1f;
  }
`;

export default StyledButtonCard;
