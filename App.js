import "./App.css";
import Moment from "react-moment";
import Calendar from "react-calendar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Check from "./pages/component/second/Check";
import Tracker from "./pages/component/home/Tracker";
import "react-calendar/dist/Calendar.css";
import Calculator from "./pages/component/last/Calculator";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Tracker />} />
					<Route path="/check" element={<Check />} />
					<Route path="/calculator" element={<Calculator />} />
				</Routes>
			</Router>
			{/* <Check /> */}
		</div>
	);
}

export default App;
