import React, { useState } from "react";
import "../../styles/check.css";
import Calendar from "react-calendar";
import Moment from "react-moment";
import { Link, useNavigate } from "react-router-dom";

const Check = () => {
	const [value, onChange] = useState(new Date());
	const [cycle, cycleValue] = useState("28");
	const date = value;
	const cycleLength = parseInt(cycle);
	console.log("value picked ", value);

	const navigate = useNavigate();
	return (
		<div className="activity-container">
			<div className="second-container">
				<div className="housing">
					<div className="empty1" />
					<div className="empty">
						<label for="menstrualcycle">
							Select your last menstrual cycle date :
						</label>
						<div className="calender">
							<Calendar value={value} onChange={onChange} />
						</div>
					</div>
					<div className="empty2" />
					<div className="select">
						<label for="cycle">Select your Cycle Length : </label>
						<select
							onChange={(e) => cycleValue(e.target.value)}
							defaultValue={cycle}
							className="option"
						>
							<option value="23">23</option>
							<option value="24">24</option>
							<option value="25">25</option>
							<option value="26">26</option>
							<option value="27">27</option>
							<option value="28">28</option>
							<option value="29">29</option>
							<option value="30">30</option>
							<option value="31">31</option>
							<option value="32">32</option>
							<option value="33">33</option>
							<option value="34">34</option>
							<option value="35">35</option>
							<option value="36">36</option>
							<option value="37">37</option>
							<option value="38">38</option>
							<option value="39">39</option>
							<option value="40">40</option>
							<option value="41">41</option>
							<option value="42">42</option>
							<option value="43">43</option>
							<option value="44">44</option>
							<option value="45">45</option>
						</select>
					</div>
				</div>
				<div className="btn-cover">
					<div className="check-empty" />
					<Link to="/calculator" state={value}>
						<div className="button-div">
							<button id="check-btn">Enter</button>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Check;
