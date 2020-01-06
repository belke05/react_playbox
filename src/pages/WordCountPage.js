import React, { useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

export default function TextPage() {
  const [prediction, setPrediction] = useState("");
  const [url, setUrl] = useState(null);
  const [upperLimit, setupperLimit] = useState(30);
  const [lowerLimit, setlowerLimit] = useState(0);
  const [filter, setFilter] = useState("");

  function onClickHandler() {
    axios
      .post(`https://wordcount-henri-pro.herokuapp.com//predict`, {
        link: url
      })
      .then(res => {
        setPrediction(res.data.results);
      })
      .catch(err => console.error(err));
  }

  const filtering = item => {
    if (filter.length <= 0) return true;
    const word = item[0];
    if (word.toLowerCase().includes("/") || word.toLowerCase().includes("\\"))
      return false;
    return word.toLowerCase().includes(filter);
  };

  const renderWords = () => {
    return prediction
      .filter(filtering)
      .slice(lowerLimit, upperLimit)
      .map((item, i) => {
        const word = item[0];
        console.log(word);
        const count = item[1];
        return (
          <tr>
            <td>{word}</td>
            <td>{count}</td>
          </tr>
        );
      });
  };

  return (
    <div className="wordcountpage">
      <button className="btn btn-warning" onClick={onClickHandler}>
        count words
      </button>
      <div className="input_wrapper">
        <input
          placeholder="insert url"
          value={url}
          onChange={e => setUrl(e.target.value)}
        ></input>
        <input
          placeholder="search"
          value={filter}
          type="text"
          onChange={e => setFilter(e.target.value)}
        ></input>
        <div>
          <input
            min={0}
            placeholder="from word"
            value={lowerLimit}
            onChange={e => setlowerLimit(Number(e.target.value))}
            type="number"
          ></input>
          <input
            min={0}
            placeholder="up to word"
            value={upperLimit}
            onChange={e => setupperLimit(Number(e.target.value))}
            type="number"
          ></input>
        </div>
      </div>
      {prediction.length > 0 && (
        <Table size="sm" variant="dark">
          <thead>
            <tr>
              <th>word</th>
              <th>count</th>
            </tr>
          </thead>
          <tbody>{renderWords()}</tbody>
        </Table>
      )}
    </div>
  );
}
