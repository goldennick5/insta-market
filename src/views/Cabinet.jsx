import { Fragment } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Orders from '../pages/OrdersPage';
import Cards from '../pages/CardsPage';
import Addresses from '../pages/AddressesPage';

const Cabinet = () => {
  return (
    <Fragment>
      <Routes>
        <Route index element={<Navigate to='orders' replace />} />
        <Route path='*' element={<Navigate to='orders' replace />} />
        <Route path='orders' element={<Orders />} />
        <Route path='cards' element={<Cards />} />
        <Route path='addresses' element={<Addresses />} />
      </Routes>
    </Fragment>
  )
}

export default Cabinet;
