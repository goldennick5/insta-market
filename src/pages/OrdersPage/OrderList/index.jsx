import React from 'react';
import OrderItem from '../OrderItem';

const OrderList = (props) => {
  const o =
    props.orders &&
    props.orders.map((order) => (
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
