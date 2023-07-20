import { styled } from 'styled-components';
import 트렌드 from '../assets/image/트렌드.png';
import 시계 from '../assets/image/시계.png';
import CardList from '../components/card/CardList';
export default function Home() {
  return (
    <HomeWrap>
      <HomeTop>
        <div style={{ display: 'flex', gap: '30px' }}>
          <div
            style={{
              display: 'flex',
              gap: '7px',
              alignItems: 'center',
            }}
          >
            <img
              src={트렌드}
              alt="트렌드"
              style={{ width: '24px', height: '24px' }}
            />
            <h3>트렌딩</h3>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '7px',
              alignItems: 'center',
            }}
          >
            <img
              src={시계}
              alt="트렌드"
              style={{ width: '20px', height: '20px' }}
            />
            <h3>최신</h3>
          </div>
        </div>
      </HomeTop>
      <HomeContent>
        <CardList />
      </HomeContent>
    </HomeWrap>
  );
}
const HomeWrap = styled.div`
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
const HomeTop = styled.div`
  border: 1px solid red;

  margin-top: 1.5rem;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
`;
const HomeContent = styled.div`
  display: flex;
  margin-top: 2rem;
`;
