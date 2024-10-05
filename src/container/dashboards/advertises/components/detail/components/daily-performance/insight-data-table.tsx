import { Paper, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { ChangeEvent, memo, useEffect, useState } from "react";
import MockData from "./mock-data";
import Table from '@mui/material/Table';
import { columns } from "./constant";
import randomId from "../../../../../../../utils/random-id";
import isEqual from "react-fast-compare";
import { IResult, TCurrency } from "../../../../../../../types/advertise";
import formatDate from "../../../../../../../utils/date";
import { currencytFormat } from "../../../../../../../lib/currency-format";

const rows = [
  MockData('123', 'IN', 1324171354, 3287263, 3287263, 3287263),
];

interface Props {
  result: IResult[];
  currency: TCurrency;
}

const InsightDataTable = (props: Props) => {
  const { result, currency } = props;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    console.log(result);
  }, [result]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              result ? result
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={randomId()}>
                      <TableCell align="left">{formatDate(
                        row.date.toString(),
                        "DATE_WITH_TIME"
                      )}</TableCell>
                      <TableCell align="left">{row.impressions}</TableCell>
                      <TableCell align="right">{row.clicks}</TableCell>
                      <TableCell align="right">{row.conversions}%</TableCell>
                      <TableCell align="right">{currencytFormat(row.cost)} {currency}</TableCell>
                      <TableCell align="right">{row.ctr}%</TableCell>
                    </TableRow>
                  );
                }) : <>Loading...</>
            }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default memo(InsightDataTable, isEqual);
