import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";

function App() {
	const user = localStorage.getItem("token");
	const payload = localStorage.getItem("payload")

	return (
		<Routes>
			{user && payload && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			{!user && <Route path="*" element={<Navigate to="/login" replace />} />}
			{user && payload && <Route path="*" element={<Navigate to="/" replace />} />}
			
		</Routes>
	);
}

export default App;
