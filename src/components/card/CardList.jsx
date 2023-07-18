import axios from 'axios';
import Card from './Card';
import { useEffect, useState } from 'react';

export default function CardList() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((res) => {
        setData(res.data.products);
        console.log();
      })
      .then((err) => console.log(err));
  }, []);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: '-1rem',
        }}
      >
        {data?.map((product) => {
          return <Card {...product} key={product.id} />;
        })}
      </div>
    </div>
  );
}
