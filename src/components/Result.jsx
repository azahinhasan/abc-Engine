import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from "@mui/material";


const Result = ({ allInputs, resultHandler }) => {
  const printHandler = () => {
    window.print();
  };
  return (
    <diV className="result">
      <div className="resultPaper">
        <h2>Result</h2>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table" className="resultTable">
                <TableHead>
                  <TableRow>
                    <TableCell align="center"><b>Project Name</b></TableCell>
                    <TableCell align="center"><b>Client</b></TableCell>
                    <TableCell align="center"><b>Project Description</b></TableCell>
                    <TableCell align="center"><b>Contractor</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="center">
                      {allInputs.projectName}
                    </TableCell>
                    <TableCell align="center">{allInputs.client}</TableCell>
                    <TableCell align="center">
                      {allInputs.projectDescription}
                    </TableCell>
                    <TableCell align="center">{allInputs.contractor}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Grid item xs={12} sm={12}>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center"><b>Max_X</b></TableCell>
                    <TableCell align="center"><b>Min_X</b></TableCell>
                    <TableCell align="center"><b>Max_Y</b></TableCell>
                    <TableCell align="center"><b>Min_Y</b></TableCell>
                    <TableCell align="center"><b>Max_Z</b></TableCell>
                    <TableCell align="center"><b>Min_Z</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="center">{allInputs.max_X}</TableCell>
                    <TableCell align="center">{allInputs.min_X}</TableCell>
                    <TableCell align="center">{allInputs.max_Y}</TableCell>
                    <TableCell align="center">{allInputs.min_Y}</TableCell>
                    <TableCell align="center">{allInputs.max_Z}</TableCell>
                    <TableCell align="center">{allInputs.min_Z}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </div>

      <div className="hideFromPrint" style={{width:"500px",margin:"auto"}}>
        <Grid container>
          <Grid item xs={6} sm={6}>
            <Button variant="contained" onClick={resultHandler}>
              Go Back
            </Button>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Button variant="contained" onClick={printHandler}>
              Print
            </Button>
          </Grid>
        </Grid>
      </div>
    </diV>
  );
};

export default Result;
