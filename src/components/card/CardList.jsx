import api from '../../axios/api';
import Card from './Card';
import { useQuery } from 'react-query';
export default function CardList() {
  const getPosts = async () => {
    const response = await api.get('');
    return response.data;
  };

  const { isLoading, isError, error, data } = useQuery('posts', getPosts);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: '-1rem',
        }}
      >
        {Array.isArray(data) ? (
          data.map((info) => {
            return <Card {...info} key={info.id} />;
          })
        ) : (
          <div>No data available</div>
        )}
      </div>
    </div>
  );
}
