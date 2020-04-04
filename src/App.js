import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from "./data";
import TableRow from './TableRow';

function App() {
  const getModifiedData = () => {
    let modifiedData = [], temp = {};
    data.forEach(element => {
      if (!temp.hasOwnProperty(element.question)) temp[element.question] = [];
      temp[element.question].push({
        question: element.question,
        answer: element.answer
      })
    });
    Object.keys(temp).forEach(key => {
      let currentRow = { ...temp[key][0] };
      let subRows = [];
      if (temp[key].length > 1) subRows = temp[key].slice(1);
      currentRow['subRowData'] = subRows;
      modifiedData.push(currentRow);
    });
    return modifiedData;
  }

  console.log({
    data,
    data1: getModifiedData()
  })
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>INDEX</th>
            <th>QUESTIONS</th>
            <th>ANSWERS</th>
          </tr>
        </thead>
        <tbody>
          {
           getModifiedData().map((row, index) =>
              <TableRow key={`row-${index}`} question={row.question} answer={row.answer} subRowData={row.subRowData} />
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
