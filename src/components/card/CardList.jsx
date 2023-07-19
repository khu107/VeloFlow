import axios from 'axios';
// import api from '../../axios/api';
import Card from './Card';
import { useEffect, useState } from 'react';

export default function CardList() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get('https://api.minblog-hanghae2.shop/api/post')
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
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
