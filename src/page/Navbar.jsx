import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

export default function Navbar() {
  const navigate = useNavigate();
  if (window.location.pathname === '/create') return null;
  if (window.location.pathname === '/write') return null;
  return (
    <NavbarWarp>
      <NavbarContainer>
        <div>
          <h2>VeloFlow</h2>
        </div>
        <Right>
          <Search type="text" placeholder="Search" />
          <Btn onClick={() => navigate('/create')}>새 글 작성</Btn>
        </Right>
      </NavbarContainer>
    </NavbarWarp>
  );
}

const NavbarWarp = styled.div`
  height: 4rem;
`;
const NavbarContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    letter-spacing: 2px;
  }
  @media (max-width: 1440px) {
    width: 1024px;
  }
  @media (max-width: 1024px) {
    width: 900px;
  }
  @media (max-width: 900px) {
    width: 600px;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 1.25rem;
  gap: 10px;
`;
const Btn = styled.button`
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border-radius: 1rem;
  font-weight: bold;
  word-break: keep-all;
  background: #f8f9fa;
  border: 1px solid black;
  color: black;
  cursor: pointer;
  &:hover {
    background: black;
    color: white;
    transition: all 0.125s ease-in 0s;
  }
`;
const Search = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  padding: 5px;
  font-size: 16px;
  outline: none;
  border-bottom: 0.5px solid black;
`;
