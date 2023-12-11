// import { useState } from 'react'
import React, { useEffect, useState } from "react";
import data from "../components/data/books.json";

function BookSearch() {
  interface Books {
    title: string;
    author: string;
    country: string;
    pages: number;
  }

  const [inputVal, setInputVal] = useState<string>("");
  const [searchResult, setSearchResult] = useState<Books[]>([]);

  const handleButtonSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (inputVal) {
      const results = data.filter((book: Books) => {
        return (
          inputVal === book.author ||
          inputVal === book.country ||
          inputVal === book.title
        );
      });

      setSearchResult(results);
      setInputVal("");
    }
  };

  useEffect(() => {
    console.log(`Search Results: ${searchResult}`);
  }, [searchResult]);

  return (
    <div>
      <h1>Book Search</h1>
      <br />
      <input
        placeholder="Tittle, Author, Or Country"
        id="input"
        value={inputVal}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputVal(e.target.value)
        }
      />
      <button onClick={handleButtonSearch}>Submit</button>
      <div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Pages</th>
            </tr>
          </thead>
          <tbody>
            {searchResult.map((results: Books, index: number) => (
              <tr key={index}>
                <td>{results.title}</td>
                <td>{results.author}</td>
                <td>{results.pages}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookSearch;
