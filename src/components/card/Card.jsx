import { useNavigate } from 'react-router-dom';
import { CardWrap, IMG, Content, Subinfo, Footer } from './style';
export default function Card({ id, imageUrl, title, content, username }) {
  const navigate = useNavigate();
  return (
    <CardWrap>
      <div onClick={() => navigate(`/${id}`)}>
        <div style={{ position: 'relative' }}>
          <div style={{ paddingTop: '52%' }}>
            <IMG src={imageUrl} />
          </div>
        </div>
        <Content>
          <div>
            <h4>{title}</h4>
          </div>
          <div>
            <p dangerouslySetInnerHTML={{ __html: content }} />
          </div>
          <Subinfo>2023년 7월 10일</Subinfo>
        </Content>
      </div>
      <Footer>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img
            src={imageUrl}
            alt="rasm"
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
            }}
          />
          <span>by {username}</span>
        </div>
      </Footer>
    </CardWrap>
  );
}
