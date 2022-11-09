import OrderHeader from './OrderHeader/index.jsx';
import OrderList from './OrderList/index.jsx';
import o from './OrdersPage.module.scss';
import { connect } from 'react-redux';
import OutletWrapper from "../../components/UI/Wrapper/OutletWrapper/OutletWrapper";
import NoOrder from './NoOrder/index.jsx';
import { useState, useEffect } from 'react';

const OrdersPage = (props) => {
  const [filteredArr, setFilteredArr] = useState();
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    filter();
  }, [props.orders]);
  const filter = (status = 0) => {
    const array = props.orders.filter((i) => i.status === status);
    setFilteredArr(array);
  };
  const togler = (boolean) => {
    setToggle(boolean);
  };

  return (
    <>
      <OutletWrapper>
        <OrderHeader
          status={props.status}
          current={props.current}
          finish={props.finish}
          doFilter={filter}
          togler={togler}
          toggle={toggle}
        />
        {!props.orders.length ? (
          <NoOrder />
        ) : (
          <OrderList toggle={toggle} orders={filteredArr} />
        )}
      </OutletWrapper>
    </>
  );
};

const mapStateToProps = (state) => ({
  orders: state.orders.orders,
  current: state.orders.current,
  finish: state.orders.finish,
});

export default connect(mapStateToProps)(OrdersPage);
