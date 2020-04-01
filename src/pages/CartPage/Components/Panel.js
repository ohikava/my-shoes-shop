import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import {useSelector} from 'react-redux';

const Panel = () => {
  const cart = useSelector(s => s.cart.cart);
  return (
    <Table className="panel">
      <TableHead>
        <TableRow>
          <TableCell>Nickname:</TableCell>
          <TableCell align="right">Quantity:</TableCell>
          <TableCell align="right">Price: </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {cart.map(p => (
          <TableRow key={p.id}>
          <TableCell>{p.nickname}</TableCell>
          <TableCell align="right">{p.quantity || 1}</TableCell>
          <TableCell align="right">${p.price}</TableCell>
          </TableRow>
        ))}
        <TableRow key="sum">
          <TableCell>Sum:</TableCell>
          <TableCell></TableCell>
          <TableCell align="right">${cart.reduce((accumulator, p) => (accumulator + p.quantity * p.price),0)}</TableCell>
        </TableRow>
      </TableBody>
      <button className="panel-btn" onClick={() => {
        alert(`Sum: $${cart.reduce((accumulator, p) => (accumulator + p.quantity * p.price),0)}, Thank You`)
      }}>Buy</button>
    </Table>
  );
};

export default Panel;
