import React from 'react';
import OrderItem from '../OrderItem';

const OrderList = (props) => {
  console.log(props, 'hi');

  const o = props.orders.map((order) => (
    <OrderItem
      toggle={props.toggle}
      setdoFilter={props.doFilter}
      order={order}
      id={order.id}
    />
  ));
  return <div>{o}</div>;
};

export default OrderList;
