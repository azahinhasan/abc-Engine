import { Button, TextField, Paper, Grid } from "@mui/material";
import Chart from "./Chart";
const Form = ({
  changeHandler,
  allInputs,
  setAllInputs,
  csvUpload,
  resultHandler,
  allDataFromCSV
}) => {
  return (
    <div>
      <Paper style={{ margin: "auto", maxWidth: "500px", padding: "1%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <h2>User Inputs</h2>
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
            Upload file(CSV):
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
          <Grid item xs={6} sm={6}>
            <Button variant="contained" disabled={Object.keys(allInputs).length ===0} onClick={resultHandler}>
              Result
            </Button>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Button variant="contained" disabled={Object.keys(allInputs).length ===0} onClick={()=>window.location.reload()}>
              Reload
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Chart allDataFromCSV={allDataFromCSV} />
    </div>
  );
};

export default Form;
