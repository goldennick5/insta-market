import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Button from './components/UI/button/Button';
export default function App() {
  return (
    <div>
      <Button name="Enter" color="blue">
        Войти
      </Button>
      <Button name="Enter" color="">
        Вернуться в витрину
      </Button>
      <Routes>
        <Route exact path="/" element={<Navigate to="/signin" />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
