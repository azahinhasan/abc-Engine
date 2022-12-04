import { useEffect, useState } from "react";
import "./App.css";
import Papa from "papaparse";
import Form from "./components/Form";
import Result from "./components/Result";


function App() {
  const [allInputs, setAllInputs] = useState({});
  const [csvUpload, setCSVUpload] = useState(false);
  const [showResult, stShowResult] = useState(false);
  const [allDataFromCSV, setAllDataFromCSV] = useState();
  useEffect(() => {}, [allInputs,allDataFromCSV,csvUpload]);



  function arrayMin(arr) {
    return arr.reduce(function (p, v) {
      return p < v ? p : v;
    });
  }

  function arrayMax(arr) {
    return arr.reduce(function (p, v) {
      return p > v ? p : v;
    });
  }

  const changeHandler = (event) => {
    console.log(event.target.files[0]);
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        console.log(results.data);
        let tempDataForChart = results.data.map(({ KP, X }, i) => {
          return {
            i:i,
            xAxis:parseFloat(KP),
            yAxis:parseFloat(X)
          };
        });
        setAllDataFromCSV(tempDataForChart.slice(1,120));
        const valueOfAllX = results.data.map((res) => parseFloat(res.X));
        const valueOfAllY = results.data.map((res) => parseFloat(res.Y));
        const valueOfAllZ = results.data.map((res) => parseFloat(res.Z));

        console.log(valueOfAllX);
        console.log(arrayMin(valueOfAllX));

        setAllInputs((prevState) => {
          return {
            ...prevState,
            max_X: arrayMax(valueOfAllX),
            min_X: arrayMin(valueOfAllX),
            max_Y: arrayMax(valueOfAllY),
            min_Y: arrayMin(valueOfAllY),
            max_Z: arrayMax(valueOfAllZ),
            min_Z: arrayMin(valueOfAllZ),
          };
        });

        setCSVUpload(true);
      },
    });
  };

  return (
    <div className="App">
      <h1>ABC Engine</h1>
      {!showResult ? (
        <Form
          changeHandler={changeHandler}
          allInputs={allInputs}
          setAllInputs={setAllInputs}
          setCSVUpload={setCSVUpload}
          csvUpload={csvUpload}
          allDataFromCSV={allDataFromCSV}
          resultHandler={() => stShowResult(true)}
        />
      ) : (
        <Result
          allInputs={allInputs}
          resultHandler={() => stShowResult(false)}
        />
      )}

     
    </div>
  );
}

export default App;
