import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useLocation } from "react-router-dom";

const ViewProductDetails = () => {
  const location = useLocation();
  const stateData = location.state;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product Details</TableCell>
            <TableCell></TableCell> {/* Empty cell for spacing */}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <strong>Title</strong>
            </TableCell>
            <TableCell>{stateData.title}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <strong>Description</strong>
            </TableCell>
            <TableCell>{stateData.description}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ViewProductDetails;
