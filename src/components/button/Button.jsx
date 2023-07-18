import { styled } from 'styled-components';

export default function Button({ children, onClick }) {
  return <Buttun onClick={onClick}>{children}</Buttun>;
}

const Buttun = styled.button`
  height: 2.5rem;
  font-size: 1.125rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  border: none;
  background: #12b886;
  color: white;
  border-radius: 4px;
  padding: 0px 1.25rem;
`;
