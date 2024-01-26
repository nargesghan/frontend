import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F9FAFB",
    color: "#667085",
    boxShadow: "rgba(0, 0, 0, 0.06) 0px 4px 0px 0px inset",
    height: "44px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  title: string,
  publicationDate: Date,
  expirationDate: Date,

  numberOfUnread: number
) {
  return {
    title,
    publicationDate,
    expirationDate,
    numberOfUnread,
  };
}

const rows = [
  createData(
    "front-end developer",
    new Date("2024-01-10"),
    new Date("2024-01-10"),
    9
  ),
  createData(
    "data scientist",
    new Date("2024-01-1"),
    new Date("2025-05-10"),
    0
  ),
  createData(
    "software engineer",
    new Date("2024-01-10"),
    new Date("2025-05-10"),
    5
  ),
  createData(
    "UI UX designer",
    new Date("2024-12-10"),
    new Date("2025-05-10"),
    0
  ),
  createData(
    "Product manager",
    new Date("2024-01-10"),
    new Date("2025-05-10"),
    11
  ),
  createData(
    "Product manager",
    new Date("2024-04-10"),
    new Date("2025-05-10"),
    7
  ),
];

export default function SRTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        borderStyle: "solid",
        borderColor: "#0EC5D7",
        borderWidth: "1px",
        borderRadius: 0,
        boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
        width: "100%",
      }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>title</StyledTableCell>
            <StyledTableCell align="right">Publication date</StyledTableCell>
            <StyledTableCell align="right">new applications</StyledTableCell>
            <StyledTableCell align="right">Expiration date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.title}>
              <StyledTableCell component="th" scope="row">
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "300", color: "#101828" }}
                >
                  {row.title}
                </Typography>
              </StyledTableCell>

              <StyledTableCell align="right">
                {row.publicationDate.toDateString()}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.numberOfUnread != 0
                  ? `${row.numberOfUnread} new applications`
                  : "ther is no new application"}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.expirationDate.toDateString()}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
