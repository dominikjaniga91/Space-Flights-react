import styled from 'styled-components';


const Input = styled.input`

    width: 290px;
    height: 38px;
    background-color: white;
    border-radius: 5px;
    border: none;
    align-self: center;

    ::placeholder {
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #262626;
        font-size: .9vw;
  }
`;

export default Input;