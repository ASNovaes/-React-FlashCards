import styled from "styled-components";

const StyledCardContent = styled.div`
  height: auto;
  height: 300px;
  margin-top: 70px;

  header {
    display: flex;
    justify-content: space-between;
  }

  span {
    color: #303545;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.2;
  }

  button {
    background: rgb(60, 207, 207);
    border-radius: 0.25rem;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    height: 40px;
    outline: none;
    transition: all 0.12s cubic-bezier(0.47, 0, 0.745, 0.715);
    width: 80px;
  }

  button:hover {
    background: #ffcd1f;
    color: #303545;
  }
`;

const StyledRichTextEditor = styled.div`
  align-items: center;
  width: 50%;
  min-height: 50px;
  margin-top: 50px;

  input {
    display: block;
    background: transparent;
    border: none;
    color: #222;
    cursor: text;
    font-size: 1rem;
    outline: none;
    overflow: hidden;
    padding-bottom: 0.85rem;
    width: 100%;
    box-shadow: 0 0.125rem 0 0 #303545;
    transition: all 0.12s cubic-bezier(0.47, 0, 0.745, 0.715);
  }

  input:focus {
    box-shadow: 0 0.275rem 0 0 #ffcd1f;
  }

  p {
    color: #939bb4;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.0625rem;
    margin-top: 10px;
    padding: 0;
    text-transform: uppercase;
    cursor: text;
  }
`;

export { StyledCardContent, StyledRichTextEditor };
