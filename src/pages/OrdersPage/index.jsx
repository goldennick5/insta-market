import OrderHeader from './OrderHeader/index.jsx';
import OrderList from './OrderList/index.jsx';
import o from './OrdersPage.module.scss';
import { connect } from 'react-redux';

const OrdersPage = (props) => {
  return (
    <>
      <div className={o.order}>
        <OrderHeader current={props.current} finish={props.finish} />
        
        <OrderList orders={props.orders} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  orders: state.orders.orders,
  current: state.orders.current,
  finish: state.orders.finish,
});

export default connect(mapStateToProps)(OrdersPage);
