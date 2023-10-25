import React from "react";
import "../../styles/Tracker.css";
import { useNavigate } from "react-router-dom";

const Tracker = () => {
	const navigate = useNavigate();
	return (
		<div className="main">
			<div className="second-main">
				<div style={{ height: "100px" }}></div>
				<div className="third-main">
					<p>
						Welcome <br /> to <br /> MeCare App
					</p>
					<div>
						<button onClick={() => navigate("/check")} id="btn">
							Calculate Your Cycle
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tracker;
