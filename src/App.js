import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Cabinet from './views/Cabinet';
import { useEffect } from 'react';
import { uploadData } from '../src/store/reducers/orderReducer';
import data from '../src/data/orders.json';
import { connect } from 'react-redux';

function RequireAuth({ children }) {
  // if (!auth.user) return <Navigate to="/signin" state={{ from: location }} replace />
  return children;
}

function App(props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.uploadData(data.orders);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/">
            <Route index element={<Navigate to="/signin" replace />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route element={<DefaultLayout />}>
              <Route
                path="cabinet/*"
                element={
                  <RequireAuth>
                    <Cabinet />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default connect(null, { uploadData })(App);
