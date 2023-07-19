import axios from 'axios';
import Card from './Card';
import { useQuery } from 'react-query';

function Loading() {
  return <h1>Loading...</h1>;
}

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

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error error={error} />;
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
        {data.map((info) => (
          <Card {...info} key={info.id} />
        ))}
      </div>
    </div>
  );
}
