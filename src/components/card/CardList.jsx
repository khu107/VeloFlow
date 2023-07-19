import axios from 'axios';
import Card from './Card';
import { useQuery } from 'react-query';

// 로딩 상태 컴포넌트
function Loading() {
  return <h1>Loading...</h1>;
}

// 에러 상태 컴포넌트
function Error(error) {
  return <h1>Error: {error.message}</h1>;
}

export default function CardList() {
  const getPosts = async () => {
    const response = await axios.get(
      'https://api.minblog-hanghae2.shop/api/post'
    );
    return response.data;
  };

  const { isLoading, isError, error, data } = useQuery('posts', getPosts);

  // 로딩 중일 때 로딩 상태 컴포넌트를 반환합니다.
  if (isLoading) {
    return <Loading />;
  }

  // 에러가 발생했을 때 에러 상태 컴포넌트를 반환합니다.
  if (isError) {
    return <Error error={error} />;
  }

  // 데이터가 있을 때 카드 목록을 렌더링합니다.
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: '-1rem',
        }}
      >
        {data.map((info) => (
          <Card {...info} key={info.id} />
        ))}
      </div>
    </div>
  );
}
