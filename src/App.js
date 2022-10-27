// import './App.scss';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import Shop from './pages/Shop';

// export default function App() {
//   return (
//     <>
//       <Routes>
//           <Route exact path="/" element={<Navigate to="/signin" />} />
//           <Route exact path="/signin" element={<SignIn />} />
//           <Route exact path="/signup" element={<SignUp />} />
//       </Routes>
//     </>
//   );
// }

import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate
} from "react-router-dom";
import DefaultLayout from './layouts/DefaultLayout';
import Cabinet from './views/Cabinet';

function RequireAuth({ children }) {
  // if (!auth.user) return <Navigate to="/signin" state={{ from: location }} replace />
  return children;
}


function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/">
						<Route index element={<Navigate to='/signin' replace />} />
						<Route path='/signin' element={<SignIn />} />
						<Route path='/signup' element={<SignUp />} />
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

export default App;
