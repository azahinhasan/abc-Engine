import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import Papa from "papaparse";

import { Button, TextField, Paper, Grid } from "@mui/material";

function App() {
  const [allInputs, setAllInputs] = useState({});
  const [csvUpload,setCSVUpload]=useState(false)
  useEffect(() => {}, [allInputs]);

  const printHandler = () => {
    console.log(allInputs);
  };

  function arrayMin(arr) {
    return arr.reduce(function (p, v) {
      return ( p < v ? p : v );
    });
  }
  
  function arrayMax(arr) {
    return arr.reduce(function (p, v) {
      return ( p > v ? p : v );
    });
  }

  const changeHandler = (event) => {
    console.log(event.target.files[0]);
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        console.log(results.data);
        const valueOfAllX = results.data.map((res) => parseFloat(res.X));
        const valueOfAllY = results.data.map((res) => parseFloat(res.Y));
        const valueOfAllZ = results.data.map((res) => parseFloat(res.Z));

        console.log(valueOfAllX);
        console.log(arrayMin(valueOfAllX));

        setAllInputs((prevState) => {
          return { ...prevState, 
            max_X:arrayMax(valueOfAllX),min_X:arrayMin(valueOfAllX),
            max_Y:arrayMax(valueOfAllY),min_Y:arrayMin(valueOfAllY),
            max_Z:arrayMax(valueOfAllZ),min_Z:arrayMin(valueOfAllZ),
          };
        })

        setCSVUpload(true)
      },
    });
  };

  return (
    <div className="App">
      <Paper style={{ margin: "auto", width: "70%", padding: "1%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <h1>ABC Engine</h1>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Project Name"
              variant="outlined"
              value={allInputs?.projectName}
              onChange={(e) =>
                setAllInputs((prevState) => {
                  return { ...prevState, projectName: e.target.value };
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Client"
              variant="outlined"
              value={allInputs?.client}
              onChange={(e) =>
                setAllInputs((prevState) => {
                  return { ...prevState, client: e.target.value };
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Project Description"
              variant="outlined"
              value={allInputs?.projectDescription}
              onChange={(e) =>
                setAllInputs((prevState) => {
                  return { ...prevState, projectDescription: e.target.value };
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Contractor"
              variant="outlined"
              value={allInputs?.contractor}
              onChange={(e) =>
                setAllInputs((prevState) => {
                  return { ...prevState, contractor: e.target.value };
                })
              }
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <hr />
          </Grid>

          {/* ------------------------------ */}
          <Grid item xs={12} sm={12}>
            Add CSV:
            <TextField
              type="file"
              name="file"
              accept=".csv"
             // disabled={csvUpload}
              onChange={changeHandler}
              style={{ display: "block", margin: "10px auto" }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Max_X"
              variant="outlined"
              type="number"
              disabled={csvUpload}
              value={parseFloat(allInputs?.max_X)}
              onChange={(e) =>
                setAllInputs((prevState) => {
                  return { ...prevState, max_X: e.target.value };
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Min_X"
              variant="outlined"
              type="number"
              disabled={csvUpload}
              value={parseFloat(allInputs?.min_X)}
              onChange={(e) =>
                setAllInputs((prevState) => {
                  return { ...prevState, min_X: e.target.value };
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Max_Y"
              type="number"
              variant="outlined"
              disabled={csvUpload}
              value={parseFloat(allInputs?.max_Y)}
              onChange={(e) =>
                setAllInputs((prevState) => {
                  return { ...prevState, max_Y: e.target.value };
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Min_Y"
              type="number"
              variant="outlined"
              disabled={csvUpload}
              value={parseFloat(allInputs?.min_Y)}
              onChange={(e) =>
                setAllInputs((prevState) => {
                  return { ...prevState, min_Y: e.target.value };
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Max_Z"
              type="number"
              variant="outlined"
              disabled={csvUpload}
              value={parseFloat(allInputs?.max_Z)}
              onChange={(e) =>
                setAllInputs((prevState) => {
                  return { ...prevState, max_Z: e.target.value };
                })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Min_Z"
              variant="outlined"
              type="number"
              disabled={csvUpload}
              value={parseFloat(allInputs?.min_Z)}
              onChange={(e) =>
                setAllInputs((prevState) => {
                  return { ...prevState, min_Z: e.target.value };
                })
              }
            />
          </Grid>
          {/*----------------------------  */}
          <Grid item xs={12} sm={12}>
            <Button variant="contained" onClick={printHandler}>
              Print
            </Button>
          </Grid>
        </Grid>
      </Paper>


      <Paper>
        <Grid container spacing={1}>
          <Grid item></Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default App;
