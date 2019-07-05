import classNames from "classnames/bind";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import {} from "@material-ui/icons";

import { Link, Router } from "../../../routes";
import styles from "./Orders.scss";
import Title from "../Title";

const cx = classNames.bind(styles);

const createData = (id, date, name, shipTo, paymentMethod, amount) => ({
  id,
  date,
  name,
  shipTo,
  paymentMethod,
  amount
});

const rows = [
  createData(0, "2018-07-01", "당근", "화성시", "vis ... 3719", 500),
  createData(1, "2018-07-01", "당근", "화성시", "vis ... 3719", 800),
  createData(2, "2018-07-01", "당근", "화성시", "vis ... 3719", 700),
  createData(3, "2018-07-01", "당근", "화성시", "vis ... 3719", 600),
  createData(4, "2018-07-01", "당근", "화성시", "vis ... 3719", 1200)
];

const Orders = () => (
  <>
    <Title>최근 주문내역</Title>
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>날짜</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>배송지</TableCell>
          <TableCell>카드번호</TableCell>
          <TableCell align="right">구매액</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.id}>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.shipTo}</TableCell>
            <TableCell>{row.paymentMethod}</TableCell>
            <TableCell align="right">{row.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </>
);

export default Orders;
