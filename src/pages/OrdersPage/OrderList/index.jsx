import React from 'react';
import OrderItem from '../OrderItem';

const OrderList = (props) => {
  console.log(props);

  const o = props.orders.map((order) => (
    <OrderItem active={props.active} doFilter={props.doFilter} order={order} id={order.id} />
  ));
  return <div>{o}</div>;
};

export default OrderList;
