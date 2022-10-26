import './App.scss';
import Input from "./components/UI/Input/Input";
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/signin" />} />
      <Route exact path="/signin" element={<SignIn />} />
      <Route exact path="/signup" element={<SignUp />} />
    </Routes>
  );
}
