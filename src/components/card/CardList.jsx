// import axios from 'axios';
import api from '../../axios/api';
import Card from './Card';
import { useEffect, useState } from 'react';

export default function CardList() {
  const [data, setData] = useState(null);
  useEffect(() => {
    api
      .get('')
      .then((res) => {
        setData(res.data);
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
        {data ? (
          data?.map((info) => {
            return <Card {...info} key={info.id} />;
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
