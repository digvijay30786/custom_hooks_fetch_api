import "../styles.css";
import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
export default function HooksExample() {
  const [page, setpage] = useState(1);

  const { loading, data, error } = useFetch(
    `https://json-server-mocker-masai.herokuapp.com/users?_page=${page}&_limit=${3}`
  );

  if (loading) return <h2>Loading....</h2>;

  if (error) return <h1>Something Went wrong</h1>;

  return (
    <div className="App">
      <h1>List of users</h1>
      <ul>
        {data.map((item) => (
          <li key={item.key}>{item.name}</li>
        ))}
      </ul>
      <button disabled={page === 1} onClick={() => setpage(page - 1)}>
        Prev
      </button>
      <span>{page}</span>
      <button onClick={() => setpage(page + 1)}>Next</button>
    </div>
  );
}
