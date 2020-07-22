import styled from 'styled-components';

const StyledButtonCard = styled.div`
       align-items: center;
       background: #fff;
       display: flex;
       height: 120px;
       justify-content: center;
       margin-top: 20px;

       a {
           border-bottom: .3125rem solid #3ccfcf;
           color: #303545;
           cursor: pointer;
           font-size: .9375rem;
           font-weight: 700;
           padding: 0 0 .75rem;
           letter-spacing:.075rem;
           text-transform: uppercase;
           transition: all .12s cubic-bezier(.47,0,.745,.715);
       }

       a:hover {
           border-bottom-color: #ffcd1f;
           color: #ffcd1f;
       }
`;


export default StyledButtonCard;