import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Shop from './pages/Shop';

export default function App() {
  return (
    <>
        <Routes>
            <Route exact path="/" element={<Navigate to="/signin" />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp />} />
        </Routes>
    </>
  );
}
