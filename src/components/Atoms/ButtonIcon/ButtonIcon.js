import styled from 'styled-components';

const ButtonIcon = styled.div`
  
  display: inline-block;
  width: 77px;
  height: 77px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  border: none;
  margin-left: 10px;
`;

export default ButtonIcon;