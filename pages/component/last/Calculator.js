import React, { useState } from "react";
import Moment from "react-moment";
import { useLocation, useNavigate } from "react-router-dom";

const Calculator = () => {
	const location = useLocation();
	const [cycle] = useState("28");
	const cycleLength = parseInt(cycle);
	const date = location?.state;
	const navigate = useNavigate();
	const presentDate = new Date();
	return (
		<div className="calc">
			<div className="emptyCalc" />
			<div className="second-house">
				<div className="next">
					<div className="second-house-p">
						<p>Next Period</p>
					</div>
					<Moment format="Do MMMM, YYYY" add={{ days: cycleLength }}>
						{date}
					</Moment>
				</div>
				<div className="col">
					<div className="second-house-p">
						<p> Approximate Ovulation Day</p>
					</div>
					<Moment format="Do MMMM, YYYY" add={{ days: cycleLength - 14 }}>
						{date}
					</Moment>
				</div>
			</div>
			<button id="home-btn" onClick={() => navigate("/")}>
				{" "}
				Home{" "}
			</button>
		</div>
	);
};

export default Calculator;
