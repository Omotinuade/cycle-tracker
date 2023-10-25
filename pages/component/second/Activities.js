// import React, { useState } from "react";
// import "./Tracker.css";
// import Calendar from "react-calendar";
// import Moment from "react-moment";

// const Activities = () => {
// 	const [value, onChange] = useState(new Date());
// 	const [cycle, cycleValue] = useState("28");
// 	const date = value;
// 	const cycleLength = parseInt(cycle);
// 	return (
// 		<div className="activities-container">
// 			<div className="second-container">
// 				<div className="housing">
// 					<div className="second" />
// 					<div>
// 						<label for="menstrualcycle">
// 							Select your last menstrual cycle date :
// 						</label>
// 						<div className="calender">
// 							<Calendar value={value} onChange={onChange} />
// 						</div>
// 					</div>
// 					<div className="empty" />
// 					<div className="select">
// 						<label for="cycle">Select your Cycle Length : </label>
// 						<select
// 							onChange={(e) => cycleValue(e.target.value)}
// 							defaultValue={cycle}
// 							className="option"
// 						>
// 							<option value="23">23</option>
// 							<option value="24">24</option>
// 							<option value="25">25</option>
// 							<option value="26">26</option>
// 							<option value="27">27</option>
// 							<option value="28">28</option>
// 							<option value="29">29</option>
// 							<option value="30">30</option>
// 							<option value="31">31</option>
// 							<option value="32">32</option>
// 							<option value="33">33</option>
// 							<option value="34">34</option>
// 							<option value="35">35</option>
// 							<option value="36">36</option>
// 							<option value="37">37</option>
// 							<option value="38">38</option>
// 							<option value="39">39</option>
// 							<option value="40">40</option>
// 							<option value="41">41</option>
// 							<option value="42">42</option>
// 							<option value="43">43</option>
// 							<option value="44">44</option>
// 							<option value="45">45</option>
// 						</select>
// 					</div>
// 				</div>
// 				<div className="next">
// 					<p>Next Period</p>

// 					<Moment format="Do MMMM YYYY" add={{ days: cycleLength }}>
// 						{date}
// 					</Moment>
// 				</div>
// 				<div className="col">
// 					<p> Approximate Ovulation Day</p>

// 					<Moment format="Do MMMM YYYY" add={{ days: cycleLength - 14 }}>
// 						{date}
// 					</Moment>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Activities;
