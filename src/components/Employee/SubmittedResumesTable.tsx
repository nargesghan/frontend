import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

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
  company: string,
  status:
    | "Not seen yet"
    | "Invitation to a job interview"
    | "Resume has been viewed"
    | "rejected"
    | "Final rejection"
    | "Final approval"
    | "Unknown",
  publicationDate: Date,
  dateOfApplication: Date,
  description: string
) {
  return {
    title,
    company,
    status,
    publicationDate,
    dateOfApplication,
    description,
  };
}

const rows = [
  createData(
    "front-end developer",
    "snap",
    "Not seen yet",
    new Date("2024-01-10"),
    new Date("2024-01-10"),
    " kdfjkdl dfdf"
  ),
  createData(
    "data scientist",
    "airbnb",
    "Invitation to a job interview",
    new Date("2024-01-1"),
    new Date("2025-05-10"),
    "Hello!"
  ),
  createData(
    "software engineer",
    "Amazon",
    "Resume has been viewed",
    new Date("2024-01-10"),
    new Date("2025-05-10"),
    ""
  ),
  createData(
    "UI UX designer",
    "tapsi",
    "rejected",
    new Date("2024-12-10"),
    new Date("2025-05-10"),
    ""
  ),
  createData(
    "Product manager",
    "google",
    "Final rejection",
    new Date("2024-01-10"),
    new Date("2025-05-10"),
    "fdfdfd"
  ),
  createData(
    "Product manager",
    "google",
    "Final approval",
    new Date("2024-04-10"),
    new Date("2025-05-10"),
    "eeeeeeeo"
  ),
];

export default function SRTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        borderStyle: "solid",
        borderColor: "#0EC5D7",
        borderWidth:'1px',
        borderRadius:0,
        boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
        width:'100%',

      }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>application</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Publication date</StyledTableCell>
            <StyledTableCell align="right">date of application</StyledTableCell>
            <StyledTableCell align="right">
              description of the employer
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.title + row.company}>
              <StyledTableCell component="th" scope="row">
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "300", color: "#101828" }}
                >
                  {row.title}
                </Typography>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "300", color: "#667085" }}
                >
                  {row.company}
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                {" "}
                <Chip
                  icon={
                    <FiberManualRecordIcon
                      sx={{ width: "8px", height: "8px" }}
                    />
                  }
                  label={row.status}
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.publicationDate.toDateString()}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.dateOfApplication.toDateString()}
              </StyledTableCell>
              <StyledTableCell align="right">{row.description||'No description has been registered yet'}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
