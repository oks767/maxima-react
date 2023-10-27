import React, { useEffect, useState } from 'react';

const FakeApi = () => {
  const [get, setGet] = useState(null);
  const API_URL = 'https://jsonplaceholder.typicode.com/posts';
  useEffect(() => {
    fetch(API_URL)
      .then((reject) => {
        return reject.json();
      })
      .then((data) => {
        setGet(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {get?.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default FakeApi;
