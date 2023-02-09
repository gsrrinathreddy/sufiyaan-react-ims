import { Typography, CircularProgress } from "@mui/material";
// import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../Features/Users/userSlice";
import Button from "@mui/material/Button";
export default function Users() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log("users: ", user.users);
  return (
    <>
      List of users
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Id </TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Username</TableCell>

              <TableCell style={{ fontWeight: "bold" }}>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {" "}
            {user.loading && <CircularProgress />}
            {!user.loading && user.error ? (
              <Typography>Error: {user.error}</Typography>
            ) : null}
            {!user.loading && user.users.length
              ? user.users.map((user) => {
                  return (
                    <TableRow
                      key={user.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left">{user.id}</TableCell>
                      <TableCell align="left">{user.name}</TableCell>
                      <TableCell align="left">{user.username}</TableCell>

                      <TableCell align="left">
                        {user.address.street}
                        <br />
                        {user.address.suite}
                        <br />
                        {user.address.city}
                        <br />
                        {user.address.zipcode}
                      </TableCell>
                    </TableRow>
                  );
                })
              : null}
            <Button color="inherit" onClick={() => dispatch(fetchUsers())}>
              fetchUsers{" "}
            </Button>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
