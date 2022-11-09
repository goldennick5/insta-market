import OrderHeader from './OrderHeader/index.jsx';
import OrderList from './OrderList/index.jsx';
import o from './OrdersPage.module.scss';
import { connect } from 'react-redux';
import OutletWrapper from "../../components/UI/Wrapper/OutletWrapper/OutletWrapper";
import NoOrder from './NoOrder/index.jsx';
import { useState, useEffect } from 'react';

const OrdersPage = (props) => {
  const [filteredArr, setFilteredArr] = useState();
  const [active, setActive] = useState(true);

  useEffect(() => {
    filter();
  }, [props.orders]);
  const filter = (status = 0) => {
    const array = props.orders.filter((i) => i.status === status);
    setFilteredArr(array);
  };

  // const [show, setShow] = useState(false);

  const changeStyle = () => {
    setActive(!active);
  };
  
  return (
    <>
      <OutletWrapper>
        <OrderHeader
          status={props.status}
          current={props.current}
          finish={props.finish}
          doFilter={filter}
          active={active}
          changeStyle={changeStyle}
        />
        {!props.orders.length ? (
          <NoOrder />
        ) : (
          <OrderList active={active} orders={filteredArr} />
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
